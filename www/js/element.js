
// ==================================================================================================================
function startsida(){
element = 'element';
	var navigering = document.getElementById('navigering');
	document.getElementById("styling").href="css/index.css";
	
	var navback = document.getElementById('back');
	navback.src = "img/sgs_logout.png";
	
	document.getElementById("index").innerHTML=

'<div id="index">'+
'<div id="information" class="nyinforuta_hide">'+
'<table class="info-tabel-tvatta">'+
'<tr><td class="">'+
'<img src="img/door_button.png" class="scale-with-grid-start-information"></img>'+
'</td></tr><tr><td class="information-text-middle-start">'+
'<p>"Öppna Entrédörr" låter dig öppna entrédörren om ditt område är utrustat med denna funktion. Knappen fungerar endast om din enhet når ett SGS-nätverk.'+
'</td></tr>'+

'<tr><td class="">'+
'<img src="img/cal_button.png" class="scale-with-grid-start-information"></img>'+
'</td></tr><tr><td class="information-text-middle-start information-text-middle-start-bottom">'+
'<p>"Boka" tar dig till bokningen av olika typer av faciliteter som t.ex. tvättstuga och sällskapsrum. För att logga in använder du samma uppgifter som på www.sgsstudentbostader.se.</p>'+
'</td></tr>'+
'</table>'+
'</div>'+


		

'<div class="container">'+
	'<div class="sixteen columns"></div>'+
	
		'<div class="eight columns center">'+
			
			'<button onmousedown="hamtahemma()" class="doorbutton">'+
				'<img class="scale-with-grid" src="img/door_button.png" />'+					
			'</button>'+
			'<span id="meddelande">'+	  	
			'<p><strong>Öppna entrédörr</strong></p>'+
			'<p><small>(Open entrance door)</small></p>'+
			'</span>'+		 
		'</div>'+
		
		'<div class="eight columns center">'+
			'<button onclick="kollainlogg()">'+
			'<img class="scale-with-grid" src="img/cal_button.png" />'+
			'</button>'+
			'<p><strong>Boka</strong></p>'+
			'<p><small>(Book)</small></p>'+
		'</div>'+
	'</div>'+

'<div id="doorcontrolcontent">'+
            '<form action="/DoorControl/PerformUnlock" method="post" ><ul>'+
                  '<li><button type="submit" name="epName" value="varde" id="hemmadorren"></button></li>'+
                  '</ul>'+
            '</form><div class="doorControlStatus"></div>'+	
'</div>'

	var bytaut = document.getElementById('navigering');
	bytaut.outerHTML = '<td id="navigering" onmousedown="varde" onclick="yourCallbackloggaut()"><img src="img/sgs_logout.png" class="scale-with-grid-logo-small" id="back"></img></td>';

historia("startsida()", element);
// ==================================================================================================================	
};

// ==================================================================================================================
function inputfields(){

		var uppernav = document.getElementById('uppernav');
		document.getElementById("styling").href="css/index.css"
		uppernav.style.display = 'table'
		var navigeringmeny = document.getElementById('navigering');
		navigeringmeny.removeAttribute('onclick');
		
		
		var navigeringmeny3 = document.getElementById('navigering');
		console.log(' =Input= ');
		console.log(navigeringmeny3);
		var navback = document.getElementById('back');
		navback.src = 'img/button_tillbaka.png';
		document.getElementById("index").innerHTML=	
		
		'<div id="information" class="nyinforuta_hide">'+

'<table>'+
'<tr>'+
'<td class="information-text-middle">'+
		'<p><strong>Användarnamn:</strong> Detta är det som du använder för att logga in på www.sgsstudentbostader.se</p>'+
'</td></tr>'+

'<tr>'+
'<td class="information-text-middle">'+
		'<p><strong>Lösenord:</strong> Använd det lösenord du blev tilldelad eller valde när du registrerade dig på www.sgsstudentbostader.se hemsida.</p>'+	
'</td></tr>'+

'<tr>'+
'<td class="information-text-middle">'+
		'<center><p><strong>Felmeddelande</strong</p></center>'+	
'</td></tr>'+


'<td class="information-text-middle">'+
		'<p><strong>Du har loggat in för många gånger:</strong> Om du anger felaktiga uppgifter för många gånger kommer du bli spärrad från att logga in under 2 timmar.</p>'+	
'</td></tr>'+

'<td class="information-text-middle">'+
		'<p><strong>Felaktigt lösenord eller användarnamn:</strong> Kontrollera så att lösenordet och användarnamnet är desamma som du använder på www.sgsstudentbostader.se</p>'+	
'</td></tr>'+

'</table>'+
'</div>'+
		
		'<div id="form_div" class="formar">'+
		'<form id="log">'+ 
		'<input type="text" id="username" placeholder="Användarnamn" class="textboxA"><br>'+
		'<input type="password" id="password" placeholder="Lösenord" class="textboxL"><br>'+
		'<div id="submitposition" onclick="getFormData();">'+
		'<input type="button" class="submitknapp" name="submit" value="Logga in"></input>'+
		'</div>'+
		'</form>'+
		'<span id="felvidinlogg" class="felinlogg">'+
		'<span>'+
		'</div>'
		
historia('startsida()');
		};

// ==================================================================================================================		

function skapatvattatable(){

	document.getElementById("styling").href= "css/tvatta.css";
	var navigeringmeny = document.getElementById('navigering');
	navigeringmeny.removeAttribute('onclick');
	
	var navback = document.getElementById('back');
	navback.src = 'img/button_tillbaka.png';
	document.getElementById("index").innerHTML=
	
'<div id="information" class="nyinforuta_hide">'+
'<table class="info-tabel-tvatta">'+

'<tr class="rowtvatt"><td class="rutatvatt">'+		
		'<img src="images/icon_plus_small.png" class="scale-with-grid-tvatt-information"></img>'+
'<!--</td><td class="information-text-middle-tvatt" class="rutatvatt">-->'+
		'<p> Detta passet är ledigt och går att boka, tryck på ikonen för att utföra bokningen.</p>'+
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+
		'<img src="images/icon_no.png" class="scale-with-grid-tvatt-information"></img>'+
'<!--</td><td class="information-text-middle-tvatt" class="rutatvatt">-->'+
		'<p> Passet är redan bokat av en annan användare.</p>'+	
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+
		'<img src="images/icon_own.png" class="scale-with-grid-tvatt-information"></img>'+
'<!--</td><td class="information-text-middle-tvatt" class="rutatvatt">-->'+
		'<p> Passet är bokat på ditt konto.</p>'+	
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+		
		'<img src="images/icon_no_not.png" class="scale-with-grid-tvatt-information"></img>'+
'<!--</td><td class="information-text-middle-tvatt" class="rutatvatt">-->'+
		'<p> Tiden/datumet har passerat eller så är passet inte tillgängligt just nu.</p>'+	
'</td></tr>'+



'<td class="information-text-middle">'+
		'<center><p><strong>Felmeddelande</strong</p></center>'+	
'</td></tr>'+


'<td class="information-text-middle">'+
		'<p><strong>Max antal framtida pass är redan bokade:</strong> Du har redan bokat maximalt antal framtida pass på ditt konto. Vill du boka fler pass måste du först avboka ett tidigare pass.</p>'+	
'</td></tr>'+

'</table>'+

'</div>'+


'<table class="overskrift" border="2">'+
	'<tbody>'+
	'<tr>'+
		'<td><div class="dropdown_button" class="menu_button"><a>Meny</a></div></td>'+
	'<tr>'+	
	'</tbody>'+
'</table>'+


'<table id="navtvatta" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'+


'<table id="navtablebottom" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'+

'<table id="tvatta" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'



}

// ==================================================================================================================


// ==================================================================================================================
function skapabyggnadtable(){
	var navback = document.getElementById('back');
	navback.style.visibility = 'visible';
	document.getElementById("styling").href="css/index.css"
	
	var navigeringmeny = document.getElementById('navigering');
	navigeringmeny.removeAttribute('onclick');
	var navback = document.getElementById('back');
	navback.src = 'img/button_tillbaka.png';
	document.getElementById("index").innerHTML=
'<div id="information" class="nyinforuta_hide">'+

'<table>'+
'<tr>'+
'<td class="information-text-middle">'+
		'<center><p><strong>Byggnadsväljare</strong></p></center>'+
		'<br><p>Här väljer du den uppgång eller adress som du vill boka via.</p>'+
'</td></tr>'+
'</table>'+
'</div>'+


'<table class="overskrift" border="2">'+
	'<tbody>'+
	'<tr>'+
		'<td><div class="dropdown_button" class="menu_button" onClick="show_navlokal()"><p>Meny</p></div></td>'+
	'<tr>'+	
	'</tbody>'+
'</table>'+


'<table id="byggnad" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'

}

// ==================================================================================================================