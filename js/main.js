$(document).ready(function () {
    $(".opn").on("click", function () {
        $("nav").stop().animate({
            "left": "0"
        })
    });

    $(".close").on("click", function () {
        $("nav").stop().animate({
            "left": "-392px"
        })
    });
    //nav

    $(".s2_menu li").on("click", function () {
        var i = $(this).index();

        $(".content > div").eq(i).fadeIn(500);
        $(".content > div").eq(i).siblings().fadeOut(500);

        $(this).css({
            "backgroundColor": "black",
            "color": "white",
            "backgroundImage": "url(image/etc/logo/logo5_w.png)"
        }).siblings().css({
            "backgroundColor": "white",
            "color": "black",
            "backgroundImage": "url(image/etc/logo/logo5.png)"
        });
    });
    //s2 menu li

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#top_btn").addClass("on");
        }else {
            $("#top_btn").removeClass("on");
        }
    });
    
    //topbtn

    $(".s3_menu li").on("click", function () {
        var i = $(this).index();

        $(".s3 .content > div").eq(i).fadeIn(200);
        $(".s3 .content > div").eq(i).siblings().fadeOut(200);

        $(this).css({
            "color": "white"
        }).siblings().css({
            "color": "gray"
        });
    });
    //s3_menu_li

    $(".container").slick({
        centerMode: true,
        slidesToShow: 5,
        infinite: true,
        prevArrow : "button.left",
        nextArrow : "button.right",
        focusOnSelect: true
      });

    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, {
        passive: false
    });

    var mHtml = $("html");
    var lastPage = $("footer").height();
    var winHeight = $(window).height();
    var scr = $(window).scrollTop();
    var page = scr / winHeight + 1;
        page = parseInt(page);
    
    mHtml.animate({scrollTop: 0}, 10);

    $(window).on("wheel", function (e) {
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 5) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (function() {
            if(page === 5){
                return (page - 1) * winHeight - (winHeight - lastPage);
            } else {
                return (page - 1) * winHeight;
            }
        } ());
        mHtml.animate({
            scrollTop: posTop
        });
    });
    //page_scroll

    $("#top_btn").click(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        page = 1;
    });

    $(".s2 .wrap > div").on("click", function () {
        $(this).addClass("view").siblings().removeClass("view")
    })
    //s2_slide



})

