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
	var conversaciones=[];
	var raymiSaldomando=[];
	var marianaCosta=[];
	var anaMariaMartinezFranklin=[];
	var rodulfoPrieto=[];
	var andreaLamas=[];
	var mariaPaulaRivarola=[];
	var katySanchez=[];
	var aldoAlfaro=[];
	conversaciones=[raymiSaldomando,marianaCosta,anaMariaMartinezFranklin,rodulfoPrieto,andreaLamas,mariaPaulaRivarola,katySanchez,aldoAlfaro];
	raymiSaldomando=['Raymi Saldomando','Juan Diego, hay un problema!','Estás?'];
	marianaCosta=['Mariana Costa','Hola, habla tu dueña.','La gran Mariana Costa','Madre de un baby'];
	anaMariaMartinezFranklin=['Ana María Martinez Franklin','Heyheyheeey, tengo un notición'];
	rodulfoPrieto=['Rodulfo Prieto','Me gusta Electric Wizard','lo has escuchado?'];
	andreaLamas=['Andrea Lamas','estoy tan resfriada ):'];
	mariaPaulaRivarola=['Maria Paula Rila','Ya lo subí','lo revisaste?'];
	katySanchez=['Katy Sanchez','confirma la invitación que te mandé'];
	aldoAlfaro=['Aldo Alfaro','Metal. Metal for life'];
	$('.contactos>div').click(function(){
		var usuario=$(this).attr('id');
		usuario=eval(usuario);
		$('.chat').append('<div class="row"><div class="col-lg-6"><span class="chatboxContact"><p class="chatName1 detalle">'+usuario[0]+'</p><p class="detalle">'+usuario[1]+'</p></span></div></div>');
		if (usuario.length>1){
			for (var i = 2; i < usuario.length; i++) {
				$('.chat').append('<div class="row"><div class="col-lg-6"><span class="chatboxContact"><p class="detalle">'+usuario[i]+'</p></span></div></div>');
			}
		}
	});
});
	