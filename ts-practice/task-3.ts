import type { User } from './types';
import { users } from './users';

// проверка нужна, потому что users[0] может быть undefined (пустой массив).
const first = users[0];
if (!first) {
  throw new Error('Массив пользователей пуст');
}

// reduce проходит по всем пользователям и хранит того, у кого сумма заказов больше
const best: User = users.reduce((maxUser, currentUser) => {
  // сумма заказов текущего победителя
  const maxTotal = maxUser.orders.reduce((sum, order) => sum + order, 0);
  // сумма заказов следующего пользователя
  const currentTotal = currentUser.orders.reduce((sum, order) => sum + order, 0);

  // если у следующего больше — он становится победителем
  if (currentTotal > maxTotal) {
    return currentUser;
  }

  // иначе остаётся прежний победитель
  return maxUser;
}, first);

console.log(best.name);
