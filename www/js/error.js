function yourCallbackTvatta(button) {
	if (button == 2) {
		loadtvattaklar();
		loadtvatta('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		}
}

function yourCallbackStanga(button){
	if (button == 2){
		navigator.app.exitApp();
		}
}


function yourCallbackloggaut(){
  navigator.notification.confirm(
			'Vill du logga ut?',
			loggaut,
			'Utloggning',
			['Nej','Ja']
			);
}