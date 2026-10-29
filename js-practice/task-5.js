const users = require('./users');

// Создаем функцию, которая принимает id
function getUserById(id) {
  // users.find() ищет первого пользователя, чей id совпадает с тем, что мы передали.
  // если нет, то find вернет undefined.
  // Оператор || null если найдем  пользователя, то вернем его, а если нет то undefined и возвращаем null
  return users.find(user => user.id === id) || null;
}

// вызов функции
console.log(getUserById(2));  // Выведет объект Ольги
console.log(getUserById(99)); // Выведет null