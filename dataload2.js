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
        const rarity = document.createElement('p');
        const artistName = document.createElement('p');
        const manaCost = document.createElement('p');
        const text = document.createElement('p');
        const flavorText = document.createElement('p');
        const attack = document.createElement('p');
        const health = document.createElement('p');
        const img = document.createElement('img');
        img.src = me.image;
        img.alt = me.name;


        name.textContent = me.name;
        id.textContent = '';
        // id.textContent = `id: ${me.id}`;
        classId.textContent = `classId: ${me.classId}`;
        spellType.textContent = `spellSchoolId: ${me.spellSchoolId}`;
        minionType.textContent = `minionTypeId: ${me.minionTypeId}`;
        cardType.textContent = `cardTypeId: ${me.cardTypeId}`;
        cardSet.textContent = `cardSetId: ${me.cardSetId}`;
        rarity.textContent = `rarityId: ${me.rarityId}`;
        artistName.textContent = `artistName: ${me.artistName}`;
        manaCost.textContent = `manaCost: ${me.manaCost}`;
        text.textContent = `text: ${me.text}`;
        flavorText.textContent = `flavorText: ${me.flavorText}`;
        attack.textContent = `attack: ${me.attack}`;
        health.textContent = `health: ${me.health}`;
        img.textContent = `image: ${me.image}`;
        
    






        
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
        id.appendChild(img);


        section.appendChild(id);
    }
}


// link.addEventListener('click', addOn);
    
//     function addOn() {
//         this.id.add("on")
//     }



load();






















