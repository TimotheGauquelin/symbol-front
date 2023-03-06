import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api_base from "../api/api_base";
import ApologyMessage from "../components/generic/ApologyMessage";
import ErrorMessage from "../components/generic/ErrorMessage";
import { redirectToAPageAfterFiveSeconds } from "../constants/genericMethod";
import { URL_BACK_GET_APOLOGY_BY_HTTP_CODE } from "../constants/urlsBack";
import { URL_FRONT_HOME_PAGE } from "../constants/urlsFront";

const ApologyPage = () => {
  const [apology, setApology] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const apologyHttpCodeFromPathname = Number(
    location.pathname.replace("/", "")
  );
  const checkIfHttpCodeFromPathnameIsANumber = Number.isFinite(
    apologyHttpCodeFromPathname
  );
  const navigate = useNavigate();

  const getApologyByHttpCode = () => {
    api_base
      .get(URL_BACK_GET_APOLOGY_BY_HTTP_CODE(apologyHttpCodeFromPathname))
      .then((response) => {
        if (response.status === 200) {
          setApology(response.data);
        }
      })
      .catch((error) => {
        setError(error.response.data);
        redirectToAPageAfterFiveSeconds(navigate, URL_FRONT_HOME_PAGE);
      });
  };

  useEffect(() => {
    if (checkIfHttpCodeFromPathnameIsANumber) {
      getApologyByHttpCode();
    } else {
      setError("Apology HTTP Code can't be a sentence but a number");
      redirectToAPageAfterFiveSeconds(navigate, URL_FRONT_HOME_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div className="app_bg">
      {!error && checkIfHttpCodeFromPathnameIsANumber ? (
        <div>
          <h1 className="">Dev's Apology # {apologyHttpCodeFromPathname}</h1>
          <ApologyMessage
            refresh={refresh}
            setRefresh={setRefresh}
            apology={apology}
            getApology={() => getApologyByHttpCode()}
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
