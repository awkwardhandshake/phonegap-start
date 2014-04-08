function info_animation(){
	//document.getElementById('bakgrundinformation').className = 'bakgrundinformation_show';
	document.getElementById('information').className = 'nyinforuta';
	
}


$('#index').click(function() {
	document.getElementById('information').className = 'nyinforuta_hide';

});

$('#infoclick').click(function(event){
    event.stopPropagation();
});
