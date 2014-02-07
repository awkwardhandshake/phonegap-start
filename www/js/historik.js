
var kommaihag = new Array();
var namnan = 0;
var sesam;
var sesamkommaihag;
function historia(nufunktion, nuadress){
'use strict';	
if(nuadress != undefined){
var kontrollnufunktion = String(nufunktion).split(')')[0]  + '"' + nuadress +'");';
}
else{
	kontrollnufunktion = nufunktion;
	
}
	
if(kommaihag.indexOf(kontrollnufunktion) != -1){
console.log('=============================================================================');
	var position = kommaihag.indexOf(kontrollnufunktion);
	sesamkommaihag = kommaihag[position];
	kommaihag = kommaihag.slice(0,position);
//console.log("Längden på array INNAN " + kommaihag.length);	
//console.log("Nummer INNAN ändring i IF-sats " + namnan);
console.log(kommaihag);
console.log("Positionsnummer " + position);	
	namnan = (kommaihag.length -1)
	if(namnan < 0){
		namnan = 0;
	}
console.log("Nummer efter ändring i IF-sats " + namnan);
console.log("Längden på array EFTER " + kommaihag.length);	
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length - 1)]);
	navigering.setAttribute("class", "Nu har if-satsen ändrat");
	var backbutton = document.getElementById('backscript');
	backbutton.innerHTML =
	'function onLoad() {'+
'console.log("Går in i onLoad");'+
'document.addEventListener("deviceready", onDeviceReady, false);'+
        '}'+
    'function onDeviceReady() {'+
    'console.log("Går in i DeviceReady");'+
'document.addEventListener("backbutton", function() {'+kommaihag[kommaihag.length-1]+'}, false);'+
'};';
	sesam = 1;
	console.log(sesam);
	position = 0;
	onLoad();
console.log('=============================================================================');
}

else{
'use strict';
console.log('-------------------------------------------------------------------------------');
if(sesam === 1){
	kommaihag[kommaihag.length] = sesamkommaihag;
	console.log("Sesam öppnar sig");
}

var nyttnummer = kommaihag.length
	kommaihag[nyttnummer] = kontrollnufunktion;
//console.log(nyttnummer);

console.log(kommaihag);
	namnan++;
		
	var back = document.getElementById('testar');
//console.log(back);
//console.log(back.childNodes[1].childNodes[0].data)
//back.setAttribute("Kul", "Detta");
//document.addEventListener("backbutton", kommaihag[kommaihag.length-2], false);
	var backbuttonelse = document.getElementById('backscript');
	backbuttonelse.innerHTML =
	'function onLoad() {'+
'console.log("Går in i onLoad");'+
'document.addEventListener("deviceready", onDeviceReady, false);'+
'}'+
'function onDeviceReady() {'+
'console.log("Går in i DeviceReady");'+
'document.addEventListener("backbutton", function() {'+kommaihag[kommaihag.length-2]+'}, false);'+
'};';
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length-2)]);
	navigering.setAttribute("class", "null")
sesam = 0;	
onLoad();
console.log('-------------------------------------------------------------------------------');

}

}	
