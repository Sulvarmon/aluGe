$(document).ready(function() {
    /* navbar beginning */

    $(".menu_bars").click(() => {
        if ($(".menu_bars>img").css("left") === "0px") {
            $(".navbar_mobile").slideDown(200);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 0);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 50);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 100);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 150);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 200);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 250);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 300);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 350);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 400);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 450);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 500);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 550);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 600);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 650);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "-=32px");
            }, 700);
        }

        if ($(".menu_bars>img").css("left") === "-480px") {
            $(".navbar_mobile").slideUp(200);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 0);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 50);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 100);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 150);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 200);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 250);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 300);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 350);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 400);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 450);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 500);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 550);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 600);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 650);
            setTimeout(() => {
                $(".menu_bars>img").css("left", "+=32px");
            }, 700);
        }
    });

    $(".navbar_laptop_item_dropdown").mouseenter(() => {
        $(".navbar_laptop_item_dropdown_content").slideDown(200);
    });
    $(".navbar_laptop_item_dropdown").mouseleave(() => {
        setTimeout(() => {
            if ($(".navbar_laptop_item_dropdown:hover").length == 0) {
                $(".navbar_laptop_item_dropdown_content").slideUp(200);
            }
        }, 500);
    });

    $(".navbar_laptop_item_lan").mouseenter(() => {
        $(".lan_dropdown").slideDown(200);
    });
    $(".navbar_laptop_item_lan").mouseleave(() => {
        setTimeout(() => {
            if ($(".lan_dropdown:hover").length == 0) {
                $(".lan_dropdown").slideUp(200);
            }
        }, 500);
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() >= 60 && $(window).width() >= 768) {
            $(".navbar").css({ position: "fixed", top: "0", left: "0" });
        } else {
            $(".navbar").css({ position: "relative" });
        }
    });

    $(".navbar_mobile_lan_geo").click(() => {
        $(".navbar_mobile_lan_geo").addClass("navbar_mobile_lan_active");
        $(".navbar_mobile_lan_eng").removeClass("navbar_mobile_lan_active");
    });

    $(".navbar_mobile_lan_eng").click(() => {
        $(".navbar_mobile_lan_eng").addClass("navbar_mobile_lan_active");
        $(".navbar_mobile_lan_geo").removeClass("navbar_mobile_lan_active");
    });

    /* navbar end */

    /* header carousel beginning */

    var counter = 1;
    var carouselInterval = setInterval(carousel, 4000);

    function carousel() {
        var item = $(".header_carousel_item");
        var nail = $(".header_carousel_nail");
        var width = item[0].clientWidth;
        item.css({ transform: `translateX(${-counter * width}px)` });
        nail.removeClass("header_carousel_nail_active");
        nail.eq(counter).addClass("header_carousel_nail_active");
        counter++;
        if (counter === item.length) {
            counter = 0;
        }
    }

    $(".header_carousel_nail").click((e) => {
        state = false;
        var item = $(".header_carousel_item");
        var nail = $(".header_carousel_nail");
        var width = item[0].clientWidth;
        clearInterval(carouselInterval);
        counter = $(e.target).index();
        item.css({ transform: `translateX(${-counter * width}px)` });
        nail.removeClass("header_carousel_nail_active");
        nail.eq($(e.target).index()).addClass("header_carousel_nail_active");
        counter++;
        if (counter === item.length) {
            counter = 0;
        }
        carouselInterval = setInterval(carousel, 4000);
    });

    /* header carousel end */

    /* links beginning */

    // clicks on navbar items

    $(".navbar_laptop_item").click((e) => {
        for (var i = 0; i < $(".navbar_laptop_item").length; i++) {
            $(".navbar_laptop_item").removeClass("navbar_laptop_item_active");
        }
        $(e.target).addClass("navbar_laptop_item_active");
    });

    $(".navbar_mobile_item").click((e) => {
        for (var i = 0; i < $(".navbar_mobile_item").length; i++) {
            $(".navbar_mobile_item").eq(i).removeClass("navbar_mobile_active");
        }
        $(e.target).addClass("navbar_mobile_active");
    });

    //home

    $(
        ".navbar_laptop_item_home, .navbar_mobile_item_home, .footer_menu_home, .logo"
    ).click(() => {
        $(".header_carousel_cont").css("display", "block");
        $(".about_us_text_section_cont").css("display", "flex");
        $(".grid_products_cont").css("display", "block");
        $(".grid_products_cont2").css("display", "block");
        $(".link_header_img").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $("main").css("display", "block");
        $(".footer_cont").css("margin-top", "100px");
        $(".grid_products_cont").css("margin-top", "0px");
    });

    //products

    $(
        ".navbar_laptop_item_products, .navbar_mobile_item_products, .footer_menu_products"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $(".grid_products_cont").css("display", "block");
        $(".grid_products_cont2").css("display", "none");
        $(".about_us_text_section_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_services_cont").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $("main").css("display", "block");
        $(".grid_products_cont").css("margin-top", "50px");
    });

    //services

    $(
        ".navbar_laptop_item_services, .navbar_mobile_item_services, .footer_menu_services"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $("main").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_services_cont").css("display", "block");
        $(".links_projects_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $(".footer_cont").css("margin-top", "0px");
    });

    var rotateState1 = true;
    var rotateState2 = true;

    $(".links_services_div1").click(() => {
        $(".links_services_dropdown1").slideToggle(500);
        $(".links_services_dropdown2").slideUp(500);
        if (rotateState1) {
            $(".links_services_icon_cont1 i").css("transform", "rotateZ(-180deg)");
            $(".links_services_icon_cont1").css("background-color", "var(--orange)");
            rotateState1 = false;

            $(".links_services_icon_cont2 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont2").css("background-color", "var(--blue2)");
            rotateState2 = true;
        } else {
            $(".links_services_icon_cont1 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont1").css("background-color", "var(--blue2)");
            rotateState1 = true;

            $(".links_services_icon_cont2 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont2").css("background-color", "var(--blue2)");
            rotateState2 = true;
        }
    });

    $(".links_services_div2").click(() => {
        $(".links_services_dropdown2").slideToggle(500);
        $(".links_services_dropdown1").slideUp(500);
        if (rotateState2) {
            $(".links_services_icon_cont2 i").css("transform", "rotateZ(-180deg)");
            $(".links_services_icon_cont2").css("background-color", "var(--orange)");
            rotateState2 = false;

            $(".links_services_icon_cont1 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont1").css("background-color", "var(--blue2)");
            rotateState1 = true;
        } else {
            $(".links_services_icon_cont2 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont2").css("background-color", "var(--blue2)");
            rotateState2 = true;

            $(".links_services_icon_cont1 i").css("transform", "rotateZ(0deg)");
            $(".links_services_icon_cont1").css("background-color", "var(--blue2)");
            rotateState1 = true;
        }
    });

    //projects

    $(
        ".navbar_laptop_item_projects, .navbar_mobile_item_projects, .footer_menu_projects, .all_button"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $(".grid_products_cont").css("display", "none");
        $(".about_us_text_section_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_services_cont").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $("main").css("display", "block");
        $(".links_projects_cont").css("display", "block");
    });

    $(".links_projects_grid_pg").click((e) => {
        for (var i = 0; i < $(".links_projects_grid_pg").length; i++) {
            $(".links_projects_grid_pg")
                .eq(i)
                .removeClass("links_projects_grid_pg_active");
        }
        $(e.target).addClass("links_projects_grid_pg_active");
    });

    $(".links_projects_grid_pg1").click(() => {
        pgCounter = 1;

        $(".links_projects_grid_prev i").css("color", "var(--blue3");
        $(".links_projects_grid_next i").css("color", "var(--blue2");

        for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
            $(".links_projects_grid_item").eq(i).css("display", "block");
        }

        var imageUrls = [
            "./img/our_projects/226_preview.jpg",
            "./img/our_projects/225_preview.jpg",
            "./img/our_projects/224_preview.jpg",
            "./img/our_projects/223_preview.jpg",
            "./img/our_projects/222_preview.jpg",
            "./img/our_projects/221_preview.jpg",
        ];

        var textTitles = [
            "nikora xl",
            "house in tsurtsumia street,tb...",
            "hotel lisi inn",
            "archi vazisubani",
            "house in digomi",
            "batumi stadium",
        ];

        $(".links_projects_grid_item_img1").css(
            "background-image",
            "url(" + imageUrls[0] + ")"
        );
        $(".links_projects_grid_item_img2").css(
            "background-image",
            "url(" + imageUrls[1] + ")"
        );
        $(".links_projects_grid_item_img3").css(
            "background-image",
            "url(" + imageUrls[2] + ")"
        );
        $(".links_projects_grid_item_img4").css(
            "background-image",
            "url(" + imageUrls[3] + ")"
        );
        $(".links_projects_grid_item_img5").css(
            "background-image",
            "url(" + imageUrls[4] + ")"
        );
        $(".links_projects_grid_item_img6").css(
            "background-image",
            "url(" + imageUrls[5] + ")"
        );

        $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
        $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);
        $(".links_projects_grid_item_text_title3").html(`${textTitles[2]}`);
        $(".links_projects_grid_item_text_title4").html(`${textTitles[3]}`);
        $(".links_projects_grid_item_text_title5").html(`${textTitles[4]}`);
        $(".links_projects_grid_item_text_title6").html(`${textTitles[5]}`);
        $(".links_projects_grid_item_text_title7").html(`${textTitles[6]}`);
    });

    $(".links_projects_grid_pg2").click(() => {
        pgCounter = 2;

        $(".links_projects_grid_prev i").css("color", "var(--blue2)");
        $(".links_projects_grid_next i").css("color", "var(--blue2)");

        for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
            $(".links_projects_grid_item").eq(i).css("display", "block");
        }

        var imageUrls = [
            "./img/our_projects/220_preview.jpg",
            "./img/our_projects/219_preview.jpg",
            "./img/our_projects/218_preview.jpg",
            "./img/our_projects/217_preview.jpg",
            "./img/our_projects/216_preview.jpg",
            "./img/our_projects/214_preview.jpg",
        ];

        var textTitles = [
            "gudauri inn",
            "New School International Schoo...",
            "Hotel Royal INN",
            "IVERIA INN TBILISI",
            "Renaissance Construction",
            "IN VITRO",
        ];

        $(".links_projects_grid_item_img1").css(
            "background-image",
            "url(" + imageUrls[0] + ")"
        );
        $(".links_projects_grid_item_img2").css(
            "background-image",
            "url(" + imageUrls[1] + ")"
        );
        $(".links_projects_grid_item_img3").css(
            "background-image",
            "url(" + imageUrls[2] + ")"
        );
        $(".links_projects_grid_item_img4").css(
            "background-image",
            "url(" + imageUrls[3] + ")"
        );
        $(".links_projects_grid_item_img5").css(
            "background-image",
            "url(" + imageUrls[4] + ")"
        );
        $(".links_projects_grid_item_img6").css(
            "background-image",
            "url(" + imageUrls[5] + ")"
        );

        $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
        $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);
        $(".links_projects_grid_item_text_title3").html(`${textTitles[2]}`);
        $(".links_projects_grid_item_text_title4").html(`${textTitles[3]}`);
        $(".links_projects_grid_item_text_title5").html(`${textTitles[4]}`);
        $(".links_projects_grid_item_text_title6").html(`${textTitles[5]}`);
        $(".links_projects_grid_item_text_title7").html(`${textTitles[6]}`);
    });

    $(".links_projects_grid_pg3").click(() => {
        pgCounter = 3;

        $(".links_projects_grid_prev i").css("color", "var(--blue2)");
        $(".links_projects_grid_next i").css("color", "var(--blue3)");

        var imageUrls = [
            "./img/our_projects/212_preview.jpg",
            "./img/our_projects/211_preview.jpg",
        ];

        var textTitles = ["Hotel IVERIA INN", "ibis styles Tbilisi Center "];

        $(".links_projects_grid_item_img1").css(
            "background-image",
            "url(" + imageUrls[0] + ")"
        );
        $(".links_projects_grid_item_img2").css(
            "background-image",
            "url(" + imageUrls[1] + ")"
        );

        $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
        $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);

        for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
            $(".links_projects_grid_item").eq(i).css("display", "none");
        }
    });

    var pgCounter = 1;

    $(".links_projects_grid_next").click(() => {
        if (pgCounter === 2) {
            for (var i = 0; i < $(".links_projects_grid_pg").length; i++) {
                $(".links_projects_grid_pg")
                    .eq(i)
                    .removeClass("links_projects_grid_pg_active");
            }
            $(".links_projects_grid_pg3").addClass("links_projects_grid_pg_active");
            $(".links_projects_grid_prev i").css("color", "var(--blue2)");
            $(".links_projects_grid_next i").css("color", "var(--blue3)");

            var imageUrls = [
                "./img/our_projects/212_preview.jpg",
                "./img/our_projects/211_preview.jpg",
            ];

            var textTitles = ["Hotel IVERIA INN", "ibis styles Tbilisi Center "];

            $(".links_projects_grid_item_img1").css(
                "background-image",
                "url(" + imageUrls[0] + ")"
            );
            $(".links_projects_grid_item_img2").css(
                "background-image",
                "url(" + imageUrls[1] + ")"
            );

            $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
            $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);

            for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
                $(".links_projects_grid_item").eq(i).css("display", "none");
            }
            pgCounter++;
        }
    });

    $(".links_projects_grid_next").click(() => {
        if (pgCounter === 1) {
            for (var i = 0; i < $(".links_projects_grid_pg").length; i++) {
                $(".links_projects_grid_pg")
                    .eq(i)
                    .removeClass("links_projects_grid_pg_active");
            }
            $(".links_projects_grid_pg2").addClass("links_projects_grid_pg_active");
            $(".links_projects_grid_prev i").css("color", "var(--blue2)");
            $(".links_projects_grid_next i").css("color", "var(--blue2)");

            for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
                $(".links_projects_grid_item").eq(i).css("display", "block");
            }

            var imageUrls = [
                "./img/our_projects/220_preview.jpg",
                "./img/our_projects/219_preview.jpg",
                "./img/our_projects/218_preview.jpg",
                "./img/our_projects/217_preview.jpg",
                "./img/our_projects/216_preview.jpg",
                "./img/our_projects/214_preview.jpg",
            ];

            var textTitles = [
                "gudauri inn",
                "New School International Schoo...",
                "Hotel Royal INN",
                "IVERIA INN TBILISI",
                "Renaissance Construction",
                "IN VITRO",
            ];

            $(".links_projects_grid_item_img1").css(
                "background-image",
                "url(" + imageUrls[0] + ")"
            );
            $(".links_projects_grid_item_img2").css(
                "background-image",
                "url(" + imageUrls[1] + ")"
            );
            $(".links_projects_grid_item_img3").css(
                "background-image",
                "url(" + imageUrls[2] + ")"
            );
            $(".links_projects_grid_item_img4").css(
                "background-image",
                "url(" + imageUrls[3] + ")"
            );
            $(".links_projects_grid_item_img5").css(
                "background-image",
                "url(" + imageUrls[4] + ")"
            );
            $(".links_projects_grid_item_img6").css(
                "background-image",
                "url(" + imageUrls[5] + ")"
            );

            $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
            $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);
            $(".links_projects_grid_item_text_title3").html(`${textTitles[2]}`);
            $(".links_projects_grid_item_text_title4").html(`${textTitles[3]}`);
            $(".links_projects_grid_item_text_title5").html(`${textTitles[4]}`);
            $(".links_projects_grid_item_text_title6").html(`${textTitles[5]}`);
            $(".links_projects_grid_item_text_title7").html(`${textTitles[6]}`);
            pgCounter++;
        }
    });

    $(".links_projects_grid_prev").click(() => {
        if (pgCounter === 2) {
            for (var i = 0; i < $(".links_projects_grid_pg").length; i++) {
                $(".links_projects_grid_pg")
                    .eq(i)
                    .removeClass("links_projects_grid_pg_active");
            }
            $(".links_projects_grid_pg1").addClass("links_projects_grid_pg_active");
            $(".links_projects_grid_prev i").css("color", "var(--blue3");
            $(".links_projects_grid_next i").css("color", "var(--blue2");

            for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
                $(".links_projects_grid_item").eq(i).css("display", "block");
            }

            var imageUrls = [
                "./img/our_projects/226_preview.jpg",
                "./img/our_projects/225_preview.jpg",
                "./img/our_projects/224_preview.jpg",
                "./img/our_projects/223_preview.jpg",
                "./img/our_projects/222_preview.jpg",
                "./img/our_projects/221_preview.jpg",
            ];

            var textTitles = [
                "nikora xl",
                "house in tsurtsumia street,tb...",
                "hotel lisi inn",
                "archi vazisubani",
                "house in digomi",
                "batumi stadium",
            ];

            $(".links_projects_grid_item_img1").css(
                "background-image",
                "url(" + imageUrls[0] + ")"
            );
            $(".links_projects_grid_item_img2").css(
                "background-image",
                "url(" + imageUrls[1] + ")"
            );
            $(".links_projects_grid_item_img3").css(
                "background-image",
                "url(" + imageUrls[2] + ")"
            );
            $(".links_projects_grid_item_img4").css(
                "background-image",
                "url(" + imageUrls[3] + ")"
            );
            $(".links_projects_grid_item_img5").css(
                "background-image",
                "url(" + imageUrls[4] + ")"
            );
            $(".links_projects_grid_item_img6").css(
                "background-image",
                "url(" + imageUrls[5] + ")"
            );

            $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
            $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);
            $(".links_projects_grid_item_text_title3").html(`${textTitles[2]}`);
            $(".links_projects_grid_item_text_title4").html(`${textTitles[3]}`);
            $(".links_projects_grid_item_text_title5").html(`${textTitles[4]}`);
            $(".links_projects_grid_item_text_title6").html(`${textTitles[5]}`);
            $(".links_projects_grid_item_text_title7").html(`${textTitles[6]}`);
            pgCounter--;
        }
    });

    $(".links_projects_grid_prev").click(() => {
        if (pgCounter === 3) {
            for (var i = 0; i < $(".links_projects_grid_pg").length; i++) {
                $(".links_projects_grid_pg")
                    .eq(i)
                    .removeClass("links_projects_grid_pg_active");
            }
            $(".links_projects_grid_pg2").addClass("links_projects_grid_pg_active");
            $(".links_projects_grid_prev i").css("color", "var(--blue2)");
            $(".links_projects_grid_next i").css("color", "var(--blue2)");

            for (var i = 2; i < $(".links_projects_grid_item").length; i++) {
                $(".links_projects_grid_item").eq(i).css("display", "block");
            }

            var imageUrls = [
                "./img/our_projects/220_preview.jpg",
                "./img/our_projects/219_preview.jpg",
                "./img/our_projects/218_preview.jpg",
                "./img/our_projects/217_preview.jpg",
                "./img/our_projects/216_preview.jpg",
                "./img/our_projects/214_preview.jpg",
            ];

            var textTitles = [
                "gudauri inn",
                "New School International Schoo...",
                "Hotel Royal INN",
                "IVERIA INN TBILISI",
                "Renaissance Construction",
                "IN VITRO",
            ];

            $(".links_projects_grid_item_img1").css(
                "background-image",
                "url(" + imageUrls[0] + ")"
            );
            $(".links_projects_grid_item_img2").css(
                "background-image",
                "url(" + imageUrls[1] + ")"
            );
            $(".links_projects_grid_item_img3").css(
                "background-image",
                "url(" + imageUrls[2] + ")"
            );
            $(".links_projects_grid_item_img4").css(
                "background-image",
                "url(" + imageUrls[3] + ")"
            );
            $(".links_projects_grid_item_img5").css(
                "background-image",
                "url(" + imageUrls[4] + ")"
            );
            $(".links_projects_grid_item_img6").css(
                "background-image",
                "url(" + imageUrls[5] + ")"
            );

            $(".links_projects_grid_item_text_title1").html(`${textTitles[0]}`);
            $(".links_projects_grid_item_text_title2").html(`${textTitles[1]}`);
            $(".links_projects_grid_item_text_title3").html(`${textTitles[2]}`);
            $(".links_projects_grid_item_text_title4").html(`${textTitles[3]}`);
            $(".links_projects_grid_item_text_title5").html(`${textTitles[4]}`);
            $(".links_projects_grid_item_text_title6").html(`${textTitles[5]}`);
            $(".links_projects_grid_item_text_title7").html(`${textTitles[6]}`);
            pgCounter--;
        }
    });

    //about us

    $(
        ".navbar_laptop_item_dropdown_content_about, .navbar_mobile_item_about, .footer_menu_about, .about_us_text_with_button_button"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $(".grid_products_cont").css("display", "none");
        $(".about_us_text_section_cont").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".link_header_img").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $("main").css("display", "block");
        $(".links_about_us_cont").css("display", "block");
        $(".link_header_carousel").css("display", "block");
    });

    var timer = setInterval(carouselTimer, 2000);
    var carouselCounter = 1;

    function carouselTimer() {
        for (var i = 0; i < $(".link_header_carousel_item").length; i++) {
            $(".link_header_carousel_item").eq(i).css("opacity", "0");
        }
        $(".link_header_carousel_item").eq(carouselCounter).css("opacity", "1");
        carouselCounter++;
        if (carouselCounter === $(".link_header_carousel_item").length) {
            carouselCounter = 0;
        }
    }

    //brands

    $(
        ".navbar_laptop_item_dropdown_content_brand, .navbar_mobile_item_brands, .footer_menu_brands"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $("main").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_brands_cont").css("display", "block");
    });

    //contacts

    $(
        ".footer_map, .navbar_laptop_item_contacts, .navbar_mobile_item_contacts, .footer_menu_contacts, .header_carousel_bottom_container_item_contacts"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $("main").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_contact_cont").css("display", "block");
    });

    $(".form_field1").focus(() => {
        $(".placeholder1").addClass("focused_field");
        $(".border_bottom_blue_line1").css("width", "100%");
    });

    $(".form_field1").blur(() => {
        if ($(".form_field1").val() === "") {
            $(".placeholder1").removeClass("focused_field");
        }
        $(".border_bottom_blue_line1").css("width", "0%");
    });

    $(".form_field2").focus(() => {
        $(".placeholder2").addClass("focused_field");
        $(".border_bottom_blue_line2").css("width", "100%");
    });

    $(".form_field2").blur(() => {
        if ($(".form_field2").val() === "") {
            $(".placeholder2").removeClass("focused_field");
        }
        $(".border_bottom_blue_line2").css("width", "0%");
    });

    $(".form_field3").focus(() => {
        $(".form_field3").css("height", "200px");
        $(".placeholder3").addClass("focused_field");
        $(".border_bottom_blue_line3").css("width", "100%");
    });

    $(".form_field3").blur(() => {
        if ($(".form_field3").val() === "") {
            $(".placeholder3").removeClass("focused_field");
        }
        $(".form_field3").css("height", "45px");
        $(".border_bottom_blue_line3").css("width", "0%");
    });

    $(".links_contact_lower_section_button").click((e) => {
		$(".links_contact_lower_section").submit();
        $(".form_field1").val("");
        $(".form_field2").val("");
        $(".form_field3").val("");
        $(".placeholder1").removeClass("focused_field");
        $(".placeholder2").removeClass("focused_field");
        $(".placeholder3").removeClass("focused_field");
    });

    //order

    $(".order, .header_carousel_bottom_container_item_order").click(() => {
        $(".links_order_cont").css("display", "block");
    });
    $(".order_form_close, .links_order_inner").click(() => {
        $(".links_order_cont").css("display", "none");
    });
    $(".order_form").click((e) => {
        e.stopPropagation();
        $(".links_order_cont").css("display", "block");
    });

    $(".order_form_field1").focus(() => {
        $(".order_placeholder1").addClass("order_focused_field");
        $(".order_border_bottom_blue_line1").css("width", "100%");
    });

    $(".order_form_field1").blur(() => {
        if ($(".order_form_field1").val() === "") {
            $(".order_placeholder1").removeClass("order_focused_field");
        }
        $(".order_border_bottom_blue_line1").css("width", "0%");
    });

    $(".order_form_field2").focus(() => {
        $(".order_placeholder2").addClass("order_focused_field");
        $(".order_border_bottom_blue_line2").css("width", "100%");
    });

    $(".order_form_field2").blur(() => {
        if ($(".order_form_field2").val() === "") {
            $(".order_placeholder2").removeClass("order_focused_field");
        }
        $(".order_border_bottom_blue_line2").css("width", "0%");
    });

    $(".order_submit_button").click(() => {
		$(".order_form").submit();
        $(".order_form_field1").val("");
        $(".order_form_field2").val("");
        $(".order_placeholder1").removeClass("order_focused_field");
        $(".order_placeholder2").removeClass("order_focused_field");
    });

    //calculator

    $(
        ".calculator, .header_carousel_bottom_container_item_calculator, .footer_menu_calculator"
    ).click(() => {
        $(".header_carousel_cont").css("display", "none");
        $("main").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_products_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_calculator_cont").css("display", "block");
    });

    $(".d_w_s").change(() => {
        if ($(".d_w_s option:selected").text() === "Window") {
            $(".d_s_not_exist").css("display", "none");
            if ($(".d_w_s_type option:selected").text() === "Single") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((280 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Double") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((379 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Triple") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((448 + w - 60 + (h - 120) * 2) * q);
            }
        } else {
            $(".d_s_not_exist").css("display", "flex");
        }
    });
    $(".d_w_s_type").change(() => {
        if ($(".d_w_s option:selected").text() === "Window") {
            $(".d_s_not_exist").css("display", "none");
            if ($(".d_w_s_type option:selected").text() === "Single") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((280 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Double") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((379 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Triple") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((448 + w - 60 + (h - 120) * 2) * q);
            }
        } else {
            $(".d_s_not_exist").css("display", "flex");
        }
    });
    $(".quantity").change(() => {
        if ($(".d_w_s option:selected").text() === "Window") {
            $(".d_s_not_exist").css("display", "none");
            if ($(".d_w_s_type option:selected").text() === "Single") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((280 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Double") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((379 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Triple") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((448 + w - 60 + (h - 120) * 2) * q);
            }
        } else {
            $(".d_s_not_exist").css("display", "flex");
        }
    });
    $(".calculator_input_width").keyup(() => {
        if ($(".d_w_s option:selected").text() === "Window") {
            $(".d_s_not_exist").css("display", "none");
            if ($(".d_w_s_type option:selected").text() === "Single") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((280 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Double") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((379 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Triple") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((448 + w - 60 + (h - 120) * 2) * q);
            }
        } else {
            $(".d_s_not_exist").css("display", "flex");
        }
    });
    $(".calculator_input_height").keyup(() => {
        if ($(".d_w_s option:selected").text() === "Window") {
            $(".d_s_not_exist").css("display", "none");
            if ($(".d_w_s_type option:selected").text() === "Single") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((280 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Double") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((379 + w - 60 + (h - 120) * 2) * q);
            }
            if ($(".d_w_s_type option:selected").text() === "Triple") {
                var h = parseInt($(".calculator_input_height").val());
                var w = parseInt($(".calculator_input_width").val());
                var q = parseInt($(".quantity").val());
                $(".calculated_price").html((448 + w - 60 + (h - 120) * 2) * q);
            }
        } else {
            $(".d_s_not_exist").css("display", "flex");
        }
    });

    $(".links_calculator_order_button").click(() => {
        $(".links_order_cont_for_cacl").css("display", "block");
    });
    $(".order_form_close_for_cacl, .links_order_inner_for_cacl").click(() => {
        $(".links_order_cont_for_cacl").css("display", "none");
    });
    $(".order_form_for_cacl").click((e) => {
        e.stopPropagation();
        $(".links_order_cont_for_cacl").css("display", "block");
    });

    $(".order_form_field1_for_cacl").focus(() => {
        $(".order_placeholder1_for_cacl").addClass("order_focused_field_for_cacl");
        $(".order_border_bottom_blue_line1_for_cacl").css("width", "100%");
    });

    $(".order_form_field1_for_cacl").blur(() => {
        if ($(".order_form_field1_for_cacl").val() === "") {
            $(".order_placeholder1_for_cacl").removeClass(
                "order_focused_field_for_cacl"
            );
        }
        $(".order_border_bottom_blue_line1_for_cacl").css("width", "0%");
    });

    $(".order_form_field2_for_cacl").focus(() => {
        $(".order_placeholder2_for_cacl").addClass("order_focused_field_for_cacl");
        $(".order_border_bottom_blue_line2_for_cacl").css("width", "100%");
    });

    $(".order_form_field2_for_cacl").blur(() => {
        if ($(".order_form_field2_for_cacl").val() === "") {
            $(".order_placeholder2_for_cacl").removeClass(
                "order_focused_field_for_cacl"
            );
        }
        $(".order_border_bottom_blue_line2_for_cacl").css("width", "0%");
    });

    $(".order_form_field3_for_cacl").focus(() => {
        $(".order_placeholder3_for_cacl").addClass("order_focused_field_for_cacl");
        $(".order_border_bottom_blue_line3_for_cacl").css("width", "100%");
    });

    $(".order_form_field3_for_cacl").blur(() => {
        if ($(".order_form_field3_for_cacl").val() === "") {
            $(".order_placeholder3_for_cacl").removeClass(
                "order_focused_field_for_cacl"
            );
        }
        $(".order_border_bottom_blue_line3_for_cacl").css("width", "0%");
    });

    $(".order_form_field4_for_cacl").focus(() => {
        $(".order_placeholder4_for_cacl").addClass("order_focused_field_for_cacl");
        $(".order_border_bottom_blue_line4_for_cacl").css("width", "100%");
    });

    $(".order_form_field4_for_cacl").blur(() => {
        if ($(".order_form_field4_for_cacl").val() === "") {
            $(".order_placeholder4_for_cacl").removeClass(
                "order_focused_field_for_cacl"
            );
        }
        $(".order_border_bottom_blue_line4_for_cacl").css("width", "0%");
    });

    $(".order_submit_button_for_cacl").click((e) => {
		$(".order_form_for_cacl").submit();
        $(".order_form_field1_for_cacl").val("");
        $(".order_form_field2_for_cacl").val("");
        $(".order_placeholder1_for_cacl").removeClass(
            "order_focused_field_for_cacl"
        );
        $(".order_placeholder2_for_cacl").removeClass(
            "order_focused_field_for_cacl"
        );
    });

    //products

    $(".grid_products_item").click((e) => {
        $(".header_carousel_cont").css("display", "none");
        $("main").css("display", "none");
        $(".links_projects_cont").css("display", "none");
        $(".links_services_cont").css("display", "none");
        $(".links_about_us_cont").css("display", "none");
        $(".link_header_carousel").css("display", "none");
        $(".links_contact_cont").css("display", "none");
        $(".links_brands_cont").css("display", "none");
        $(".links_calculator_cont").css("display", "none");
        $(".link_header_img").css("display", "block");
        $(".links_products_cont").css("display", "block");
    });

    /* links end */
});