import React from "react";
import "./Day2.scss";

const Component = (props) => {
  return (
    <>
      <div className="box">
        <h3>id : {props.id} </h3>
        <h3>title : {props.title} </h3>
        <h3>body : {props.body} </h3>
      </div>
    </>
  );
};

export default Component;

// function isEven(n) {
//   return n % 2 == 0;
// }

// function isOdd(n) {
//   return Math.abs(n % 2) == 1;
// }

// const oddNumbers = [].filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

// var arr = [-200, -163, -26, -4, 0, 7, 76];

// var evens = arr.filter(function (x) {
//   return x % 2 === 0;
// });

// console.log(evens);

// for (var x = 0; x <= 15; x++) {
//   if (x === 0) {
//     console.log(x);
//   } else if (x % 2 === 0) {
//     console.log(x);
//   } else {
//     console.log(x);
//   }
// }
