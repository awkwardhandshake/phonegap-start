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
		document.getElementById("index").innerHTML='<form id="log">'+ 
		'Username: <input type="text" id="username"><br>'+
		'Password: <input type="password" id="password"><br>'+
		'<input type="button" name="submit" onclick="getFormData();" value="Logga in">'+
		'</form>'
		};
function iframe(){
		document.getElementById("index").innerHTML='<iframe id="hej1" src="www" width="500px" height="500px">'+
    	'</iframe>'
		};

