function inloggningfel(){
	document.getElementById('felvidinlogg').innerHTML = 'Användarnamn/Lösenord verkar vara inkorrekt';
}

function tomany(){
	document.getElementById('felvidinlogg').innerHTML = 'Du har loggat in för många gånger.';
}

function hemmafel(){
	document.getElementById('meddelande').innerHTML = '<p>Fel vid öppning av porten</p>';
	loadtvattaklar();
	setTimeout(function(){
		document.getElementById('meddelande').innerHTML = 	'<p><strong>Öppna entrédörr</strong></p>'+
															'<p><small>(Open entrance door)</small></p>'
	},10000)
}

function hemmavilken(adress,medd){
	document.getElementById('meddelande').innerHTML = '<p>' + adress + '</p>' + '<p><small>' + medd + '</small></p>';
	loadtvattaklar();
}