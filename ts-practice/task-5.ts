import type { User } from './types';
import { users } from './users';

// принимает id, возвращает найденного пользователя или null
function getUserById(id: number): User | null {
  // find вернёт undefined, если никого нет, а ?? заменит его на null
  return users.find((user) => user.id === id) ?? null;
}

console.log(getUserById(2)); // объект Ольги
console.log(getUserById(99)); // null
