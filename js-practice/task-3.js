// Подключаем массив с пользователями из соседнего файла
const users = require('./users');

// Переменная best для хранения итогового результата
// метод reduce для прохождения по всему массиву пользователей
const best = users.reduce((maxUser, currentUser) => {
  // maxUser — первый пользователь для сравнения
  // currentUser — следующий пользователь
  // счет общей суммы заказов текущего победителя (складываем числа в его массиве orders)
  const maxTotal = maxUser.orders.reduce((sum, order) => sum + order, 0);
  // Считаем общую сумму заказов следующего
  const currentTotal = currentUser.orders.reduce((sum, order) => sum + order, 0);
  
  // сравниваем суммы
  if (currentTotal > maxTotal) {
    // меняем, если след. больше
    return currentUser;
  } 
  
  // если нет, то первый победитель
  return maxUser;
  
}, users[0]); // maxUser (Анна)

// вывод победителя
console.log(best.name);