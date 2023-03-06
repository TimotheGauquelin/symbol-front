import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div className="app_bg">
      <div style={{ width: "250px" }}>
        <img
          className="w-full"
          src="http://i.stack.imgur.com/SBv4T.gif"
          alt="this slowpoke moves"
        />
      </div>
      <p>You're lost.. Don't worry, you're gonna be transferred</p>
    </div>
  );
};

export default LostPage;
