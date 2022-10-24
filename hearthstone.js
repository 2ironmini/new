// var lastWidth = $(window).width();
//     $(window).resize(function () {
//         if ($(window).width() != lastWidth) {
//             location.reload();
//             lastWidth = $(window).width();
//             return false;
//         }
//     });











$(function() {
    var w = $(".gnb .navmenu .m").width();            
    $(".gnb").append("<span></span>");
    
    $(".gnb .navmenu .m").on("mouseenter focusin", function() {
        var index = $(this).index();
        console.log(index);
        
        $(this).find(".min").addClass("on");
        $(this).siblings().find(".min").removeClass("on");
        $(".gnb span").stop().animate({
            left: index * w
        }, "fast", "swing");
    });

    $(".gnb .navmenu li .min:eq(0)").stop().trigger("mouseenter");     
});


$(function(){
    $(".gnb .navmenu .m").on("mouseenter focusin click", function(){
        $("ul",this).show();
        $(this).siblings("li").find("ul").hide().stop();
        
    }).on("mouseleave", function(){
        $(".gnb .navmenu .m ul").hide().add(".gnb .navmenu .m").removeClass("on").stop();
    });
    
});

// -----------------------------------------------------all nav depth


$("*").removeClass("on").stop().trigger("mouseleave, focusout");




$(".gnb .navmenu .m:first a").click(function(){
    $("#sec1").addClass("on").siblings().removeClass("on");
});    
$(".gnb .navmenu .m:nth(1) a").click(function(){
    $("#sec2").addClass("on").siblings().removeClass("on");
});    
$(".gnb .navmenu .m:nth(2) a").click(function(){
    $("#sec3").addClass("on").siblings().removeClass("on");
});    
// $(".gnb .navmenu .m:nth(3) a").click(function(){
//     $("#gameintroduce").addClass("on").siblings().removeClass("on");
// });    
// $(".gnb .navmenu .m:nth(4) a").click(function(){
//     $("#gameintroduce").addClass("on").siblings().removeClass("on");
// });    
// $(".gnb .navmenu .m:nth(5) a").click(function(){
//     $("#gameintroduce").addClass("on").siblings().removeClass("on");
// });    


$(".gnb .navmenu .m ul").hide();  
    $(".gnb .navmenu .m ul li").hover(function(){
        $(this).addClass("on").stop();
        $(".gnb .navmenu .m ul li").not(this).removeClass("on").stop();
    });


// -----------------------------------------------------

// -----------------------------------------------------nav1 depth




$(".gnb .navmenu .m:first .snb li:first a").click(function(){
    $("#gameintroduce").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:first .snb li:last a").click(function(){
    $("#slide").addClass("on").siblings().removeClass("on");
});    



// -----------------------------------------------------

// -----------------------------------------------------HSintro depth

$(function() {
    $("#whatHS .slidebt span:last").click(function() {
        if (!$(".HSintro li").last().is(":visible")) {
            $(".HSintro li:visible").hide().next("li").fadeIn(400);
            $("#whatHS .slidebt span:first").removeClass("off");
        }

        if ($(".HSintro li").last().is(":visible")) {
            $("#whatHS .slidebt span:last").addClass("off");
        }
        return false;
    });
    $("#whatHS .slidebt span:first").click(function() {
        if (!$(".HSintro li").first().is(":visible")) {
            $(".HSintro li:visible").hide().prev("li").fadeIn(400);
            $("#whatHS .slidebt span:last").removeClass("off");
        }

        if ($(".HSintro li").first().is(":visible")) {
            $("#whatHS .slidebt span:first").addClass("off");
        }
        return false;
    });
});



// -----------------------------------------------------

// -----------------------------------------------------nav3 depth

$(".gnb .navmenu .m:nth(2) .snb li:first a").click(function(){
    $("#sec3").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:nth(2) .snb li:nth(1) a").click(function(){
    $("#sec4").addClass("on").siblings().removeClass("on");
});    


// -----------------------------------------------------




// -----------------------------------------------------영웅소개 depth

$(".sec2 .herose .Hr:first a").click(function(){
    $("#magician").addClass("on").siblings().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(1) a").click(function(){
    $("#paladin").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(2) a").click(function(){
    $("#demonhunter").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(3) a").click(function(){
    $("#druid").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(4) a").click(function(){
    $("#hunter").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(5) a").click(function(){
    $("#warlock").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(6) a").click(function(){
    $("#warrior").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(7) a").click(function(){
    $("#priest").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(8) a").click(function(){
    $("#rogue").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:last a").click(function(){
    $("#shaman").addClass("on").siblings().stop().removeClass("on");
});    

// -----------------------------------------------------

$(function() {
    $("#slide .control li:first").click(function() {
        $(".guide li:first").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:first").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(1)").click(function() {
        $(".guide li:nth(1)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(1)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(2)").click(function() {
        $(".guide li:nth(2)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(2)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(3)").click(function() {
        $(".guide li:nth(3)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(3)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(4)").click(function() {
        $(".guide li:nth(4)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(4)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(5)").click(function() {
        $(".guide li:nth(5)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(5)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(6)").click(function() {
        $(".guide li:nth(6)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(6)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(7)").click(function() {
        $(".guide li:nth(7)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(7)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(8)").click(function() {
        $(".guide li:nth(8)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide li:nth(8)").addClass("on").siblings().removeClass("on").fadeOut();
    });
        
    
});


$(document).ready(function(index, li){
    $(".slide > .control > li").addClass(function(index){
        return `mana${index+1}`;
    });
});





// $("#whatHS .slidebt span:last").click(function() {
//     if (!$(".HSintro li").last().is(":visible")) {
//         $(".HSintro li:visible").hide().next("li").fadeIn(400);
//         $("#whatHS .slidebt span:first").removeClass("off");
//     }

//     if ($(".HSintro li").last().is(":visible")) {
//         $("#whatHS .slidebt span:last").addClass("off");
//     }
//     return false;
// });








// -----------------------------------------------------#slide 컨트롤




$("#slide > .control > li").click(function(){
    $("#slide > .right > li > .guide").addClass("on").siblings();
    $("#slide > .right > li > .textguide").addClass("on").siblings();
});
    

// $("#slide > .control > li:nth(1)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(1)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide li:nth(1)").addClass("on").siblings().removeClass("on");
// });

// $("#slide > .control > li:nth(2)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(2)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(2)").addClass("on").siblings().removeClass("on");
// });

// $("#slide > .control > li:nth(3)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(3)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(3)").addClass("on").siblings().removeClass("on");
    
// });

// $("#slide > .control > li:nth(4)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(4)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(4)").addClass("on").siblings().removeClass("on");
    
// });

// $("#slide > .control > li:nth(5)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(5)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(5)").addClass("on").siblings().removeClass("on");
    
// });

// $("#slide > .control > li:nth(6)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(6)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(6)").addClass("on").siblings().removeClass("on");
    
// });

// $("#slide > .control > li:nth(7)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(7)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(7)").addClass("on").siblings().removeClass("on");
    
// });

// $("#slide > .control > li:nth(8)").click(function(){
//     $("#slide > .right > li > .guide > li:nth(8)").addClass("on").siblings().removeClass("on");
//     $("#slide > .right > li > .textguide > li:nth(8)").addClass("on").siblings().removeClass("on");
    
// });


$("ul.guide li:first").show();
    $("ul.control li").click(function() { 
        $(this).addClass("on").siblings().removeClass("on");
    });


    // -----------------------------------------------------


// ----------------------------------------------------- introduce

$("#gameintroduce .basic a").click(function() { 
    $("#whatHS").addClass("on").siblings().removeClass("on");
});




// -----------------------------------------------------

$(document).ready(function(index, li){
    $(".slide > .control > li").addClass(function(index){
        return `mana${index+1}`;
    });
});




$(document).ready(function(index, a){
    $(".cardlist > div > a > img").addClass(function(index){
        return `box${index+1}`;
    });
});

$(document).ready(function(index, a){
    $(".manacost > a > img").addClass(function(index){
        return `mana${index+0}`;
    });
});

    
    
$(document).ready(function(){  
$(".sec2 > .heropage > .bg > .inner > .skin > .slick").slick({
    centerMode: false,
    centerPadding: 60,
    slidesToShow: 4,
    Infinite : true,
    slidesToScroll : 2,
    speed : 300,
    arrows : true,
    autoplay : true,
    autoplatSpeed : 1000,
    pauseOnHover : true,
    vertical : false,
    centerMode : false, //중앙 보기 기본값은 false
    centerPadding : 0});

  });
    

    
    










