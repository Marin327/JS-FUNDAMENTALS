function solve(array, number) {

    let arrayCombination = [];
    let valid = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                valid = `${array[i]} ${array[j]}`;
                arrayCombination.push(valid);
            }
        }

    }
    console.log(arrayCombination.join('\n'));
}
solve([1, 7, 6, 2, 19, 23], 8)