const users = require('./users');
// reduce для перебора (acc - промежуточная сумма, user - текущий польз.), начиная с 0.
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// деление и округление
const averageAge = (totalAge / users.length).toFixed(1);
console.log(averageAge); 