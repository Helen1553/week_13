document.getElementById('calculator').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthdayInput');
    const errorMessage = document.getElementById('error');
    const result = document.getElementById('result');

    const today = new Date();
    const currentYear = today.getFullYear();
    
    let birthday = new Date(birthdayInput.value);
    
    // Проверяем на ввод даты
    if (!birthdayInput.value) {
        errorMessage.classList.remove('hidden');
        result.textContent = '';
        return;
    } else {
        errorMessage.classList.add('hidden');
    }

    // Устанавливаем текущий год; в случае если дата уже прошла - на следующий год (чтобы не было отрицательных чисел на прошедшую дату)
    if (birthday < today) {
        birthday.setFullYear(currentYear + 1);
    } else {
        birthday.setFullYear(currentYear);
    }

    // Считаем количество дней до дня рождения
    const timeDiff = birthday - today;
    const daysUntilBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Склоненяем слово "день"
    const dayWord = (daysUntilBirthday % 10 === 1 && daysUntilBirthday % 100 !== 11) ? 'день' :
                    (daysUntilBirthday % 10 >= 2 && daysUntilBirthday % 10 <= 4 && (daysUntilBirthday % 100 < 10 || daysUntilBirthday % 100 >= 20)) ? 'дня' :
                    'дней';

    result.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${dayWord}`;
});
