import React from "react";
import Loader from "./Loader";

const Message = ({ refresh, apology }) => {
  return <div>{refresh ? <Loader /> : <p>{apology.message}</p>}</div>;
};

export default Message;
