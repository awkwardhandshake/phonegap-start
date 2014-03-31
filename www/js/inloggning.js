//Kolla om inlogg redan existrerar
function kollainlogg(){
show();
'use strict';
	if(localStorage.LoggedIn == 'true'){
		hamta();
		//loadtvatta('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		//byggnad('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		console.log('Det verkar finnas en användare');
		console.log("Detta är användaren" + localStorage.ReturnCode);
	}
	else{
		inputfields();
		loadtvattaklar();
		if(localStorage.ReturnCode == 'TOOMANYFAILEDLOGINS'){
			console.log('Du har loggat in för många gånger, var god vänta en stund och försök igen');
			tomany();
			loadtvattaklar();
		}
		console.log('Detta är användaren i else ' + localStorage.LoggedIn);
		}
	}




var historik = new Array();
//Hämtar inloggningsformet
function getFormData(){	   
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
console.log("Den skickar inloggningen");
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
			console.log(newsItem + " = " + localStorage[newsItem])
			
		});
		
		if(localStorage.ReturnCode == 'NOMATCH'){
			inloggningfel();
		}
		else{
		
	  loggain()
	  }
	  });
	  
};		  

//logga in	   
function loggain(){
var str1="_=1366895108402&customer_name=" + localStorage.SGS_CustomerName + "&customerid=" + localStorage.UserName + "&isresident=" + localStorage.SGS_LivesAtSgs + "&loggedin=" + localStorage.LoggedIn + "&token=" + localStorage.SecurityTokenId + "&tvattstuga=" + localStorage.SGS_Laundry;
localStorage.urlen="http://www.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?" + str1;
console.log("Logga in delen, nuvarande sgs.se URL  " + localStorage.urlen);
console.log("Användare sparad från form " + localStorage.anv);
console.log("Logga in delen " + localStorage.UserName);
hiddenbrowser();
}

//alt med hidden InAppBrowser
function hiddenbrowser(){
	console.log("Går in i funktionen hiddenbrowser");
	 var ref = window.open(localStorage.urlen, '_blank', 'hidden=yes');
 //Denna skall in i loadstop funktionen.
	 console.log(ref);
	 	ref.addEventListener('loadstart', function(event) {
	 		console.log('Inloggning hidden loadstart');
		 	show();
	 	})
		ref.addEventListener('loadstop', function(event) {
			 byggnad('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');			 
			 console.log("Inloggning hidden loadstop");
	
	
})

}

function loggaut(button){
if(button == 2){			
	var loggautmomentum = window.open('http://www.sgsstudentbostader.se/Assets/Handlers/MomentumLogout.ashx?_=1390854127881', '_blank', 'hidden=yes');
	var loggautmarknad = window.open('http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&Method=APILogout&callback=jsonp1390854117395', '_blank', 'hidden=yes');
	console.log("Loggar ut momentum " + loggautmomentum);
	console.log("Loggar ut marknad " + loggautmarknad);
	
	loggautmomentum.addEventListener('loadstop', function(momentumevent){
		console.log('Den har laddat klart logga ut momentum');
		console.log(momentumevent);
	})
	
	loggautmarknad.addEventListener('loadstop', function(marknadevent){
		console.log('Den har laddat klart logga ut marknad');
		console.log(marknadevent);
	})
	console.log('Sätter anv och pass till null');
	localStorage.LoggedIn = 'false';
	
	alert('Du är nu utloggad');
	console.log(localStorage.LoggedIn);
	//navigator.app.exitApp() ;
	alert('Du är nu utloggad 2');
	}
}


