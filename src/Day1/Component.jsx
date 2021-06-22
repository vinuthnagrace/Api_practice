import React from "react";
import "./Day1.scss";

const Component = (props) => {
  return (
    <>
      <div className="box">
        <h3>country : {props.country} </h3>
        <h3>timeline : {props.timeline["6/21/21"]} </h3>
      </div>
    </>
  );
};

export default Component;
