const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  
  process.stdout.write('.');
  // \u0003 maps to ctrl+c input

});

console.log('after callback');


// \u0003 maps to ctrl+c input
