function yourCallbackTvatta(button) {
	if (button == 2) {
		console.log('Vi ladddar in tvätta via error');
		loadtvatta('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		console.log('Laddar vidare i errror');
		}
}
