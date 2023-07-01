function solve(text, charToCharge, targetText) {
    let newString = '';

  for(let i = 0; i < text.length; i++) {
if(text[i] === '_') {
newString += charToCharge;
} else {
    newString += text[i];
}

  } 
  console.log(newString === targetText ?  'Matched' : 'Not Matched');
}
solve("Str_ng", "I", "Strong")