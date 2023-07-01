function solve(args) {
    let number = Number(args);
   let mask = 1 << 1;//after shift left with 1 we have 1 value in mask at position 1 another are 0

    let result = (number & mask)>>1;//after shift right with 1 taken last value(0 or 1) because another are 0 using &
console.log(result);
}


solve(2)