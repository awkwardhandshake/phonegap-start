function inloggningfel(){
	document.getElementById('felvidinlogg').innerHTML = 'Användarnamn/Lösenord verkar vara inkorrekt';
}

function hemmafel(){
	document.getElementById('meddelande').innerHTML = '<p>Fel vid öppning av porten</p>';
}

function hemmavilken(adress,medd){
	document.getElementById('meddelande').innerHTML = '<p>' + adress + '</p>' + '<p><small>' + medd + '</small></p>';
}