// Информация о треке для интернет-станций в мобильной версии.

var start; // Время начала трека.
var end; // Время конца трека.
var now; // Промежуток времени.
var viewprog = true; // Разрешение для прогресс-бара.
var trackinfo; // Для подмены обложки, во время рекламы.
setInterval("update_track_internet();", 10000); // Скрипт должен циклично выполняться через 10 секунд.
function update_track_internet() {
	/* RADIO RECORD */
	if (radioid == 'spb') {
		$.ajaxSetup({cache: false});
		$.getJSON('https://www.radiorecord.ru/xml/rr_online_v8.txt', function (data) {
			var items = [];
			$.each(data, function (key, val) {
				if (key == 'artist') { $('.rr').children('.artist').html(val); trackinfo = val; }
				if (key == 'title') { $('.rr').children('.title').html(val); }
				if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '' || trackinfo === 'Record Dance Radio') {
					$('.rr').children('.cover-stab').html('<i class="icon-st-rr"></i>');
				} else {
					if (key == 'image600') { $('.rr').children('.cover-stab').html('<img src="'+val+'">'); }
				}
				if (typeof data.date_start === 'undefined' || typeof data.date_start === null || typeof data.date_start === '') {
					progress_off();
				} else {
					if (btn == 'rr') { viewprog = true; }
					if (key == 'date_start') { start = val; }
					if (key == 'date_end') { end = val; }
				}
			});
		});
	}
	
	
	/* RECORD discofunk */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/discofunk_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.discofunk').children('.artist').html(val); }
			if (key == 'title') { $('.discofunk').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.discofunk').children('.cover-stab').html('<i class="icon-station-discofunk"></i>');
			} else {
				if (key == 'image600') { $('.discofunk').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	}); 
	/* RECORD technopop */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/technopop_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.technopop').children('.artist').html(val); }
			if (key == 'title') { $('.technopop').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.technopop').children('.cover-stab').html('<i class="icon-station-technopop"></i>');
			} else {
				if (key == 'image600') { $('.technopop').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});  
	/* RECORD eurodance */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/eurodance_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.eurodance').children('.artist').html(val); }
			if (key == 'title') { $('.eurodance').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.eurodance').children('.cover-stab').html('<i class="icon-station-eurodance"></i>');
			} else {
				if (key == 'image600') { $('.eurodance').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});  
	/* RECORD russiangold */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/russiangold_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.russiangold').children('.artist').html(val); }
			if (key == 'title') { $('.russiangold').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.russiangold').children('.cover-stab').html('<i class="icon-station-russiangold"></i>');
			} else {
				if (key == 'image600') { $('.russiangold').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});  
	/* RECORD drumhits */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/drumhits_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.drumhits').children('.artist').html(val); }
			if (key == 'title') { $('.drumhits').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.drumhits').children('.cover-stab').html('<i class="icon-station-drumhits"></i>');
			} else {
				if (key == 'image600') { $('.drumhits').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});  
	/* RECORD FUTURE HOUSE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/fut_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.fut').children('.artist').html(val); }
			if (key == 'title') { $('.fut').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.fut').children('.cover-stab').html('<i class="icon-station-fut"></i>');
			} else {
				if (key == 'image600') { $('.fut').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});  
	/* RECORD liquidfunk */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/liquidfunk_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.liquidfunk').children('.artist').html(val); }
			if (key == 'title') { $('.liquidfunk').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.liquidfunk').children('.cover-stab').html('<i class="icon-station-liquidfunk"></i>');
			} else {
				if (key == 'image600') { $('.liquidfunk').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
		/* RECORD jungle */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/jungle_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.jungle').children('.artist').html(val); }
			if (key == 'title') { $('.jungle').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.jungle').children('.cover-stab').html('<i class="icon-station-jungle"></i>');
			} else {
				if (key == 'image600') { $('.jungle').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD 2step */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/2step_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.2step').children('.artist').html(val); }
			if (key == 'title') { $('.2step').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.2step').children('.cover-stab').html('<i class="icon-station-2step"></i>');
			} else {
				if (key == 'image600') { $('.fut').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD trancehits */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/trancehits_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.trancehits').children('.artist').html(val); }
			if (key == 'title') { $('.trancehits').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.trancehits').children('.cover-stab').html('<i class="icon-station-trancehits"></i>');
			} else {
				if (key == 'image600') { $('.trancehits').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	
	/* RECORD Tecktonik */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/tecktonik_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.tecktonik').children('.artist').html(val); }
			if (key == 'title') { $('.tecktonik').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.tecktonik').children('.cover-stab').html('<i class="icon-station-tecktonik"></i>');
			} else {
				if (key == 'image600') { $('.tecktonik').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD neurofunk */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/neurofunk_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.neurofunk').children('.artist').html(val); }
			if (key == 'title') { $('.neurofunk').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.neurofunk').children('.cover-stab').html('<i class="icon-station-neurofunk"></i>');
			} else {
				if (key == 'image600') { $('.neurofunk').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD hypno */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/hypno_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.hypno').children('.artist').html(val); }
			if (key == 'title') { $('.hypno').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.hypno').children('.cover-stab').html('<i class="icon-station-hypno"></i>');
			} else {
				if (key == 'image600') { $('.hypno').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	
	
	
	
	
	/* RECORD houseclss */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/houseclss_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.houseclss').children('.artist').html(val); }
			if (key == 'title') { $('.houseclss').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.houseclss').children('.cover-stab').html('<i class="icon-station-houseclss"></i>');
			} else {
				if (key == 'image600') { $('.houseclss').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD Trancehouse */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/trancehouse_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.trancehouse').children('.artist').html(val); }
			if (key == 'title') { $('.trancehouse').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.trancehouse').children('.cover-stab').html('<i class="icon-station-trancehouse"></i>');
			} else {
				if (key == 'image600') { $('.trancehouse').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD darkside */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/darkside_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.darkside').children('.artist').html(val); }
			if (key == 'title') { $('.darkside').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.darkside').children('.cover-stab').html('<i class="icon-station-darkside"></i>');
			} else {
				if (key == 'image600') { $('.darkside').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD uplift */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/uplift_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.uplift').children('.artist').html(val); }
			if (key == 'title') { $('.uplift').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.uplift').children('.cover-stab').html('<i class="icon-station-uplift"></i>');
			} else {
				if (key == 'image600') { $('.uplift').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	

	
	/* RECORD edmhits */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/edmhits_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.edmhits').children('.artist').html(val); }
			if (key == 'title') { $('.edmhits').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.edmhits').children('.cover-stab').html('<i class="icon-station-edmhits"></i>');
			} else {
				if (key == 'image600') { $('.edmhits').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	
	/* RECORD EDM */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/club_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.club').children('.artist').html(val); }
			if (key == 'title') { $('.club').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.club').children('.cover-stab').html('<i class="icon-station-club"></i>');
			} else {
				if (key == 'image600') { $('.club').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD MEGAMIX */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mix_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mix').children('.artist').html(val); }
			if (key == 'title') { $('.mix').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mix').children('.cover-stab').html('<i class="icon-station-mix"></i>');
			} else {
				if (key == 'image600') { $('.mix').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD GOLD */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/gold_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.gold').children('.artist').html(val); }
			if (key == 'title') { $('.gold').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.gold').children('.cover-stab').html('<i class="icon-station-gold"></i>');
			} else {
				if (key == 'image600') { $('.gold').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* TRANCEMISSION RADIO*/
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/tm_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.tm').children('.artist').html(val); }
			if (key == 'title') { $('.tm').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.tm').children('.cover-stab').html('<i class="icon-station-tm"></i>');
			} else {
				if (key == 'image600') { $('.tm').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* PIRATE STATION RADIO */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/ps_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.ps').children('.artist').html(val); }
			if (key == 'title') { $('.ps').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.ps').children('.cover-stab').html('<i class="icon-station-ps"></i>');
			} else {
				if (key == 'image600') { $('.ps').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD HOUSE HITS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/househits_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.househits').children('.artist').html(val); }
			if (key == 'title') { $('.househits').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.househits').children('.cover-stab').html('<i class="icon-station-househits"></i>');
			} else {
				if (key == 'image600') { $('.househits').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* СИМФОНИЯ FM */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/symph_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.symph').children('.artist').html(val); }
			if (key == 'title') { $('.symph').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.symph').children('.cover-stab').html('<i class="icon-station-symph"></i>');
			} else {
				if (key == 'image600') { $('.symph').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD ELECTRO */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/elect_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.elect').children('.artist').html(val); }
			if (key == 'title') { $('.elect').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.elect').children('.cover-stab').html('<i class="icon-station-elect"></i>');
			} else {
				if (key == 'image600') { $('.elect').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD MIDTEMPO */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mt_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mt').children('.artist').html(val); }
			if (key == 'title') { $('.mt').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mt').children('.cover-stab').html('<i class="icon-station-mt"></i>');
			} else {
				if (key == 'image600') { $('.mt').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD MOOMBAHTON */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mmbt_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mmbt').children('.artist').html(val); }
			if (key == 'title') { $('.mmbt').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mmbt').children('.cover-stab').html('<i class="icon-station-mmbt"></i>');
			} else {
				if (key == 'image600') { $('.mmbt').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* JACKIN/GARAGE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/jackin_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.jackin').children('.artist').html(val); }
			if (key == 'title') { $('.jackin').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.jackin').children('.cover-stab').html('<i class="icon-station-jackin"></i>');
			} else {
				if (key == 'image600') { $('.jackin').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD PROGRESSIVE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/progr_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.progr').children('.artist').html(val); }
			if (key == 'title') { $('.progr').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.progr').children('.cover-stab').html('<i class="icon-station-progr"></i>');
			} else {
				if (key == 'image600') { $('.progr').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD SYNTHWAVE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/synth_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.synth').children('.artist').html(val); }
			if (key == 'title') { $('.synth').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.synth').children('.cover-stab').html('<i class="icon-station-synth"></i>');
			} else {
				if (key == 'image600') { $('.synth').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD BIG HITS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/bighits_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.bighits').children('.artist').html(val); }
			if (key == 'title') { $('.bighits').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.bighits').children('.cover-stab').html('<i class="icon-station-bighits"></i>');
			} else {
				if (key == 'image600') { $('.bighits').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD BIG HITS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/dream_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.dream').children('.artist').html(val); }
			if (key == 'title') { $('.dream').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.dream').children('.cover-stab').html('<i class="icon-station-dream"></i>');
			} else {
				if (key == 'image600') { $('.dream').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* МАЯТНИК ФУКО */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mf_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mf').children('.artist').html(val); }
			if (key == 'title') { $('.mf').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mf').children('.cover-stab').html('<i class="icon-station-mf"></i>');
			} else {
				if (key == 'image600') { $('.mf').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD HARD BASS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/hbass_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.hbass').children('.artist').html(val); }
			if (key == 'title') { $('.hbass').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.hbass').children('.cover-stab').html('<i class="icon-station-hbass"></i>');
			} else {
				if (key == 'image600') { $('.hbass').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* INNOCENCE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/ibiza_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.ibiza').children('.artist').html(val); }
			if (key == 'title') { $('.ibiza').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.ibiza').children('.cover-stab').html('<i class="icon-station-ibiza"></i>');
			} else {
				if (key == 'image600') { $('.ibiza').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* GOA/PSY */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/goa_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.goa').children('.artist').html(val); }
			if (key == 'title') { $('.goa').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.goa').children('.cover-stab').html('<i class="icon-station-goa"></i>');
			} else {
				if (key == 'image600') { $('.goa').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD BLACK */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/yo_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.yo').children('.artist').html(val); }
			if (key == 'title') { $('.yo').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.yo').children('.cover-stab').html('<i class="icon-station-yo"></i>');
			} else {
				if (key == 'image600') { $('.yo').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD BREAKS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/brks_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.brks').children('.artist').html(val); }
			if (key == 'title') { $('.brks').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.brks').children('.cover-stab').html('<i class="icon-station-brks"></i>');
			} else {
				if (key == 'image600') { $('.brks').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD OLD SCHOOL */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/pump_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.pump').children('.artist').html(val); }
			if (key == 'title') { $('.pump').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.pump').children('.cover-stab').html('<i class="icon-station-pump"></i>');
			} else {
				if (key == 'image600') { $('.pump').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD TECHNO */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/techno_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.techno').children('.artist').html(val); }
			if (key == 'title') { $('.techno').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.techno').children('.cover-stab').html('<i class="icon-station-techno"></i>');
			} else {
				if (key == 'image600') { $('.techno').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD TRAP */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/trap_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.trap').children('.artist').html(val); }
			if (key == 'title') { $('.trap').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.trap').children('.cover-stab').html('<i class="icon-station-trap"></i>');
			} else {
				if (key == 'image600') { $('.trap').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD DUBSTEP */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/dub_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.dub').children('.artist').html(val); }
			if (key == 'title') { $('.dub').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.dub').children('.cover-stab').html('<i class="icon-station-dub"></i>');
			} else {
				if (key == 'image600') { $('.dub').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RAVE FM */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/rave_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.rave').children('.artist').html(val); }
			if (key == 'title') { $('.rave').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.rave').children('.cover-stab').html('<i class="icon-station-rave"></i>');
			} else {
				if (key == 'image600') { $('.rave').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD DANCECORE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/dc_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.dc').children('.artist').html(val); }
			if (key == 'title') { $('.dc').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.dc').children('.cover-stab').html('<i class="icon-station-dc"></i>');
			} else {
				if (key == 'image600') { $('.dc').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* НАФТАЛИН ФМ */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/naft_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.naft').children('.artist').html(val); }
			if (key == 'title') { $('.naft').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.naft').children('.cover-stab').html('<i class="icon-station-naft"></i>');
			} else {
				if (key == 'image600') { $('.naft').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD ROCK */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/rock_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.rock').children('.artist').html(val); }
			if (key == 'title') { $('.rock').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.rock').children('.cover-stab').html('<i class="icon-station-rock"></i>');
			} else {
				if (key == 'image600') { $('.rock').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* МЕДЛЯК FM */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mdl_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mdl').children('.artist').html(val); }
			if (key == 'title') { $('.mdl').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mdl').children('.cover-stab').html('<i class="icon-station-mdl"></i>');
			} else {
				if (key == 'image600') { $('.mdl').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* ГОП ФМ */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/gop_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.gop').children('.artist').html(val); }
			if (key == 'title') { $('.gop').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.gop').children('.cover-stab').html('<i class="icon-station-gop"></i>');
			} else {
				if (key == 'image600') { $('.gop').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD HARDSTYLE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/teo_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.teo').children('.artist').html(val); }
			if (key == 'title') { $('.teo').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.teo').children('.cover-stab').html('<i class="icon-station-teo"></i>');
			} else {
				if (key == 'image600') { $('.teo').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* АНШЛАГ FM */
	$('.ansh').children('.artist').text('');
	$('.ansh').children('.title').text('');
	$('.ansh').children('.cover-stab').html('<i class="icon-station-ansh"></i>');
	/* VIP HOUSE */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/vip_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.vip').children('.artist').html(val); }
			if (key == 'title') { $('.vip').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.vip').children('.cover-stab').html('<i class="icon-station-vip"></i>');
			} else {
				if (key == 'image600') { $('.vip').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD MINIMAL/TECH */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/mini_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.mini').children('.artist').html(val); }
			if (key == 'title') { $('.mini').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.mini').children('.cover-stab').html('<i class="icon-station-mini"></i>');
			} else {
				if (key == 'image600') { $('.mini').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD TROPICAL */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/trop_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.trop').children('.artist').html(val); }
			if (key == 'title') { $('.trop').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.trop').children('.cover-stab').html('<i class="icon-station-trop"></i>');
			} else {
				if (key == 'image600') { $('.trop').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD CHIL-OUT */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/chil_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.chil').children('.artist').html(val); }
			if (key == 'title') { $('.chil').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.chil').children('.cover-stab').html('<i class="icon-station-chill"></i>');
			} else {
				if (key == 'image600') { $('.chil').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RUSSIAN MIX */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/rus_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.rus').children('.artist').html(val); }
			if (key == 'title') { $('.rus').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.rus').children('.cover-stab').html('<i class="icon-station-rus"></i>');
			} else {
				if (key == 'image600') { $('.rus').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* СУПЕРДИСКОТЕКА 90-х */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/sd90_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.sd90').children('.artist').html(val); }
			if (key == 'title') { $('.sd90').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.sd90').children('.cover-stab').html('<i class="icon-station-sd90"></i>');
			} else {
				if (key == 'image600') { $('.sd90').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD FUTURE BASS */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/fbass_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.fbass').children('.artist').html(val); }
			if (key == 'title') { $('.fbass').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.fbass').children('.cover-stab').html('<i class="icon-station-fbass"></i>');
			} else {
				if (key == 'image600') { $('.fbass').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD DEEP */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/deep_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.deep').children('.artist').html(val); }
			if (key == 'title') { $('.deep').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.deep').children('.cover-stab').html('<i class="icon-station-deep"></i>');
			} else {
				if (key == 'image600') { $('.deep').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* RECORD REMIX */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/rmx_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.rmx').children('.artist').html(val); }
			if (key == 'title') { $('.rmx').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.rmx').children('.cover-stab').html('<i class="icon-station-rmx"></i>');
			} else {
				if (key == 'image600') { $('.rmx').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
	/* ГАСТАРБАЙТЕР FM */
	$.ajaxSetup({cache: false});
	$.getJSON('https://www.radiorecord.ru/xml/gast_online_v8.txt', function (data) {
		var items = [];
		$.each(data, function (key, val) {
			if (key == 'artist') { $('.gast').children('.artist').html(val); }
			if (key == 'title') { $('.gast').children('.title').html(val); }
			if (typeof data.image600 === 'undefined' || typeof data.image600 === null || typeof data.image600 === '') {
				$('.gast').children('.cover-stab').html('<i class="icon-station-gast"></i>');
			} else {
				if (key == 'image600') { $('.gast').children('.cover-stab').html('<img src="'+val+'">'); }
			}
		});
	});
}

setInterval("update_progress();", 1000); // Обновление текущего момента времени трека каждую секунду.
function update_progress() {
	if (viewprog == true) { // Проверка разрешения на работу.
		timestamp = Math.round(new Date().getTime() / 1000); // Берём текущее время,
		now_time = timestamp + servuser; // находим серверное время по "разнице".
		$('.progress-bar').css('display','');
		now = end - start; // находим длину трека,
		var progress = now_time - start; // находим текущее время в длине трека.
		var w = parseInt(100 / now * progress); // Расчитываем процент прохождения трека.
		if (w < 100) { // Если процент меньше 100,
			$('.progress').css('width',w+'%'); // то заливам на этот процент.
		} else { 
			if (100 >= w) { // Если больше или 100,
				$('.progress').css('width','100%'); // то ставим 100.
			}
		}
	}
}
function progress_off() { // Отключение прогресс-бара.
	$('.progress').css('width','0%'); // Обнуляем.
	viewprog = false; // Отключаем.
	$('.progress-bar').css('display','none');
}
