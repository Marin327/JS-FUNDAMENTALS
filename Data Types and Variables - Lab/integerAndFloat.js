function solve(numA, numB, numC) {
  let sum = numA + numB + numC;
  let type = 'Float';
if(Number.isInteger(sum)) {
  type = 'Integer';
}
console.log(`${sum} - ${type}`);
}

solve(9, 100, 1.1)