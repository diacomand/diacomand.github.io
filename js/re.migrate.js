function getCookie_Migrate(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
var ca_bitrate_Migrate = getCookie_Migrate('srm_bitrate');
if (ca_bitrate_Migrate != undefined) {
	window.stop();
	$('body').empty();
	$('body').append('<div style="color: white; margin-top: 100px; text-align: center;">Перенос параметров. Подождите...</div>');
	cookieDate_Migrate = new Date(new Date().getTime() + 31536000 * 1000).toUTCString();
	var ca_saveRadioSettings_Migrate = getCookie_Migrate('srm_saveRadioSettings');
	var ca_spb_Migrate = getCookie_Migrate('srm_SPB');
	var ca_lastStation_Migrate = getCookie_Migrate('srm_lastStation');
	var ca_lastVolume_Migrate = getCookie_Migrate('srm_lastVolume');
	if (ca_bitrate_Migrate != undefined) {
		document.cookie = "ca_bitrate=" + ca_bitrate_Migrate + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate_Migrate;
	}
	if (ca_saveRadioSettings_Migrate != undefined) {
		document.cookie = "ca_saveRadioSettings=" + ca_saveRadioSettings_Migrate + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate_Migrate;
	}
	if (ca_spb_Migrate != undefined) {
		document.cookie = "ca_spb=" + ca_spb_Migrate + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate_Migrate;
	}
	if (ca_lastStation_Migrate != undefined) {
		document.cookie = "ca_lastStation=" + ca_lastStation_Migrate + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate_Migrate;
	}
	if (ca_lastVolume_Migrate !== undefined) {
		document.cookie = "ca_lastVolume=" + ca_lastVolume_Migrate + ";path=/;domain=record-russia.ru; secure; expires=" + cookieDate_Migrate;
	}
	document.cookie = "srm_bitrate=null;path=/;domain=record-russia.ru; secure; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	document.cookie = "srm_saveRadioSettings=null;path=/;domain=record-russia.ru; secure; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	document.cookie = "srm_SPB=null;path=/;domain=record-russia.ru; secure; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	document.cookie = "srm_lastStation=null;path=/;domain=record-russia.ru; secure; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	document.cookie = "srm_lastVolume=null;path=/;domain=record-russia.ru; secure; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	location.reload();
}
