async function countCities() { // асинхроная ф-ция, чтобы паузы 
  try {
    // пауза, чтобы псначала точно получить данные, функция для выхода в интернет по адресу
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // ждем чтрбы в адекватный формат js
    const data = await response.json();

    // Собираем объект, проходим по всем эл, (накопитель, текущий польз)
    const cityCounts = data.reduce((acc, user) => {
      const city = user.address.city;// достаем город
      
      // если нет, добавляем его со значением 1
      if (!acc[city]) {
        acc[city] = 1;
      } else {
        // если да
        acc[city]++;
      }
      
      return acc;
    }, {});// закрытие ф-ции, начальное значение пустое

    console.log(cityCounts);
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

countCities();