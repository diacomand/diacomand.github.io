
$(document).ready(function(){
	/* Модальное окно - открытие */
	var i = 0;
	$(".url").click(function(e){
		e.preventDefault();
		if(i == 0){
			$(".url-modal").fadeIn(500);
			$(".url").text("закрыть");
			i = 1;
		}
		else{
			$(".url-modal").fadeOut(500);
			$(".url").text("не работает?");
			i = 0;
		}
	});
	/* Модальное окно - закрытие */
	$(".url-exit").click(function(e){
		e.preventDefault();
		$(".url-modal").fadeOut(500);
		$(".url-modal").fadeOut(500);
		$(".url").text("не работает?");
		i = 0;
	});
	/* Модальное окно - битая ссылка */
	$(".url-no-1").click(function(e){
		e.preventDefault();
		new_url = $(".new_url").val();
		$.ajax({
			url: '/out/script.php',
			type: 'POST',
			data: {url_no_1: 1, new_url: new_url},
			success: function(res){
				$('.url').css({"display":"none"});
				$(".url-modal-text").css({"display":"none"});
				$(".url-no-1").css({"display":"none"});
				$(".url-no-2").css({"display":"none"});
				$(".url-exit").css({"display":"none"});;
				$(".success").fadeIn(500);
				setTimeout("$('.success').fadeOut(); $('.url').fadeOut(); $('.url-modal').fadeOut(500);", 3000);
			},
			error: function(){
				alert("Error!");
			}
		});
	});
	$(".url-no-2").click(function(e){
		e.preventDefault();
		new_url = $(".new_url").val();
		$.ajax({
			url: '/out/script.php',
			type: 'POST',
			data: {url_no_2: 1, new_url: new_url},
			success: function(res){
				$('.url').css({"display":"none"});
				$(".url-modal-text").css({"display":"none"});
				$('.url-modal').css({"margin-top":"14px"});
				$(".url-no-1").css({"display":"none"});
				$(".url-no-2").css({"display":"none"});
				$(".url-exit").css({"display":"none"});
				$(".success").fadeIn(500);
				setTimeout("$('.success').fadeOut(); $('.url-modal').fadeOut(500);", 3000);
			},
			error: function(){
				alert("Error!");
			}
		});
	});

});
