function solve(data) {
    let result = new Map();

    for (let line of data) {
        let [product, quantity] = line.split(" ");

        if (result.has(product)) {
            let oldQuantity = result.get(product);
            result.set(product, oldQuantity + Number(quantity));
        } else {
            result.set(product, Number(quantity))
        }
    }
    for (let [k, v] of result.entries()) {
        console.log(k, "->", v);
    }
}
solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])

//
console.log("----------")
//

function storage(input) {

    let dict = new Map()
    for (const el of input) {
        let tokens = el.split(' ')
        let item = tokens[0];
        let quantity = Number(tokens[1]);
        if (dict.has(item)) {
            let currentQuantity = dict.get(item);
            dict.set(item, currentQuantity + quantity);
        } else {
            dict.set(item, quantity);
        }
    }
    for (const [key, value] of dict) {
        console.log(`${key} -> ${value}`)
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])