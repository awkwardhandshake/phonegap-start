function allalankar(lankarurl){
console.log(lankarurl);
$.ajax({
	url: lankarurl,
	success: function(datalankar){
		var lankar = $(datalankar).find("table td[width=12%][align].headerColor");
		console.log(lankar[1].onmousedown);
		var lankstring = String(lankar[1].onmousedown).split("'");
		console.log(lankstring[1]);
		lankstring = "http://tvatta.sgsstudentbostader.se/"+lankstring[1];
		console.log(lankstring);
		allalankar(lankstring);
	}	
})	
	
	
	
}