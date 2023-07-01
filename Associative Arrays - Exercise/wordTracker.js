function solve(data) {
    let result = new Map();

    let words = data.shift().split(" ");

    for (let word of words) {
        result.set(word, 0);
    }

    for (let word of data) {
        if (result.has(word)) {
            let oldValue = result.get(word);
            result.set(word, oldValue + 1);
        }
    }

    let sortResult = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA

    })

    for (let [key, value] of sortResult) {
        console.log(key, "-", value);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])



//
console.log("----------")
//



function wordTracker(data) {
    let result = {};
    let words = data.shift().split(" ");

    for(let word of words) {
        result[word] = 0;

    }
   for(let word of data) {
    if(result.hasOwnProperty(word)) {
        result[word] += 1;
    }
   }
let sortArr = Object.entries(result).sort((a, b) => b[1] - a[1]);
for(let  [key, value] of sortArr) {
    console.log(`${key} - ${value}`);
}
}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])