import type { User } from './types';
import { users } from './users';

// [...users] — копия массива, чтобы sort не менял оригинал
const sortedUsers: User[] = [...users].sort((a, b) => {
  const totalA = a.orders.reduce((sum, order) => sum + order, 0);
  const totalB = b.orders.reduce((sum, order) => sum + order, 0);

  // сортировка по убыванию суммы заказов
  return totalB - totalA;
});

console.log('Отсортированные:', sortedUsers.map((user) => user.name));
console.log('Оригинал:', users.map((user) => user.name));
