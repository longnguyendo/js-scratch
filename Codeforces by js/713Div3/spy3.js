const readline = require('readline');
const readFromLine = (callback) => {
  const arrayOfInputs = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    const arr = input.split(' ');
    arr.forEach((element) => arrayOfInputs.push(element));
  });

  rl.on('close', (input) => {
    callback(arrayOfInputs);
  });
};
readFromLine(main);

function main(array) {
  const firstArray = array.slice(1, array.length);
  for (let i = 0; i < firstArray.length; i++) {
    let n = parseInt(firstArray[i]);
    let input = firstArray.slice(i + 1, i + n + 1);
    let theMainItem;
    let theResultIndex;

    if (input[0] === input[1] && input[1] === input[2]) {
      for (let j = 1; j < input.length; j++) {
        if (input[0] !== input[j]) {
          theResultIndex = j + 1;
          break;
        }
      }
    }
    if (input[0] === input[1] && input[1] !== input[2]) {
      theResultIndex = 2 + 1;
    }
    if (input[0] !== input[1] && input[1] === input[2]) {
      theResultIndex = 0 + 1;
    }
    if (input[0] !== input[1] && input[0] === input[2]) {
      theResultIndex = 0 + 2;
    }

    console.log(theResultIndex);
    i += parseInt(firstArray[i]);
  }
}
