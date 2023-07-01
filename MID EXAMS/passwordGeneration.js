function passwordGerneration(input) {
        
            let nNumber = Number(input.shift());
            let lNumber = Number(input.shift());
           let password = [];

            for (let i1 = 1; i1 < nNumber; i1++){
                for (let i2 = 1; i2 < nNumber; i2++){
                    for (let i3 = 'a'; i3 < 'a'+ lNumber; i3++){
                        for (let i4 = 'a'; i4 < 'a'+ lNumber; i4++){
                            for (let i5 = 2; i5 <= nNumber; i5++){
                                if (i5 > i1 && i5 > i2){
                                    console.log(`${i1}${i2}${i3}${i4}${i5}`);
                                    //console.log(`Your generated password is ${password}`);
                                }
                            }
                        }
                    }
                }
            }
        console.log(`Your generated password is ${password}`);
        }
passwordGerneration([[
'ilovepizza', 'ihatevegetables',
'orange'
]])