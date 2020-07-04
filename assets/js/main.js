

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 5) {
        //clearHeader, not clearheader - caps H
        $(".header-section").addClass(".navigation");
    }
    else {
        $(".header-section").removeClass(".navigation");
    }
}); //missing );

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})