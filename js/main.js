
$(document).ready(function(){

// START -> ANIMATION

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$('.willkommen-bei')
		.addClass('animated zoomIn')
		.css('display', 'block')
		.css('-webkit-animation-duration', '1.5s')
		.css('-ms-animation-duration', '1.5s')
	.one(animationEnd, function() {
		$(this).css('display', 'none');
		$('.willkommen-title, .willkommen-text').css('display', 'block')
		.css('-webkit-animation-duration', '2s')
		.css('-ms-animation-duration', '2s')
		.addClass('animated fadeIn');

	});

// END -> ANIMATION

// START -> NAVBAR ANGEBOTE
$('.angebote-start').addClass('angebote-visible');
$('.angebote-logo').addClass('angebote-visible');

$('.angebote-navbar-content span').click(function(){
	$('.angebote-logo').removeClass('angebote-visible');
});

$('#angebote-fuhrung').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-fuhrung').addClass('angebote-visible');
});

$('#angebote-coaching').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-coaching').addClass('angebote-visible');
});

$('#angebote-konflikt').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-konflikt').addClass('angebote-visible');
});

$('#angebote-begleitung').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-begleitung').addClass('angebote-visible');
});

$('#angebote-trainings').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-trainings').addClass('angebote-visible');
});

$('#angebote-team').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-team').addClass('angebote-visible');
});


// START -> NAVBAR ANGEBOTE

// START -> NAVBAR ANIMATION

var select = false;

$('.willkommen-l')
	.animate({width: '+=2vw'},'fast')
	.css('background-image','url(../img/45degreee.png)')
	.css('font-weight','900')
	.css('color','#008080')
	.addClass('extended');
	select = true




$('.nav-list').mouseenter(function(){

	$('.extended').animate({width: '-=2vw'},'fast')
		.css('background-image','url(../img/45degreeeLightblue.png)')
		.css('font-weight','normal')
		.css('color','#e8e8e8')
		.removeClass('extended');
		select = false

}).mouseenter(function(){
	if (select == false) {
		$(this).animate({width: '+=2vw'},'fast');
		$(this).css('background-image','url(../img/45degreee.png)');
		$(this).css('font-weight','900');
		$(this).css('color','#008080');
		$(this).addClass('extended');
		select = true;
} else {};

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

$('.vita-l').mouseenter(function(){
	$('.content').scrollTo('.vita-s',500);
});

$('.angebote-l').mouseenter(function(){
	$('.content').scrollTo('.angebote-s',500);
});

$('.info-l').mouseenter(function(){
	$('.content').scrollTo('.info-s',500);
});
// END -> SMOOTH SCROLLING

});
