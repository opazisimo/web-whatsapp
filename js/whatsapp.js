var usuarios=[]
var clicked;
usuarios=['Laboratoria Perú', 'Raymi Saldomando','Mariana Costa','Ana María Martínez','Rodulfo Prieto','Andrea Lamas','Maria Paula Rivarola','Katy Sanchez','Aldo Alfaro'];
$(document).ready(function(){
	clicked=false;
	$('.contactos>div').click(function(){
		$('.chat').empty();
	});
	$('.icon-insert_emoticon').click(function(){

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
	$('.text input').click(function(){
		$('#emoticons').css('visibility','hidden');
	});
});
