$(document).ready(function() {
	$('.icon-mic').click(function(e){
		var inputChat = $('#inputChat');
		var minIcon=$('.minIcon');
		minIcon.click(function(){
			input.Chat.append('minIcon');
		});
		if(inputChat.val.length > 0 ){
			var chat = $('.chat');
			var chatingresado = $('#inputChat').val();
			chat.append('<div class="row"><div class="col-lg-offset-6 col-lg-6"><span class="chatboxUser"><p class="detalle">'+ chatingresado +'</p></span></div></div>')
			inputChat.val('');
		}
});

var usuarios=[]
var clicked;
usuarios=['Laboratoria Perú', 'Raymi Saldomando','Mariana Costa','Ana María Martínez','Rodulfo Prieto','Andrea Lamas','Maria Paula Rivarola','Katy Sanchez','Aldo Alfaro'];
	clicked=false;
	$('.contactos>div').click(function(){
		$('.chat').empty();
	});
	$('.icon-insert_emoticon').click(function(){
		if (clicked==false){
		$('#emoticons').css('visibility','visible');
		clicked=true;
		}
		else{
		$('#emoticons').css('visibility','hidden');
		clicked=false;
		}
	});
	});
