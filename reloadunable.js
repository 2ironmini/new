// $(document).ready(function(){
//     $.getJSON('/project/carddata.json', function(data){
//         $('#go').next().text(data.cards[0]);
//     })
// })

async function dataloading(){
    const requestURL = 'https://raw.githubusercontent.com/2ironmini/project/main/carddata.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const CARDDATA = await response.json();
    CARD(CARDDATA);
    CARDS(CARDDATA);
}

function CARD(jsonObj){
    var H1 = document.createElement('p');
    H1.textContent = jsonObj['cards'][1]['name'][1];
    header.appendChild(H1);

    var InforM = document.createElement('p');
    InforM.textContent= 'Mana: ' + jsonObj['Mana'] + '//Formed: ' + jsonObj['formed']; header.appendChild(InforM);
}


function DATA(jsonObj){
    var CARDDATA = jsonObj['cards'];

    for (var i=0; i<CARDDATA.length; i++){
        var id = document.createElement('article');
        var name = document.createElement('h2');
        var classId = document.createElement('p');
        var spellType = document.createElement('p');
        var minionType = document.createElement('p');
        var cardType = document.createElement('p');
        var cardSet = document.createElement('p');
        var rarity = document.createElement('p');
        var artistName = document.createElement('p');
        var manaCost = document.createElement('p');
        var text = document.createElement('p');
        var flavorText = document.createElement('p');
        var img = document.createElement('ul');

        
        id.textContent = CARDDATA[i].id;
        name.textContent = CARDDATA[i].name;
        classId.textContent = 'class: ' + CARDDATA[i].classId;
        spellType.textContent = 'spelltype: ' + CARDDATA[i].spellSchoolId;
        minionType.textContent = 'miniontype: ' + CARDDATA[i].minionTypeId;
        cardType.textContent = 'cardtype: ' + CARDDATA[i].cardTypeId;
        cardSet.textContent = 'cardset: ' + CARDDATA[i].cardSetId;
        rarity.textContent = 'rarity: ' + CARDDATA[i].rarityId;
        artistName.textContent = 'artistname: ' + CARDDATA[i].artistName;
        manaCost.textContent = 'manacost: ' + CARDDATA[i].manaCost;
        text.textContent = 'text: ' + CARDDATA[i].text;
        flavorText.textContent = 'flavortext: ' + CARDDATA[i].flavorText;
        img.textContent = 'imgurl: ';
        //  + CARDDATA[i].image;

        var imgurl = CARDDATA[i].image;
        for (var j = 0; j < imgurl.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = imgurl[j];
            img.appendChild(listItem);
        }

        myArticle.appendChild(name);
        myArticle.appendChild(classId);
        myArticle.appendChild(spellType);
        myArticle.appendChild(minionType);
        myArticle.appendChild(cardType);
        myArticle.appendChild(cardSet);
        myArticle.appendChild(rarity);
        myArticle.appendChild(artistName);
        myArticle.appendChild(manaCost);
        myArticle.appendChild(text);
        myArticle.appendChild(flavorText);
        myArticle.appendChild(img);

        Section.appendChild(id);
        }
    }

    dataloading();