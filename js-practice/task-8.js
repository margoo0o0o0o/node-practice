const users = require('./users');
// оператор распространения для того, чтобы перенести данные в новый массив
const sortedUsers = [...users].sort((a, b) => {
  // сумма заказов для двух пользователей
  const totalA = a.orders.reduce((sum, order) => sum + order, 0);
  const totalB = b.orders.reduce((sum, order) => sum + order, 0);
  
  // сортировка по убыванию, потому что положительное будет
  return totalB - totalA;
});

// вывод отсортированных пользователей
console.log('Отсортированные:', sortedUsers.map(user => user.name)); 

// вывод исходного массива
console.log('Оригинал:', users.map(user => user.name)); 