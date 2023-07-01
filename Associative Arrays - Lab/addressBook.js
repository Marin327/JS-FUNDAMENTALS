function adressBooks(data) {
    let result = {};

    for (let line of data) {
        let [name, address] = line.split(":");
        result[name] = address;
    }

    let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [name, address] of sortEntries) {
        console.log(name, "->", address);
    }
}

adressBooks([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])

//
console.log("----------")

//
function adressBoo(input) {
    let dict = {}
    for (const el of input) {
        let tokens = el.split(':')
        let name = tokens[0]
        let address = tokens[1];
        dict[name] = address;
    }
    let entries = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]))
    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`)
    }
}
adressBoo([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])