function solve(data) {
let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g
let match = pattern.exec(data);
let result = [];

while(match !== null) {
   result.push(match);

    match = pattern.exec(data);
}
console.log(result.join(" "));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")

//
console.log("--------")
//

function matchFull(data) {
let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
 let result = data.match(regex);
 console.log(result.join(' '));

}
matchFull("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")