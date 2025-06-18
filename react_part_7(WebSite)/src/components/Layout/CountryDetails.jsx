import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCurrentCountryData } from "../../api/postApi";
import Loader from "../UI/Loader";

export default function CountryDetails() {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountyData] = useState();

  // This hook will get the params
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCurrentCountryData(params.id);
      console.log(res.data);
      setCountyData(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          <div className="country-image grid grid-two-cols">
            <img
              // src={countryData.flags.svg}
              // alt={countryData.flags.alt}
              className="flag"
            />
            <div className="country-content">
              {/* <p className="card-title">{countryData[0].capital}</p> */}
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
