function inloggningfel(){
	document.getElementById('felvidinlogg').innerHTML = 'Användarnamn/Lösenord verkar vara inkorrekt';
}

function tomany(){
	document.getElementById('felvidinlogg').innerHTML = 'Du har loggat in för många gånger.';
}

function hemmafel(){
	document.getElementById('meddelande').innerHTML = '<p>Fel vid öppning av porten</p>';
	loadtvattaklar();
	setTimeout(alert('Nu har det gått 10sek sedan fel vid inloggning visades!'), 10000)
}

function hemmavilken(adress,medd){
	document.getElementById('meddelande').innerHTML = '<p>' + adress + '</p>' + '<p><small>' + medd + '</small></p>';
	loadtvattaklar();
}