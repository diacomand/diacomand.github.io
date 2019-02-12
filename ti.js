// Плеер для мобильной версии.

var radio = jQuery("#player").get(0); // Задаём плеер.
var radioname; // Для проверки играющей станции.
var region; // Для получения информации о регионе.
var st; // Для проверки кода станции.
var radiourl; // Для получения ссылки на поток.
var bt = 320; // Битрейт по умолчанию.
var err = false; // Для проверки ошибок.
var errnot = false; // Для вывода уведомления об ошибке.
var btn = 'rr'; // Старт по кнопке - по умолчанию Рекорд.
var show = false; // Для проверки состояния меню.

/* БИТРЕЙТ */
$('.bt-128').click(function() { // Если чел выберет 128 kbit/s,
	$('.bt-320').removeClass('active_element'); // то убираем заливку на 320,
	$(this).addClass('active_element'); // ставим заливку на 128,
	bt = 128; // и задаём новый битрейт.
});
$('.bt-320').click(function() { // Если чел выберет 320 kbit/s,
	$('.bt-128').removeClass('active_element'); // то убираем заливку на 128,
	$(this).addClass('active_element'); // ставим заливку на 128,
	bt = 320; // и задаём новый битрейт.
});


/* СТОП ПЛЕЕРА */
function stop() {
	radio.pause(); // Приостанавливаем воспроизведение и
	radio.src = ""; // убираем источник. Плеер не знает откуда ему грузить и останавливается.
	$('.station').removeClass('active_element'); // Убираем заливку у станции
	$('.stpbtn').css('display','none'); // и кнопку остановки,
	radioname = null; // Забываем станцию.
	$('.btn-play').css('display',''); // Показываем кнопку старта.
}

/* СТАРТ ПЛЕЕРА */
$('.station').click(function() { // Если пользователь нажмёт на станцию,
	region = $(this).attr("region"); // то получим её регион
	st = $(this).attr("st"); // и её код.
	btn = st; // Говорим кнопке код станции.
	if (radioname == st) { // Если эта станция уже играет,
		stop(); // то остановим её.
		err = false; // Не считаем ошибкой.
		errnot = false;
	} else { // Если играет не она,
		if (radioname !== null) { // но играет что-то другое
			stop(); // то делаем остановку.
			err = false; // Не считаем ошибкой.
			errnot = false;
		}
		if (region == 'region' || region == 'regions') { // Если радио региональное,
			radio.src = $(this).attr("radiourl"); // получаем ссылку и вставляем в плеер.
			viewprog = true; // Разрешим прогресс-бар.
		}
		if (region == 'internet') { // Если это интернет-радио,
			radio.src = 'http://air2.radiorecord.ru:805/'+st+'_'+bt; // то делаем ссылку на поток 128.
			progress_off(); // Отключим прогресс-бар.
		}
		$(this).addClass('active_element'); // Заливаем фон станции,
		$('.stpbtn').css('display',''); // показываем кнопку остановки,
		radioname = st; // запоминаем эту станцию.
		if (radioid == 'kazan' && region == 'regions') { // Если это Рекорд Казань,
			radio.playbackRate = 1.0999999; // то увеличиваем скорость проигрывания,
		} else { // если нет,
			radio.playbackRate = 1.0; // то ставим стандартную.
		}
		err = true; // Включаем проверку ошибок.
		errnot = true;
		radio.play(); // Запускаем её.
		// Перенесём инфу в большое окно.
		$('.radioname-big').text($(this).children('.radioinfo').children('.name').text()); // Перенесём имя станции,
		$('#player-info').removeClass(); // уберём все классы,
		$('#cover').removeClass();
		$('#player-info').addClass($(this).attr('st')); // добавим класс станции,
		$('#cover').addClass($(this).attr('st'));
		$('.btn-play').css('display','none'); // уберём кнопку запуска.
	}
});

/* СТАРТ ПО КНОПКЕ */
$('.btn-play').click(function() {
	$('[st = '+btn+']').trigger('click'); // Запускаем станцию из списка.
});

/* СТОП ПО КНОПКЕ */
$('.stpbtn').click(function() { // Если будет нажата кнопка остановки,
	stop(); // то остановим воспроизведение,
	err = false; // не будем считать это ошибкой
	errnot = false; // и не кажем о ней.
});

/* МЕНЮ */
$('.show-menu').click(function() { // Ловим тык по кнопке.
	if (show == false) { // Если меню закрыто.
		$('.menu').css('display',''); // Показываем меню,
		$('body').css('overflow','hidden'); // отключаем прокрутку.
		show = true;
	} else { // Если меню открыто.
		$('.menu').css('display','none');
		$('body').css('overflow','');
		show = false;
	}
})

/* РЕЖИМ ОДНОГО РАДИО */
region = $('[st = rr]').attr('region'); // Запоминаем тип станции.
$('.one-radio').click(function() { // Переключение режима.
	if (region == 'internet' || region == 'region') { // Обновляем информацию о треке.
		update_track_internet();
	} else {
		update_track_region();
	}
	$('.stations').css('display','none'); // Убираем список станций.
	$('.player-big').css('display',''); // Показываем окно станции.
	$(this).css('display','none'); // Уберём пункт в меню.
	$('.list-radio').css('display',''); // Покажем другой режим.
	$('.show-menu').trigger('click'); // Закроем меню.
})
$('.list-radio').click(function() { // Уход на список.
	$('.stations').css('display','');
	$('.player-big').css('display','none');
	$(this).css('display','none');
	window.location='#'+btn; // Покажем эту же станцию в списке.
	$('.one-radio').css('display','');
	$('.show-menu').trigger('click');
});

/* СМЕНА РЕГИОНА */
$('.region').click(function() { // Если чел захочет сменить регион,
	$('.menu').css('display','none');
	show = false;
	$('.region-win').css('display',''); // то покажем ему окно со списком регионов
	$('body').css('overflow','hidden'); // и уберём прокрутку.
});
$('.region-close').click(function() { // Если же чел передумал,
	$('.region-win').css('display','none'); // то уберём список регионов
	$('body').css('overflow',''); // и вернём прокрутку.
});

/* ОТПРАВКА СООБЩЕНИЯ */
$('.message').click(function() { // Если чел захочет отправить сообщение,
	$('.menu').css('display','none'); // уберём меню,
	show = false;
	$('.message-window').css('display',''); // покажем форму.
});
$('.message-close').click(function() { // Если он передумал
	$('.message-window').css('display','none'); // уберём форму.
});

/* ОБРАБОТКА ОШИБОК */
radio.addEventListener('error', function() { // Если поймаем ошибку,
	if (err == true) { // смотрим, ошибка ли,
		stop(); // если да - останавливаем плеер.
		if (errnot == true) { // Если надо сказать об ошибке,
			errnot = false; // то блочим уведомление
			alert('При проигрывании произошла ошибка:\r\nНе удалось подключиться к серверу Рекорда.'); // и говорим.
		}
	}
}, false);
