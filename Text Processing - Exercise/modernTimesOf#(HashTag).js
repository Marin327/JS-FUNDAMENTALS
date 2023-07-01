function solve(input) {

    let sentence = input.split(' ');

    for (const word of sentence) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true;
            let wordLower = word.toLowerCase();

            for (let index = 1; index < wordLower.length; index++) {
                if (wordLower.charCodeAt(index) < 97 || wordLower.charCodeAt(index) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.slice(1));
            }
        }
    }

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');


//
console.log("------")
//

function modernTimes(text) {
   let result = [];
    let words = text.split(" ");

    for(let el of words) {
      if(el.startsWith("#") && el.length > 1) {
        let isSpecial = true;
        el = el.substring(1);
     for(let ch of el) {
        ch = ch.toLowerCase();
        if(ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
            isSpecial = false;
            break;
        }
     }
     if(isSpecial) {
     result.push(el);
      }
    }
}
console.log(result.join("\n"));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')