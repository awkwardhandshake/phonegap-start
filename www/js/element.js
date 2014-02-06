function startsida(){
	document.getElementById("styling").href="css/index.css"
	document.getElementById("index").innerHTML=
	'<div id="index">'+
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
	
};

function inputfields(){
		document.getElementById("index").innerHTML=
		'<div id="form_div" class="formar">'+
		'<form id="log">'+ 
		'<input type="text" id="username" placeholder="Användarnamn" class="textboxA"><br>'+
		'<input type="password" id="password" placeholder="Lösenord" class="textboxL"><br>'+
		'<input type="button" class="submitknapp" name="submit" onclick="getFormData();" value="Logga in"></input>'+
		'</form>'+
		'</div>'
historia('inputfields');
		};
		
function iframe(){
		document.getElementById("index").innerHTML='<iframe id="hej1" src="nostyle.html" width="100%" height="500px">'+
		'</iframe>'
		};

function skapatvattatable(){
	document.getElementById("styling").href="css/tvatta.css"
	document.getElementById("index").innerHTML=
'<table class="overskrift" border="2">'+
	'<tbody>'+
	'<tr>'+
		'<td><div class="dropdown_button" class="menu_button" onClick="show_navlokal()">Lokaler</div></td>'+
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

function skapabyggnadtable(){
	document.getElementById("styling").href="css/tvatta.css"
	document.getElementById("index").innerHTML=
'<table id="byggnad" border="2">'+
	'<tbody>'+
	'</tbody>'+
'</table>'

}

