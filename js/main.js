
$(document).ready(function(){



// START -> NAVBAR ANIMATION

$('.nav-list').mouseenter(function(){
	$(this).animate({width: '+=2vw'},'fast')
	.css('background-image','url(../img/45degreee.png)')
	.css('font-weight','900')
	.css('color','#008080');

}).mouseleave(function(){
	$(this).animate({width: '-=2vw'},'fast');
	$(this).css('background-image','url(../img/45degreeeLightblue.png)');
	$(this).css('font-weight','normal')
	.css('color','#e8e8e8');
});



$('.nav-list-info').mouseenter(function(){
	$('#mail').attr("src",'img/mailblue.png');
	$(this).css('background-image','url(../img/45degreee.png)');
	$(this).css('font-weight','900')
	$('#info-s').css('color','#008080');

}).mouseleave(function(){
	$('#mail').attr("src",'img/mail.png');
	$(this).css('background-image','url(../img/45degreeeLightblue.png)');
	$(this).css('font-weight','normal')
	$('#info-s').css('color','#e8e8e8');
});

// END -> NAVBAR ANIMATION



// START -> SMOOTH SCROLLING

$('.willkommen-l').mouseenter(function(){
	$('.content').scrollTo('.willkommen-s',500);
});

$('.ubermich-l').mouseenter(function(){
	$('.content').scrollTo('.ubermich-s',500);
});

$('.angebote-l').mouseenter(function(){
	$('.content').scrollTo('.angebote-s',500);
});

$('.info-l').mouseenter(function(){
	$('.content').scrollTo('.info-s',500);
});
// END -> SMOOTH SCROLLING

});