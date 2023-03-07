import React, { useState } from "react";
import Button from "../components/generic/Button";
import ApologyMessage from "../components/generic/ApologyMessage";
import api_base from "../api/api_base";
import { URL_BACK_GET_ALL_APOLOGY } from "../constants/urlsBack";
import ApologyForm from "../components/page-components/homepage-components/ApologyForm";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);
  const [apology, setApology] = useState({});
  const [modal, setModal] = useState(false);

  const getRandomApology = () => {
    api_base.get(URL_BACK_GET_ALL_APOLOGY).then((response) => {
      if (response.status === 200) {
        // Function to retrieve an apology that is not the same as the previous one
        const randomApologyButNotPrevApology = () => {
          const randomApology =
            response.data[Math.floor(Math.random() * response.data.length)];
          if (apology?.httpCode === randomApology?.httpCode) {
            return randomApologyButNotPrevApology();
          } else {
            return randomApology;
          }
        };
        setApology(randomApologyButNotPrevApology());
      }
    });
  };

  return (
    <div className="app_bg relative">
      <h1 className="fade-in-text">Dev's Apologies</h1>
      <div className="move-top">
        <ApologyMessage
          refresh={refresh}
          setRefresh={setRefresh}
          apology={apology}
          getApology={() => getRandomApology()}
        />
        <div className="flex justify-center">
          <Button
            color="green"
            textButton="Generate Random Apology"
            action={() => {
              setRefresh(true);
            }}
            refresh={refresh}
          />
          <Button
            color="orange"
            textButton="New !"
            action={() => setModal(true)}
            refresh={refresh}
          />
        </div>
      </div>
      {modal && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="bg-white w-1/2 rounded p-2">
            <p className="text-black">Create an Apology :</p>
            <ApologyForm cancelModal={() => setModal(false)} />
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default HomePage;
