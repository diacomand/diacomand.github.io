// Плеер для полной версии.

var radio = jQuery("#recordplayer").get(0); // Задаём плеер.
var st; // Для потока.
var radioid; // Для проверки региона.
var playindex; // Для проверки играющей станции.
var region; // Для проверки категории.
var btn; // Для сопоставлении станции с кнопкой.
var err = false; // Для включения обработчика ошибок.
var update_track; // Выбор функций обновления.
var bt; // Выбор битрейта.
var reserve = true; // Резерв.
var aezakmi = false;
var lastVolume = 1;

/* ГРОМКОСТЬ */
$(".player-volume").on('input', function() {
	radio.volume = parseFloat(this.value / 10);
	updatePlayerSettings('ca_lastVolume',radio.volume,'false');
	if (radio.volume == 0) {
		$('.fa-volume-up').trigger('click');
	} else {
		$('.fa-volume-mute').css('display','none');
		$('.fa-volume-up').css('display','');
	}
	$('.player-volume').val(radio.volume*10);
});
$('.fa-volume-up').click(function() {
	lastVolume = radio.volume;
	radio.volume = 0;
	$('.fa-volume-up').css('display','none');
	$('.fa-volume-mute').css('display','');
});
$('.fa-volume-mute').click(function() {
	radio.volume = lastVolume;
	$('.fa-volume-mute').css('display','none');
	$('.fa-volume-up').css('display','');
});

/* СТОП */
function stop() {
	radio.pause();
	radio.src = "";
	playindex = null; // Убираем проверку станции.
	$('.play').css('display','');
	$('.stop').css('display','none');
	$('.station').removeClass('active_station');
}

/* СТОП С КНОПКИ */
$('.stop').click(function() { // Если человек тыкнет на "стоп",
	err = false; // то не считаем это за ошибку,
	if (aezakmi == true) {
		radio.pause();
		playindex = null;
		$('.play').css('display','');
		$('.stop').css('display','none');
		return false;
	} else {
		stop(); // остановим проигрываение.
	}
});

/* РЕСТАРТ ПЛЕЕРА */
function playerRestart() {
	stop();
	$('.play').trigger('click');
}

/* СТАРТ СО СПИСКА */
$('.station').click(function() {
	aezakmi = false;
	region = $(this).attr("region"); // Узнаём новую категорию
	st = $(this).attr("st"); // и её код.
	if (playindex == st) { // Если эта станция уже запущена,
		stop(); // то остановим её.
		err = false; // Не считаем за ошибку.
	} else { // Если играет не она,
		if (playindex !== null) { // но что-то другое,
			stop(); // то тоже останавливаем.
			err = false;
		}
		err = true; // Если что-то пойдёт не так, то это явно ошибка.
		$('.artist').text("");
		$('.title').text("загрузка...");
		if (region == 'region' || region == 'regions') {
			$('.img_track').html('<i class="icon-st-rr"></i>');
		} else {
			$('.img_track').html('<i class="icon-station-'+st+'"></i>');
		}
		$('.footer_img_track').html('<img src="/content/images/covers/notrack.png">');
		lastimg = "logo"; // Удаляем информацию для обновления обложки
		clearInterval(update_track); // Убираем обновление трека прошлой станции.
		switch (region) {
			case 'regions':
				if (st == 'rr') $('.namestation').text('Radio Record ' + $(this).children('.radioname').text());
				radio.src = $(this).attr("radiourl");
				update_track = setInterval("update_track_region()", 5000);
				update_track_region();
				break;
			case 'region':
				if (st == 'rr') $('.namestation').text('Radio Record');
				if (bt == 320) { radio.src = 'http://air.radiorecord.ru:805/rr_320'; }
				else if (bt == 128) { radio.src = 'http://air.radiorecord.ru:805/rr_128'; }
				else { radio.src = 'https://air.radiorecord.ru:8100/rr_'+bt; }
				if (reserve == true) {
					if (bt == 320) { radio.src = 'https://catagent.ddns.net:8100/rr320_reserve'; }
					else if (bt == 128) { radio.src = 'https://catagent.ddns.net:8100/rr128_reserve'; }
					else { radio.src = 'https://catagent.ddns.net:8100/rr64_reserve'; }
					$('.namestation').text('Radio Record (Резерв)');
				}
				update_track = setInterval("update_track_internet()", 5000);
				update_track_internet();
				break;
			case 'spb':
				$('.namestation').text('Radio Record Санкт-Петербург');
				radio.src = 'http://air.radiorecord.ru:805/rr_spb';
				if (reserve == true) radio.src = 'https://catagent.ddns.net:8100/rr320_reserve';
				update_track = setInterval("update_track_internet()", 5000);
				update_track_internet();
				break;
			case 'internet':
				if (st == 'sd90') { $('.namestation').text('Супердискотека 90-х'); }
				else { $('.namestation').text($(this).children('.radioname').text()); }
				progress_off();
				//radio.src = 'https://air.radiorecord.ru:805/'+st+'_320';
				radio.src = 'http://air.radiorecord.ru:805/'+st+'_'+bt;
				update_track = setInterval("update_track_internet()", 5000);
				update_track_internet();
				break;
		}
		$('.radio-logo').html('<i class="icon-st-'+st+'"></i>');
		playindex = st; // Запоминаем станцию.
		$('.play').css('display','none');
		$('.stop').css('display','');
		$(this).addClass('active_station');
		if (radioid == 'kaz' && region == 'regions' && st == 'rr') {
			radio.playbackRate = 1.011111;
		} else {
			radio.playbackRate = 1.0;
		}
		radio.play();
		updatePlayerSettings('ca_lastStation',st,'false');
		changeHistory();
	}
});

/* СТАРТ С КНОПКИ */
$('.play').click(function start_btn() {
	$('.play').css('display','none');
	$('.stop').css('display','');
	if (aezakmi == true) {
		radio.play();
		return false;
	}
	btn = '.record-'+st;
	switch (region) {
		case 'region':
			if (bt == 320) { radio.src = 'http://air.radiorecord.ru:805/rr_high'; }
			else if (bt == 128) { radio.src = 'http://air.radiorecord.ru:805/rr_128'; }
			else { radio.src = 'http://air.radiorecord.ru:805/rr_'+bt; }
			if (reserve == true) {
				if (bt == 320) { radio.src = 'https://catagent.ddns.net:8100/rr320_reserve'; }
				else if (bt == 128) { radio.src = 'https://catagent.ddns.net:8100/rr128_reserve'; }
				else { radio.src = 'https://catagent.ddns.net:8100/rr64_reserve'; }
			}
			break;
		case 'spb':
			radio.src = 'http://air.radiorecord.ru:805/rr_spb';
			if (reserve == true) radio.src = 'https://catagent.ddns.net:8100/rr320_reserve';
			break;
		case 'regions':
			radio.src = $(btn).attr("radiourl");
			break;
		case 'internet':
			radio.src = 'http://air.radiorecord.ru:805/'+st+'_'+bt;
			break;
	}
	$('.radios').children('[st = '+st+']').addClass('active_station');
	playindex = st; // Запоминаем станцию.
	if (radioid == 'kaz' && region == 'regions' && st == 'rr') {
		radio.playbackRate = 1.011111;
	} else {
		radio.playbackRate = 1.0;
	}
	err = true; // Если что-то пойдёт не так, то это явно ошибка.
	radio.play();
});

/* ПОДДЕРЖКА МЕДИЙНЫХ КНОПОК */
document.onkeydown = function(m) {
	if (m.keyCode == 178) { // Стоп.
		$('.stop').trigger('click');
	}
	if (m.keyCode == 179) { // Старт / Пауза.
		if (playindex == null) { // Если ничего не играет,
			$('.play').trigger('click'); // запустим последнюю выбранную станцю.
		} else { // Если что-то играет, 
			$('.stop').trigger('click'); // остановим.
		}
	}
}

/* ОБРАБОТКА ОШИБОК */
radio.addEventListener('error', function() { // Если поймаем ошибку,
	if (err == true) { // смотрим, ошибка ли.
		stop(); // останавливаем плеер,
		err = false; // отключаем проверку
		alert('При проигрывании произошла ошибка:\n\nНе удалось подключиться к серверу Рекорда.'); // и говорим.
	}
}, false);
radio.addEventListener('ended', function() { // Если поток закончится,
	if (aezakmi == true) { radio.play(); return false; }
	err = false;
	stop();
	alert('При проигрывании произошла ошибка:\n\nКонец потока.\nВозможно, у вас пропал интернет или Рекорд приостановил трансляцию станции.'); // и говорим об ошибке.
}, false);

/* СМЕНА БИТРЕЙТА */
$('.bitrate-btn').click(function() {
	if (bt == $(this).attr('value')) return false;
	var playNow = false;
	if (radio.currentTime > 0) { playNow = true }
	$('.bitrate-btn').removeClass('active');
	$(this).addClass('active');
	bt = $(this).attr('value');
	updatePlayerSettings('ca_bitrate',bt,'false');
	if (playNow == true) {
		playerRestart();
	}
})

// СОХРАНИТЬ НАСТРОЙКИ
$('input[name="saveRadioSettings"]').change(function() {
	var cookieDate = new Date(new Date().getTime() + 2592000 * 1000);
	if ($(this).prop('checked')) {
		saveRadioSettings = "true";
		updatePlayerSettings('ca_saveRadioSettings','true','false');
		updatePlayerSettings('ca_lastStation',st,'false');
		updatePlayerSettings('ca_lastVolume',radio.volume,'false');
	} else {
		updatePlayerSettings('ca_saveRadioSettings','false','false');
		updatePlayerSettings('ca_lastStation','null','true');
		updatePlayerSettings('ca_lastVolume','null','true');
		saveRadioSettings = "false";
	}
})

// ТОЛЬКО ПИТЕР
$('input[name="replaceSPB"]').change(function() {
	var cookieDate = new Date(new Date().getTime() + 2592000 * 1000);
	if ($(this).prop('checked')) {
		updatePlayerSettings('ca_spb','true','false');
		$('.radios').children('.record-rr').attr('region','spb');
		$('.radios').children('.record-rr').children('.radioname').text('Питер');
		if (st == "rr") {
			if (bt == $(this).attr('value')) return false;
			var playNow = false;
			region = "spb";
			if (radio.currentTime > 0) { playNow = true }
			$('.namestation').text('Radio Record Санкт-Петербург');
			if (playNow == true) {
				playerRestart();
			}
		}
	} else {
		updatePlayerSettings('ca_spb','false','false');
		$('.radios').children('.record-rr').attr('region','region');
		$('.radios').children('.record-rr').children('.radioname').text('Record');
		if (st == "rr") {
			if (bt == $(this).attr('value')) return false;
			var playNow = false;
			region = "region";
			if (radio.currentTime > 0) { playNow = true }
			$('.namestation').text('Radio Record');
			if (playNow == true) {
				playerRestart();
			}
		}
	}
});
