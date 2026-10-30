const users = require ('./users');
const result = users.map(user => {
  // Метод reduce проходит по массиву заказов (orders) и складывает их.
  // 0 в конце — это начальное значение (если заказов нет, сумма будет 0).
  const total = user.orders.reduce((sum, order) => sum + order, 0);
  
  // Возвращаем новый объект с именем и посчитанной суммой
  return { name: user.name, total: total };
});

console.log(result);