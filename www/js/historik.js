
var kommaihag = new Array();
var namnan = 0;
var sesam;
var sesamkommaihag;
function historia(nufunktion, nuadress){	
console.log("Nuadressen " + nuadress);
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
console.log('=============================================================================');
	var position = kommaihag.indexOf(kontrollnufunktion);
	sesamkommaihag = kommaihag[position];
	kommaihag = kommaihag.slice(0,(position+1));

console.log(kommaihag);

	namnan = (kommaihag.length -1)
	if(namnan < 0){
		namnan = 0;
	}	
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length - 2)]);
	navigering.setAttribute("class", "Nu har if-satsen ändrat");

	sesam = true;
	console.log("Sesam i if-satsen " + sesam);
	position = 0;

//	onLoad();
console.log('=============================================================================');
}

else{
console.log('-------------------------------------------------------------------------------');
console.log("Sesam i else-satsen TOPPEN " + sesam);
console.log("Finns denna redan? TOPPEN " + kontrollnufunktion +" = "+ sesamkommaihag);

var nyttnummer = kommaihag.length
	kommaihag[nyttnummer] = kontrollnufunktion;
	


console.log(kommaihag);
	namnan++;
		
	var back = document.getElementById('testar');


	console.log("Sesam i else-satsen BOTTEN " + sesam);
	console.log("Finns denna redan? BOTTEN " + kommaihag.indexOf(sesamkommaihag));
	sesam = false;


console.log('-------------------------------------------------------------------------------');

//Var skall denna ligga för bästa effekt???
	var navigering = document.getElementById('navigering')
	var navigeringkul = navigering.setAttribute('onmousedown', kommaihag[(kommaihag.length-2)]);
	navigering.setAttribute("class", "null")

}
}