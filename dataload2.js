async function load(){
    const requestURL = 'https://raw.githubusercontent.com/2ironmini/project/main/carddata.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const CARDDATA = await response.json();

    loadCard(CARDDATA);
}

function loadCard(obj){
    const section = document.querySelector("#sec3 .cardlist .wrap");
    const we = obj.cards
    
    for (const me of we)
    {
        const id = document.createElement('div');
        const closeBt = document.createElement('div');

        id.addEventListener
        function addOn() {
            id.classList.add("on");
        };
        id.addEventListener('click', addOn);

        let removeOn = () => 
        {
            id.remove("on");
        };
        closeBt.addEventListener('click', removeOn);
        



        const textbox = document.createElement('div')
        const name = document.createElement('h4')
        const classId = document.createElement('p');
        const spellType = document.createElement('p');
        const minionType = document.createElement('p');
        const cardType = document.createElement('p');
        const cardSet = document.createElement('p');
        const rarityID = document.createElement('p');
        const artistName = document.createElement('p');
        const manaCost = document.createElement('p');
        const text = document.createElement('p');
        const flavorText = document.createElement('p');
        const attack = document.createElement('p');
        const health = document.createElement('p');
        const img = document.createElement('img');
        img.src = me.image;
        img.alt = me.name;
        id.className = me.classId;
        id.id = me.id;
        name.className = 'name';
        classId.className = 'classId';
        spellType.className = 'spellType';
        minionType.className = 'minionType';
        cardType.className = 'cardType';
        cardSet.className = 'cardSet';
        rarityID.className = 'rarity';
        artistName.className = 'artistName';
        manaCost.className = 'manaCost';
        attack.className = 'attack';
        health.className = 'health';
        closeBt.className = 'closeBt';












        
        textbox.className = 'textbox';
        

    
        
var mage = "div.4";
var paladin = "div.5";
var demonhunter = "div.14";
var druid = "div.2";
var hunter = "div.3";
var warlock = "div.9";
var warrior = "div.10";
var priest = "div.6";
var rogue = "div.7";
var shaman = "div.8";
var natural = "div.12";


// 스위치로해보기 344p

        name.textContent = me.name;
        // id.className = `${me.id}`;
        // id.textContent = `${me.id}`;
        classId.textContent = `${me.classId}`
            if (classId.textContent = 2) {classId.textContent = '드루이드';}
            else if (classId.textContent = 3) {classId.textContent = '사냥꾼';}
            else if (classId.textContent = 4) {classId.textContent = '마법사';}
            else if (classId.textContent = 5) {classId.textContent = '성기사';}
            else if (classId.textContent = 6) {classId.textContent = '사제';}
            else if (classId.textContent = 7) {classId.textContent = '도적';}
            else if (classId.textContent = 8) {classId.textContent = '주술사';}
            else if (classId.textContent = 9) {classId.textContent = '흑마법사';}
            else if (classId.textContent = 10) {classId.textContent = '전사';}
            else if (classId.textContent = 12) {classId.textContent = '중립';}
            else if (classId.textContent = 14) {classId.textContent = '악마 사냥꾼';};

        spellType.textContent = `${me.spellSchoolId}`;
        minionType.textContent = `${me.minionTypeId}`;
        cardType.textContent = `${me.cardTypeId}`;
        cardSet.textContent = `${me.cardSetId}`;
        rarityID.textContent = `${me.rarityId}`;
        artistName.textContent = `${me.artistName}`;
        manaCost.textContent = `${me.manaCost}`;
        text.textContent = `${me.text}`;
        flavorText.textContent = `${me.flavorText}`;
        attack.textContent = `${me.attack}`;
        health.textContent = `${me.health}`;








        // img.textContent = `image: ${me.image}`;
        
        
        // if (spellType.textContent = undefined) {
        //     spellType.textContent = '';
        // }
        // if (minionType.textContent = undefined) {
        //     minionType.textContent = '';
        // }
        // if (attack.textContent = undefined) {
        //     attack.textContent = '';
        // }
        // if (health.textContent = undefined) {
        //     health.textContent = '';
        // }

        id.prepend(img);
        textbox.appendChild(name);
        textbox.appendChild(classId);
        textbox.appendChild(spellType);
        textbox.appendChild(minionType);
        textbox.appendChild(cardType);
        textbox.appendChild(cardSet);
        textbox.appendChild(artistName);
        textbox.appendChild(manaCost);
        textbox.appendChild(text);
        textbox.appendChild(flavorText);
        textbox.appendChild(attack);
        textbox.appendChild(health);
        textbox.appendChild(closeBt);
        id.appendChild(textbox);
        textbox.appendChild(rarityID);
        
        section.appendChild(id);
}
    
}


load();











var mage = "div.4";
var paladin = "div.5";
var demonhunter = "div.14";
var druid = "div.2";
var hunter = "div.3";
var warlock = "div.9";
var warrior = "div.10";
var priest = "div.6";
var rogue = "div.7";
var shaman = "div.8";
var natural = "div.12";



$(".job .magicianpage").click(function(){
    $(mage).show().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .paladinpage").click(function(){
    $(mage).hide().stop();
    $(paladin).show().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .demonhunterpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).show().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .druidpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).show().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .hunterpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).show().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .warlockpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).show().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .warriorpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).show().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .priestpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).show().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .roguepage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).show().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .shamanpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).show().stop();
    $(natural).hide().stop();
});
$(".job .naturalpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).show().stop();

});

//     // $(mage).toggle().stop();
//     // $(paladin).toggle().stop();
//     // $(demonhunter).toggle().stop();
//     // $(druid).toggle().stop();
//     // $(hunter).toggle().stop();
//     // $(warlock).toggle().stop();
//     // $(warrior).toggle().stop();
//     // $(priest).toggle().stop();
//     // $(rogue).toggle().stop();
//     $(druid).hide().stop();
    
// });


// 드루
// $(".job div:nth(6)").click(function(){
//     $("#god div.14").not(this).hide();
// });    






