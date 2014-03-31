function yourCallbackTvatta(button) {
	if (button == 2) {
		loadtvattaklar();
		console.log('Vi ladddar in tvätta via error');
		loadtvatta('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
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
			'Vill du logga ut? Det kan i vissa fall ta en viss tid innan en ny användare kan logga in',
			loggaut,
			'Utloggning',
			'Nej,Ja'
			)
}