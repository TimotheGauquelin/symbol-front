import React, { useEffect } from "react";
import { delayedActionBetweenOneAndFiveSeconds } from "../../constants/genericMethod";
import Loader from "./Loader";

const ApologyMessage = ({ refresh, apology, getApology, setRefresh }) => {
  useEffect(() => {
    getApology();
    delayedActionBetweenOneAndFiveSeconds(() => setRefresh(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div>
      {refresh ? (
        <Loader />
      ) : (
        <p>{`${apology?.apologyTag?.label.toUpperCase()}: ${
          apology.message
        }`}</p>
      )}
    </div>
  );
};

export default ApologyMessage;
