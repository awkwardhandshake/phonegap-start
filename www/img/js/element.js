
// ==================================================================================================================
function startsida(){
	var uppernav = document.getElementById('uppernav');
	uppernav.style.display = 'none'
	document.getElementById("styling").href="css/index.css"
	document.getElementById("index").innerHTML=
	'<div id="information" class="inforuta_hide">'+
		'<div class="rutaett">'+
		'<img src="img/door_button.png" class="scale-with-grid-information"></img>'+
		'<br><br>'+
		'Dörr öppningsknappen är tillför att ge ett komplement till hemma.sgsstudentbostader.se. Om ditt område är utrustat med öppning av entrédörren via hemma.sgsstudentbostader.se gör Dörr-knappen samma sak.'+
		'</div>'+
		'<div class="rutatva">'+
		'<img src="img/cal_button.png" class="scale-with-grid-information"></img>'+
		'<br><br><br>'+
		'<a>Kalenderikonen tar dig till bokningen för bland annat tvättstuga och sällskapsrum. Du kommer behöva använda ditt inlogg som du använder på www.sgsstudentbostader.se för att logga in.</a>'+	
		'</div>'+
		'</div>'+
		
	'<div id="index">'+
'<div class="logo">'+
	'<img id="topploga" class="scale-with-grid-logo" src="img/sgs_logo_width_512.png">'+
'</div>'+
'<div class="container">'+
	'<div class="sixteen columns"></div>'+
	
		'<div class="eight columns center">'+
			
			'<button onmousedown="hamtahemma("http://hemma.sgsstudentbostader.se/DoorControl/Fullscreen")" class="doorbutton">'+
				'<img class="scale-with-grid" src="img/door_button.png" />'+					
			'</button>'+
				  	
			'<p><strong>Öppna entrédörr</strong></p>'+
			'<p><small>(Open entrance door)</small></p>'+		 
		'</div>'+
		
		'<div class="eight columns center">'+
			'<button onclick="inputfields();">'+
			'<img class="scale-with-grid" src="img/cal_button.png" />'+
			'</button>'+
			'<p><strong>Boka</strong></p>'+
			'<p><small>(Book)</small></p>'+
		'</div>'+
	'</div>'+
'<div id="doorcontrolcontent">'+
            '<form action="/DoorControl/PerformUnlock" method="post" ><ul>'+
                  '<li><button type="submit" name="epName" value="varde" id="hemmadorren">varde</button></li>'+
                  '</ul>'+
            '</form><div class="doorControlStatus"></div>'+
'</div>'+	
'</div>'
historia('startsida()');
// ==================================================================================================================	
};

function popup(){
	document.getElementById('')
	
}

// ==================================================================================================================
function inputfields(){
		var uppernav = document.getElementById('uppernav');
		uppernav.style.display = 'table'
		document.getElementById("index").innerHTML=	
		
		'<div id="information" class="inforuta_hide">'+

'<table>'+

'<tr><td class="rutatvatt">'+		

		'<img src="img/door_button.png" class="scale-with-grid-start-information"></img>'+
'</td><td class="information-text-middle">'+
		'Dörr öppningsknappen är tillför att ge ett komplement till hemma.sgsstudentbostader.se. Om ditt område är utrustat med öppning av entrédörren via hemma.sgsstudentbostader.se gör Dörr-knappen samma sak.'+
'</td></tr>'+

'<tr><td class="rutatvatt">'+

		'<img src="img/cal_button.png" class="scale-with-grid-start-information"></img>'+
'</td><td class="information-text-middle">'+
		'Kalenderikonen tar dig till bokningen för bland annat tvättstuga och sällskapsrum. Du kommer behöva använda ditt inlogg som du använder på www.sgsstudentbostader.se för att logga in.'+	
'</td></tr>'+

'</table>'+
'</div>'+
		
		'<div id="form_div" class="formar">'+
		'<form id="log">'+ 
		'<input type="text" id="username" placeholder="Användarnamn" class="textboxA"><br>'+
		'<input type="password" id="password" placeholder="Lösenord" class="textboxL"><br>'+
		'<input type="button" class="submitknapp" name="submit" onclick="getFormData();" value="Logga in"></input>'+
		'</form>'+
		'</div>'

historia('inputfields()');
		};

// ==================================================================================================================		

function skapatvattatable(){
	document.getElementById("styling").href="css/tvatta.css"
	document.getElementById("index").innerHTML=
	
'<div id="information" class="inforuta_hide">'+
'<table>'+

'<tr><td class="rutatvatt">'+		

		'<img src="images/icon_plus_small.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle">'+
		'Detta passet är ledigt och går att boka, tryck på ikonen för att utföra bokningen.'+
'</td></tr>'+

'<tr><td class="rutatvatt">'+

		'<img src="images/icon_no.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle">'+
		'Passet är redan bokat av en annan användare.'+	
'</td></tr>'+

'<tr><td class="rutatvatt">'+

		'<img src="images/icon_own.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle">'+
		'Passet är bokat på ditt konto.'+	
'</td></tr>'+

'<tr><td class="rutatvatt">'+		

		'<img src="images/icon_no_not.png" class="scale-with-grid-tvatt-information"></img>'+
'</td><td class="information-text-middle">'+
		'Tiden/datumet har passerat eller så är passet inte tillgängligt just nu.'+	
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
'<span id="hide" class="hidden_menu">'+
'<table id="navtvatta" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'+
'</span>'+

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
	document.getElementById("styling").href="css/tvatta.css"
	document.getElementById("index").innerHTML=
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