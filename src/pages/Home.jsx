import React, { useEffect, useState } from "react";
import api_base from "../api/api_base";
import Button from "../components/generic/Button";
import Loader from "../components/generic/Loader";
import Message from "../components/generic/Message";
import { URL_BACK_GET_RANDOMLY_APOLOGY } from "../constants/urlsBack";

const Home = () => {
  const [apology, setApology] = useState({});
  const [refresh, setRefresh] = useState(false);

  const getRandomApology = () => {
    api_base.get(URL_BACK_GET_RANDOMLY_APOLOGY).then((response) => {
      if (response.status === 200) {
        setApology(response.data);
        setRefresh(false);
      }
    });
  };

  useEffect(() => {
    getRandomApology();
  }, [refresh]);

  return (
    <div className="App-header">
      <h1 className="">Dev's Apologies</h1>
      <Message refresh={refresh} apology={apology} />
      <Button
        textButton="Generate Random Apology"
        action={() => {
          setRefresh(true);
        }}
      />
    </div>
  );
};

export default Home;
