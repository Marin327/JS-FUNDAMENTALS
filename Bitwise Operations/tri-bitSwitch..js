function solve(input) {
    let n = Number(input[0]);
    let p = Number(input[1]);
    let mask = (7 << p);
    let result = (n ^ mask);
    console.log(result);
}
solve(1234,
    7)