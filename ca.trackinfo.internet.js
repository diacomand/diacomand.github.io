// Информация о треке для интернет-станций в полной версии.

var start; // Время начала трека.
var end; // Время конца трека.
var now; // Промежуток времени.
var viewprog = false; // Разрешение для прогресс-бара.
var lastimg = "";

function update_track_internet() {
	switch (region) {
		case 'region':
		case 'spb':
			spbinfo();
			break;
		case 'internet':
			$.ajaxSetup({cache: false});
			$.getJSON('https://www.radiorecord.ru/xml/'+st+'_online_v8.txt', function (data) {
				$('.radio').children('.artist').text(data.artist);
				$('.radio').children('.title').text(data.title);
				if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
					$('.img_track').html('<i class="icon-station-'+st+'"></i>');
					$('.footer_img_track').html('<img src="album.png">');
					$('.player').children('.background-sector').animate({'opacity':'0'},600,function(){
						$(this).css('background-image','none');
					});
					lastimg = "logo";
				} else {
					if (lastimg != data.image600) {
						$('.img_track').html('<img src="'+data.image600+'">');
						$('.player').children('.background-sector').animate({'opacity':'0'},600,function(){
							$(this).css('background-image','url('+data.image600+')');
							$(this).animate({'opacity':'0.4'},600);
						});
						lastimg = data.image600;
					}
				}
			});
			break;
	}
}
function timeformat(n) {
	n = Number(n);
	var sec = n;
	var s = format(Math.floor(sec % 60));
	var min = sec / 60;
	var mi = format(Math.floor(min % 60)) + ':';
	var hour = min / 60;
	var h ='';
	if (hour > 1) h = format(Math.floor(hour % 24)) + ':';
	return h + mi + s;
}
function format(n) {
	n = Number(n);
	if (n < 10 && n >= 0) n = '0' + n;
	if (n < 0) n = '00';
	return n;
}
setInterval("update_progress();", 1000);
function update_progress() {
	if (viewprog == true) {
		$('.progress-work').css('display','');
		timestamp = Math.round(new Date().getTime() / 1000);
		now_time = timestamp + servuser;
		now = end - start;
		var progress = now_time - start;
		var w = parseInt(100 / now * progress);
		if (w < 100) {
			$('.progress').css('width',w+'%');
		} else { 
			if (100 >= w) { // Если больше или 100,
				$('.progress').css('width','100%'); // то ставим 100.
			}
		}
		if (progress > now) progress = now;
		$('.time-start').text(timeformat(progress));
		$('.time-end').text(timeformat(now));
	}
}
function progress_off() { // Отключение прогресс-бара.
	$('.progress').css('width','0%'); // Обнуляем.
	$('.progress-work').css('display','none');
	viewprog = false; // Отключаем.
	$('.footer-btn').css('border-left','none');
}
function spbinfo() { // Получение информации из Питера.
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/rr_online_v8.txt', function (data) {
		$('.radio').children('.artist').text(data.artist);
		$('.radio').children('.title').text(data.title);
		if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '' || data.artist === 'Record Dance Radio' || data.artist === 'Record Club') {
			$('.img_track').html('<i class="icon-st-rr"></i>');
			$('.footer_img_track').html('<img src="album.png">');
			$('.player').children('.background-sector').animate({'opacity':'0'},600,function(){
				$(this).css('background-image','none');
			});
			lastimg = "logo";
		} else {
			if (lastimg != data.image600) {
				$('.img_track').html('<img src="'+data.image600+'">');
				$('.player').children('.background-sector').animate({'opacity':'0'},600,function(){
					$(this).css('background-image','url('+data.image600+')');
					$(this).animate({'opacity':'0.4'},600);
				});
				lastimg = data.image600;
			}
		}
		if (typeof data.date_start === 'undefined'||
			typeof data.date_start === null ||
			typeof data.date_start === '' ||
			data.artist.toLowerCase() == "record club" ||
			data.artist.toLowerCase() == "record megamix" ||
			data.artist.toLowerCase() == "radio record") {
			progress_off(); // Если время неизвестно.
		} else { // Если известно.
			viewprog = true;
			start = data.date_start;
			end = data.date_end;
			$('.footer-btn').css('border-left','2px solid rgba(255, 102, 0, 0.3)');
			update_progress();
		}
	});
}
