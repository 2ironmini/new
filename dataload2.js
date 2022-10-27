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







// 악사

var druid = "#god div.2";
var demonhunter = "@god div.14";

$(".job div:nth(4)").click(function(){
    $(druid).toggle().stop();
});



// 드루
// $(".job div:nth(6)").click(function(){
//     $("#god div.14").not(this).hide();
// });    


            







