function emojiDetector(arr) {

    const cool = arr[0]
        .split("")
        .filter(x => !isNaN(x))
        .filter(x => x !== " " && x !== "")
        .join("")
        .split("")
        .map(Number)
        .reduce((a, v) => a * v, 1)
    const r = /::[A-Z][a-z]{2,}::|\*\*[A-Z][a-z]{2,}\*\*/g
    let matches = arr[0].match(r).filter(x => x !== "")
    const emojis = matches.length
    matches = matches.filter(
        x =>
        x
        .split(x[0])
        .filter(x => x !== "")
        .join("")
        .split("")
        .reduce((a, v) => a + v.charCodeAt(0), 0) > cool
    )
    console.log(`Cool threshold: ${cool}`);
    console.log(`${emojis} emojis found in the text. The cool ones are:`);
    matches.forEach(x => console.log(x));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**",
    "1 ::Elephant:", "12 **Monk3ys**",
    "a **Gorilla::",
    "5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
])