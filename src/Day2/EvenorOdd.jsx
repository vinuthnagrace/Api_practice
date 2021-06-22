function groupNumbers(arr) {
  // eslint-disable-next-line no-redeclare
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // eslint-disable-next-line eqeqeq
  var evenNumbers = arr.filter((number) => number % 2 == 0);

  console.log("Even numbers " + evenNumbers);

  var oddNumbers = arr.filter((number) => number % 2 !== 0);

  console.log("Odd numbers " + oddNumbers);
}

groupNumbers();

var arrays = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];

var result = arrays.filter((numbers) => {
  if (numbers % 2 !== 0) {
    console.log(`${numbers} is not even`);
  } else {
    console.log(`${numbers} is even`);
  }
});

const oddNumbers = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13].filter(
  (number) => number % 2 !== 0
);
console.log(oddNumbers);
