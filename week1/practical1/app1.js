const path = require('node:path');

const notes = './files/notes.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

const fs = require('node:fs');

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});



const content = 'hello!';

fs.writeFile('./files/test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

const chalk = require('chalk');

console.log(chalk.yellow('hi!'));
