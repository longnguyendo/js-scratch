const readline = require('readline');

var x = +readline("");

while(x--) {

    let res = 0;
    readline("");
    let s = readline("");
    // let iter = 1;
    for( let i = 1 ; i < s.length - 1; i++ ) {
        if (s[i] != s[i - 1] && s[i] == s[i + 1]) {
            res = i - 1;
        }
        else if (s[i] == s[i - 1] && s[i] != s[i + 1]) {
            res = i + 1;
        }
        else if (s[i] != s[i - 1] && s[i] != s[i + 1]) {
            res = i;
        }
    }
    print(res);
}
