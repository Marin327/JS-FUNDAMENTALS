function solve(arr) {

    let sum1 = arr.shift();
    let sum2 = arr.pop();
    console.log(Number(sum1) + Number(sum2));
    
}
solve(['20', '30', '40'])