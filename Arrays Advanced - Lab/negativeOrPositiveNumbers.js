function solve(arr) {
    let result = [];
   for(let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if(element < 0) {
        result.unshift(element);
 
    } else {
        result.push(element);
    }
   }
   return result.join('\n')
}
console.log(solve(['7', '-2', '8', '9']));

//
function solve(arr) {
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result.unshift(arr[i]);
    } else {
        result.push(arr[i]);
    }
}
console.log(result.join('\n'));
}
solve(['7', '-2', '8', '9'])