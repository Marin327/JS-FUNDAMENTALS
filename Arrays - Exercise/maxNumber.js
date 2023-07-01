function solve(array) {
    function solve(arr, rotationCount) {
        let buffArr = [];
        for (let i = 0; i < rotationCount; i++) {
          let currentElement = arr[0];
          for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
          }
          buffArr.push(currentElement);
          arr = buffArr;
          buffArr = [];
        }
        console.log(arr.join(" "));
      }
    console.log(newArray.join(" "));
}
solve([1, 4, 3, 2]);