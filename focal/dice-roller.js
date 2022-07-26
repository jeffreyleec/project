const args = process.argv.slice(2);
const rollDice = function(args) {
  let output = " ";
  for (let i = 0; i < args; i++) {
    output += (Math.floor(Math.random() * 6) + 1) + " ";
  }
  return output;
};

console.log(rollDice(args));