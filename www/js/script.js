//Hämtar inloggningsformet
function getFormData(){    
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
console.log("Den skickar inloggningen");
//iframe();
hamta();
hiddenbrowser();
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
bytiframe();
}
//alt med iframe
function bytiframe(){
	  var hej1 = document.getElementById('hej1').src=localStorage.urlen
	  console.log("Nu sätts iframe adressen till inlogg");

	  //tvattstuga();

//alt med hidden InAppBrowser
function hiddenbrowser(){
	 var ref = window.open('http://www.google.se', '_blank', 'hidden=yes');
         ref.addEventListener('loadstop', function(event) {
             alert('background window loaded'); 
	
	
})
}
}
//setTimeout((function tvattstuga(){
//var hej1 = document.getElementById('hej1').src="http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName";
//console.log("Nu byts adressen till tvättstuga");
//}),3000);
//}