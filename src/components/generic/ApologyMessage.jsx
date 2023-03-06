import React, { useEffect } from "react";
import Loader from "./Loader";

const ApologyMessage = ({ refresh, apology, getApology }) => {
  useEffect(() => {
    getApology();
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
