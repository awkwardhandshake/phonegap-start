
// ==================================================================================================================
function startsida(){
element = 'element';
	var navigering = document.getElementById('navigering');
	document.getElementById("styling").href="css/index.css";
	
	var navback = document.getElementById('back');
	navback.src = "img/sgs_logout.png";
	
	document.getElementById("index").innerHTML=
'<div id="information" class="inforuta_hide">'+
'<table>'+
'<tr><td class="infostart_door">'+
'<img src="img/door_button.png" class="scale-with-grid-start-information"></img>'+
'</td></tr><tr><td class="information-text-middle-start">'+
'<p>Dörr öppningsknappen är tillför att ge ett komplement till hemma.sgsstudentbostader.se. Om ditt område är utrustat med öppning av entrédörren via hemma.sgsstudentbostader.se gör Dörr-knappen samma sak.</p>'+
'</td></tr>'+

'<tr><td class="infostart_door">'+
'<img src="img/cal_button.png" class="scale-with-grid-start-information"></img>'+
'</td></tr><tr><td class="information-text-middle-start">'+
'<p>Kalenderikonen tar dig till bokningen för bland annat tvättstuga och sällskapsrum. Du kommer behöva använda ditt inlogg som du använder på www.sgsstudentbostader.se för att logga in.</p>'+

'</td></tr>'+

'</table>'+
'</div>'+

		
	'<div id="index">'+
'<!--<div class="logo">'+
	'<img id="topploga" class="scale-with-grid-logo" src="img/sgs_logo_width_512.png">'+
'</div>-->'+
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
'</div>'+	
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
		
		'<div id="information" class="inforuta_hide">'+

'<table>'+
'<tr>'+
'<td class="information-text-middle">'+
		'<p><strong>Användarnamn:</strong> Detta är samma som du använder för att logga in på www.sgsstudentbostader.se</p>'+
'</td></tr>'+

'<tr>'+
'<td class="information-text-middle">'+
		'<p><strong>Lösenord:</strong> Använd det lösenord du blev tilldelad eller valde när du registrerade dig på www.sgsstudentbostader.se hemsida.</p>'+	
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
		
//historia('inputfields()');
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
	
'<div id="information" class="inforuta_hide">'+
'<table class="info-tabel-tvatta">'+

'<tr class="rowtvatt"><td class="rutatvatt">'+		
		'<img src="images/icon_plus_small.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle-tvatt" class="rutatvatt">'+
		'<p>Detta passet är ledigt och går att boka, tryck på ikonen för att utföra bokningen.</p>'+
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+
		'<img src="images/icon_no.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle-tvatt">'+
		'<p>Passet är redan bokat av en annan användare.</p>'+	
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+
		'<img src="images/icon_own.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle-tvatt">'+
		'<p>Passet är bokat på ditt konto.</p>'+	
'</td></tr>'+

'<tr class="rowtvatt"><td class="rutatvatt">'+		
		'<img src="images/icon_no_not.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle-tvatt">'+
		'<p>Tiden/datumet har passerat eller så är passet inte tillgängligt just nu.</p>'+	
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
//'<span id="hide" class="hidden_menu">'+
'<table id="navtvatta" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'+
//'</span>'+

'<table id="tvatta" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'+
'<table id="navtablebottom" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'

}

// ==================================================================================================================


// ==================================================================================================================
function skapabyggnadtable(){
	var navback = document.getElementById('back');
	navback.style.visibility = 'visible';
	document.getElementById("styling").href="css/tvatta.css"
	
	var navigeringmeny = document.getElementById('navigering');
	navigeringmeny.removeAttribute('onclick');
	var navback = document.getElementById('back');
	navback.src = 'img/button_tillbaka.png';
	document.getElementById("index").innerHTML=
'<div id="information" class="inforuta_hide">'+

'<table>'+
'<tr>'+
'<td class="information-text-middle">'+
		'<p>Om ditt område har möjlighet att boka tvättstuga på flera olika adresser eller uppgångar visas de olika alternativen på denna sida.</p>'+
'</td></tr>'+
'</table>'+
'</div>'+


'<table class="overskrift" border="2">'+
	'<tbody>'+
	'<tr>'+
		'<td><div class="dropdown_button" class="menu_button" onClick="show_navlokal()"><a>Meny</a></div></td>'+
	'<tr>'+	
	'</tbody>'+
'</table>'+
'<table id="byggnad" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'

}

// ==================================================================================================================