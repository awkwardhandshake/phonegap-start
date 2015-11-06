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
loggaut(buttonIndex);
  navigator.notification.confirm(
			'Vill du logga ut?',
			loggaut,
			'Utloggning',
			['Nej','Ja']
			);
}