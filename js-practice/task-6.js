async function fetchUsers() { // асинхронная функция
  try {
    // await для того, чтобы  fetch скачал данные с сервера".
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // проверка на все ли ок с ответом 
    if (!response.ok) {
      throw new Error('Сервер вернул ошибку: ' + response.status);
    }

    // ответ сервера в JS-объект (массив)
    const data = await response.json();

    // массив пользователей с сервера и выводим только их имена
    const names = data.map(user => user.name);
    console.log(names);

  } catch (error) {
    // если иеще что-то
    console.error('Ошибка при загрузке данных:', error.message);
  }
}

// Запускаем нашу функцию
fetchUsers();