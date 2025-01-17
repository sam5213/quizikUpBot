document.getElementById('wakeButton').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    const message = document.getElementById('message');

    // Показать сообщение о том, что кот услышал
    message.textContent = 'Кот услышал и скоро проснется...';
    sendGetRequest();

    // Через 30 секунд поменять изображение и сообщение
    setTimeout(function() {
        catImage.src = 'wakeupCat.jpeg'; // URL для изображения проснувшегося кота
        catImage.alt = 'Проснувшийся кот';
        message.textContent = 'Кот проснулся!';
    }, 30000); // 30000 миллисекунд = 30 секунд
});

function sendGetRequest() {
    var xhr = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
    var url = "https://wakeupquizbot.glitch.me"; // URL, на который будет отправлен запрос

    xhr.open("GET", url, true); // Инициализируем GET-запрос

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // Проверяем, завершен ли запрос
            if (xhr.status === 200) { // Проверяем, успешен ли ответ
                console.log("Response:", xhr.responseText); // Выводим ответ в консоль
            } else {
                console.error("Error:", xhr.status); // Выводим ошибку, если запрос не успешен
            }
        }
    };
    
    xhr.send(); // Отправляем запрос
};
