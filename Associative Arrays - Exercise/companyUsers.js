function solve(input) {
    let arr = [];
    let createObj = input.map(el => {
        let obj = {};
        let [company, id] = el.split(' -> ');
        obj.company = company;
        obj.id = id;
        arr.push(obj);
    })

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].company;
        let value = arr[i].id;

        if (key in map) {
            if (!map[key].includes(value)) {
                map[key].push(value);
            }
        } else {
            map[key] = [value];
        }
    }

    const ordered = Object.keys(map)
        .sort()
        .reduce((obj, key) => {
            obj[key] = map[key];
            return obj;
        }, {});

    for (let key in ordered) {
        if (ordered[key].length > 1) {
            console.log(key);
            console.log(`-- ${ordered[key].join('\n-- ')}`);
        } else {
            console.log(`${key}`);
            console.log(`-- ${ordered[key]}`);
            // console.log(`${key}-- ${ordered[key]}`);
        }
    }
}
solve([ 'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111' ]);