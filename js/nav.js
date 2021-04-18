function myFunction(x) {
    x.classList.toggle("change");
    }

$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggleMenu").slideToggle("fast");
        $(".toggleNav a").css("display","block");
    });
});

    $(document).ready(function(){
        $("#uniDrop-nav").click(function(){
            $(".uniDrop").slideToggle("fast");
            $(".caret-icon1").toggleClass('fa-caret-up fa-caret-down');

            if($(".caret-icon2").hasClass('fa-caret-up')){
                $(".majorDrop").slideToggle("fast");
                $(".caret-icon2").toggleClass('fa-caret-up fa-caret-down');
            }
        });
    });

    $(document).ready(function(){
        $("#majorDrop-nav").click(function(){
            $(".majorDrop").slideToggle("fast");
            $(".caret-icon2").toggleClass('fa-caret-up fa-caret-down');

            if($(".caret-icon1").hasClass('fa-caret-up')){
                $(".uniDrop").slideToggle("fast");
                $(".caret-icon1").toggleClass('fa-caret-up fa-caret-down');
            }

            $(".majorDrop-links li").sort(function(a, b){
                return $(a).text().localeCompare($(b).text());
            }).appendTo(".majorDrop-links");

        });
    });

    $(document).ready(function(){
        $("#uniDrop-toggle-nav").click(function(){
            $(".uniDrop-toggle").slideToggle("fast");
            $(".caret-icon3").toggleClass('fa-caret-up fa-caret-down');

            if($(".caret-icon4").hasClass('fa-caret-up')){
                $(".majorDrop-toggle").slideToggle("fast");
                $(".caret-icon4").toggleClass('fa-caret-up fa-caret-down');
            }
        });
    });   

     $(document).ready(function(){
        $("#majorDrop-toggle-nav").click(function(){
            $(".majorDrop-toggle").slideToggle("fast");
            $(".caret-icon4").toggleClass('fa-caret-up fa-caret-down');

            if($(".caret-icon3").hasClass('fa-caret-up')){
                $(".uniDrop-toggle").slideToggle("fast");
                $(".caret-icon3").toggleClass('fa-caret-up fa-caret-down');
            }
        });
    }); 