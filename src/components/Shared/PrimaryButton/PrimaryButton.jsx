import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-primary text-white font-semibold rounded-4xl">
      {children}
    </button>
  );
};

export default PrimaryButton;
