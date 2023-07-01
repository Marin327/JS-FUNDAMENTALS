function solve (start, end) {
    let sum = 0;
    let numbers = '';
    
    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i;
    }
    console.log(`${numbers}\nSum: ${sum}`);
}
solve(5,10)