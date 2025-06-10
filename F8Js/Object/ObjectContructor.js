
// this is constructor
function User(firstName, ava, name, age) {
    // initial data from params by this 
    this.firstName = firstName;
    this.ava = ava;
    this.name = name;
    this.age = age;

    this.getName = function() {
        return `${this.firstName} ${this.name}`
    }

}
// prototype cannot use arrow function?
User.prototype.getAge = function(){
    return this.age;
}
// this is object;
let author = new User('Son','ava','Dang' ,19);
let user = new User('Ong', 'ava', 'A' , 18);
console.log(author.getName());
console.log(user.getName());
console.log("age",author.getAge());

console.log(author.age);

// doi tuong date:
const date = new Date();
console.log(date);

// random math;
const arr = [1,2,3,4,5,[1,2,4],32];
function randomItemArray(arr) {
    const randomIndex  = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log("pick random value in arr", randomItemArray(arr));
// if else basic
function run(a) {
    if (a%15 === 0) return 3;
    if (!a%3) return 1;
    if (!a%5) return 2;
}
console.log("run",run(15));
// switch case:
function switchCase(abc) {

    switch(abc) {
        case "abc":
            break;
        case "cde":
            break;
        case "def":
            console.log("= def",abc);
            break;
        default: 
            console.log("no item");
            
    }
}
// toan tu 3 ngoi:
function canVote(age) {
    return age>=18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
}

// work with array js
// reduce
const sports = [
    {
        id: 1,
        gold: 5,
        name: 'football',
    },
    {
        id: 2,
        gold: 2,
        name: 'volleyball',
    },
    {
        id: 3,
        gold: 5,
        name: 'basketball',
    }
]
function getTotalGold(sports) {
    return sports.reduce((accumulator, sport) => {
        return accumulator + sport.gold;
    },0);
}

console.log(getTotalGold(sports));



// json = javascript object notation;
// Promise sync, async;

