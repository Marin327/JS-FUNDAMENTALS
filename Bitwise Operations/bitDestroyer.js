function solve(input) {
    let number = Number(input[0]);
   let position = Number(input[1]);

let mask = ~(1 << position);//after shift left with position we have mask with 1 value at current position and another are 0, but with ~(not) we have mask with 0 value at current position and another are 1
let result = (number & mask);// taken the whole number with set 0 only at current position and now we have another number
console.log(result);
}
solve(111,
    4)