//Hämtar inloggningsformet
function getFormData(){	   
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
console.log("Den skickar inloggningen");
hamta();
//byggnad('tvatta/tvatta.html');
//loadtvatta('tvatta/tvatta.html');
}

//hämta marknad
function hamta() {
	$.getJSON("http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&syndicateNo=1&syndicateObjectMainGroupNo=1&username=" +localStorage.anv+ "&password=" +localStorage.pass+ "&Method=APILoginSGS&callback=?",
	  function(result) {
		console.log(result);
		$.each(result, function (newsItem,news)
		{
		localStorage[newsItem]=news
			//$("#newsfeed").append(newsItem + "=" + news + "<br />");
			console.log("Detta lagras för tillfället " + localStorage[newsItem])
			
		});
	  loggain()
	  });
	  
};		  

//logga in	   
function loggain(){
//localStorage.removeItem(localStorage.urlen);
var str1="_=1366895108402&customer_name=" + localStorage.SGS_CustomerName + "&customerid=" + localStorage.UserName + "&isresident=" + localStorage.SGS_LivesAtSgs + "&loggedin=" + localStorage.LoggedIn + "&token=" + localStorage.SecurityTokenId + "&tvattstuga=" + localStorage.SGS_Laundry;
localStorage.urlen="http://www.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?" + str1;
console.log("Logga in delen, nuvarande sgs.se URL  " + localStorage.urlen);
console.log("Användare sparad från form " + localStorage.anv);
console.log("Logga in delen " + localStorage.UserName);
hiddenbrowser();
}
//alt med iframe
function bytiframe(){
	  var hej1 = document.getElementById('hej1').src=localStorage.urlen
	  console.log("Nu sätts iframe adressen till inlogg");
}

//alt med hidden InAppBrowser
function hiddenbrowser(){
	console.log("Går in i funktionen hiddenbrowser");
	 var ref = window.open(localStorage.urlen, '_blank', 'hidden=yes');
 //Denna skall in i loadstop funktionen.
	 console.log(ref);
		 ref.addEventListener('loadstop', function(event) {
			 alert('background window loaded'); 
			 byggnad('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');			 
			 console.log("www.google.se är laddad i bakgrunden");
	
	
})

}
//Byggnads väljare
function byggnad(urlfranlankarbyggnad){
console.log("Går in i byggnad funktionen");
	skapabyggnadtable();
	document.getElementById("topploga").src = " ";
	$.ajax({
			url: urlfranlankarbyggnad,
			success: function(data) {
				var byggnadtable = document.getElementById('byggnad');
				var indifiera;
				var byggnadlank;
				var delabyggnadlank;
				indifiera = $(data).find("#lblShowFirstAvailable");
				if(indifiera.length != 0){
console.log("Byggnad finns!")
					byggnadlank = $(data).find("td .headerColor");
					var d = 0;
					
					for(var i = 0; i < byggnadlank.length; i++){
console.log('Bygger upp table för byggnad');					
						var byggnadrow = byggnadtable.insertRow(-1);
						var byggnadcell = byggnadrow.insertCell(-1);
						byggnadcell.innerHTML = byggnadlank[d].innerHTML;
						console.log(byggnadlank[d].innerHTML);
						if(byggnadlank[d].onmousedown != null){
console.log('Kollar byggnad if-sats');					
							delabyggnadlank = String(byggnadlank[d].onmousedown).split("'",2);
							delabyggnadlank = "'http://tvatta.sgsstudentbostader.se/" + delabyggnadlank[1] + "'";
							byggnadcell.innerHTML = '<a onmousedown="loadtvatta('+ delabyggnadlank +')">'+
							byggnadlank[d].innerText + "</a>";
						}
						d++;	
					}
console.log('Slut av for-loop');				
				}
				else{
console.log("Verkar inte ha funnits någon byggnad???")
					loadtvatta('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
				}
	
								}		
	})
	
}

var nastaveckafram;
var nastaveckabak;
var lokalenriktig;
var typlokalriktig;
var lankartvattariktig;
//Vi laddar in hela tvatta.sgsstudentbostader.se
function loadtvatta(urlfranlankar){
console.log("Går in i tvätta funktionen");
	skapatvattatable(); 
	document.getElementById("topploga").src = " ";
	var tvattaimg;
	var antaltider;
	var nummer;
	var dagar;
	var tiderdygnet;
	var lankartvatta;
	var valjabokning;
	var typlokal;
	var c = 0;
	var lank;

	var table = document.getElementById('tvatta');
	var navtable = document.getElementById('navtvatta');
	$.ajax({
			url: urlfranlankar,
			success: function(data) {
console.log('Går in i ajax');			
				var root2 = document.getElementById('mydiv2');
				var tab2=document.createElement('table');
				tvattaimg = $(data).find("#tbl1 [src]");
				nummer = $(data).find("#tbl1 a");
				antaltider = $(data).find( "#tbl1 tr:contains('-')");
				dagar = $(data).find("#tbl1 th");
				lank = $(data).find("#tbl1 [onmousedown]");
				tiderdygnet = $(data).find("#tbl1 td:contains(':')");
				lankartvatta = $(data).find("#tblNav td.periodLinkColor");
				valjabokning = $(data).find("table td[width=12%][align].headerColor");
				typlokal = $(data).find("td[background]");
				var antal = antaltider.length;
				
				
				//Välja typ av lokal att boka
				if(valjabokning.length != 0){
				var rakna = 0;
console.log('Olika lokaler funktion');				
					var lokalrow = navtable.insertRow(-1);
					for(var l=0; l < valjabokning.length; l++){
						var lokalcell = lokalrow.insertCell(-1);
						if(valjabokning[rakna].onmousedown == null){
						console.log("Den går in i if satsen för olika lokaler");
							lokalcell.innerHTML = '<a>'+ valjabokning[rakna].innerHTML +'</a>';
							rakna++;
						}
						else{
						lokalenriktig = String(valjabokning[rakna].onmousedown).split("'", 2);
						lokalenriktig = "'http://tvatta.sgsstudentbostader.se/"+ lokalenriktig[1] +"'";
						lokalcell.innerHTML = '<button onmousedown="loadtvatta('+ lokalenriktig +')">'
						+ valjabokning[rakna].innerHTML +'</button>';
						rakna++;
							}
					}
				}
				
				//Välja vilken lokal att boka i
				if(typlokal.length != 0){
				var typrakna = 0;
console.log('Vilket nummer på lokal funktion');
					var typrow = navtable.insertRow(-1);
					for(var t = 0; t < typlokal.length; t++){
console.log('Vilket nummer på lokal funktion 2');					
						var typcell = typrow.insertCell(-1);
						if(typlokal[typrakna].onmousedown == null){
console.log('Vilket nummer på lokal funktion 3');
						typcell.innerHTML = '<a>'+ typlokal[typrakna].innerHTML +'</a>';								
						typrakna++;
console.log('Vilket nummer på lokal funktion 4');						
						}
						else{
console.log('Vilket nummer på lokal funktion 5');						
						typlokalriktig = String(typlokal[typrakna].onmousedown).split("'", 2);
						typlokalriktig = "'http://tvatta.sgsstudentbostader.se/"+ typlokalriktig[1] +"'";
						typcell.innerHTML = '<button onmousedown="loadtvatta('+typlokalriktig +')">'
						+ typlokal[typrakna].innerHTML +'</button>';
						typrakna++;
console.log('Vilket nummer på lokal funktion 6');						
						}
					}
					
				}
				
				//Navigerings framåt och bakåt
				if(lankartvatta.length != 0){
				var navrakna = 0;
console.log('Navigering framåt och bakåt');
					var navrow = navtable.insertRow(-1);
					for(var lt = 0; lt < lankartvatta.length; lt++){
						var navcell = navrow.insertCell(-1);
						lankartvattariktig = String(lankartvatta[navrakna].onmousedown).split("'", 2);
						lankartvattariktig = "'http://tvatta.sgsstudentbostader.se/"+ lankartvattariktig[1] +"'";
						navcell.innerHTML = '<button onmousedown="loadtvatta('+lankartvattariktig +')">'
						+ lankartvatta[navrakna].innerText +'</button>';
						navrakna++;
					}
				}
				
				
				
				
				//Navigerings framåt och bakåt
//console.log('Navigering framåt och bakåt');
//				var navrow = table.insertRow(-1);
//				var nasta = 0;
//				var nastavecka;
//				nastaveckabak = String(lankartvatta[0].onmousedown).split("'");
//				nastaveckabak = "http://tvatta.sgsstudentbostader.se/" + nastaveckabak[1];
//				var navcell = navrow.insertCell(-1);
//				console.log("Bakåt " + nastaveckabak);
//				if(lankartvatta.length != 0){
//console.log('Navigering BÅDE framåt och bakåt');
//					nastaveckafram = String(lankartvatta[1].onmousedown).split("'");
//					nastaveckafram = "http://tvatta.sgsstudentbostader.se/" + nastaveckafram[1];
//					navcell.innerHTML = '<button class="tvattaknapp" onmousedown="loadtvatta(nastaveckabak)">'+ 
//					lankartvatta[0].innerText +'</button>';
//					var navcell = navrow.insertCell(-1);
//					navcell.innerHTML = '<button class="tvattaknapp" onmousedown="loadtvatta(nastaveckafram)">'+
//					lankartvatta[1].innerText +'</button>';
//				} 
//				else{
//console.log('Navigering ENBART FRAMÅT');
//					navcell.innerHTML = '<button class="tvattaknapp" onmousedown="loadtvatta(nastaveckabak)">'+ 
//					lankartvatta[0].innerText +'</button>';
//				}
				
				//header med tider
				var f = 0;
				var headrow = table.insertRow(-1);
				headrow.insertCell(-1);
				for (var h = 0; h < antal; h++){
						var headcell = headrow.insertCell(-1);
						headcell.innerHTML = "<p>" + tiderdygnet[f].innerHTML + "</p>";
						
						f++
console.log('Tiderna för tvätta');
						}
				
				//Här byggs tvatta tabeln upp		
				var smart = 0;
				var extra = 6;
				var q = 1;
				var nollstall = ((antal * 7)-1);
				//Datum och dagar
				for (var b = 0; b < 7; b++){
console.log('Datum och dagarna för tvätta');
					var row = table.insertRow(-1)
					
					var cell2 = row.insertCell(-1);
					cell2.innerHTML = "<p>" + dagar[q].innerHTML + "</p>"
					q++;
						if(b >= 1){
						smart = (smart - nollstall)
									}	
									
									
				for (var i = 0; i < antal; i++){
console.log('Här skapas bokningstabellen');				
					var cell = row.insertCell(-1)	
					cell.innerHTML = "<a>" + tvattaimg[smart].outerHTML + "</a>";
					//kollar så att inte onmousedown är null
					
						if(tvattaimg[smart].parentNode.onmousedown != null){
console.log('Skapar en klickbar lank');									
							//splittar upp och tar ut endast värdet ur funktionen
							var split = String(tvattaimg[smart].parentNode.onmousedown).split("'",2);
							split = "'http://tvatta.sgsstudentbostader.se/" + split[1] +"','"+ urlfranlankar + "'";
							cell.innerHTML = '<a onmousedown="bokatid(' + split +')">' 
							+ tvattaimg[smart].outerHTML + '</a>';
console.log(split);							
							}
								
					smart = (smart + extra);
					smart++
								
								}
								}
							
			}
			})
			}
			
//alt med hidden InAppBrowser
function bokatid(tiden,nuvarandebokning){
	console.log("Går in i funktionen bokatid");
	 var ref = window.open(tiden, '_blank', 'hidden=yes');
console.log('bokar pass i hidden=yes');
		 ref.addEventListener('loadstop', function(event) {
			 alert('Pass bokat'); 
			 loadtvatta(nuvarandebokning);
			 console.log("Passet är bokat");
	
	
})

}




//hemma.sgsstudentbostader.se

function hamtahemma(hemmaurl){ 
	$.ajax({
			url: hemmaurl,
			success: function(varde) {
			var buttonvalue;
			var buttonname;
									
							console.log("Här är allt i data/varde med  " + varde);
							buttonvalue = $(varde).find('button').attr('value');
							buttonname = $(varde).find('button');
							console.log(buttonname[0].innerHTML);
							document.getElementById('hemmadorren').value = buttonvalue;
							document.getElementById('hemmadorren').innerHTML = buttonname[0].innerHTML
							console.log("Detta är buttonvalue	 " + buttonvalue);
							console.log(buttonvalue);
							oppnadorr(buttonvalue);
							
													 
			}
			});
			}
			



function oppnadorr(epName){
	'use strict';
	console.log("Öppnadörr funktionen " + epName);
	var sendform = $('#formdorren');
	$.ajax({
		type: "POST",
		url: "http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock",
		data: sendform.serialize(),
		success: function(data){
			alert(data);
			console.log(data);
		}
		
		
	})
	
	
	
}



jQuery(document).ready(function() {
		doorcontrol.activationUrl = "http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock";
		doorcontrol.unlockText = "L&#229;ser upp...";
		doorcontrol.errorText = "Ett fel uppstod! D&#246;rr ej uppl&#229;st.";
		doorcontrol.unlockDurationSeconds = 5;
		
});