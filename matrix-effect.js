document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Размеры canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Символы для матрицы
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    // Инициализация капель
    for (let i = 0; i < columns; i++) {
        drops[i] = {
            y: Math.random() * -100,
            speed: 0.8 + Math.random() * 1.5, // Уменьшенная скорость
            opacity: 0.1 + Math.random() * 0.3
        };
    }

    // Функция отрисовки
    function draw() {
        // Полупрозрачный фон для эффекта следа
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Стиль символов
        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        // Отрисовка символов
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            const x = i * fontSize;
            const y = drops[i].y;

            // Градиент для символов
            const gradient = ctx.createLinearGradient(x, y, x, y + fontSize * 3);
            gradient.addColorStop(0, '#00ff00');
            gradient.addColorStop(1, '#009900');
            ctx.fillStyle = gradient;

            ctx.fillText(text, x, y);

            // Обновление позиции
            drops[i].y += drops[i].speed;

            // Сброс капли
            if (drops[i].y > canvas.height && Math.random() > 0.975) {
                drops[i].y = -20;
                drops[i].speed = 2 + Math.random() * 5;
            }
        }
    }

    // Запуск анимации
    const interval = setInterval(draw, 50);

    // Респонсив
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
});