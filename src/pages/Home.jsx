import React, { useState } from "react";
import Button from "../components/generic/Button";
import Message from "../components/generic/Message";

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App-header">
      <h1 className="">Dev's Apologies</h1>
      <Message refresh={refresh} setRefresh={setRefresh} />
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
