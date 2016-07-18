$(document).ready(function() {
	$('.icon-mic').click(function(e){
		var inputChat = $('#inputChat');
		if(inputChat.val.length > 0 ){
			var chat = $('.chat');
			var chatingresado = $('#inputChat').val();
			chat.append('<div class="row"><div class="col-lg-offset-6 col-lg-6"><span class="chatboxUser"><p class="detalle">'+ chatingresado +'</p></span></div></div>')
			inputChat.val('');
		}


	});
});
