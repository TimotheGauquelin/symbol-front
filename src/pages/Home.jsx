import axios from "axios";
import React, { useEffect, useState } from "react";
import api_base_url from "../api/api_base_url";

const Home = () => {
  const [apology, setApology] = useState({});
  const [refresh, setRefresh] = useState(false);

  const getRandomApology = () => {
    axios
      .get(`http://localhost:8080/api/public/apologies/random`)
      .then((response) => {
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
      {refresh ? "LOADING" : <p>{apology.message}</p>}
      <button
        className="bg-gray-100 rounded text-sm text-black font-bold m-2 py-2 px-5 hover:bg-gray-300 cursor-pointer shadow-lg"
        onClick={() => {
          setRefresh(true);
        }}
      >
        Generate a New Apology
      </button>
    </div>
  );
};

export default Home;
