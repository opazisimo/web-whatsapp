$(document).ready(function(){
	var clicked;//Variable que reconoce si es el primer o segundo click que se hace.
	var addIcon;//Variable que chequea si se agregó emoticon.
	var writing;//Variable que chequea si se está escribiendo.
	var inputChat;//El contenido que escribe el usuario
	var minIcon;//Variable asociada a los íconos.
	var contactos=[];//Variable que guarda los 'id' de los contactos con que se ha iniciado chat
	var raymiSaldomando=[];
	var marianaCosta=[];
	var anaMariaMartinezFranklin=[];
	var rodulfoPrieto=[];
	var andreaLamas=[];
	var mariaPaulaRivarola=[];
	var katySanchez=[];
	var aldoAlfaro=[];
	var laboratoriaPeru=[];
	//Arreglo de contactos
	contactos=[raymiSaldomando,marianaCosta,anaMariaMartinezFranklin,rodulfoPrieto,andreaLamas,mariaPaulaRivarola,katySanchez,aldoAlfaro];
	//Dentro de cada usuario se guardan sus mensajes, agregándolos al final del array
	raymiSaldomando=['Raymi Saldomando','image/raymi.jpg','Juan Diego, hay un problema!','Estás?'];
	marianaCosta=['Mariana Costa','image/mariana.jpg','Hola, habla tu dueña.','La gran Mariana Costa','Madre de un baby'];
	anaMariaMartinezFranklin=['Ana María Martinez Franklin','image/anamaria.jpg','Heyheyheeey, tengo un notición'];
	rodulfoPrieto=['Rodulfo Prieto','image/rodulfo.jpg','Me gusta Electric Wizard','lo has escuchado?'];
	andreaLamas=['Andrea Lamas','image/andrea.jpg','estoy tan resfriada ):'];
	mariaPaulaRivarola=['Maria Paula Rila','image/mariapaula.jpg','Ya lo subí','lo revisaste?'];
	katySanchez=['Katy Sanchez','image/katy.jpg','confirma la invitación que te mandé'];
	aldoAlfaro=['Aldo Alfaro','image/aldo.jpg','Metal. Metal for life'];
	laboratoriaPeru=['Laboratoria Perú','image/logocodeacademy.png','<span class="chatboxContact"><p class="chatName1">Andrea Lamas</p><p class="detalle">Chicos, han visto el nuevo corte de Aldo?</p></span>','<span class="chatboxContact"><p class="chatName2">Mariana Costa</p><p class="detalle">¿Finalmente se lo cortó?</p></span>','<span class="chatboxContact"><p class="chatName3">María Paula Rivarola</p><p class="detalle">Jajajja Siii finalmente se cortó!!!</p></span>','<span class="chatboxUser"><p class="detalle">antes parecía Mufasa, jajaja</p></span>','<span class="chatboxUser"><p class="detalle">ahora sí está decente</p></span>','<span class="chatboxContact"><p class="chatName1">Andrea Lamas</p><p class="detalle">¿Por qué se lo habrá cortado?</p></span>','<span class="chatboxContact"><p class="chatName4">Aldo Alfaro</p><p class="detalle">Ya ya ya, hacía mucho calor, qué más.</p></span>','<span class="chatboxContact"><p class="chatName1">Andrea Lamas</p><p class="detalle">Está siguiendo los pasos de Juan Diego!</p></span><span class="chatboxContact"><p class="chatName3">Maria Paula Rivarola</p><p class="detalle">Nunca!!! Juan Diego es único</p></span></div>']
	clicked=false;
	addIcon=false;
	writing=false;
	inputChat = $('#inputChat');
	minIcon=$('.minIcon');
	//Al hacer click en el emoticon se agregará al message.
	minIcon.click(function(){
		minIcon=$(this);
		if (writing==false){
			inputChat.html('');
		}
		minIcon.clone().appendTo(inputChat);
		$('.icon-mic').attr('class','glyphicon glyphicon-send');
		addIcon=true;
		writing=true;
	});
	//Al empezar a escribir el mensaje el div 'input' cambia de color y se vacía.
	inputChat.click(function(){
		while (writing==false){
			inputChat.html('');
			inputChat.css('color','black');
			writing=true;
			$('.icon-mic').attr('class','glyphicon glyphicon-send');
		}
		writing=true;
	});
	//Al hacer click en 'Enviar'
	$('#action').click(function(){
		if($('#action').attr('class')=='glyphicon glyphicon-send'){
			appendToChat();
			addIcon=false;
			writing=false;
		}
		$('#action').attr('class','icon-mic');
	});
	//Vacía el contenedor de la conversación.
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
	//Agrega los mensajes asociados al contacto seleccionado al contenedor de la conversación.
	$('.contactos>div').click(function(){
		var usuario=$(this).attr('id');
		usuario=eval(usuario);
		$('.chat').append('<div class="row"><div class="col-lg-6"><span class="chatboxContact"><p class="chatName1">'+usuario[0]+'</p><p class="detalle">'+usuario[2]+'</p></span></div></div>');
		if (usuario.length>1){
			for (var i = 3; i < usuario.length; i++) {
				$('.chat').append('<div class="row"><div class="col-lg-6"><span class="chatboxContact"><p class="detalle">'+usuario[i]+'</p></span></div></div>');
			}
		}
		$('.contacto b').empty();
		$('.contacto b').append(usuario[0]);
		$('.contacto img').attr('src',usuario[1]);

	});

	$('#inputChat').on('keydown', function(e) {
	    if (e.which == 13) {
	        e.preventDefault();
	        appendToChat();
			addIcon=false;
			writing=false;
    	}
	});
	//Agrega lo que fue escrito en el div 'input' al chat
	function appendToChat(){
		if(addIcon==true){//Si se agregó emoticon se imprime todo el contenido del mensaje.
			chatingresado=inputChat.html();
		}
		else{
			chatingresado=inputChat.text();//Si no se agregó se imprime sólo texto.
			if(chatingresado==''){
				return
			}
		}
        var fecha = new Date();
		var minutos = fecha.getMinutes();
		minutos=agregarCero(minutos);
		var hora = fecha.getHours();
		var chat = $('.chat');
		chat.append('<div class="row"><div class="col-lg-offset-6 col-lg-6"><span class="chatboxUser"><p class="detalle">'+ chatingresado + '<span class="hora-chat"> '+  hora  + ':'+ minutos +'</span>' +'</p></span></div></div>')
		inputChat.css('color','#AAAAAA');
		inputChat.html('Escribe un mensaje...');
		$('.hora-chat').css('display', 'block');
	}
	//Al escribir en el campo 'input' se llama al filtro.
	$('input').keyup(function() {
		filter(this); 
	});
	//Filtra en base a lo escrito
	function filter(element) {
		var value = $(element).val();
		$(".contactos > div").each(function () {
		    if ($(this).text().toLowerCase().indexOf(value) > -1) {
		        $(this).show();
		    } else {
		        $(this).hide();
		    }
		});
	}
	//Se llama al imprimir la hora
	function agregarCero(i) {
	    if (i < 10) {
	    i = "0" + i;//Agrega un cero a números menores que 10
	    }
	    return i;
	}
});