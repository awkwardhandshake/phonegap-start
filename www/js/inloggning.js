//Kolla om inlogg redan existrerar
function kollainlogg(){
show();
'use strict';
	if(localStorage.LoggedIn == 'true'){
		//dehamta(localStorage.anv,localStorage.pass);
		//loadtvatta('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		byggnad('http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName');
		console.log('Det verkar finnas en användare');
		console.log("Detta är användaren" + localStorage.ReturnCode);
	}
	else{
		inputfields();
		loadtvattaklar();
		if(localStorage.ReturnCode == 'TOOMANYFAILEDLOGINS'){
			loadtvattaklar();
			navigator.notification.alert(
			'Det verkar som att du har försökt logga in för många gånger.',  // message
			inputfields,         // callback
			'Hoppsan!',      // title
			'Vänta lite'         // buttonName
			);
			console.log('Du har loggat in för många gånger, var god vänta en stund och försök igen');
		}
		console.log('Detta är användaren i else ' + localStorage.LoggedIn);
		}
	}




var historik = new Array();
//Hämtar inloggningsformet
function getFormData(){
show();  
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
console.log("Den skickar inloggningen");
//Kyrptering av känslig data
encrypt(localStorage.anv,localStorage.pass);
dehamta(localStorage.anv,localStorage.pass);

}

//hämta marknad
function hamta(anv,pass) {
	$.getJSON("http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&syndicateNo=1&syndicateObjectMainGroupNo=1&username=" +anv.toString(CryptoJS.enc.Utf8)+ "&password=" +pass.toString(CryptoJS.enc.Utf8)+ "&Method=APILoginSGS&callback=?",
	
	  function(result) {
		//det går utmärkt att göra denna hämtning via en variabel, localStorage går alltså att utesluta.
		//var infoinlogg = new Object();
		console.log(result);
		$.each(result, function (newsItem,news)
		{
		//infoinlogg[newsItem]=news;
		localStorage[newsItem]=news
			console.log(newsItem + " = " + localStorage[newsItem])
		//	console.log(infoinlogg[newsItem]);
		});
		
		if(localStorage.ReturnCode === 'NOMATCH'){
			loadtvattaklar();
			navigator.notification.alert(
			'Användarnamnet eller lösenordet är felaktigt',  // message
			inputfields,         // callback
			'Inloggningsfel',      // title
			'Försök igen'         // buttonName
			);

		}
		else if(localStorage.ReturnCode === 'TOOMANYFAILEDLOGINS'){
			navigator.notification.alert(
			'Det verkar som att du har försökt logga in för många gånger.',  // message
			inputfields,         // callback
			'Hoppsan!',      // title
			'Vänta lite'         // buttonName
			);	
			loadtvattaklar();
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
hiddenbrowser();
}

//Hidden InAppBrowser
function hiddenbrowser(){
	console.log("Går in i funktionen hiddenbrowser");
	 var ref = window.open(localStorage.urlen, '_blank', 'hidden=yes');
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
	localStorage.removeItem(anv);
	localStorage.removeItem(pass);
	console.log(localStorage.LoggedIn);
	
	//var mobilsystem = device.platform;
	//console.log(mobilsystem);
	
	//if(mobilsystem != 'iOS'){
	//	navigator.app.exitApp();
	//}
	//alert('Du är nu utloggad!');
	
	}
}


