import { users } from './users';

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// деление и округление до одного знака
const averageAge: string = (totalAge / users.length).toFixed(1);
console.log(averageAge);
