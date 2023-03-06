import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api_base from "../api/api_base";
import ApologyMessage from "../components/generic/ApologyMessage";
import ErrorMessage from "../components/generic/ErrorMessage";
import { redirectToAPageAfterFiveSeconds } from "../constants/genericMethod";
import { URL_BACK_GET_APOLOGY_BY_ID } from "../constants/urlsBack";
import { URL_FRONT_HOME_PAGE } from "../constants/urlsFront";

const ApologyPage = () => {
  const [apology, setApology] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const apologyIdFromPathname = Number(location.pathname.replace("/", ""));
  const checkIfIdFromPathnameIsANumber = Number.isFinite(apologyIdFromPathname);
  const navigate = useNavigate();

  const getApologyById = () => {
    api_base
      .get(URL_BACK_GET_APOLOGY_BY_ID(apologyIdFromPathname))
      .then((response) => {
        if (response.status === 200) {
          setApology(response.data);
          setRefresh(false);
        }
      })
      .catch((error) => {
        setError(error.response.data);
        redirectToAPageAfterFiveSeconds(navigate, URL_FRONT_HOME_PAGE);
      });
  };

  useEffect(() => {
    checkIfIdFromPathnameIsANumber
      ? getApologyById()
      : setError("Apology id can't be a sentence but a number");
    redirectToAPageAfterFiveSeconds(navigate, URL_FRONT_HOME_PAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div className="app_bg">
      {!error && checkIfIdFromPathnameIsANumber ? (
        <div>
          <h1 className="">Dev's Apology # {apologyIdFromPathname}</h1>
          <ApologyMessage
            refresh={refresh}
            apology={apology}
            getApology={() => getApologyById()}
          />
        </div>
      ) : (
        <div>
          <ErrorMessage errorMessage={error} />
          <p className="text-sm">Don't worry, you're gonna be transferred</p>
        </div>
      )}
    </div>
  );
};

export default ApologyPage;
