$(document).ready(function() {
	var usuarios=[]
	var clicked;//Variable que reconoce si es el primer o segundo click que se hace.
	var addIcon;
	var writing;
	usuarios=['Laboratoria Perú', 'Raymi Saldomando','Mariana Costa','Ana María Martínez','Rodulfo Prieto','Andrea Lamas','Maria Paula Rivarola','Katy Sanchez','Aldo Alfaro'];
	clicked=false;
	addIcon=false;
	writing=false;
	var inputChat = $('#inputChat');
	var minIcon=$('.minIcon');
	minIcon.click(function(){
		minIcon=$(this);
		minIcon.clone().appendTo(inputChat);
		addIcon=true;
	});
	inputChat.click(function(){
		while (writing==false){
			inputChat.html('');
			inputChat.css('color','black');
			writing=true;
		}
		
	});
	$('.icon-mic').click(function(e){
		if(addicon=true){
			chatingresado=inputChat.html();
		}
		else{
			chatingresado=inputChat.text();
		}
		
		if(inputChat.length > 0 ){
			var chat = $('.chat');
			chat.append('<div class="row"><div class="col-lg-offset-6 col-lg-6"><span class="chatboxUser"><p class="detalle">'+ chatingresado +'</p></span></div></div>')
			inputChat.css('color','#AAAAAA');
			inputChat.html('Escribe un mensaje...');
			addIcon=false;
			writing=false;

		}
	});
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
