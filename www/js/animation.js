function info_animation(){
	document.getElementById('bakgrundinformation').className = 'bakgrundinformation_show';
	document.getElementById('information').className = 'inforuta';
	
}


$('#bakgrundinformation').click(function() {
	document.getElementById('information').className = 'inforuta_ani_hide';
	document.getElementById('bakgrundinformation').className = 'bakgrundinformation_hide';
});

$('#infoclick').click(function(event){
    event.stopPropagation();
});
