// document.getElementById("id").onload=function(){
    
// }

function onLoadEvenet() {
    autostart.click();
}

window.onload = onLoadEvenet


$("#ctlbar .on").click(function(){
    $('html,body').animate({scrollTop: document.body.scrollHeight}, 500000, "linear");
})

$("#ctlbar .off").click(function(){
    $('html,body').animate().stop();
})

$("#ctlbar .on").click(function(){
    $(this).hide().stop();
    $("#ctlbar .off").show().stop();
})
$("#ctlbar .off").click(function(){
    $(this).hide().stop();
    $("#ctlbar .on").show().stop();
})





// var scrollInterval = setInterval(function() { 
//     document.documentElement.scrollTop = document.documentElement.scrollHeight;
// }, 50);



// var notChangedStepsCount = 0;
// var scrollInterval = setInterval(function() {
//     var element = document.getElementById("one");
//     if (element) { 
//         // element found
//         clearInterval(scrollInterval);
//         element.scrollIntoView();
//     } else if((document.documentElement.scrollTop + window.innerHeight) != document.documentElement.scrollHeight) { 
//         // no element -> scrolling
//         notChangedStepsCount = 0;
//         document.documentElement.scrollTop = document.documentElement.scrollHeight;
//     } else if (notChangedStepsCount > 20) { 
//         // no more space to scroll
//         clearInterval(scrollInterval);
//     } else {
//         // waiting for possible extension (autoload) of the page
//         notChangedStepsCount++;
//     }
// }, 50);