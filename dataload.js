$(document).ready(function () {
    $.getJSON('/project/carddata.json', function (data) {
        $("#cards").next().text(data.cards);
            const CARD = data.cards;
            const max00 = CARD.length;
            for (let i = 0; i < max00; i++) {
                const cloneEl = $("#cards").clone(true);
                $(cloneEl).children("#name").attr(data.cards.name);
                $(cloneEl).children("#manaCost").attr("manaCost");
                
                $(cloneEl).appendTo("#here"); //ul에 붙이기
                // $(cloneEl).children("name").attr("name", CARD[i].name);
                // $(cloneEl).children("classId").attr("classId", CARD[i].classId);
                // $(cloneEl).children("rarity").attr("rarity", CARD[i].rarityId);
                // $(cloneEl).children("artist").attr("artist", CARD[i].artistName);
                // $(cloneEl).children("manaCost").attr("manaCost", CARD[i].manaCost);
                // $(cloneEl).children("text").attr("text", CARD[i].text);
                // $(cloneEl).children("flavorText").attr("flavorText", CARD[i].flavorText);
                // $(cloneEl).children("image").attr("image", CARD[i].image);
                // $(cloneEl).children("cardtype").attr("cardType", CARD[i].cardTypeId);
                // $(cloneEl).children("minionType").attr("minionTypeId", CARD[i].minionTypeId);
                // $(cloneEl).children("spellType").attr("spellType", CARD[i].spellSchoolId);
                // $(cloneEl).children("health").attr("health", CARD[i].health);
                // $(cloneEl).children("attack").attr("attack", CARD[i].attack);
                
            };
        // const CARD = data.name;
        // const max00 = data.name;
        
        // for (let i = 0; i < max00; i++){
        //     const cloneE1 = $(".card").clone(true);
        //     $(cloneEl).children("#2").text(CARD[i + 1].name);
        //     $(cloneEl).insertAfter("#2");
        // }
        // {
        //     const cloneE1 = $(".card").clone(true);
        //     $(cloneE1).appendTo("img");
            
        // }


    });
});