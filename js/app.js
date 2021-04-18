function goTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#goTopBtn:hidden').stop(true, true).fadeIn();
    } else {
        $('#goTopBtn').stop(true, true).fadeOut();
        
    }
});

