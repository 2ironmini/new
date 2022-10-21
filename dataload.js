$(document).ready(function () {
    $.getJSON('/project/carddata.json', function (data) {
        $("#cards").next().text(data.cards);


	
const lib = data.cards;
const URL = lib.image;
const max00 = lib.length;

for (let i = 0; i < max00; i++)
{
const CARD = $("#cards").children().last().clone(true);
$(CARD).children("#image > img").attr({alt: '0 ++', src: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fde1fb781e66ca5e482a37cd2b64fa058a8eee98177185a5d32bb2da614a86f8.png'});
$(CARD).appendTO("#lib");
}


    });   
});
