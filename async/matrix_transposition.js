const transpose = function (matrix) {
  // input is array of nested arrays
  let fullArray = [];
  let length = matrix[0].length // [ ], [], []  < -- length of 3  
//[1, 2, 3, 4, 5, 6, 7]
  for (let i= 0; i <  length; i++) {  // loops through the number of arrays in the matrix and creats a blank aray for each. 
    fullArray.push([])
  }

  for (items of matrix) {  // loops through matrix - each indiv array 

    for (let i= 0; i <  length; i++) { //loops through each indiv item(arry) in matrix
      fullArray[i].push([items[i]]) //pushes 
    }
  
  }
  
  return fullArray;
};

// Do not edit this function. 
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));