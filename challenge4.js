'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */
function processLogs(logs, threshold) {
  console.log(logs, threshold);
  const trx = logs
    .map((l) => l.split(' '))
    .map((ls) => [...new Set(ls)])
    .flat()
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] + 1 || 1;
      return acc;
    }, {});

  const entries = Object.entries(trx).sort((a, b) => a[1] - b[1]);
  const res = [];

  for (let e of entries) {
    if (e[1] >= threshold) {
      res.push(e[0]);
    }
  }

  return res;
}

function writeInFile(data) {
  fs.writeFileSync('./logs.txt', data);
}

function main() {
  const logsCount = parseInt(readLine().trim(), 10);
  let logs = [];
  for (let i = 0; i < logsCount; i++) {
    const logsItem = readLine();
    logs.push(logsItem);
  }
  const threshold = parseInt(readLine().trim(), 10);
  const result = processLogs(logs, threshold);
  console.log(result);
  writeInFile(result.join('\n') + '\n');
}
