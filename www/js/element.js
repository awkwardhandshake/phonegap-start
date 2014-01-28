function startsida(){
	document.getElementById("index").innerHTML='<div class="container">'+
	'<div class="sixteen columns"></div>'+
    	'<div id="doorcontrolcontent">'+
    	'<div class="eight columns center">'+
        '<form action="http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock" method="post" target="hej">'+
        	'<ul>'+
        	'<li><button type="submit" name="epName" value="Första Långgatan 12">'+
        		'<img class="scale-with-grid" src="img/door_button.png" />'+	        		
        	'</button></li>'+
        	'</ul>'+    	
        '</form> <!--<div class="doorControlStatus"></div>-->'+
            '<p><strong>Öppna entrédörr</strong></p>'+
            '<p><small>(Open entrance door)</small></p>'+     
        '</div>'+
    	'</div>'+
    	
        '+<div class="eight columns center">'+
        	'<img class="scale-with-grid" src="img/cal_button.png" />'+
            '<p><strong>Boka facilitet</strong></p>'+
            '<p><small>(Book facility)</small></p>'+
        '</div>'+
    '</div>'
	
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
		};
		
function iframe(){
		document.getElementById("index").innerHTML='<iframe id="hej1" src="nostyle.html" width="100%" height="500px">'+
    	'</iframe>'
		};


