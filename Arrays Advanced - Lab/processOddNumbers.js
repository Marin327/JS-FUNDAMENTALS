function solve(arr) {
let result = arr
.filter((num, i) => i % 2 !== 0)
.map(x => x * 2)
.reverse();

return result.join(' ');

}

console.log(solve([10, 15, 20, 25]));