$(function(){
    // Header
    let header=$("#header");
    let intro=$("#intro");
    let scrollPos=$(window).scrollTop();
    let introH=intro.innerHeight();
    console.log(scrollPos);
    checkScroll(scrollPos, introH);
    $(window).on("scroll resize", function(){
        let introH=intro.innerHeight();
        scrollPos=$(this).scrollTop();
        checkScroll(scrollPos, introH)
        
    });
    function checkScroll(scrollPos, introH){
        if(scrollPos>introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    //Smoth Scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        nav.removeClass("show");
        let elementID=$(this).data('scroll');
        let elementoffset=$(elementID).offset().top;
        console.log(elementoffset)
        $('html, body').animate({
            scrollTop:elementoffset-70
        }, 700)
    });
    //navToggle
    let nav=$("#nav");
    let navToggle=$("#navToggle");
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });
    //reviews
    let slider=$("#slider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true
      });
}
);