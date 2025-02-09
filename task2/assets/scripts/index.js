const avatars = [
	'../images/img_cat1.jpg',
	'../images/img_cat2.jpg',
	'../images/img_cat3.jpg',
	'../images/img_dog1.jpg',
	'../images/img_dog2.jpg'
];

const addComment = () => {
	// Запишем в переменную текущее значение инпута (а для начала найдём все необходимые элементы в html)
	const name = document.getElementById("name-input").value
	const link = document.getElementById("link-input").value;
	const comment = document.getElementById("comment-input").value;


    //Удаляем пробелы в начале и в конце строки имени и сохраненяем результаты в переменную
	const name2 = name.trim();
    //Приводим первую букву имени к верхнему регистру, а остальные буквы — к нижнему
	const name3 = name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase();

	const showName = document.getElementById("show-name-checkbox").checked;

	// // Заменяет на username, если имя не введено
	// const username = "username";
	// const nameToDisplay = (showName && nameInput) ? nameInput : username;
	
	// Получаем текущую дату и время
	const date = new Date();
	const dateString = date.toLocaleString();


	//Создаём массив возможных плохих словечек от пользователя
	const badWords = ['shit', 'viagra', 'damn'];
	// Создаём регулярное выражение для поиска всех плохих слов независимо от их регистра
	const badWordsReplacement = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
	// Заменяем все найденные плохие слова на звёздочки
	const commentReplace = comment.replace(badWordsReplacement, (match) => '*'.repeat(match.length));


    // Создаём новый элемент - <div>, содержащий текст отформатированного имени
	const userName = document.createElement("div");
	userName.textContent = name3;
	userName.classList.add("name");
	chat.appendChild(userName);

    // Создаём еще один элемент <div>, содержащий аватарку
	const userImage = document.createElement("img");
	userImage.src = link;
	userImage.classList.add("image");
	chat.appendChild(userImage);

	// Создаём еще один элемент <div>, содержащий сам комментарий
	const userComment = document.createElement("div");
	userComment.textContent = commentReplace;
	userComment.classList.add("comment");
	chat.appendChild(userComment);


	userComment.innerHTML = 
    `<div>
        <img src="${avatar}" alt="Аватар" style="width: 50px; height: 50px;">
        <strong>${nameToDisplay}</strong> 
        <span style="font-size: small;">(${dateString})</span>
    </div>
    <div>${comment}</div>
	`;

chat.appendChild(userComment);

	//Код ниже реализует очистку всех полей ввода, чтобы подготовить их для следующего ввода
	document.getElementById("name-input").value = "";
	document.getElementById("link-input").value = "";
	document.getElementById("comment-input").value = "";
}