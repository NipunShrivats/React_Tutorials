import React, { useEffect, useMemo, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { useNavigation } from "react-router-dom";

export default function Country() {
  const [countryCounter, setCountryCounter] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const navigate = useNavigation();
  console.log(navigate.state);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryCounter(res.data.length);
      setCountries(res.data);
    });
  }, []);

  // --------------
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      // Search filter
      const matchesSearch = search
        ? country.name.common.toLowerCase().includes(search.toLowerCase())
        : true;

      // Region filter
      const matchesRegion = filter === "All" || country.region === filter;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, filter]);

  if (isPending) {
    return <Loader />;
  }
  // --------------
  return (
    <>
      <p>
        {filteredCountries.length}{" "}
        {filteredCountries.length === 1 ? "country" : "countries"} found
      </p>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
          countryCounter={countryCounter} //faltu HAI
        />
        <ul className="grid grid-four-cols">
          {filteredCountries.map((CurCountry, index) => {
            return <CountryCard country={CurCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
}
