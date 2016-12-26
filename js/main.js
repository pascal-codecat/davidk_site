
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

		// $('.willkommen-l').animate({width: '+=2vw'},'fast')
		// 	.css('background-color','white')
		// 	.css('font-weight','900')
		// 	.css('color','#076e7b')
		// 	.addClass('extended');
	});

// END -> ANIMATION


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
	};
});

// END -> NAVBAR ANIMATION

// 
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

});
