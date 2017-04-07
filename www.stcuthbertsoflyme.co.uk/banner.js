function cycleImages(){
    var images = $('#banner_area img'),
        now    = images.filter(':visible'),
        next   = now.next().length ? now.next() : images.first(),
        speed  = 1000;
    
    next.fadeIn(speed);
	setTimeout(function(){
		now.fadeOut(speed);
	},1000)
	
}

$(function() {
    setInterval(cycleImages, 5000);
});