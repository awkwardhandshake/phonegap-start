function inloggningfel(){
	document.getElementById('felvidinlogg').innerHTML = 'Användarnamn/Lösenord verkar vara inkorrekt';
	loadtvattaklar();
}

function tomany(){
	document.getElementById('felvidinlogg').innerHTML = 'Du har loggat in för många gånger.';
	loadtvattaklar();
}

function hemmafel(){
	if(navigator.connection.type != 'wifi'){
	document.getElementById('meddelande').innerHTML = 	'<p>SGS-nätverk</p>'+
														'<p><small>För att kunna öppna entrédörren krävs det att enheten är uppkopplad via ett SGS-nätverk</small></p>';
	loadtvattaklar();
	setTimeout(function(){
		document.getElementById('meddelande').innerHTML = 	'<p><strong>Öppna entrédörr</strong></p>'+
															'<p><small>(Open entrance door)</small></p>'
	},10000)
	}
	else{
	document.getElementById('meddelande').innerHTML = 	'<p>Fel vid öppning av porten</p>'+
														'<p><small>Kontrollera att din enhet når ett SGS-nätverk.</small></p>';;
	loadtvattaklar();
	setTimeout(function(){
		document.getElementById('meddelande').innerHTML = 	'<p><strong>Öppna entrédörr</strong></p>'+
															'<p><small>(Open entrance door)</small></p>'
	},10000)
	}
}

function hemmavilken(adress,medd){
	if(medd == undefined){
		medd = " ";
	}
	
	document.getElementById('meddelande').innerHTML = '<p>' + adress + '</p>' + '<p><small>' + medd + '</small></p>';
	setTimeout(function(){
		document.getElementById('meddelande').innerHTML = 	'<p><strong>Öppna entrédörr</strong></p>'+
															'<p><small>(Open entrance door)</small></p>'
	},20000)
	loadtvattaklar();
}