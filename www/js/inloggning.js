//Kolla om inlogg redan existrerar
function kollainlogg(){
  show();
  'use strict';
  if(localStorage.LoggedIn == 'true'){
    dehamta(localStorage.anv,localStorage.pass);
  }
  else{
    inputfields();
    loadtvattaklar();
    if(localStorage.ReturnCode == 'TOOMANYFAILEDLOGINS'){
      loadtvattaklar();
//      navigator.notification.alert( 'Det verkar som att du har försökt logga in för många gånger.', inputfields, 'Hoppsan!', 'Vänta lite' );
      console.log('Du har loggat in för många gånger, var god vänta en stund och försök igen');
    }
  }
}




var historik = new Array();
//Hämtar inloggningsformet

function getFormData(){
  show();  
  localStorage.anv=document.getElementById("username").value;
  localStorage.pass=document.getElementById("password").value;
  console.log("Den skickar inloggningen");
  encrypt(localStorage.anv,localStorage.pass);
  dehamta(localStorage.anv,localStorage.pass);

}

		  

//logga in	   
function loggain(anvSGS, passSGS){
   var userNameSGS = anvSGS.toString(CryptoJS.enc.Utf8);
   var passwordSGS = passSGS.toString(CryptoJS.enc.Utf8);
   var SyndicateNo = 1;
   var varsion;
   version = 'new';

   getHMS(version, userNameSGS, passwordSGS);
   console.log('loggain aktiverad');
/*
  $.post('http://tesssst-marknad.sgsstudentbostader.se/pgLogin.aspx', 
  {
      __EVENTTARGET : 'DoLogin',
      __VIEWSTATE   : '/wEPDwUJMzc4ODQ2ODcxD2QWAmYPZBYCZg9kFgICAw9kFgICAw9kFgQCBQ8PFgIeB1Zpc2libGVoZGQCBg9kFgYCAQ9kFgQCBw8WAh4JaW5uZXJodG1sBSFMb2dnYSBpbi9HbCYjMjQ2O210IGwmIzI0NjtzZW5vcmRkAgkPZBYCAgEPDxYCHgRUZXh0BSc8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJ1dGYtMTYiPz5kZAIDD2QWIAIBDw8WBB4ISW1hZ2VVcmwFOC9zZ3MvYWxsL3N0dWRlcmFuZGUvaW1hZ2VzLy4uL3BnTG9naW4vaW1hZ2VzL255Y2tlbDIuZ2lmHg1BbHRlcm5hdGVUZXh0ZWRkAgMPDxYCHwIFDUFudsOkbmRhcm5hbW5kZAIFDw9kFgQeCHJlcXVpcmVkZR4TZGF0YS1ydWxlLW1heGxlbmd0aAUCNTBkAgcPDxYCHwIFCUzDtnNlbm9yZGRkAgkPD2QWBB8FZR8GBQI1MGQCCw8PFgIfAgUgU2tpY2thIG1pbmEgaW5sb2dnbmluZ3N1cHBnaWZ0ZXJkZAINDw8WAh8CBTBGeWxsIGkgZsOkbHRlbiBuZWRhbiBvbSBkdSBnbMO2bXQgZGl0dCBsw7ZzZW5vcmRkZAIRD2QWAmYPDxYCHwIFG1NraWNrYSBpbmxvZ2duaW5nc3VwcGdpZnRlcmRkAhcPDxYCHwIF3AFPbSBkdSBoYXIga29udGFrdHPDpHR0IGUtcG9zdCBvY2ggaW50ZSBoYXIgZW4gdmVyaWZpZXJhZCBlLXBvc3RhZHJlc3MsIHPDpSBrb21tZXIgZGV0IGF1dG9tYXRpc2t0IHNraWNrYXMgdXQgZXR0IHZlcmlmaWVyaW5nc21lZGRlbGFuZGUgZsO2cnN0LiBOw6RyIGRpbiBlLXBvc3RhZHJlc3MgaGFyIHZlcmlmaWVyYXRzIHPDpSBrb21tZXIgbMO2c2Vub3JkZXQgYXR0IHNraWNrYXMgdXQuZGQCGQ8PZBYCHg1tb20td2F0ZXJtYXJrBR9QZXJzb25udW1tZXIgKMOlw6XDpcOlbW1kZG5ubm4pZAIbDw9kFgIfBwUMT0NSIHJlZmVyZW5zZAIdDw9kFgIfBwUfUGVyc29ubnVtbWVyICjDpcOlw6XDpW1tZGRubm5uKWQCHw8PZBYCHwcFH1BlcnNvbm51bW1lciAow6XDpcOlw6VtbWRkbm5ubilkAiEPDxYCHwIFhwFEaW4gYWRyZXNzIGtvbW1lciBhdXRvbWF0aXNrdCBhdHQgYmxpIHVwcGRhdGVyYWQgdGlsbCBkaW4gZm9sa2Jva2bDtnJuaW5nc2FkcmVzcy4gU2VkYW4ga29tbWVyIGRpdHQgbMO2c2Vub3JkIGF0dCBza2lja2FzIHV0IHZpYSBicmV2Li5kZAInDxAPFgIfAgUYQWt0aXZlcmEgc25hYmJpbmxvZ2duaW5nZGRkZAIrDw8WAh8CZWRkAgUPZBYIAgEPDxYCHwMFKy9zZ3MvYWxsL3N0dWRlcmFuZGUvcGdMb2dpbi9pbWFnZXMvbG9jay5wbmdkZAIDDxYCHwIFG0RpdHQga29udG8gaGFyIGJsaXZpdCBsw6VzdGQCBQ8WAh8CBR9EZXQgw7ZwcG5hcyBpZ2VuIHt7dW5sb2NrZGF0ZX19ZAIHDw8WAh8CZWRkZCo5mBlMtD2B3w/0MBqr6mrv8SNSd6lKjIOmOIQxMLe7',
    __EVENTVALIDATION : '/wEdAAzQmm7tfz5aZ3ylgaqxk8eZexTBAvXzVCFOoET/RmPPlKmQaT3JpNj5NInoAKY/HIsu0pQYz24kyXKo6KfYaI+MUTCp2X4fAnXnQHCRROEOQm66BMseKj+q1ac1HUs9qs5tGJuNnLz4ey/ZebCjjjpID+Ew+m6pYSJzMG2QaQ2KqxwvaH8JeIuk96iePkQwQst3Kklz111qsv4ROtN6kR2yb/kZ8aosktMuqXyQh4lQjTleFgwBF73wgXLb+Rd8NWTD7OR6tzHQlGUFZpwBEERPyyhkGgZm70DGxBp8B4Fetw==',
    '_ctl0:_ctl0:HolderForNestedPage:placeAction:ucLogin1:txtClientNo'  : userNameSGS,
    '_ctl0:_ctl0:HolderForNestedPage:placeAction:ucLogin1:txtPINCode' :  passwordSGS
  },
  function (data){
    console.log('Jquery loggain success!');
    version = 'new';
    getHMS(version, userNameSGS, passwordSGS);
  })
  .fail(function() {
    console.log('SGSNew fail, attempts old');
    loggainOld(userNameSGS, passwordSGS);
  })
*/
function loggainOld(anvSGSOld, passSGSOld){
  	$.get("http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&syndicateNo=1&syndicateObjectMainGroupNo=1&username=" + anvSGSOld + "&password=" + passSGSOld + "&Method=APILoginSGS",
  function (data) {
    console.log('Jquery loggain success!');
    version = 'old';
    localStorage.ReturnCode = data.ReturnCode;
    localStorage.LoggedIn = data.LoggedIn;

    getHMSCheck(data, version);
//    getHMS(version);
  })
/*
  .fail(function() {
    console.log('SGSOld fail, no more attempt. Throw error');
//    loggainOld(userNameSGS, passwordSGS);
  })
*/  
}

function getHMS(version, usernameSGS, passwordSGS){
  var dataStorage;
  if(version == 'new') {

    $.get('http://test-marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?Method=APILoginSGS&syndicateNo=1',
      {
       username : usernameSGS,
       password : passwordSGS
      },
      function(data) {
      console.log('Jquery getHMS new success!');
//      console.log(data);
      localStorage.ReturnCode = data.ReturnCode;
      localStorage.LoggedIn = data.LoggedIn;
      console.log(data.SecurityTokenId + ':' + data.ReturnCode + ':' + data.LoggedIn + ' : ' + data.LoggedIn);
      dataStorage = data;
      getHMSCheck(data, version);
    });
	}
	else if(version == 'old') {

  	$.get('http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&syndicateNo=1&syndicateObjectMainGroupNo=1&username=206167&password=123456&Method=APILoginSGS', 
  	function(data) {
      console.log('Jquery getHMS old success!');
      console.log(data);
      localStorage.ReturnCode = data.ReturnCode;
      localStorage.LoggedIn = data.LoggedIn;
      console.log(data.SecurityTokenId + ':' + data.ReturnCode + ':' + data.LoggedIn + ' : ' + data.LoggedIn);
      dataStorage = data;
      getHMSCheck(data, version);
    });
	}
}	
	
function getHMSCheck(dataStorage, version){	
		if(dataStorage.ReturnCode === 'NOMATCH' || dataStorage.ReturnCode === undefined) {
			loadtvattaklar();
			console.log('Användarnamnet eller lösenordet är felaktigt');
//			navigator.notification.alert( 'Användarnamnet eller lösenordet är felaktigt', inputfields, 'Inloggningsfel', 'Försök igen' );

		}
		else if(dataStorage.ReturnCode === 'TOOMANYFAILEDLOGINS') {
			loadtvattaklar();
      console.log('Det verkar som att du har försökt logga in för många gånger.');
//			navigator.notification.alert('Det verkar som att du har försökt logga in för många gånger.', inputfields, 'Hoppsan!', 'Vänta lite' );	

	  }
    else if(dataStorage.SecurityTokenId != null) {
      console.log('getLaundry sent');
      getLaundry(dataStorage.SecurityTokenId, version, dataStorage);
    }
    else {
      console.log('Login failed');
    }  
}


function getLaundry(SecurityTokenId, version, dataStorage){
console.log('getLaundry active');
  if(version == 'new'){

// Denna fungerar även när vi inte använder post, mitt förslag: logga in via get skicka vidare för att kolla inlogget, skicka till tvatta
    $.get('http://test-mmarknad.sgsstudentbostader.se/Momentum/API/ClientService/GetLaundryBooking/1/'+ dataStorage.ClientNo +'/'+ dataStorage.SGS_CustomerName +'/'+SecurityTokenId+'/'+ dataStorage.Lang +'/', function(data){
      console.log('Jquery getLaundry success!');
      localStorage.urlen = data;
      byggnad(data);
    })
    .fail(function(){
      console.log('try old');
    });
  }
  else if(version == 'old'){

    var str1="_=1366895108402&customer_name=" + dataStorage.SGS_CustomerName + "&customerid=" + dataStorage.UserName + "&isresident=" + dataStorage.SGS_LivesAtSgs + "&loggedin=" + dataStorage.LoggedIn + "&token=" + dataStorage.SecurityTokenId + "&tvattstuga=" + dataStorage.SGS_Laundry;
    var urlen="https://www.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?" + str1;
    console.log(urlen);
    
    $.get(urlen, function(data){
    console.log('Jquery getLaundry success!');
    console.log(data);
    localStorage.urlen = data;
    byggnad('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se');
    })
  }

}

}



function loggaut(button){
if(button == 2){			
	var loggautmomentum = window.open('https://www.sgsstudentbostader.se/Assets/Handlers/MomentumLogout.ashx?_=1390854127881', '_blank', 'hidden=yes');
	var loggautmarknad = window.open('https://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&Method=APILogout&callback=jsonp1390854117395', '_blank', 'hidden=yes');
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
	localStorage.anv = null;
	localStorage.pass = null;
	console.log('Null på båda');
	
	navigator.notification.alert(
			'Stäng ner applikationen och starta om den för att påskynda utloggningen.',  // message
			dummiefunktion,         // callback
			'Snart utloggad!',      // title
			'Ok'         // buttonName
			);
	
	
	}
}