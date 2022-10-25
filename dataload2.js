async function load(){
    const requestURL = 'https://raw.githubusercontent.com/2ironmini/project/main/carddata.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const CARDDATA = await response.json();

    
    loadCard(CARDDATA);
}

function loadCard(obj){
    const section = document.querySelector('section');
    const we = obj.cards
    
    for (const me of we)
    {
        const id = document.createElement('article');
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
        const img = document.createElement('p');
        const duels = document.createElement('p');
        const myList = document.createElement('ul');

        
        name.textContent = me.name;
        id.textContent = `id: ${me.id}`;
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
        img.textContent = `image: ${me.image}`;
        // duels.textContent = 'useage:';
    
        // const useage = me.duels;
        // for(const duels of useage){
        //     const listItem = document.createElement('li');
        //     listItem.textContent = duels;
        //     myList.appendChild(listItem);
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
        id.appendChild(img);
        id.appendChild(duels);
        id.appendChild(myList);

        section.appendChild(id);
    }
}

load();