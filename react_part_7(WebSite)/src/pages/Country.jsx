import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

export default function Country() {
  const [countryCounter, setCountryCounter] = useState(0);
  const [isPending, startTransition] = useTransition(); //
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  // console.log("search:", search);
  // console.log("filter:", filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "All") {
      // console.log(country);
      return country;
    } else {
      // console.log(country);
      return country.region === filter;
    }
  };
  const filterCountry = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  // country counter//
  console.log(filterCountry);
  console.log(typeof filterCountry.length);
  // setCountryCounter(filterCountry.length);

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className="grid grid-four-cols">
          {filterCountry.map((CurCountry, index) => {
            return <CountryCard country={CurCountry} key={index} />;
          })}
        </ul>
        <h2>{countryCounter}</h2>
      </section>
    </>
  );
}
