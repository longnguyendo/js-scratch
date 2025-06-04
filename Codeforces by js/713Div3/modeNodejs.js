// Model nodejs ICPC balloons

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const lines = []
rl.on('line', (input) => {
    lines.push(input);
})
rl.on('close', () => {
// (function() {
    // const lines = require('fs').readFileSync('test.in', 'utf8').split('\n')
    let l = 0;
    let t = +lines[l++]
    const output = []
    for (let i = 0; i < t; i++) {
        const n = +lines[l++]
        const str = lines[l++]
        output[i] = solve(n, str)
    }
    console.log(output.join('\n'))
// })()
})

function solve(n, str) {
    const map = {}
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = 1
    }
    return str.length + Object.keys(map).length
}