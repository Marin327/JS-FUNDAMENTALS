function solve(input) {
    let n = Number(input[0]);
    let p = Number(input[1]);

    let mask = 1 << p; //after shift left with position value we have 1 value in mask at current position but another are 0
    let result = (n & mask) >> p; //after shift right with position value we have 0 or 1 at last position but another are 0 using &
    console.log(result);

}
solve(255, 7)