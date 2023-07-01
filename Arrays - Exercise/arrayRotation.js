function solve(array, rotation) {
  while(rotation > 0) {
    let element = array.shift();
    array.push(element);
    rotation--;
  }
  console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2)