import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/generic/ErrorMessage";
import { redirectToAPageAfterFiveSeconds } from "../constants/genericMethod";
import { URL_FRONT_HOME_PAGE } from "../constants/urlsFront";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    redirectToAPageAfterFiveSeconds(navigate, URL_FRONT_HOME_PAGE);
  });

  return (
    <div className="app_bg">
      <ErrorMessage errorMessage="Error Page.. Don't worry, you're gonna be transferred" />
    </div>
  );
};

export default ErrorPage;
