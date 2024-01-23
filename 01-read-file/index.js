const fs = require('fs');
const path = require('path');
const fileText = 'text.txt';


const readStreamFileText = fs.createReadStream(path.join(__dirname, fileText));
readStreamFileText.on('data', (read) => {
    console.log(read.toString());
});