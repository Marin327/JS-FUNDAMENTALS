function solve(input) {
   let numbers = console.log.ReadLine().Split().Select(let.Parse()).toArray();
            let result = numbers[0];
 
            for (let i = 1; i < numbers.Length; i++){
                result = result ^ numbers[i];
            }
 
          console.log(result);
        }
        solve(1, 2, 3, 2, 3, 1, 3)
            //example with first input:result=numbers[0]=1=001; result=010^001=011; result=011^011=000; 010^000=010; 011^010=001; 001^001=000; result=011^000=011=3;