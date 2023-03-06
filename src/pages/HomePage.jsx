import React, { useState } from "react";
import Button from "../components/generic/Button";
import ApologyMessage from "../components/generic/ApologyMessage";
import api_base from "../api/api_base";
import { URL_BACK_GET_ALL_APOLOGY } from "../constants/urlsBack";
import { Field, Formik, Form } from "formik";

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
      <h1 className="">Dev's Apologies</h1>
      <ApologyMessage
        refresh={refresh}
        setRefresh={setRefresh}
        apology={apology}
        getApology={() => getRandomApology()}
      />
      <Button
        textButton="Generate Random Apology"
        action={() => {
          setRefresh(true);
        }}
      />
      <button
        className="bg-blue-300 p-3 rounded text-md"
        onClick={() => setModal(true)}
      >
        New
      </button>
      {modal && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="bg-white h-1/2 w-1/2 rounded p-2">
            <p className="text-black">Ajouter un composant :</p>
            <Formik
              initialValues={{
                id: null,
                message: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              <Form id="form" className="">
                <div className="flex flex-col">
                  <label className="mt-2 font-medium text-black">
                    Message:{" "}
                  </label>
                  <Field
                    placeholder="Write a message.."
                    className="mt-2 p-2 bg-gray-100 text-black"
                    type="text"
                    name="message"
                  />
                </div>
                <button className="bg-blue-300 p-2 rounded mt-3">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
