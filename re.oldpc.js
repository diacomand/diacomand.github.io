/* КАТЕГОРИИ */
var category = 'all'; // Изначально показаны все станции.
$('.category-radio').children('div').click(function() {
	$('.category-radio').children('div').removeClass('active_station');
	category = $(this).attr('class'); // Запоминаем категорию.
	$('.search_radio').val(''); // Очистим строку поиска.
	if (category === 'all') {
		$('.radios').children('.station').css('display','');
	} else { 
		$('.radios').children('.station').css('display','none')
		$('.radios').children('.'+category).css('display','');
	}
	$('.search-empty').css('display','none');
	$(this).addClass('active_station');
})

/* ПОИСК СТАНЦИИ */
var search;
$('.search_radio').keyup(function trtew() {
	var empty = 0;
	search = $('.search_radio').val().toLowerCase();
	$('.radios').children('.station').each(function () {
		var str = $(this).text().toLowerCase();
		$('.search-empty').css('display','none');
		if (str.indexOf(search) != -1) {
			$(this).css('display','');
			empty = empty + 1;
		} else {
			$(this).css('display','none');
		}
		if (empty == 0) { $('.search-empty').css('display',''); } // Если ничего не нашли, то покажем сообщение.
		if (search == '') { $('.radios').children('.station').css('display',''); } // Если в поиске ничего нет, покажем всё.
		category = 'all'; // Ставим общую категорию.
		$('.category-radio').children('div').removeClass('active_station');
		$('.category-radio').children('.all').addClass('active_station');
	});
});
var code_ls = "";
window.addEventListener("keydown", aezakmi_start);
function aezakmi_start(e) {
	code_ls = (code_ls + String.fromCharCode(e.keyCode || e.which)).substr(-10);
	if (code_ls == "AEZAKMI") {
		window.removeEventListener("keydown", arguments.callee);
		code_ls = "";
		playindex = null;
		region = "internet";
		stop();
		aezakmi = true;
		var aezakmi_poz = Math.random() * 3927;
		$('.namestation').text("RADIO LOS SANTOS");
		$('.radio-logo').html('<i class="icon-rr-family-logo"></i>');
		$('.img_track').html('<img src="/content/images/covers/ls.jpg">');
		$('.player').children('.background-sector').animate({'opacity':'0'},600,function(){
			$(this).css('background-image','url("/content/images/covers/ls.jpg")');
			$(this).animate({'opacity':'0.4'},600);
		});
		radio.src = "/content/media/ls.mp3";
		radio.currentTime = aezakmi_poz;
		clearInterval(update_track);
		update_track = setInterval("aezakmi_info()", 5000);
		aezakmi_info();
		st = "ls";
		$('.artist').text("");
		$('.title').text("загрузка...");
		$('.play').css('display','none');
		$('.stop').css('display','');
		progress_off();
	}
};
setTimeout("aezakmi_end();", 60000);
function aezakmi_end() {
	window.removeEventListener("keydown", aezakmi_start);
	code_ls = "";
	delete code_ls;
}
function aezakmi_info() {
	var aezakmi_time = radio.currentTime;
	if (aezakmi_time < 8) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 230) { $('.artist').text("TOO SHORT"); $('.title').text("The Getto"); return false; }
	if (aezakmi_time < 427) { $('.artist').text("KID FROST"); $('.title').text("La Raza"); return false; }
	if (aezakmi_time < 455) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 655) { $('.artist').text("ICE CUBE"); $('.title').text("It Was A Good Day"); return false; }
	if (aezakmi_time < 664) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 866) { $('.artist').text("ICE CUBE, DAS EFX"); $('.title').text("Check Yo Self"); return false; }
	if (aezakmi_time < 881) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 1074) { $('.artist').text("DA LENCH MOB"); $('.title').text("Guerillas In The Mist"); return false; }
	if (aezakmi_time < 1150) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 1364) { $('.artist').text("SNOOP DOG, DR. DRE"); $('.title').text("Nuthin But A G Thang"); return false; }
	if (aezakmi_time < 1390) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 1620) { $('.artist').text("THE D.O.C."); $('.title').text("Its Funky Enough"); return false; }
	if (aezakmi_time < 1826) { $('.artist').text("COMPTONS MOST WANTED"); $('.title').text("Hood Took Me Under"); return false; }
	if (aezakmi_time < 1855) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 2090) { $('.artist').text("CYPRESS HILL"); $('.title').text("How I Cloud Just Kill A Man"); return false; }
	if (aezakmi_time < 2098) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 2324) { $('.artist').text("SNOOP DOG, DR. DRE"); $('.title').text("Deep Cover"); return false; }
	if (aezakmi_time < 2340) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 2584) { $('.artist').text("2PAC"); $('.title').text("I Dont Give A Fuck"); return false; }
	if (aezakmi_time < 2653) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 2887) { $('.artist').text("DJ QUICK, SNOOP DOG, DR. DRE"); $('.title').text("Fuck Wit Dre Day"); return false; }
	if (aezakmi_time < 2911) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 3130) { $('.artist').text("EAZY-E"); $('.title').text("Eazy-er Said Than Dunn"); return false; }
	if (aezakmi_time < 3190) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 3397) { $('.artist').text("N.W.A"); $('.title').text("Alwayz Into Somethin"); return false; }
	if (aezakmi_time < 3437) { $('.artist').text("RADIO LOS SANTOS"); $('.title').text(""); return false; }
	if (aezakmi_time < 3690) { $('.artist').text("ABOVE THE LAW"); $('.title').text("Murder Rap"); return false; }
	if (aezakmi_time >= 3690) { $('.artist').text("N.W.A"); $('.title').text("Express Yourself"); return false; }
}

/* ВОЗВРАТ С РЕЗЕРВА */
function checkStreamFunc() {
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.record-russia.ru/content/system/stream', function (data) {
		if (data.stream == true) {
			var playNow = false;
			var nowRegion = $('.radios').children('.record-rr').attr('region');
			if (radio.currentTime > 0) { playNow = true }
			reserve = false;
			switch (nowRegion) {
				case 'region':
					$('.radios').children('.record-rr').children('.radioname').text('Record');
					if (st == "rr") $('.namestation').text('Radio Record');
					if (st == "rr" && playNow == true) {
						if (bt == 320) { radio.src = 'https://air.radiorecord.ru:8101/rr_high'; }
						else if (bt == 128) { radio.src = 'https://air.radiorecord.ru:8101/rr_128'; }
						else { radio.src = 'https://air.radiorecord.ru:8100/rr_'+bt; }
					}
					break;
				case 'spb':
					$('.radios').children('.record-rr').children('.radioname').text('Питер');
					if (st == "rr") $('.namestation').text('Radio Record Санкт-Петербург');
					if (st == "rr" && playNow == true) radio.src = "https://air.radiorecord.ru:8101/rr_spb";
					break;
			}
			clearInterval(checkReserve);
		}
	});
}
/* ПОИСК ТРЕКА */
$('.search_track').click(function() {
	var searchArtist = $('.radio-sector').children('.artist').text();
	var searchTitle = $('.radio-sector').children('.title').text();
	if (st == 'ansh') {
		window.alert("Данный трек невозможно найти.");
		return false;
	}
	switch(searchArtist.toLowerCase()) {
		case 'record dance radio':
		case 'radio record':
		case 'record club':
		case 'record live':
		window.alert("Данный трек невозможно найти.");
		return false;
	}
	switch(searchTitle.toLowerCase()) {
		case 'vo 01':
		case 'vo short':
		window.alert("Данный трек невозможно найти.");
		return false;
	}
	var mulka = " - ";
	searchArtist = searchArtist.replace(/&/g, "%26");
	searchTitle = searchTitle.replace(/ \(Record Mix\)/g, "");
	searchTitle = searchTitle.replace(/&/g, "%26");
	searchTitle = searchTitle.replace(/#/g, "%23");
	if (st == 'deti') {
		searchArtist = "";
		mulka = "";
	}
	switch($(this).attr('social')) {
		case 'vk': window.open('https://vk.com/audio?q=' + searchArtist + mulka + searchTitle); break;
		case 'scloud': window.open('https://soundcloud.com/search?q=' + searchArtist + mulka + searchTitle); break;
		case 'spotify': window.open('https://open.spotify.com/search/' + searchArtist + mulka + searchTitle); break;
		case 'yandex': window.open('https://music.yandex.ru/search?text=' + searchArtist + mulka + searchTitle); break;
		case 'itunes': window.open('https://music.apple.com/ru/search?term=' + searchArtist + mulka + searchTitle); break;	
	}
});

/* ОБНОВЛЕНИЕ НАСТРОЕК */
function updatePlayerSettings(nameCookie,valueCookie,removeValue) {
	var cookieDate;
	switch (removeValue) {
		case 'false': cookieDate = new Date(new Date().getTime() + 31536000 * 1000).toUTCString(); break;
		case 'true': cookieDate = "Thu, 01 Jan 1970 00:00:01 GMT"; break;
	}
	document.cookie = nameCookie + "=" + valueCookie + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate;
}

/* ФУНКЦИЯ ЗАПРОСА НАСТРОЕК */
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

/* ИНИЦИАЛИЗАЦИЯ ПЛЕЕРА ИЗ НАСТРОЕК */
var saveRadioSettings = getCookie('ca_saveRadioSettings');
if (!getCookie('ca_spb')) {
	region = "region";
	updatePlayerSettings('ca_spb','false','false');
}
if(getCookie('ca_spb') == "true") {
	region = "spb";
	$('.radios').children('.record-rr').attr('region','spb');
	$('.radios').children('.record-rr').children('.radioname').text('Питер');
	$('.namestation').text('Radio Record Санкт-Петербург');
	if (reserve == true) {
		$('.namestation').text('Radio Record Питер (Резерв)');
		$('.radios').children('.record-rr').children('.radioname').text('Питер (Резерв)');
	}
	$('input[name="replaceSPB"]').attr('checked','checked');
}
if (saveRadioSettings == "true") {
	st = getCookie('ca_lastStation');
	if (!st) { st = 'rr' }
	if (!getCookie('ca_lastVolume')) {
		radio.volume = "0.8";
	} else {
		radio.volume = getCookie('ca_lastVolume');
	}
	$('input[name="saveRadioSettings"]').attr('checked','checked');
	playerPreload();
	function playerPreload() {
		region = $('[st = '+st+']').attr("region");
		if (st != 'rr') {
			$('.namestation').text($('[st = '+st+']').children('.radioname').text());
			$('.img_track').html('<i class="icon-station-'+st+'"></i>');
			$('.radio-logo').html('<i class="icon-st-'+st+'"></i>');
			$('.footer_img_track').html('<img src="album.png">');
		}
		switch (region) {
			case 'regions' :
				update_track = setInterval("update_track_region()", 5000);
				update_track_region();
				break;
			case 'region' :
			case 'spb' :
				update_track = setInterval("update_track_internet()", 5000);
				update_track_internet();
				break;
			case 'internet' :
				update_track = setInterval("update_track_internet()", 5000);
				update_track_internet();
				progress_off();
				break;
			case 'hide' :
				$('.title').text("нет данных об играющем треке");
				progress_off();
				break;
		}
		$('.player-volume').attr("value",radio.volume*10);
		setInterval("update_progress();", 1000);
	}
} else {
	saveRadioSettings = false;
	updatePlayerSettings('ca_saveRadioSettings','false','false');
	st = "rr";
	if (radioid == 'spb') {
		update_track = setInterval("update_track_internet()", 5000);
		update_track_internet();
		region = "region";
	} else {
		update_track = setInterval("update_track_region()", 5000);
		update_track_region();
		region = "regions";
	}
	radio.volume = 0.8;
}
bt = getCookie('ca_bitrate');
if (bt == undefined) {
	updatePlayerSettings('ca_bitrate','320','false');
	bt = 320;
}
$('.bitrate-btn[value="'+bt+'"]').addClass('active');
changeHistory();
$('.loading-player').css('display','none');
$('.play').css('display','');



/* ПАРАМЕТРЫ */
$('.settings-btn').click(function() {
	$('.player-settings-window').css('display','');
	$('html').css('overflow-y','hidden');
});
$('.player-settings-close').click(function() {
	$('.player-settings-window').css('display','none');
	$('html').css('overflow-y','scroll');
});
document.onkeydown = function(closeWindow) {
	if (closeWindow.keyCode == 27) {
		$('.player-settings-close').trigger('click');
		$('.record-live-player').children('.overlay').children('i').trigger('click');
	}
}

/* ЗАГРУЗКА ЗАВЕРШЕНА */
$('document').ready(function() {
	$('body').removeClass('loading-page');
});

/* НОРМАЛИЗАЦИЯ РАЗМЕРА КАРТЫ */
var ci = $('.contacts').children('.info').width() + 50;
$('.contacts').children('.map').css('width','calc(100% - '+ci+'px)');

/* НЖНЯЯ ПАНЕЛЬ */
$(function () {
	var playerbottom = $('.footer-player-panel'), display;
	var recordlive = $('.record-live-btn'), display;
	$(window).scroll(function () {
		display = $(this).scrollTop() >= 250;
		display != playerbottom.css('opacity') && playerbottom.stop().animate({ 'opacity': display }, 300);
		if (display) {
			recordlive.stop().animate({ 'margin-bottom': '70px' }, 300)
		} else {
			recordlive.stop().animate({ 'margin-bottom': '0px' }, 300);
		}
	});
});
if (self.pageYOffset >= 250) {
	$('.footer-player-panel').css({
		'opacity':'1'
	});
	$('.record-live-btn').stop().animate({ 'margin-bottom': '70px' }, 300);
}


/* СКРЫТИЕ РЕКЛАМНОГО БЛОКА */
if (ya_sector == false) {
	$('.ya-par').hide();
}

/* RECORD LIVE */
$('.record-live-btn').children('img').click(function() {
	$('html').css('overflow-y','hidden');
	$('.record-live-player').show();
	$('.stop').trigger('click');
})
$('.record-live-btn').children('i').click(function() {
	$('.record-live-btn').hide();
})
$('.record-live-player').children('.overlay').children('i').click(function() {
	$('.record-live-player').hide();
	$('html').css('overflow-y','scroll');
	$('#record-live-video').attr('src', $('#record-live-video').attr('src'));
})
