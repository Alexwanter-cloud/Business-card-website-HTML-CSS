document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM полностью загружен'); // Для отладки

    // Получаем элементы
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close-btn');

    // Проверяем, что все элементы найдены
    if (!modal) console.error('Не найдено модальное окно с id="skillModal"');
    if (!modalTitle) console.error('Не найден заголовок с id="modalTitle"');
    if (!modalDescription) console.error('Не найдено описание с id="modalDescription"');
    if (!closeBtn) console.error('Не найдена кнопка закрытия с классом "close-btn"');

    // Добавляем обработчики для всех кнопок навыков
    const skillButtons = document.querySelectorAll('.skill-btn');
    console.log(`Найдено ${skillButtons.length} кнопок навыков`); // Для отладки

    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Нажата кнопка:', this.textContent); // Для отладки

            // Получаем данные из атрибутов
            const title = this.textContent.trim();
            const description = this.getAttribute('data-description');

            console.log('Заголовок:', title); // Для отладки
            console.log('Описание:', description); // Для отладки

            // Проверяем наличие данных
            if (!description) {
                console.error('У кнопки отсутствует атрибут data-description');
                return;
            }

            // Заполняем модальное окно
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Показываем модальное окно
            modal.style.display = 'block';
            console.log('Модальное окно должно быть видно'); // Для отладки
        });
    });
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});