const fs = require('fs');

// записываем файл
fs.writeFileSync('note.txt', 'Привет из Node.js!');

// читаем и выводим
const content = fs.readFileSync('note.txt', 'utf-8');
console.log(content);