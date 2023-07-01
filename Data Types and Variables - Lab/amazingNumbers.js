function solve(num) {
 num = num.toString();
 let sum = 0;
for(let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}
let res = sum.toString().includes('9');
console.log( res ? `${num} Amazing? True` : `${num} Amazing? False`);

}
solve(1233)