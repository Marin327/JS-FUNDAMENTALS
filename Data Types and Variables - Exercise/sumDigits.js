function solve(number) {

    let numberAsString = number.toString();
    let digits = 0;
    for (let index = 0; index < numberAsString.length; index++) {
        let currentDigit = Number(numberAsString[index]);
        digits += currentDigit;
    }
    console.log(digits);
}
solve(543)