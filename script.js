document.getElementById('wakeButton').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    catImage.src = 'https://masterpiecer-images.s3.yandex.net/5a1ce894d4c411efbcf86ecd5a48429b:1/400/301'; // Измените на URL проснувшегося кота
    catImage.alt = 'Проснувшийся кот';
});
