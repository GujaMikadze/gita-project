$(function() {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    $(".arrow-left").click(function (e) { 
        e.preventDefault();
        plusSlides(-1);
    });

    
    $(".arrow-right").click(function (e) { 
        e.preventDefault();
        plusSlides(1);
    });

    function showSlides(n) {
    var i;
    var slides = $(".slide");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    }

    $("#responsiveMenu").click(function() { 
        $(".nav-offcanvas").css("width", "250px");
    });

    $(".offcanvas-close").click(function() { 
        $(".nav-offcanvas").css("width", "0");
    });

    $(".nav-accordion-parent").click(function (e) { 
        e.preventDefault();
        if($(".sub-accordion-menu").css("display") === "none") {
            $(".sub-accordion-menu").css("display", "block");
        } else {
            $(".sub-accordion-menu").css("display", "none");
        }
        
    });
});