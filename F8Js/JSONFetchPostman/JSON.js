// 1. la mot dinh dang du lieu - JS Object Notation
// 2. json: number, boolean, null, array, 
// encode / decode - actually Stringify / Parse

let obj = {
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "gaming", "hiking"],
  "education": [
    {
      "degree": "Bachelor of Science",
      "university": "MIT",
      "year": 2015
    },
    {
      "degree": "Master of Computer Science",
      "university": "Stanford",
      "year": 2018
    }
  ]
};
// exchange data type in js to json => JSON.stringify();
let json = JSON.stringify(obj);
console.log(json);

// exchange json to data type js => JSON.parse();
let obj2 = JSON.parse(json)
console.log("json", obj2);

// write json by myself;
let json3 = '"a\"bc"' // string a"bc 
let json4 = {
    "name":"Long em",
    "age": 19,
    "address": {
        "street":"a",
        "city":"b",
    }
}
// will be obj

let json5 = '["abc","def"]';
let json6 = [1,2];

// let array5 = JSON.parse(json5);
// console.log("obj6", array5[0]);
