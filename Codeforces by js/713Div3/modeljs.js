var x = +readline("");
for (var i = 0; i < x; i++) {
    var count = 0;
    readline("");
    var s = readline("");
    var arr = [];
    for (var j = 0; j < s.length; j++) {
        count += [1,2][+!arr.includes(s[j])];
        arr.push(s[j]);
    }
    print(count);
}