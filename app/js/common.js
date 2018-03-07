$(function() {

	var windHeight = $(window).height();
	var bottomHeaderHeight = $('.bottom_header').height();
	// bottomHeaderHeight += -50;

	if($(window).width() >= 768){
		$('header, .slide_top_item').css({
			'minHeight': windHeight
		});
	}
	

	$('.news_index .news_block_first').css({
		'minHeight': 'calc(' + bottomHeaderHeight + 'px  - 2em)',
		'bottom':  '-'+bottomHeaderHeight+'px'
	});




	$('.slider_top').owlCarousel({
	  loop:true,
	  items:1,
	  nav:true,
	  margin:20,
	  responsiveClass:true,
	  navText:false
  })

	$('.fast_information_block_for_mobile').owlCarousel({
	  loop:true,
	  items:1,
	  nav:true,
	  margin:20,
	  responsiveClass:true,
	  navText:false
  })


  

	$('.partners_block').owlCarousel({
	  loop:true,
	  items:1,
	  nav:true,
	  margin:20,
	  responsiveClass:true,
	  navText:false,
	  responsive:{
      380:{
          items:1,
          nav:true,
          loop:true,
          autoHeight:true
      },
      600:{
          items:2,
          nav:true,
          loop:true,
          autoHeight:true
      },
      880:{
          items:3,
          nav:true,
          loop:true
      },
      1000:{
          items:5,
          nav:true,
          loop:true
      }
    }
  })


});






