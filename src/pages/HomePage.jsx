import React, { useState } from "react";
import Button from "../components/generic/Button";
import Message from "../components/generic/Message";

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app_bg">
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

export default HomePage;
