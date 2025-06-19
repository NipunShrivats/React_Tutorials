import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";

export default function Country() {
  const [isPending, startTransition] = useTransition(); //
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {countries.map((CurCountry, index) => {
            return <CountryCard country={CurCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
}
