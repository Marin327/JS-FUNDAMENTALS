function solve(arr) {
    let currArr = arr;

    while (currArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < currArr.length - 1; i++) {
            let firstEl = currArr[i];
            let secondEl = currArr[i + 1];

            newArr.push(firstEl + secondEl);
        }
        currArr = newArr;

    }
    console.log(currArr[0]);
}
solve([5, 0, 4, 1, 2])