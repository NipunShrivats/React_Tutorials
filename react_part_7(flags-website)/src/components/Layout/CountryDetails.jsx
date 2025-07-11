import React from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function CountryDetails() {
  const countryData = useLoaderData();

  return (
    <>
      <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          <div className="country-image grid grid-two-cols">
            <img
              src={countryData.flags.svg}
              alt={countryData.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{countryData.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(countryData.name.nativeName)
                    .map((key) => countryData.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {countryData.population.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
