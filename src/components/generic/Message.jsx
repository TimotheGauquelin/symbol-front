import React, { useEffect, useState } from "react";
import api_base from "../../api/api_base";
import { URL_BACK_GET_RANDOMLY_APOLOGY } from "../../constants/urlsBack";
import Loader from "./Loader";

const Message = ({ refresh, setRefresh }) => {
  const [apology, setApology] = useState({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return <div>{refresh ? <Loader /> : <p>{apology.message}</p>}</div>;
};

export default Message;
