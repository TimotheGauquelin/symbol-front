import React from "react";

const Button = ({ textButton, action, refresh, type, color }) => {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      type={type ? type : "button"}
      disabled={refresh && refresh}
      className={`rounded text-sm text-white font-bold m-2 py-2 px-5 disabled:hidden hover:brightness-75  cursor-pointer shadow-lg`}
      onClick={() => {
        action && action();
      }}
    >
      {textButton}
    </button>
  );
};

export default Button;
