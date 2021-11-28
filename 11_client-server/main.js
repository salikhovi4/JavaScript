const token = '4d9fa43e584bc95a831be8505350f2133c989ca80712031f6a6f41ff6b9ec6f2';

fetch('https://gorest.co.in/public/v1/users', {
    // для создания нового пользователя используется метод POST
    method: 'POST',
    // JSON.stringify превратит любое значение в строку JSON
    body: JSON.stringify({
        name: 'Emma Hewitt',
        gender: 'female',
        email: 'emma.hewitt@15ce.com',
        status: 'active',
    }),
    // добавление заголовков запроса
    headers: {
        // gorest почти для всех етодов требует получения специального токена
        // для доступа к ним. Получить его можно в личном кабинете после регистрации
        // в gorest. А указывается этот токен какзаголовок запроса Authorization: 'token'
        Authorization: `Bearer ${token}`,
        // Заголовок Content-Type должен содержать название формата тела запроса,
        // чтобы сервер смог правильно его распознать. Для JSON всегда указываем
        // application/json. У каждого формата есть собственное значение. Например,
        // у HTML это text/html, у простого текста это text/plain и т.п.
        'Content-Type': 'application/json'
    }
})

fetch('https://gorest.co.in/public/v1/users/1688', {
    method: 'DELETE',
    headers: {
        Authorization: `Bearer ${token}`,
    }
})

async function loadUsers() {
    const response = await fetch('https://gorest.co.in/public/v1/users');
    const data = await response.json();

    console.log(data);
}
