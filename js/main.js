
$(document).ready(function(){

	// START -> RELOAD ON ZOOM
		jQuery(function($){
	var windowWidth = $(window).width();

	$(window).resize(function() {
	    if(windowWidth != $(window).width()){
	    location.reload();
	    return;
	    }
	});
	});
	// END -> RELOAD ON ZOOM


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

// $('.willkommen-l').animate({width: '+=2vw'},'fast')
// 	.css('background-color','white')
// 	.css('font-weight','900')
// 	.css('color','#076e7b')
// 	.addClass('extended');

// END -> ANIMATION



// START -> NAVBAR ANGEBOTE
$('.angebote-start').addClass('angebote-visible');
$('.angebote-logo').addClass('angebote-visible');

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

$('#angebote-arbeitsweise').click(function(){
	$('.angebote-text').removeClass('angebote-visible');
	$('.angebote-arbeitsweise').addClass('angebote-visible');
});

// START -> NAVBAR ANGEBOTE

// START -> NAVBAR ANIMATION


$('.nav-list,.nav-list-info').mouseenter(function(element){
	var elementClass = element.target.className;
	var elementClassFirst = "."+elementClass.split(" ")[0];
	var elementClassSite = elementClassFirst.replace("-l","-s");

	// wirde aktives Element nochmals aktiviert -> keine Aktion
	if (elementClass.includes('extended')){

	}else if (elementClass.includes('extended-info')) {

	}else if(elementClass.includes('nav-list-info')){
		// Alle vorherigen Elemente werden zurückgesetzt
		$('.extended').animate({width: '-=2vw'},'fast')
			.css('background-color','#00b5cc')
			.css('font-weight','normal')
			.css('color','#e8e8e8')
		.removeClass('extended');

		// Kontakt-Leiste wird aktiviert
		$('.nav-list-info').animate({width: '+=2vw'},'fast')
		.addClass('extended-info')
		.css('background-color','white')
		.css('font-weight','900');
		$('#info-s').css('color','#076e7b');
		$('#mail').attr("src",'img/mailblue.png');
		$('.content').scrollTo(elementClassSite,500);

	}else{
		// Kontakt-Leiste zurücksetzen
		$('#mail').attr("src",'img/mail.png');
		$('#info-s').css('color','#e8e8e8');
		$('.extended-info').animate({width: '-=2vw'},'fast')
			.css('background-color','#00b5cc')
			.css('font-weight','normal')
			.removeClass('extended-info');

		// alle vorherigen Elemente werden zurückgesetzt
		$('.extended').animate({width: '-=2vw'},'fast')
			.css('background-color','#00b5cc')
			.css('font-weight','normal')
			.css('color','#e8e8e8')
			.removeClass('extended');

		//Das Event-Element wird aktiviert
		$(elementClassFirst).animate({width: '+=2vw'},'fast')
			.css('background-color','white')
			.css('font-weight','900')
			.css('color','#076e7b')
			.addClass('extended');
			$('.content').scrollTo(elementClassSite,500);

	};
});

// END -> NAVBAR ANIMATION


});
