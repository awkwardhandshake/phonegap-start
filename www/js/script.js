//Hämtar inloggningsformet
function getFormData(){	   
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
console.log("Den skickar inloggningen");
//iframe();
hamta();
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
	 skapatable();
	 loadtvatta();
	 console.log(ref);
		 ref.addEventListener('loadstop', function(event) {
			 alert('background window loaded'); 
			 
			 console.log("www.google.se är laddad i bakgrunden");
	
	
})

}


//Vi laddar in hela tvatta.sgsstudentbostader.se
function loadtvatta(){ 
	document.getElementById("topploga").src = " ";
	var tvattaimg;
	var antaltider;
	var nummer;
	var dagar;
	var tiderdygnet;
	var c = 0;

	var table = document.getElementById('myTable');
	$.ajax({
			url: 'http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName',
			success: function(data) {
				var root2 = document.getElementById('mydiv2');
				var tab2=document.createElement('table');
				tvattaimg = $(data).find("#tbl1 [src]");
				//nummer = $(data).find("#tbl1 a");
				antaltider = $(data).find( "#tbl1 tr:contains('-')");
				dagar = $(data).find("#tbl1 th");
				lank = $(data).find("#tbl1 [onmousedown]");
				tiderdygnet = $(data).find("#tbl1 td:contains(':')");
				var antal = antaltider.length;
				console.log(tiderdygnet[4].innerHTML);
				
				
				//Här byggs tabellen upp						
				var smart = 0;
				var extra = 6;
				var q = 1;
				var nollstall = ((antal * 7)-1);
				var headrow = table.insertRow(-1);
				var f = 0;
				headrow.insertCell(-1);
				for (h = 0; h < antal; h++){
						var headcell = headrow.insertCell(-1);
						headcell.innerHTML = tiderdygnet[f].innerHTML;
						f++
						console.log(f);
						}
				for (var b = 0; b < 7; b++){
					var row = table.insertRow(-1)
					
					
					var cell2 = row.insertCell(-1);
					cell2.innerHTML = "<p>" + dagar[q].innerHTML + "</p>"
					q++;
						if(b >= 1){
						smart = (smart - nollstall)
									}	
									
									
				for (var i = 0; i < antal; i++){
				
					var cell = row.insertCell(-1)	
					cell.innerHTML = "<a>" + tvattaimg[smart].outerHTML + "</a>";
					//kollar så att inte onmousedown är null
					
						if(tvattaimg[smart].parentNode.onmousedown != null){
									
							//splittar upp och tar ut endast värdet ur funktionen
							split = String(tvattaimg[smart].parentNode.onmousedown).split("'"); 
							cell.innerHTML = 								
							"<a href=http://tvatta.sgsstudentbostader.se/" + split[1] + ">" + tvattaimg[smart].outerHTML + "</a>";
							//console.log(res);
							console.log("Testar att splitta stringen	 " + split[1]);
							}
								
					console.log("CELLER	" + smart);
					smart = (smart + extra);
					smart++
								
								}
								}
							
			}
			})
			}