let args = process.argv.slice(2);

let obfuscate = function(args) {
  args = String(args);
  let newstring = '';
  for (const char of args) {
    if (char === "a") {
      newstring += "4";
    } else if (char === "e") {
      newstring += "3";
    } else if (char === "o") {
      newstring += "0";
    } else if (char === "l") {
      newstring += "1";
    } else {
      newstring += char;
    }
        
    
  }
  return newstring;
};


console.log(obfuscate(args));
