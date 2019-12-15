// Переключение истории станции.

$('.historylist').children('div').click(function() {
	var st = $(this).attr("st");
	if (st == 'rr') { st = "record" }
	if (st == 'chil') { st = "chillout" }
	if (st == 'mini') { st = "minitechno" }
	if (st == 'ps') { st = "pirate" }
	if (st == 'rus') { st = "russianmix" }
	if (st == 'vip') { st = "vipmix" }
	if (st == 'sd90') { st = "super90" }
	if (st == 'brks') { st = "breaks" }
	if (st == 'dc') { st = "dancecore" }
	if (st == 'dub') { st = "dubstep" }
	if (st == 'teo') { st = "theodor" }
	if (st == 'mdl') { st = "medlyakfm" }
	if (st == 'gop') { st = "gopfm" }
	if (st == 'yo') { st = "yofm" }
	if (st == 'gast') { st = "gastr" }
	if (st == 'mix') { st = "megamix" }
	if (st == 'club') { st = "recordclub" }
	if (st == 'fut') { st = "future" }
	if (st == 'tm') { st = "trancemission" }
	if (st == 'ibiza') { st = "innocence" }
	if (st == 'elect') { st = "elec" }
	$("#hisframe").attr("src","https://www.radiorecord.fm/recordhistory.php?chan="+st);
	$('.historylist').children('div').removeClass('active_station');
	$(this).addClass('active_station');
});

function changeHistory() {
	$('.historylist').children('div').removeClass('now_station');
	$('.historylist').children('div[st="'+st+'"]').addClass('now_station');
};

function historyRename(st) {
	if (st == 'rr') { chan = "record" }
	if (st == 'chil') { chan = "chillout" }
	if (st == 'mini') { chan = "minitechno" }
	if (st == 'ps') { chan = "pirate" }
	if (st == 'rus') { chan = "russianmix" }
	if (st == 'vip') { chan = "vipmix" }
	if (st == 'sd90') { chan = "super90" }
	if (st == 'brks') { chan = "breaks" }
	if (st == 'dc') { chan = "dancecore" }
	if (st == 'dub') { chan = "dubstep" }
	if (st == 'teo') { chan = "theodor" }
	if (st == 'mdl') { chan = "medlyakfm" }
	if (st == 'gop') { chan = "gopfm" }
	if (st == 'yo') { chan = "yofm" }
	if (st == 'gast') { chan = "gastr" }
	if (st == 'mix') { chan = "megamix" }
	if (st == 'club') { chan = "recordclub" }
	if (st == 'fut') { chan = "future" }
	if (st == 'tm') { chan = "trancemission" }
	if (st == 'ibiza') { chan = "innocence" }
	if (st == 'elect') { chan = "elec" }
}