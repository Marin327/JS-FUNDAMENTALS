function solve(input) {
    let arr = [];
    for (let el of input) {
        if (arr.indexOf(el) === -1) {
            arr.push(el);
        }
    }
    console.log(arr.join(" "));
}
solve([1, 2, 3, 4])
//
function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes((arr[i]))) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr.join(" "));
    }
    solve([1, 2, 3, 4])