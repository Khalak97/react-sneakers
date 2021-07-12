import React, { useContext } from "react";
import "./Info.css";

function Info({ description }) {
  return (
    <p
      style={{
        fontSize: "40px",
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {description}
    </p>
  );
}

export default Info;
