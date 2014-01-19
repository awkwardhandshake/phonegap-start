
//Hämtar inloggningsformet
function getFormData(){    
localStorage.anv=document.getElementById("username").value;
localStorage.pass=document.getElementById("password").value;
//location.reload();
iframe()
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
			console.log("Detta lagras för tillfället " + localStorage[newsItem]);
			
        });
      localStorage.i = 5;
      loggain()
      });
      
};        
      
console.log(localStorage.i);

//logga in     
function loggain(){
localStorage.removeItem(localStorage.urlen);
var str1="_=1366895108402&customer_name=" + localStorage.SGS_CustomerName + "&customerid=" + localStorage.UserName + "&isresident=" + localStorage.SGS_LivesAtSgs + "&loggedin=" + localStorage.LoggedIn + "&token=" + localStorage.SecurityTokenId + "&tvattstuga=" + localStorage.SGS_Laundry;
localStorage.urlen="http://www.sgsstudentbostader.se/Assets/Handlers/Momentum.ashx?" + str1;
console.log("Logga in delen, nuvarande sgs.se URL  " + localStorage.urlen);
console.log("Användare sparad från form " + localStorage.anv);
console.log("Logga in delen " + localStorage.UserName);
//Startar en sektion
//$(function(){

bytiframe()
}

function bytiframe(){
	  var hej1 = document.getElementById('hej1').src=localStorage.urlen;
setTimeout((function tvattstuga(){
	var hej1 = document.getElementById('hej1').src="http://www.sgsstudentbostader.se/ext_gw.aspx?module=wwwash&lang=se#lblPanelName";
}),3000)	
	
	
}