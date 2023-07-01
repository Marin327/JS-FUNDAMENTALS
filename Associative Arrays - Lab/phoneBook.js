function solve(input) {
    let phonebook = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phonebook[name] = number;
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }

}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])


//
console.log("-------")
//


function phoneBook(input) {
    let dict = {}
    input.forEach(el => {
        let tokens = el.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        dict[name] = phone
    });
  for (const key in dict) {
   console.log(`${key} -> ${dict[key]}`)
        
    }
  }

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])