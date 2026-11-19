type ApiUser = {
  name: string;
};

// проверка, что неизвестное значение — объект с полем name типа string
function isApiUser(value: unknown): value is ApiUser {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    typeof value.name === 'string'
  );
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Сервер вернул ошибку: ' + response.status);
    }

    // TypeScript ничего не знает о данных с сервера, поэтому unknown
    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Сервер вернул не массив');
    }

    // оставляем только элементы, прошедшие проверку
    const apiUsers: ApiUser[] = data.filter(isApiUser);
    console.log(apiUsers.map((user) => user.name));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Ошибка при загрузке данных:', message);
  }
}

fetchUsers();
