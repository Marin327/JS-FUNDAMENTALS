function solve(input) {
    let inputArr = [];
    for (let currentLine of input) {
        inputArr.push(currentLine);
    }
 
    let resourceAndQuantity = new Map();
 
    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        if (resource.toLowerCase() == "stop") {
            break;
        }
        let quantity = parseInt(inputArr[i + 1]);
 
        if (resource in resourceAndQuantity) {
            resourceAndQuantity[resource] += quantity;
        }
        else {
            resourceAndQuantity[resource] = quantity;
        }
    }
 
    for (let key in resourceAndQuantity) {
        if (resourceAndQuantity.hasOwnProperty(key)) {
            console.log(key + ' -> ' + resourceAndQuantity[key]);
        }
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])