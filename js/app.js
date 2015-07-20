$(window).load(function(){

	var height = window.innerHeight;
    // $('iframe').css('height', height);

    var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1); // Detect IE10 and below

	$('iframe').iFrameResize({
		log: 'true',
		heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
		minHeight: height,
		scrolling: 'true'
	});

});