function solve(arr) {
    arr.sort((a,b)  => a-b); 
        let res = arr.slice(0,2);
console.log(res.join(" "));

}
solve([30, 15, 50, 5])