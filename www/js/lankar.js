function loadlankar(urlfranlankar){
	skapatvattatable(); 	
	var lankartvatta;
	var valjabokning;
	var typlokal;
	var c = 0;
	var lank;
	var recordposition;
	var navtable = document.getElementById('navtvatta');
	var navtablebottom = document.getElementById('navtablebottom');
	$.ajax({
			url: urlfranlankar,
			success: function(data) {
//console.log('Går in i ajax');			
//				var root2 = document.getElementById('mydiv2');
//				var tab2=document.createElement('table');
//				tvattaimg = $(data).find("#tbl1 [src]");
//				nummer = $(data).find("#tbl1 a");
//				antaltider = $(data).find( "#tbl1 tr:contains('-')");
//				dagar = $(data).find("#tbl1 th");
//				lank = $(data).find("#tbl1 [onmousedown]");
//				tiderdygnet = $(data).find("#tbl1 td:contains(':')");
				lankartvatta = $(data).find("#tblNav td.periodLinkColor");
				valjabokning = $(data).find("table td[width=12%][align].headerColor");
				typlokal = $(data).find("td[background]");
//				var antal = antaltider.length;




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
						lokalcell.setAttribute("onmousedown", "loadlanktvatt("+ lokalenriktig +")" )
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
}
})
}