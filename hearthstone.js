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

$(document).ready(function(index, li){
    $("#slide > .guide > li").addClass(function(index){
        return `intro${index+1}`;
    });
});



$(function(){
    $(".gnb .navmenu .m").on("mouseenter focusin click", function(){
        $("ul",this).show();
        $(this).siblings("li").find("ul").hide().stop();
        
    }).on("mouseleave", function(){
        $(".gnb .navmenu .m ul").hide().add(".gnb .navmenu .m").removeClass("on").stop();
    });
    
});

$(".gnb .navmenu .m ul").hide();  
    $(".gnb .navmenu .m ul li").hover(function(){
        $(this).addClass("on").stop();
        $(".gnb .navmenu .m ul li").not(this).removeClass("on").stop();
    });



$(".gnb .navmenu .m:first a").click(function(){
    $("#gameintroduce").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:first .snb li:first a").click(function(){
    $("#silde").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:first .snb li:nth(1) a").click(function(){
    $("#how").addClass("on").siblings().removeClass("on");
});    








$(".gnb .navmenu .m:nth(1) a").click(function(){
    $(".sec2").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:nth(2) a").click(function(){
    $(".sec3").addClass("on").siblings().removeClass("on");
});    


$(".gnb .navmenu .m:nth(2) li:first").click(function(){
    $(".sec3").addClass("on").siblings().removeClass("on");
});    

$(".gnb .navmenu .m:nth(2) li:last").click(function(){
    $(".sec4").addClass("on").siblings().removeClass("on");
});    





$(".sec2 .herose .Hr a:first").click(function(){
    $(".heropage > .bg:first").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(1)").click(function(){
    $(".heropage > div:nth(1)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(2)").click(function(){
    $(".heropage > div:nth(2)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(3)").click(function(){
    $(".heropage > div:nth(3)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(4)").click(function(){
    $(".heropage > div:nth(4)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(5)").click(function(){
    $(".heropage > div:nth(5)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(6)").click(function(){
    $(".heropage > div:nth(6)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(7)").click(function(){
    $(".heropage > div:nth(7)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr > a:nth(8)").click(function(){
    $(".heropage > div:nth(8)").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr a:last").click(function(){
    $(".heropage > div:last").addClass("on").siblings().stop().removeClass("on");
});    




//     var imgIndex = $(this).index();
    //     $("ul.guide li").eq(imgIndex).stop().fadeIn()
    //                     .siblings().fadeOut(); 



$("#slide > .control > li:first").click(function(){
    $("#slide > .guide > li:first").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide li:first").addClass("on").siblings().removeClass("on");
});
    

$("#slide > .control > li:nth(1)").click(function(){
    $("#slide > .guide > li:nth(1)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide li:nth(1)").addClass("on").siblings().removeClass("on");
});

$("#slide > .control > li:nth(2)").click(function(){
    $("#slide > .guide > li:nth(2)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(2)").addClass("on").siblings().removeClass("on");
});

$("#slide > .control > li:nth(3)").click(function(){
    $("#slide > .guide > li:nth(3)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(3)").addClass("on").siblings().removeClass("on");
    
});

$("#slide > .control > li:nth(4)").click(function(){
    $("#slide > .guide > li:nth(4)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(4)").addClass("on").siblings().removeClass("on");
    
});

$("#slide > .control > li:nth(5)").click(function(){
    $("#slide > .guide > li:nth(5)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(5)").addClass("on").siblings().removeClass("on");
    
});

$("#slide > .control > li:nth(6)").click(function(){
    $("#slide > .guide > li:nth(6)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(6)").addClass("on").siblings().removeClass("on");
    
});

$("#slide > .control > li:nth(7)").click(function(){
    $("#slide > .guide > li:nth(7)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(7)").addClass("on").siblings().removeClass("on");
    
});

$("#slide > .control > li:nth(8)").click(function(){
    $("#slide > .guide > li:nth(8)").addClass("on").siblings().removeClass("on");
    $("#slide > .textguide > li:nth(8)").addClass("on").siblings().removeClass("on");
    
});


$("ul.guide li:first").show();
    $("ul.control li").click(function() { 
        $(this).addClass("on").siblings().removeClass("on");
    });






    // $("ul.guide li:first").show();
    // $("ul.control li").click(function() { 
    //     $(this).addClass("on").siblings().removeClass("on");
    //     var imgIndex = $(this).index();
    //     $("ul.guide li").eq(imgIndex).stop().fadeIn()
    //                     .siblings().fadeOut();
    // });









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

$(document).ready(function(index, a){
    $(".sec1 > .inner > div > a").addClass(function(index){
        return `manabt${index+1}`;
    });
});

$(document).ready(function(){
    $(".sec2 > .heropage > .inner > .skin > .wrap > div").addClass("center")
    });

// $('.slick').slick({
//     centerMode: true,
//     centerPadding: 0,
//     slidesToShow: 3,
    
$(document).ready(function(){  
$('.sec2 > .heropage > .bg > .inner > .skin > .wrap').slick({
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
    
//   $(function() {
//     $("ul.guide li:first").show();
//     $("ul.control li").click(function() { 
//         $(this).addClass("on").siblings().removeClass("on");
//         var imgIndex = $(this).index();
//         $("ul.guide li").eq(imgIndex).stop(true).fadeIn(500)
//                         .siblings().fadeOut(200);
//     });


    
    




// });





    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 29
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  








