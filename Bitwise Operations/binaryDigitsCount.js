function solve(input) {
    let number = Number(input[0]);
    let binaryDigit = Number(input[1]);
    let count = 0;

    while (number > 0) {
        let bitReminder = number % 2; // return only 1 or 0
        if (bitReminder == binaryDigit) {
            count++;
        }
        number = parseInt(number  / 2); // we divide by 2, because binary system base 2
    }
    console.log(count);

}
solve(20, 0)