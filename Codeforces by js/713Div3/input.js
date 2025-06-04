const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let i = 0;
let t = +input[i++];  
// console.log(t, '\n');

while (t--) {
    let n = +input[i++];  
    // console.log(n, '\n');

    let s = input[i++].split(' '); 
    // console.log(s, '\n');

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

    console.log(res + 1); // Print the result
}
