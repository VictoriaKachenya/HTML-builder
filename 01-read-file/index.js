const fs = require('fs');
const { Transform} = require('stream');
const rs =  fs.createReadStream('text.txt');
const ts = new Transform({
    transform(chunk, enc, cb){
        this.push(chunk);
        cb();
    }
})