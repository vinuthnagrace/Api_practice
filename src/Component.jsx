import React from "react";
import "./App.css";
const Component = (props) => {
  console.log(props);
  return (
    <>
      <div className="box">
        <h3>country : {props.country} </h3>
        <h3>timeline : {props.timeline["6/20/21"]} </h3>
      </div>
    </>
  );
};

export default Component;
