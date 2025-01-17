document.getElementById('wakeButton').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    catImage.src = 'wakeupCat.jpeg'; // Измените на URL проснувшегося кота
    catImage.alt = 'Проснувшийся кот';
});
