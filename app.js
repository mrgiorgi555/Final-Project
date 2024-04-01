$(document).ready(function () {
    $("#additions, #brands, #sales").owlCarousel({
        items: 6,
        margin: 25,
        dots: false,
        nav: true,
        navText: ["<img src='assets/slider-left-btn.svg' />", "<img src='assets/slider-right-btn.svg' />"],
    });

    $("#laptops").owlCarousel({
        items: 5,
        margin: 40,
        dots: false,
        nav: true,
        navText: ["<img src='assets/slider-left-btn.svg' />", "<img src='assets/slider-right-btn.svg' />"],
    });

    $("#headphones").owlCarousel({
        items: 5,
        margin: 40,
        dots: false,
        nav: true,
        navText: ["<img src='assets/slider-left-btn.svg' />", "<img src='assets/slider-right-btn.svg' />"],
    });

    $("#saleShowcase").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
    });

    $("#saleShowcases").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
    });

    $("#navCategories").click(function (e) {
        e.preventDefault();

        if ($(".navcategories").hasClass("hidden")) {
            $(".navcategories").removeClass("hidden");
        } else {
            $(".navcategories").addClass("hidden");
        }
    });

    $("#navBasket").click(function (e) {
        e.preventDefault();

        if ($(".basket").hasClass("hidden")) {
            $(".basket").removeClass("hidden");
        } else {
            $(".basket").addClass("hidden");
        }
    });

    $("#navProfile").click(function (e) {
        e.preventDefault();

        if ($(".profile").hasClass("hidden")) {
            $(".profile").removeClass("hidden");
        } else {
            $(".profile").addClass("hidden");
        }
    });

    $("#darkModeButton").click(function (e) {
        e.preventDefault();

        $("body").toggleClass("dark-mode");
        $("#darkModeButton").toggleClass("reverse");
    });

    $("#login").click(function (e) { 
        e.preventDefault();
        
        $("#login").addClass("active");
        $("#register").removeClass("active");

        $(".content-register").addClass("hidden");
        $(".content-login").removeClass("hidden");
    });

    $("#register").click(function (e) { 
        e.preventDefault();
        
        $("#login").removeClass("active");
        $("#register").addClass("active");

        $(".content-register").removeClass("hidden");
        $(".content-login").addClass("hidden");
    });
});
