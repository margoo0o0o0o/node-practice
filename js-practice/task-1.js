const users = require('./users');
const a = users.filter(user => user.age > 20);
const names = a.map (user => user.name);
console.log(names);
