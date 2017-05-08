$(document).ready(function(){
	var fixOwl = function(){
        var $stage = $('.owl-stage'),
            stageW = $stage.width(),
            $el = $('.owl-item'),
            elW = 0;
        $el.each(function() {
            elW += $(this).width()+ +($(this).css("margin-right").slice(0, -2))
        });
        if ( elW > stageW ) {
            $stage.width( elW );
        };
    }

	$('#imageSlider').owlCarousel({
		nav: true,
	    loop:true,
	    margin:10,
	    responsiveClass:true,
		autoplay:true,
	    autoplayHoverPause:true,
		autoplaySpeed: 100,
		autoplayTimeout: 100,
		onInitialized: fixOwl,
        onRefreshed: fixOwl,
		navText: ['<span>a</span>', '<span>b</span>'],
	    responsive:{
	        0:{
	            items: 1
	        }
	    }
	});
	$('#videoSlider').owlCarousel({
		nav: true,
	    margin:10,
		loop: true,
		autoplay: true,
		center: true,
	    responsiveClass:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		items: 3
	});
	$('#newsSlider').owlCarousel({
		nav: true,
	    loop:true,
	    margin:10,
	    responsiveClass:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		items: 3,
		navText: [
	      "<i class='fa fa-chevron-left'></i>",
	      "<i class='fa fa-chevron-right'></i>"
	    ]
	});
});
