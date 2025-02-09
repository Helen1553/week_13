const addComment = () => {
	// Запишем в переменную текущее значение инпута (а для начала найдём все необходимые элементы в html)
	const name = document.getElementById("name-input").value
	const link = document.getElementById("link-input").value;
	const comment = document.getElementById("comment-input").value;


    //Удаляем пробелы в начале и в конце строки имени и сохраненяем результаты в переменную
	const name2 = name.trim();
    //Приводим первую букву имени к верхнему регистру, а остальные буквы — к нижнему
	const name3 = name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase();


	//Создаём массив возможных плохих словечек от пользователя
	const badWords = ['shit', 'viagra', 'damn'];
	// Создаём регулярное выражение для поиска всех плохих слов независимо от их регистра
	const badWordsReplacement = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
	// Заменяем все найденные плохие слова на звёздочки
	const commentReplace = comment.replace(badWordsReplacement, (match) => '*'.repeat(match.length));


    // Создаём новый элемент - <div>, содержащий текст отформатированного имени
	const divChat = document.createElement("div");
	divChat.textContent = name3;
	divChat.classList.add("name");
	chat.appendChild(divChat);

    // Создаём еще один элемент <div>, содержащий аватарку
	const div2Chat = document.createElement("img");
	div2Chat.src = link;
	div2Chat.classList.add("image");
	chat.appendChild(div2Chat);

	// Создаём еще один элемент <div>, содержащий сам комментарий
	const div3Chat = document.createElement("div");
	div3Chat.textContent = commentReplace;
	div3Chat.classList.add("comment");
	chat.appendChild(div3Chat);

	//Код ниже реализует очистку всех полей ввода, чтобы подготовить их для следующего ввода
	document.getElementById("name-input").value = "";
	document.getElementById("link-input").value = "";
	document.getElementById("comment-input").value = "";
}