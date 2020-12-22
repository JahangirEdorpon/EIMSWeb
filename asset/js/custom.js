$(document).ready(function() {
     
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
   
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTeblet: [500,1]
   
    });

    // $('.custom1').owlCarousel({
    //     animateOut: 'slideOutDown',
    //     animateIn: 'flipInX',
    //     items:1,
    //     margin:30,
    //     stagePadding:30,
    //     smartSpeed:450
    // });
   
  });