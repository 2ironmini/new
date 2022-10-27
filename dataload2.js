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
        const name = document.createElement('p')
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
        

        function addOn() {
            id.classList.add("on");
        };
        // let removeOn = () => {
        //     id.classList.remove("on");
        // };
        id.addEventListener('click', addOn);
        
        // id.addEventListener('click', removeOn);


        name.textContent = me.name;
        id.textContent = '';
        // id.textContent = `id: ${me.id}`;
        classId.textContent = `${me.classId}`;
        spellType.textContent = `spellSchoolId: ${me.spellSchoolId}`
        minionType.textContent = `minionTypeId: ${me.minionTypeId}`;
        cardType.textContent = `${me.cardTypeId}`;
        cardSet.textContent = `cardSetId: ${me.cardSetId}`;
        rarityID.textContent = `rarityId: ${me.rarityId}`;
        artistName.textContent = `artistName: ${me.artistName}`;
        manaCost.textContent = `manaCost: ${me.manaCost}`;
        text.textContent = `${me.text}`;
        flavorText.textContent = `${me.flavorText}`;
        attack.textContent = `attack: ${me.attack}`;
        health.textContent = `health: ${me.health}`;
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

        
        id.appendChild(name);
        id.appendChild(classId);
        id.appendChild(spellType);
        id.appendChild(minionType);
        id.appendChild(cardType);
        id.appendChild(cardSet);
        id.appendChild(artistName);
        id.appendChild(manaCost);
        id.appendChild(text);
        id.appendChild(flavorText);
        id.appendChild(attack);
        id.appendChild(health);
        id.appendChild(img);
        id.appendChild(rarityID);
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
// var JOB = (mage + paladin + demonhunter + druid + hunter + warlock + warrior + priest + rogue + shaman + natural)

$(".job .magicianpage").click(function(){
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .paladinpage").click(function(){
    $(mage).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .demonhunterpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .druidpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .hunterpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .warlockpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .warriorpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .priestpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .roguepage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(shaman).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .shamanpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(natural).toggle().stop();
});
$(".job .naturalpage").click(function(){
    $(mage).toggle().stop();
    $(paladin).toggle().stop();
    $(demonhunter).toggle().stop();
    $(druid).toggle().stop();
    $(hunter).toggle().stop();
    $(warlock).toggle().stop();
    $(warrior).toggle().stop();
    $(priest).toggle().stop();
    $(rogue).toggle().stop();
    $(shaman).toggle().stop();
});
// $(".job .naturalpage").click(function(){
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


            







