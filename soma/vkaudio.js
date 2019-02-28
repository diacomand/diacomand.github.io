// Поиск трека в ВК.

function vkaudio() { // Если трек найти можно, то
	var a = document.getElementById("artist").innerText; // берём данные из artist,
	var t = document.getElementById("name").innerText; // затем берём данные из title,
	var x = 'https://www.vk.com/audio?q=' + a + ' - ' + t + '&c[section]=audio'; // созаём ссылку по адресу поиска ВК
	lnkvk.href = x; // и вставляем в href кнопки поиска.
}
function hvkaudio() { // Если трек найти можно, то
	var a = document.getElementById("artisth").innerText; // берём данные из artist,
	var t = document.getElementById("nameh").innerText; // затем берём данные из title,
	var x = 'https://www.vk.com/audio?q=' + a + ' - ' + t + '&c[section]=audio'; // созаём ссылку по адресу поиска ВК
	lnkvk.href = x; // и вставляем в href кнопки поиска.
}
