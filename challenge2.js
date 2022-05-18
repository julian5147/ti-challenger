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

//TODO
const inventory = [];
function inventoryList() {
  return {
    add(name) {
      if (!name && name === ' ') {
        return console.log('The name cannot be empty');
      }
      if (inventory.find((inv) => name === inv)) {
        return console.log('The item is already in the inventory');
      }
      if (inventory.length === 10) {
        return console.log('Unable to add more items to inventory');
      }

      inventory.push(name);
      console.log('The article was successfully added');
    },
    remove(name) {
      if (!name && name === ' ') {
        return console.log('The name cannot be empty');
      }

      const index = inventory.indexOf(name);
      if (index === -1) {
        return console.log('The item not exist');
      }

      inventory.splice(index, 1);
      console.log('The article was successfully removed');
    },
    getList() {
      console.log(inventory);
      return inventory;
    },
  };
}

function writeInFile(data) {
  fs.writeFileSync('./output.txt', data);
}

function main() {
  const obj = inventoryList();
  const operationCount = parseInt(readLine().trim());

  for (let i = 1; i <= operationCount; i++) {
    const operationInfo = readLine().trim().split(' ');
    let value = operationInfo[1];
    //TODO
    obj[operationInfo[0]](value);
  }
}
