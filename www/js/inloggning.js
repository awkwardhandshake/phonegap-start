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
      navigator.notification.alert( 'Det verkar som att du har försökt logga in för många gånger.', inputfields, 'Hoppsan!', 'Vänta lite' );
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
   var version;
   getHMS(version, userNameSGS, passwordSGS);
   console.log('loggain aktiverad');
}

function getHMS(version, usernameSGS, passwordSGS){
  var dataStorage;
    $.get('http://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?Method=APILoginSGS&syndicateNo=1',
      {
       username : usernameSGS,
       password : passwordSGS
      },
      function(data) {
      console.log('Jquery getHMS new success!');
      localStorage.ReturnCode = data.ReturnCode;
      localStorage.LoggedIn = data.LoggedIn;
      console.log(data.SecurityTokenId + ':' + data.ReturnCode + ':' + data.LoggedIn + ' : ' + data.LoggedIn);
      dataStorage = data;
      getHMSCheck(data, version);
    });
}	
	
function getHMSCheck(dataStorage, version){	
		if(dataStorage.ReturnCode === 'NOMATCH' || dataStorage.ReturnCode === undefined) {
			loadtvattaklar();
			console.log('Användarnamnet eller lösenordet är felaktigt');
			navigator.notification.alert( 'Användarnamnet eller lösenordet är felaktigt', inputfields, 'Inloggningsfel', 'Försök igen' );

		}
		else if(dataStorage.ReturnCode === 'TOOMANYFAILEDLOGINS') {
			loadtvattaklar();
      console.log('Det verkar som att du har försökt logga in för många gånger.');
			navigator.notification.alert('Det verkar som att du har försökt logga in för många gånger.', inputfields, 'Hoppsan!', 'Vänta lite' );	

	  }
    else if(dataStorage.SecurityTokenId != null) {
      console.log('getLaundry sent');
      GetLaundryBooking(dataStorage.SecurityTokenId, version, dataStorage);
    }
    else {
      console.log('Login failed');
    }  
}


function GetLaundryBooking(SecurityTokenId, version, dataStorage){
console.log('getLaundry active');
    $.get('http://test-marknad.sgsstudentbostader.se/Momentum/API/ClientService/GetLaundryBooking/1/'+ dataStorage.ClientNo +'/'+ dataStorage.SGS_CustomerName +'/'+SecurityTokenId+'/'+ dataStorage.Lang +'/', function(data){
      console.log('Jquery getLaundry success!');
      console.log(data);
      localStorage.urlen = data;
      if(data === 'No URL found.' || data === ""){
        console.log('No URL found. try GetLaundryBookingModuelOld');
        GetLaundryBookingModuelOld(dataStorage);        
      }
      else{
        byggnad(data);
      }
    })
    .fail(function(){
      console.log('try GetLaundryBookingModuelOld');
      GetLaundryBookingModuelOld(dataStorage);
    });
}
  
  function GetLaundryBookingModuelOld(dataStorage) {
  console.log('GetLaundryBookingModuelOld active');
    $.get('https://www.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?_=1366895108402&customer_name=' + dataStorage.SGS_CustomerName, {
      customerid : dataStorage.UserName,
      isresident : dataStorage.SGS_LivesAtSgs,
      loggedin : dataStorage.LoggedIn,
      token : dataStorage.SecurityTokenId,
      tvattstuga : dataStorage.SGS_Laundry
    }, 
      function(data) {
        console.log('Jquery getLaundry success!');
        console.log(data);
//        localStorage.urlen = data;
        byggnad('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se');
    });
  }
function loggaut(button){
if(button == 2){			
  $.get('https://marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&Method=APILogout',
    function(data) {
      console.log('loggaut marknad ' + data);
    });
  $.get('http://sgsstudentbostader.se/Assets/Handlers/MomentumLogout.ashx',
    function(data) {
      console.log('loggaut momentum ' + data); 
    });
	localStorage.LoggedIn = 'false';
	localStorage.anv = null;
	localStorage.pass = null;
	navigator.notification.alert(
			'Stäng ner applikationen och starta om den för att påskynda utloggningen.',  // message
			dummiefunktion,         // callback
			'Snart utloggad!',      // title
			'Ok'         // buttonName
			);
	}
}