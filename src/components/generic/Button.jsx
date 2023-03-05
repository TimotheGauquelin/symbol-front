import React from "react";

const Button = ({ textButton, action }) => {
  return (
    <button
      className="bg-gray-100 rounded text-sm text-black font-bold m-2 py-2 px-5 hover:bg-gray-300 cursor-pointer shadow-lg"
      onClick={() => {
        action();
      }}
    >
      {textButton}
    </button>
  );
};

export default Button;
