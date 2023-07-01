function solve(data) {
    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g

    let phoneNumbersList = data[0];
    let match = pattern.exec(phoneNumbersList);
    let res = [];
    while (match !== null) {
        res.push(match[0]);
        match = pattern.exec(phoneNumbersList);
    }
    console.log(res.join(", "));

}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])



//
console.log("---------")
//

function phoneNumber(arr) {

    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let match = text.match(regex);
        result = result.concat(match);
    }
console.log(result.join(", "));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])