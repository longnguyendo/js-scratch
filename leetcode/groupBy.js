Array.prototype.groupBy = function(fn) {
    return this.reduce((res, item) => {
        let key = fn(item);
        if (res[key] === undefined) {
            res[key] = [];
        }
        (res[key] ||= []).push(item);
        // res[key].push(item);
        return res;
    },{})
};

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}

console.log(array.groupBy(fn))