function solve(n, numbers) {
let result = [];
for( r = n - 1; r >= 0; r--) {
    result.push(numbers[r]);
}
console.log(result.join(" "));
}
solve(3, [10, 20, 30, 40, 50])