$(document).ready(function() {
	var usuarios=[]
	var clicked;//Variable que reconoce si es el primer o segundo click que se hace.
	var addIcon;//Variable que chequea si se agregó emoticon.
	var writing;//Variable que chequea si se está escribiendo.
	usuarios=['Laboratoria Perú', 'Raymi Saldomando','Mariana Costa','Ana María Martínez','Rodulfo Prieto','Andrea Lamas','Maria Paula Rivarola','Katy Sanchez','Aldo Alfaro'];
	clicked=false;
	addIcon=false;
	writing=false;
	var inputChat = $('#inputChat');
	var minIcon=$('.minIcon');
	//Al hacer click en el emoticon se agregará al message.
	minIcon.click(function(){
		minIcon=$(this);
		minIcon.clone().appendTo(inputChat);
		addIcon=true;
	});
	//Al empezar a escribir el mensaje el div 'input' cambia de color y se vacía.
	inputChat.click(function(){
		while (writing==false){
			inputChat.html('');
			inputChat.css('color','black');
			writing=true;
		}
		
	});
	$('.icon-mic').click(function(e){
		if(addicon=true){//Si se agregó emoticon se imprime todo el contenido del mensaje.
			chatingresado=inputChat.html();
		}
		else{
			chatingresado=inputChat.text();//Si no se agregó se imprime sólo texto.
		}
		
		if(inputChat.length > 0 ){
			var fecha = new Date();
			var minutos = fecha.getMinutes();
			var hora = fecha.getHours();
			var chat = $('.chat');
			chat.append('<div class="row"><div class="col-lg-offset-6 col-lg-6"><span class="chatboxUser"><p class="detalle">'+ chatingresado + '<span class="hora-chat"> '+  hora  + ':'+ minutos +'</span>' +'</p></span></div></div>')
			inputChat.css('color','#AAAAAA');
			inputChat.html('Escribe un mensaje...');
			$('.hora-chat').css('display', 'block');
			addIcon=false;
			writing=false;

		}
	});
	$('.contactos>div').click(function(){
		$('.chat').empty();
	});
	//Esconde o muestra los emoticonos.
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

	$('#input-1').keyup(function() {
    	filtrarLista(this); 
	});
	function filtrarLista(lista) {
    var value = $(lista).val();
    $(".info > p > b ").each(function () {
        if ($(this).text().indexOf(value) > -1) {
            $(this).show();
        } else {
            $('.contactos > div').hide();
        }
    	});
	};



});
