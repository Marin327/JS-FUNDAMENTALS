function solve(arr) {
    let res = [];
    for (let el of arr) {
        let command = el.split(" ");
        let name = command[0];
        if (command.length === 3) {
            if (res.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                res.push(name);
            }
        } else {
                if (!res.includes(name)) {
                    console.log(`${name} is not in the list!`);
                
                } else {
                    let index = res.indexOf(name);
                    res.splice(index, 1);
                }
            }
        }
         console.log(res.join("\n"));
    }
  solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
//
function solve(input) {
    let myList = [];
    for (let el of input) {
        let commands = el.split(" is ");
        let name = commands[0];
        let command = commands[1];
        if (command === "going!") {
            if (!myList.includes(name)) {
                myList.push(name);

            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {

            if (!myList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                myList.splice(myList.indexOf(name), 1);
            }
        }
    }
    console.log(myList.join("\n"));
}
solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])