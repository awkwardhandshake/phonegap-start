var kommaihag = new Array();
var namnan = 0;
var sesam;
var sesamkommaihag;
function historia(nufunktion, nuadress){	
if(nuadress === 'element'){
	kommaihag = kommaihag.slice(0,0);
}
if(nuadress != undefined && nuadress !== "element"){
var kontrollnufunktion = String(nufunktion).split(')')[0]  + '"' + nuadress +'");';
}
else{
	kontrollnufunktion = nufunktion;	
}


	
if(kommaihag.indexOf(kontrollnufunktion) > 0){
	var position = kommaihag.indexOf(kontrollnufunktion);
	sesamkommaihag = kommaihag[position];
	kommaihag = kommaihag.slice(0,(position+1));
	namnan = (kommaihag.length -1)
	if(namnan < 0){
		namnan = 0;
	}	
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length - 2)]);
	navigering.setAttribute("class", "Nu har if-satsen ändrat");
	sesam = true;
	position = 0;
//	onLoad();

}

else{
  var nyttnummer = kommaihag.length
	kommaihag[nyttnummer] = kontrollnufunktion;
	namnan++;
	var back = document.getElementById('testar');
	sesam = false;
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length-2)]);
	
	navigering.setAttribute("class", "null")

}
}