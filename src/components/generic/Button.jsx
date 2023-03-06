import React from "react";

const Button = ({ textButton, action, refresh, buttonColor }) => {
  return (
    <button
      disabled={refresh}
      className={`bg-${buttonColor}-500 rounded text-sm text-white font-bold m-2 py-2 px-5 disabled:hidden hover:bg-${buttonColor}-600 cursor-pointer shadow-lg`}
      onClick={() => {
        action();
      }}
    >
      {textButton}
    </button>
  );
};

export default Button;
