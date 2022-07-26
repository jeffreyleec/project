const args = process.argv;

let sum = function(valOne, valTwo) {
  return valOne + valTwo;
};

console.log(sum(Number(args[2]), Number(args[3])));
