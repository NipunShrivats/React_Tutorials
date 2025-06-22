import React, { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";
import { wait } from "../../api/postApi";
import Loader from "../UI/Loader";

export default function LoaderDetails() {
  const [pendingDetails, setPendingDetails] = useState(true);

  useEffect(() => {
    (async () => {
      await wait(2000);
      setPendingDetails(false);
    })();
  }, []);
  return <>{pendingDetails ? <Loader /> : <CountryDetails />}</>;
}
