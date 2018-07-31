"use strict";

const fs = require('fs');

fs.readFile('./santa_input.txt', (err, data)=>{
    console.time('fun challenge');

    if(err){
        console.log('Can not read file');
    }

    let input = data.toString;
    let go=0;

    // input.split('').forEach(char => {
    //     if(char==='('){
    //         goUp++;
    //     } else if(char===')'){
    //         goDown++;
    //     }
    // });

    for(let i=0; i<input.length;i++){
        if(input[i]==='('){
            go++;
        } else if(input[i]===')'){
            go--;
        }
    }

    console.log(`Santa go ${go} floor`);

    console.timeEnd('fun challenge');
})


