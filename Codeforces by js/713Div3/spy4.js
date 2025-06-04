'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    let t = readline();
    while(t--)
    {
      let n = readline(); 
      let elements = readline();
      let s = elements.split(' '); 
      let res = -1;
      for (let j = 1; j < s.length - 1; j++) {
          if (s[j] !== s[j - 1] && s[j] === s[j + 1]) {
              res = j - 1;
              break;
          } else if (s[j] === s[j - 1] && s[j] !== s[j + 1]) {
              res = j + 1;
              break;
          } else if (s[j] !== s[j - 1] && s[j] !== s[j + 1]) {
              res = j;
              break;
          }
      }
      console.log(res + 1);
    }
    
}
