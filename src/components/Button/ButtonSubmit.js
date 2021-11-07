import React from "react";
import { NavLink } from "react-router-dom";

const ButtonSubmit = (props) => {
  const { iconButton, titleButton } = props;
  return (
    <>
      <button className="custom-btn btn-sb" style={{ width: "140px", height: "40px" }}>
        {iconButton}
        {titleButton}
      </button>
    </>
  );
};

export default ButtonSubmit;
