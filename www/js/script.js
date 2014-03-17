
//Byggnads väljare
function byggnad(urlfranlankarbyggnad){
console.log("Går in i byggnad funktionen");
	skapabyggnadtable();
	$.ajax({
			url: urlfranlankarbyggnad,
			success: function(data) {
				var byggnadtable = document.getElementById('byggnad');
				var indifiera;
				var byggnadlank;
				var delabyggnadlank;
				indifiera = $(data).find("#lblShowFirstAvailable");
				if(indifiera.length != 0){
historia("byggnad()", urlfranlankarbyggnad);				
					byggnadlank = $(data).find("td .headerColor");
					var d = 0;					
					for(var i = 0; i < (byggnadlank.length -1); i++){
						var byggnadrow = byggnadtable.insertRow(-1);
						var byggnadcell = byggnadrow.insertCell(-1);
						if(byggnadlank[d].onmousedown != null){
							byggnadcell.setAttribute("class", "byggnadnav");
							delabyggnadlank = String(byggnadlank[d].onmousedown).split("'",2);
							delabyggnadlank = "'http://tvatta.sgsstudentbostader.se/" + delabyggnadlank[1] + "'";
							byggnadcell.innerHTML = '<a onmousedown="loadtvatta('+ delabyggnadlank +')">'+
							byggnadlank[d].innerText + "</a>";
						}
						d++;	
					}
				
				}
				else{
console.log("Verkar inte ha funnits någon byggnad???")
					loadtvatta('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
					}
	
								},
								error: function(){
									navigator.notification.confirm(
									'Något gick snett, vill du försöka igen?',
									yourCallbackTvatta,
									'Fel',
									'Nej,Ja'
									)
								}		
	})
	loadtvattaklar();
	
}

var nastaveckafram;
var nastaveckabak;
var lokalenriktig;
var typlokalriktig;
var lankartvattariktig;
//Vi laddar in hela tvatta.sgsstudentbostader.se
function loadtvatta(urlfranlankar){
historia('loadtvatta()');
//console.log("Går in i tvätta funktionen");
	skapatvattatable(); 	
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
	var recordposition;
	var table = document.getElementById('tvatta');
	var navtable = document.getElementById('navtvatta');
	var navtablebottom = document.getElementById('navtablebottom');
	$.ajax({
			url: urlfranlankar,
			success: function(data) {
//console.log('Går in i ajax');			
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
				var valjabokningtext;
				var rakna = 0;			
					var lokalrow = navtable.insertRow(-1);
					lokalrow.setAttribute("id", "navlokal");
					for(var l=0; l < valjabokning.length; l++){
						var lokalcell = lokalrow.insertCell(-1);
						if(valjabokning[rakna].onmousedown == null){
//console.log("Den går in i if satsen för olika lokaler");
							lokalcell.setAttribute("class", "lokalnav");
							valjabokningtext = String(valjabokning[rakna].innerHTML).split('&nbsp;');
							var navnummer = String("navnummer");
							lokalcell.innerHTML = '<a onClick="show_navnummer()">'+ valjabokningtext[0] +'</a>';
							recordposition = l;
							rakna++;
						}
						else{
						lokalenriktig = String(valjabokning[rakna].onmousedown).split("'", 2);
						lokalenriktig = "'http://tvatta.sgsstudentbostader.se/"+ lokalenriktig[1] +"'";
						lokalcell.setAttribute("class", "lokalnavlank");
						lokalcell.setAttribute("onmousedown", "loadtvatta("+ lokalenriktig +")" )
						valjabokningtext = String(valjabokning[rakna].innerHTML).split('&nbsp;');
						lokalcell.innerHTML = '<a>'+ valjabokningtext[0] +'</a>';
						rakna++;
							}
					}
				}
				
				//Välja vilken lokal att boka i
				if(typlokal.length != 0){
				var typlokaltext;
				var typrakna = 0;
				//console.log(recordposition);
					var u = 0;						
					for(var t = 0; t < typlokal.length; t++){					
						var typrow = navtable.insertRow(-1);
						for(var u = 0; u < recordposition; u++){
						typrow.insertCell(-1);
						//console.log('Går in i recordposition');
						}
						
						typrow.setAttribute("id", "navnummer")
						var typcell = typrow.insertCell(-1);
						if(typlokal[typrakna].onmousedown == null){
						typcell.setAttribute("class", "typlokal");
						typlokaltext = String(typlokal[typrakna].innerHTML).split('&nbsp;');
						typcell.innerHTML = '<a>' + typlokaltext[0] +'</a>';								
						typrakna++;						
						}
						else{						
						typlokalriktig = String(typlokal[typrakna].onmousedown).split("'", 2);
						typlokalriktig = "'http://tvatta.sgsstudentbostader.se/"+ typlokalriktig[1] +"'";
						typcell.setAttribute("class", "typlokallank");
						typcell.setAttribute("onmousedown", "loadtvatta("+typlokalriktig +")")
						typlokaltext = String(typlokal[typrakna].innerHTML).split('&nbsp;');
						typcell.innerHTML = '<a>'+ typlokaltext[0] +'</a>';
						typrakna++;						
						}
					}
					
				}
				
				//Navigerings framåt och bakåt
				if(lankartvatta.length != 0){
				var navrakna = 0;
				var lankartvattatext;
					var navrow = navtablebottom.insertRow(-1);
					for(var lt = 0; lt < lankartvatta.length; lt++){
						var navcell = navrow.insertCell(-1);
						lankartvattariktig = String(lankartvatta[navrakna].onmousedown).split("'", 2);
						lankartvattariktig = "'http://tvatta.sgsstudentbostader.se/"+ lankartvattariktig[1] +"'";
						lankartvattatext = String(lankartvatta[navrakna].innerText).split('&nbsp;');
						navcell.setAttribute("onmousedown", "loadtvatta("+lankartvattariktig +")")
						navcell.setAttribute("class", "navknapparlank");
						navcell.innerHTML = '<a>' + lankartvattatext[0] +'</a>';
						navrakna++;
					}
				}
				
				
				
				//header med tider
				var f = 0;
				var tiderdygnetriktig;
				var headrow = table.insertRow(-1);
				headrow.insertCell(-1);
				for (var h = 0; h < antal; h++){
						console.log(tiderdygnetriktig);
						var headcell = headrow.insertCell(-1);
						headcell.setAttribute("class", "bokningstider");
						tiderdygnetriktig = String(tiderdygnet[f].innerHTML).split('&nbsp;');
//console.log(tiderdygnetriktig[2]);
						headcell.innerHTML = "<p>" + tiderdygnetriktig[2] + "</p>";
						
						f++
						}
				
				//Här byggs tvatta tabeln upp		
				var smart = 0;
				var extra = 6;
				var q = 1;
				var nollstall = ((antal * 7)-1);
				//Datum och dagar
				for (var b = 0; b < 7; b++){
					var dagarriktiga;
					var row = table.insertRow(-1)
					var cell2 = row.insertCell(-1);
					cell2.setAttribute("class", "bokningsdatum");
					dagarriktiga = String(dagar[q].innerHTML).split('dag');
//console.log(dagarriktiga[1]);
					cell2.innerHTML = "<p>" + "&nbsp;&nbsp;" +dagarriktiga[0]+ "&nbsp;&nbsp;" + dagarriktiga[1] + "</p>"
					q++;
						if(b >= 1){
						smart = (smart - nollstall)
									}	
									
									
				for (var i = 0; i < antal; i++){		
					var tvattaimgriktig;
					var cell = row.insertCell(-1)
					tvattaimgriktig = String(tvattaimg[smart].outerHTML).split('.');
//console.log(tvattaimgriktig[0]);
					tvattaimgriktig = tvattaimgriktig[0] +'.png">';
//console.log(tvattaimgriktig);
					cell.setAttribute("class", "bokningsikoner");	
					cell.innerHTML = "<a>" + tvattaimgriktig + "</a>";
//console.log(tvattaimg[smart].outerHTML);
					//kollar så att inte onmousedown är null
					
						if(tvattaimg[smart].parentNode.onmousedown != null){								
							//splittar upp och tar ut endast värdet ur funktionen
							tvattaimgriktig = String(tvattaimg[smart].outerHTML).split('.');
							tvattaimgriktig = tvattaimgriktig[0] +'.png">';
							var split = String(tvattaimg[smart].parentNode.onmousedown).split("'",2);
							split = "'http://tvatta.sgsstudentbostader.se/" + split[1] +"','"+ urlfranlankar + "'";
							cell.setAttribute("class", "bokningsikoner");
							cell.innerHTML = '<a onmousedown="bokatid(' + split +')">' 
							+ tvattaimgriktig + "</a>";
//console.log(split);							
							}
								
					smart = (smart + extra);
					smart++
								
								}
								}
							
			},
			error: function(){
				console.log('Något har gått snett i tvätta');
				navigator.notification.confirm(
                    'Något gick snett, vill du försöka igen?',
                    yourCallbackTvatta,
                    'Fel',
                    'Nej,Ja'
					)
			}
			})
loadtvattaklar();
			}
			
//alt med hidden InAppBrowser
function bokatid(tiden,nuvarandebokning){
	console.log("Går in i funktionen bokatid");
	 var ref = window.open(tiden, '_blank', 'hidden=yes');
		 
		 ref.addEventListener('loadstart', function(event2){
			console.log('Loadstart v.1.4');
			show();
			//var spinnerevent = document.getElementById('loading');
			//spinnerevent.style.display = 'inline';
		 })
		 
		 ref.addEventListener('loadstop', function(event) {
		 	console.log('Loadstop v.1.5');
		 	//var loading2 = document.getElementById('loading');
			//loading2.style.display = 'none';
			var testarstring = event.url;
		 	if(String(testarstring).match('wwwashcalendar.aspx') != null || String(testarstring).match('NextPage') != null){
		 		console.log('bokatid if-sats');
			 	loadtvatta(nuvarandebokning);
			 	//loadtvattaklar();
		 	}
		 	console.log(event.url);
		 	console.log(event);
		 	console.log(nuvarandebokning);
		 	})
		 	


}

function show_navnummer(){

    var menu = document.getElementById("navnummer");
    console.log(menu);
    if(menu.style.display == 'table-row'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'table-row';                    
    }
}  

function show_navlokal(){

	var menu = document.getElementById("navtvatta");
    if(menu.style.display == 'table'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'table';                    
    }
} 




//hemma.sgsstudentbostader.se

function hamtahemma(){ 
	show();
	$.ajax({
			url: 'http://hemma.sgsstudentbostader.se/DoorControl/Fullscreen',
			success: function(varde) {
			var buttonvalue;
			var buttonname;

							buttonvalue = $(varde).find('button').attr('value');
							buttonname = $(varde).find('button');
							document.getElementById('hemmadorren').value = buttonvalue;
							/*document.getElementById('hemmadorren').innerHTML = buttonname[0].innerHTML*/
							oppnadorr();
						
			},
			//Vill att den skall stänga av loading om det blir fel.
			error: function(varde2, status, error){
				hemmafel();
				loadtvattaklar();
				console.log('Error på hemma-get');
				console.log(varde2);
				console.log(status);
				console.log(error);				
			}
			});

			}
			



function oppnadorr(){
console.log("1");
	var sendform = document.getElementById('hemmadorren');
console.log("1");	
	$.ajax({	
		type: "POST",
		url: "http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock",
		data: "epName=" + encodeURI(sendform.value),
		charset: 'UTF-8',
		success: function(data){
			var vilkenhemma = $(data).find('.doorControlEntryPath');
			vilkenhemma = vilkenhemma[0].innerHTML;
			console.log(vilkenhemma);
			
			var meddelandehemma = $(data).find('.doorControlMessage');
			meddelandehemma = meddelandehemma[0].innerHTML;
			
			hemmavilken(vilkenhemma,meddelandehemma);
			console.log(meddelandehemma[0].innerHTML);
			
			
			loadtvattaklar();
		},
		error: function(){
			console.log('Error på hemma-post');
			hemmafel();
			loadtvattaklar();
		}

		
		
	})
	
console.log("1");	
	
}


//Hanterar horisontell bar
function show(){
	//document.getElementById('bakgrundinformation').className = 'bakgrundinformation_show';
	var spinnerevent = document.getElementById('loading');
	spinnerevent.style.visibility = 'visible';
}


function loadtvattaklar(){
	console.log('laddat klart');
	var spinnerevent = document.getElementById('loading');
			spinnerevent.style.visibility = 'hidden';
	//document.getElementById('bakgrundinformation').className = 'bakgrundinformation_hide';
}