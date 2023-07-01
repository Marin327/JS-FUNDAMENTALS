function activationKeys(arr) {
    let raw = arr.shift();
    arr = arr.slice(0, arr.indexOf("Generate"))
    const actions = {
        Contains: contains,
        Flip: flip,
        Slice: slice,
    }

    function contains(s) {
        if (raw.includes(s)) {
            console.log(`${raw} contains ${s}`)
        } else {
            console.log(`Substring not found!`)
        }
    }
    function flip(lCase, start, end) {
        const sub = raw.substring(start, end)
        raw = raw.replace(
            sub,
            lCase === 'Upper' ? sub.toLocaleUpperCase() : sub.toLocaleLowerCase()
        )
        console.log(raw)
    }
    function slice(start, end) {
        raw = raw.substring(0, start) + raw.substring(end)
        console.log(raw)
    }
    arr.forEach(x => {
        const [a, b, c, d] = x.split(">>>")
        actions[a](b, c, d)
    })
    console.log(`Your activation key is: ${raw}`)
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])