function inloggningfel(){
	document.getElementById('felvidinlogg').innerHTML = 'Användarnamn/Lösenord verkar vara inkorrekt';
}

function tomany(){
	document.getElementById('felvidinlogg').innerHTML = 'Du har loggat in för många gånger.';
}

function hemmafel(){
	console.log(navigator.connection.type);
	if(navigator.connection.type != 'WiFi connection'){
	document.getElementById('meddelande').innerHTML = 	'<p>WIFI-problem</p>'
														'<p><small>För att kunna öppna dörren krävs det att telefonen är uppkopplad via ett SGS-nätverk</small></p>';
	loadtvattaklar();
	setTimeout(function(){
		document.getElementById('meddelande').innerHTML = 	'<p><strong>Öppna entrédörr</strong></p>'+
															'<p><small>(Open entrance door)</small></p>'
	},10000)
	else{	
	}
	document.getElementById('meddelande').innerHTML = '<p>Fel vid öppning av porten</p>';
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
	loadtvattaklar();
}