

const addComment = () => {
	// Запишем в переменную текущее значение инпута (а для начала найдём все необходимые элементы в html)
	const name = document.getElementById("name-input").value
	const link = document.getElementById("link-input").value;
	const comment = document.getElementById("comment-input").value;

    //Удаляем пробелы в начале и в конце строки имени и сохраненяем результаты в переменную
	const trimmedName = name.trim();
    //Приводим первую букву имени к верхнему регистру, а остальные буквы — к нижнему
	const finalName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();

	const showName = document.getElementById("show-name-checkbox").checked;
	
	// Получаем текущую дату и время
	const date = new Date();
	const dateString = date.toLocaleString();


	//Создаём массив возможных плохих словечек от пользователя
	const badWords = ['shit', 'viagra', 'damn'];
	// Создаём регулярное выражение для поиска всех плохих слов независимо от их регистра
	const badWordsReplacement = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
	// Заменяем все найденные плохие слова на звёздочки
	const commentReplace = comment.replace(badWordsReplacement, (match) => '*'.repeat(match.length));

	// Создаем условие: при введенном имени пользователем - оно будет высвечиваться на экране; если же имя не ыбло введено - имя пользователя будет отражаться как 'username'
	// const yes = document.getElementById('yes');
	// const no = document.getElementById('no');
	if (name) {
		// Создаём новый элемент - <div>, содержащий текст отформатированного имени
		const userName = document.createElement("div");
		userName.textContent = finalName;
		userName.classList.add("name");
		chat.appendChild(userName);
	} else {
		const userName = document.createElement("div");
		userName.textContent = 'username';
		chat.appendChild(userName);
	}

	// Создаём еще один элемент <div>, содержащий строку с датой и временем комментария
	const data = new Date();
	const finalData = data.toLocaleString();
	
	const dataElement = document.createElement('div');
	dataElement.textContent = finalData;
	dataElement.classList.add('data');
	chat.appendChild(dataElement);

	if (link){
		// Создаём еще один элемент <div>, содержащий аватарку
		const userImage = document.createElement("img");
		userImage.src = link;
		userImage.classList.add("image");
		chat.appendChild(userImage);
	} else {
		const avatars = [
			'../images/img_cat1.jpg',
			'../images/img_cat2.jpg',
			'../images/img_cat3.jpg',
			'../images/img_dog1.jpg',
			'../images/img_dog2.jpg'
		];
		const userImage = document.createElement("img");
		userImage.src = avatars;
		userImage.classList.add("image");
		chat.appendChild(userImage);
	}

	// Создаём еще один элемент <div>, содержащий сам комментарий
	const userComment = document.createElement("div");
	userComment.textContent = commentReplace;
	userComment.classList.add("comment");
	chat.appendChild(userComment);

	//Код ниже реализует очистку всех полей ввода, чтобы подготовить их для следующего ввода
	document.getElementById("name-input").value = "";
	document.getElementById("link-input").value = "";
	document.getElementById("comment-input").value = "";
}