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
        img.loading = 'lazy';
        id.className = me.classId;
        id.id = me.id;
        name.className = 'name';
        classId.className = `class ${me.classId}`;
        spellType.className = `spellType ${me.spellSchoolId}`;
        minionType.className = `minionType ${me.minionTypeId}`;
        cardType.className = `cardType ${me.cardTypeId}`;
        cardSet.className = `cardSet ${me.cardSetId}`;
        rarityID.className = `rarity ${me.rarityId}`;
        artistName.className = 'artistName';
        manaCost.className = `manaCost ${me.manaCost}`;
        attack.className = `attack ${me.attack}`;
        health.className = `health ${me.health}`;
        text.className = `text`;
        flavorText.className = `flavorText`;
        closeBt.className = 'closeBt';
        textbox.className = 'textbox';


        name.textContent = me.name;
        classId.textContent = me.classId;
        spellType.textContent = `${me.spellSchoolId}`;
        minionType.textContent = `${me.minionTypeId}`;
        cardType.textContent = `${me.cardTypeId}`;
        cardSet.textContent = `${me.cardSetId}`;
        rarityID.textContent = `${me.rarityId}`;
        artistName.textContent = `카드 디자이너 : ${me.artistName}`;
        manaCost.textContent = `마나 소모량 : ${me.manaCost}마나`;
        
        text.innerHTML = `카드 설명 : ${me.text}`;
        flavorText.innerHTML = `배경담 : ${me.flavorText}`;
        attack.textContent = `공격력 : ${me.attack}`;
        health.textContent = `체력 : ${me.health}`;

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
$("p:contains('undefined')").hide(this);

// 직업군 내용
$("p.class.2").html("직업 : 드루이드");
$("p.class.3").html("직업 : 사냥꾼");
$("p.class.4").html("직업 : 마법사");
$("p.class.5").html("직업 : 성기사");
$("p.class.6").html("직업 : 사제");
$("p.class.7").html("직업 : 도적");
$("p.class.8").html("직업 : 주술사");
$("p.class.9").html("직업 : 흑마법사");
$("p.class.10").html("직업 : 전사");
$("p.class.12").html("직업 : 중립");
$("p.class.14").html("직업 : 악마 사냥꾼");

// 주문종류 
$("p.spellType.1").html("주문 속성 : 비전");
$("p.spellType.2").html("주문 속성 : 화염");
$("p.spellType.3").html("주문 속성 : 냉기");
$("p.spellType.4").html("주문 속성 : 자연");
$("p.spellType.5").html("주문 속성 : 신성");
$("p.spellType.6").html("주문 속성 : 암흑");
$("p.spellType.7").html("주문 속성 : 지옥");

// 카드타입
$("p.cardType.3").html("카드 타입 : 영웅 교체");
$("p.cardType.4").html("카드 타입 : 하수인");
$("p.cardType.5").html("카드 타입 : 주문");
$("p.cardType.7").html("카드 타입 : 무기");
$("p.cardType.39").html("카드 타입 : 장소");

// 카드세트
$("p.cardSet.1525").html("카드 세트 : 불모의 땅");
$("p.cardSet.1578").html("카드 세트 : 스톰윈드");
$("p.cardSet.1626").html("카드 세트 : 알터랙 계곡");
$("p.cardSet.1637").html("카드 세트 : 핵심");
$("p.cardSet.1658").html("카드 세트 : 가라앉은 도시로의 항해");
$("p.cardSet.1691").html("카드 세트 : 나스리아 성채 살인 사건");

//희귀도
$("p.rarity.1").html("희귀도 : 일반");
$("p.rarity.3").html("희귀도 : 희귀");
$("p.rarity.4").html("희귀도 : 특급");
$("p.rarity.5").html("희귀도 : 전설");

//미니언타입
$("p.minionType.14").html("종족 : 멀록");
$("p.minionType.15").html("종족 : 악마");
$("p.minionType.17").html("종족 : 기계");
$("p.minionType.18").html("종족 : 정령");
$("p.minionType.20").html("종족 : 야수");
$("p.minionType.21").html("종족 : 토템");
$("p.minionType.23").html("종족 : 해적");
$("p.minionType.24").html("종족 : 용족");
$("p.minionType.26").html("종족 : 모두");
$("p.minionType.43").html("종족 : 가시멧돼지");
$("p.minionType.92").html("종족 : 나가");

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





