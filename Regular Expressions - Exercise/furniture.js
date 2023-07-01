function solve(input) {

    let text = input.join(' ');
    let furnitureArr = [];
    let totalSum = 0;
    let pattern =
        /[>]{2}(?<furniture>[A-Z]+[A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {

        let validName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);

        furnitureArr.push(validName);
        totalSum += validPrice * validQuantity;

    }
    console.log('Bought furniture:');

    furnitureArr.forEach(el => console.log(el));

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])

//
console.log("---------")
//

function furniture(data) {

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");
    for (let line of data) {
        if (line === "Purchase") {
            break;
        }
        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])