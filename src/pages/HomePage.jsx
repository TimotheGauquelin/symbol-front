import React, { useState } from "react";
import Button from "../components/generic/Button";
import ApologyMessage from "../components/generic/ApologyMessage";
import api_base from "../api/api_base";
import { URL_BACK_GET_RANDOMLY_APOLOGY } from "../constants/urlsBack";

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);

  const [apology, setApology] = useState({});

  const getRandomApology = () => {
    api_base.get(URL_BACK_GET_RANDOMLY_APOLOGY).then((response) => {
      if (response.status === 200) {
        setApology(response.data);
        setRefresh(false);
      }
    });
  };

  return (
    <div className="app_bg">
      <h1 className="">Dev's Apologies</h1>
      <ApologyMessage
        refresh={refresh}
        apology={apology}
        getApology={() => getRandomApology()}
      />
      <Button
        textButton="Generate Random Apology"
        action={() => {
          setRefresh(true);
        }}
      />
    </div>
  );
};

export default HomePage;
