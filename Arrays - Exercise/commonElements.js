function solve(firstArr, secondArr) {
   for (let i = 0; i < firstArr.length; i++) {
      let firstWord = firstArr[i];
      for (let j = 0; j < secondArr.length; j++) {
         let secondWord = secondArr[j];
         if (firstWord === secondWord) {
            console.log(firstWord);
         }
      }
   }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
   ['Petar', 10, 'hey', 4, 'hello', '2'])