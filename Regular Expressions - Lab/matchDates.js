function matchData(arr) {
    let regex = /(?<day>\d{2})(?<delimiter>[-\/.])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})/g;
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let match = [...text.matchAll(regex)];
        for (let j = 0; j < match.length; j++) {
            let res = `Day: ${match[j].groups.day}, Month: ${match[j].groups.month}, Year: ${match[j].groups.year}`
            console.log(res);
        }
    }

}

matchData("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")

//
console.log("--------");
//

function solve(dates) {

    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate = [];

    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

}
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")

//
console.log("---------")
//