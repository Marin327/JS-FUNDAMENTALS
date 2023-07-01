function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
        let difference = 0;
          if(evenSum == oddSum) {
            difference += evenSum;
           console.log(difference);
          } else {
            difference -= oddSum;
          console.log(difference);
        }
    }
}
solve([3,5,7,9]);