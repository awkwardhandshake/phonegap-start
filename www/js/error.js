function yourCallbackTvatta(button) {
	if (button == 2) {
		loadtvattaklar();
		console.log('Vi ladddar in tvätta via error');
		loadtvatta('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		console.log('Laddar vidare i errror');
		}
}

function yourCallbackStanga(button){
	if (button == 2){
		navigator.app.exitApp();
		}
}


function yourCallbackloggaut(){
	navigator.notification.confirm(
			'Vill du logga ut? Det kan ta en stund innan en ny användare kan logga in. För att snabba på utloggningen rekommenderar vi att du stänger av appen och öppnar den på nytt',
			loggaut,
			'Utloggning',
			'Nej,Ja'
			)
}