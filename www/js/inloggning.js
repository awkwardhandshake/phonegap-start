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
  var getUsername = $('#username').val();
  var getPassword = $('#password').val();
  loggain(getUsername, getPassword);

}
//logga in	   
function loggain(userNameSGS, passwordSGS, check){
    $.get('http://test-marknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?Method=APILoginSGS&syndicateNo=1',
      {
       username : userNameSGS,
       password : passwordSGS
      },
      function(data) {
      console.log('Jquery getHMS new success!');
      console.log(userNameSGS + ' : ' + passwordSGS);
      localStorage.ReturnCode = data.ReturnCode;
      localStorage.LoggedIn = data.LoggedIn;
      if(check != true) {
        encrypt(userNameSGS, passwordSGS);
      }
      getHMSCheck(data);
    })
    .fail(function(){
			loadtvattaklar();
			navigator.notification.alert('Applikationen verkar ha förlorat kontakten med servern.', inputfields, 'Serverfel', 'Försök igen' );	      
    });
}
	
function getHMSCheck(dataStorage){	
		if(dataStorage.ReturnCode === 'NOMATCH' || dataStorage.ReturnCode === undefined) {
			loadtvattaklar();
			console.log('Användarnamnet eller lösenordet är felaktigt');
			navigator.notification.alert( 'Användarnamnet eller lösenordet är felaktigt.', inputfields, 'Inloggningsfel', 'Försök igen' );

		}
		else if(dataStorage.ReturnCode === 'TOOMANYFAILEDLOGINS') {
			loadtvattaklar();
      console.log('Det verkar som att du har försökt logga in för många gånger.');
			navigator.notification.alert('Det verkar som att du har försökt logga in för många gånger.', inputfields, 'Hoppsan!', 'Vänta lite' );	

	  }
    else if(dataStorage.SecurityTokenId != null) {
      console.log('getLaundry sent');
      GetLaundryBooking(dataStorage.SecurityTokenId, dataStorage);
    }
    else {
      console.log('Login failed');
    }  
}


function GetLaundryBooking(SecurityTokenId, dataStorage){
console.log('GetLaundryBooking active');
    $.get('http://wtest-marknad.sgsstudentbostader.se/Momentum/API/ClientService/GetLaundryBooking/1/'+ dataStorage.ClientNo +'/'+ dataStorage.SGS_CustomerName +'/'+SecurityTokenId+'/'+ dataStorage.Lang +'/', function(data){
      localStorage.urlen = data;
      if(data === 'No URL found.' || data === ""){
        console.log('No URL found. try GetLaundryBookingModuelOld');
        GetLaundryBookingModuelOld(dataStorage);        
      }
      else{
        console.log('Jquery getLaundry success!');
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
    $.get('https://wwww.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?_=1366895108402&customer_name=' + dataStorage.SGS_CustomerName, {
      customerid : dataStorage.UserName,
      isresident : dataStorage.SGS_LivesAtSgs,
      loggedin : dataStorage.LoggedIn,
      token : dataStorage.SecurityTokenId,
      tvattstuga : dataStorage.SGS_Laundry
    }, 
      function(data) {
        console.log('Jquery getLaundry success!');
        byggnad('https://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se');
    })
    .fail(function(){
			loadtvattaklar();
			navigator.notification.alert('Det gick inte att hämta bokningsfönstret', startsida, 'Hämtningsfel', 'Försök igen' );	      
    });    
  }
function loggaut(button){
  if(button == 2){			
  var failLoggaUt;
    $.get('https://mmarknad.sgsstudentbostader.se/API/Service/AuthorizationServiceHandler.ashx?&Method=APILogout',
      function(data) {
        console.log('loggaut marknad ' + data);
      })
      .fail(function(){
        failLoggaUt = true;
  			navigator.notification.alert('Det gick inte att slutföra utloggningen', dummiefunktion, 'Utloggningsfel', 'Försök igen' );	      
      });    
    $.get('http://sgsstudentbostader.se/Assets/Handlers/MomentumLogout.ashx',
      function(data) {
        console.log('loggaut momentum ' + data); 
      })
      .fail(function(){
        failLoggaUt = true;
  			navigator.notification.alert('Det gick inte att slutföra utloggningen', dummiefunktion, 'Utloggningsfel', 'Försök igen' );	      
      });    
    if(failLoggaUt != true){
      console.log(failLoggaUt);
    	localStorage.LoggedIn = 'false';
    	localStorage.anv = null;
    	localStorage.pass = null;
    	navigator.notification.alert('Stäng ner applikationen och starta om den för att påskynda utloggningen.', dummiefunktion, 'Snart utloggad!', 'Ok');
    }
  }
}