import type { User } from './types';
import { users } from './users';

// <Record<string, User[]>> описывает тип acc (и пустого {} в начале).
const grouped = users.reduce<Record<string, User[]>>((acc, user) => {
  // берём уже существующую группу города или создаём пустую
  const group = acc[user.city] ?? [];

  // добавляем текущего пользователя в группу
  group.push(user);

  // записываем группу обратно в объект
  acc[user.city] = group;

  return acc;
}, {});

console.log(grouped);
