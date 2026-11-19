import { users } from './users';

type UserWithTotal = {
  name: string;
  total: number;
};

const result: UserWithTotal[] = users.map((user) => {
  const total = user.orders.reduce((sum, order) => sum + order, 0);

  return { name: user.name, total };
});

console.log(result);
