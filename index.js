const fs = require('fs');
const cmd = process.argv[2];
const app = (cmd) => cmd === 'read' 
    ? fs.readFile('./notebook.txt', 'utf8', (err, data) => console.log(err || data))
    : fs.appendFile('./notebook.txt', `${note}\n`, (err) => console.log(err || 'note added successfully'))
app(cmd);

 
