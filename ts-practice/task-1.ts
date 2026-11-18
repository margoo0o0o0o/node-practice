import type { User } from './types';
import { users } from './users';

const adults: User[] = users.filter((user) => user.age > 20);
const names: string[] = adults.map((user) => user.name);
console.log(names);
