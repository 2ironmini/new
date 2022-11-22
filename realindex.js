




$("#one").click(function(){
    $("#sec1").show();
    $("#sec2").hide();
    $("#sec3").hide();
    //p
    $("#sec1 .box:nth(3) div:nth(1)").addClass("ani1");
    $("#sec1 .box:nth(3) div:nth(2)").addClass("ani3");
    $("#sec1 .box:nth(3) div:nth(3)").addClass("ani2");
    $("#sec1 .box:nth(4) div:nth(1)").addClass("ani1");
    $("#sec1 .box:nth(4) div:nth(3)").addClass("ani5");
    $("#sec1 .box:nth(5) div:nth(1)").addClass("ani3");
    $("#sec1 .box:nth(5) div:nth(2)").addClass("ani1");
    $("#sec1 .box:nth(5) div:nth(3)").addClass("ani4");
    $("#sec1 .box:nth(6) div:nth(1)").addClass("ani2");
    $("#sec1 .box:nth(7) div:nth(1)").addClass("ani5");
    $("#sec1 .box:nth(8) div:nth(1)").addClass("ani4");

    //o
    $("#sec1 .box:nth(6) div:nth(5)").addClass("ani3");
    $("#sec1 .box:nth(6) div:nth(6)").addClass("ani3");
    $("#sec1 .box:nth(6) div:nth(7)").addClass("ani2");
    $("#sec1 .box:nth(7) div:nth(5)").addClass("ani5");
    $("#sec1 .box:nth(7) div:nth(7)").addClass("ani4");
    $("#sec1 .box:nth(8) div:nth(5)").addClass("ani2");
    $("#sec1 .box:nth(8) div:nth(6)").addClass("ani1");
    $("#sec1 .box:nth(8) div:nth(7)").addClass("ani5");

    //r
    $("#sec1 .box:nth(5) div:nth(9)").addClass("ani2");
    $("#sec1 .box:nth(6) div:nth(9)").addClass("ani5");
    $("#sec1 .box:nth(6) div:nth(10)").addClass("ani3");
    $("#sec1 .box:nth(7) div:nth(9)").addClass("ani1");
    $("#sec1 .box:nth(8) div:nth(9)").addClass("ani4");

    //t
    $("#sec1 .box:nth(4) div:nth(12)").addClass("ani4");
    $("#sec1 .box:nth(3) div:nth(13)").addClass("ani3");
    $("#sec1 .box:nth(4) div:nth(13)").addClass("ani2");
    $("#sec1 .box:nth(5) div:nth(13)").addClass("ani5");
    $("#sec1 .box:nth(6) div:nth(13)").addClass("ani1");
    $("#sec1 .box:nth(7) div:nth(13)").addClass("ani2");
    $("#sec1 .box:nth(8) div:nth(13)").addClass("ani2");
    $("#sec1 .box:nth(4) div:nth(14)").addClass("ani4");

    //f
    $("#sec1 .box:nth(11) div:nth(3)").addClass("ani5");
    $("#sec1 .box:nth(11) div:nth(4)").addClass("ani4");
    $("#sec1 .box:nth(11) div:nth(5)").addClass("ani2");
    $("#sec1 .box:nth(12) div:nth(3)").addClass("ani5");
    $("#sec1 .box:nth(13) div:nth(3)").addClass("ani3");
    $("#sec1 .box:nth(13) div:nth(4)").addClass("ani3");
    $("#sec1 .box:nth(13) div:nth(5)").addClass("ani1");
    $("#sec1 .box:nth(14) div:nth(3)").addClass("ani5");
    $("#sec1 .box:nth(15) div:nth(3)").addClass("ani4");
    $("#sec1 .box:nth(16) div:nth(3)").addClass("ani2");

    //o
    $("#sec1 .box:nth(14) div:nth(7)").addClass("ani2");
    $("#sec1 .box:nth(14) div:nth(8)").addClass("ani5");
    $("#sec1 .box:nth(14) div:nth(9)").addClass("ani3");
    $("#sec1 .box:nth(15) div:nth(7)").addClass("ani4");
    $("#sec1 .box:nth(15) div:nth(9)").addClass("ani1");
    $("#sec1 .box:nth(16) div:nth(7)").addClass("ani2");
    $("#sec1 .box:nth(16) div:nth(8)").addClass("ani5");
    $("#sec1 .box:nth(16) div:nth(9)").addClass("ani5");

    //l
    $("#sec1 .box:nth(11) div:nth(11)").addClass("ani1");
    $("#sec1 .box:nth(12) div:nth(11)").addClass("ani2");
    $("#sec1 .box:nth(13) div:nth(11)").addClass("ani5");
    $("#sec1 .box:nth(14) div:nth(11)").addClass("ani4");
    $("#sec1 .box:nth(15) div:nth(11)").addClass("ani3");
    $("#sec1 .box:nth(16) div:nth(11)").addClass("ani3");

    //i
    $("#sec1 .box:nth(11) div:nth(13)").addClass("ani1");
    $("#sec1 .box:nth(13) div:nth(13)").addClass("ani2");
    $("#sec1 .box:nth(14) div:nth(13)").addClass("ani3");
    $("#sec1 .box:nth(15) div:nth(13)").addClass("ani4");
    $("#sec1 .box:nth(16) div:nth(13)").addClass("ani5");

    //o
    $("#sec1 .box:nth(14) div:nth(15)").addClass("ani5");
    $("#sec1 .box:nth(14) div:nth(16)").addClass("ani5");
    $("#sec1 .box:nth(14) div:nth(17)").addClass("ani3");
    $("#sec1 .box:nth(15) div:nth(15)").addClass("ani3");
    $("#sec1 .box:nth(15) div:nth(17)").addClass("ani1");
    $("#sec1 .box:nth(16) div:nth(15)").addClass("ani2");
    $("#sec1 .box:nth(16) div:nth(16)").addClass("ani4");
    $("#sec1 .box:nth(16) div:nth(17)").addClass("ani4");

    $("#sec2 .up .box.odd div.even").removeClass("plusz1");
    $("#sec2 .up .box.odd div.odd").removeClass("plusz3");
    $("#sec2 .up .box.even div.even").removeClass("plusz5");
    $("#sec2 .up .box.even div.odd").removeClass("plusz4");

    $("#sec3 .up .box.odd div.even").removeClass("plusz2");
    $("#sec3 .up .box.odd div.odd").removeClass("plusz4");
    $("#sec3 .up .box.even div.even").removeClass("plusz3");
    $("#sec3 .up .box.even div.odd").removeClass("plusz5");
});

$("#two").click(function(){
    $("#sec1").hide();
    $("#sec2").show();
    $("#sec3").hide();
    $("#sec2 .up .box.odd div.even").addClass("plusz1");
    $("#sec2 .up .box.odd div.odd").addClass("plusz3");
    $("#sec2 .up .box.even div.even").addClass("plusz5");
    $("#sec2 .up .box.even div.odd").addClass("plusz4");
    
    $("#sec1 .box div").removeClass("ani1");
    $("#sec1 .box div").removeClass("ani2");
    $("#sec1 .box div").removeClass("ani3");
    $("#sec1 .box div").removeClass("ani4");
    $("#sec1 .box div").removeClass("ani5");

    $("#sec3 .up .box.odd div.even").removeClass("plusz2");
    $("#sec3 .up .box.odd div.odd").removeClass("plusz4");
    $("#sec3 .up .box.even div.even").removeClass("plusz3");
    $("#sec3 .up .box.even div.odd").removeClass("plusz5");
    
    
})

$("#thr").click(function(){
    $("#sec1").hide();
    $("#sec2").hide();
    $("#sec3").show();

    $("#sec3 .up .box.odd div.even").addClass("plusz2");
    $("#sec3 .up .box.odd div.odd").addClass("plusz4");
    $("#sec3 .up .box.even div.even").addClass("plusz3");
    $("#sec3 .up .box.even div.odd").addClass("plusz5");
    
    $("#sec1 .box div").removeClass("ani1");
    $("#sec1 .box div").removeClass("ani2");
    $("#sec1 .box div").removeClass("ani3");
    $("#sec1 .box div").removeClass("ani4");
    $("#sec1 .box div").removeClass("ani5");

    $("#sec2 .up .box.odd div.even").removeClass("plusz1");
    $("#sec2 .up .box.odd div.odd").removeClass("plusz3");
    $("#sec2 .up .box.even div.even").removeClass("plusz5");
    $("#sec2 .up .box.even div.odd").removeClass("plusz4");
})