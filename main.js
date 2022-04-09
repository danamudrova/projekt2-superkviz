//SUPERKVIZ

//otázky a odpovědi

let poleOtazek = [{
    otazka:'Kdo umí všechny řeči?', 
    foto:'obrazky/papouch.jpg',
    odpoved: ["Google translator", "Ozvěna", "Dana"],
    spravnaOdpoved: "1"
},
{
    otazka:'Naháč nahatý, nahatější být nemůže. Co je to?', 
    foto:'obrazky/pes.jpg',
    odpoved:["Lidská kostra", "Čínský chocholatý pes", "Ptačí holátko"],
    spravnaOdpoved: "0"
},
{
    otazka:'Kdo mě našel, ztratil mne. Co je to?', 
    foto:'obrazky/penize.jpg',
    odpoved:["Peníze", "Hádanka", "Moudrost"],
    spravnaOdpoved: "1"
}]



//STRANKA    
//div pro obsah
let content = document.createElement('div');
content.className='obsah';

//OBRAZEK
//div pro obrázek
let picture = document.createElement('div');
picture.className='foto';

//fotka
let photo = document.createElement('img');
photo.id='obrazek';

//zabalení do divu fotky
picture.appendChild(photo);

//zabalení fotky do divu obsahu
content.appendChild(picture);

//ODPOVEDI
//div pro možnosti
let choice = document.createElement('div');
choice.id='moznosti';

//list odpovědí
let answers = document.createElement('ul');
answers.id='odpovedi';

//odpovědi
let answer1 = document.createElement('li');
answer1.className ='odpoved';
answer1.setAttribute('data-odpoved', "0");

let answer2 = document.createElement('li');
answer2.className ='odpoved';
answer2.setAttribute('data-odpoved', "1");

let answer3 = document.createElement('li');
answer3.className ='odpoved';
answer3.setAttribute('data-odpoved', "2");

//zabalení otázek do divu otazek

answers.appendChild(answer1);
answers.appendChild(answer2);
answers.appendChild(answer3);

//zabalení do divu možností
choice.appendChild(answers);

//zabaleni možností do divu obsahu
content.appendChild(choice);

//zabalení všeho do divu kviz
let quiz = document.querySelector('.kviz');
quiz.appendChild(content);

//iniciální otázky
changeQuestion(poleOtazek[0],'1/3')

//funkce měniče obsahu stránky
function changeQuestion(q,order){
document.querySelector('#otazka').textContent = q.otazka;
document.querySelector('#poradi').textContent = order;
answer1.innerHTML = q.odpoved[0];
answer2.innerHTML = q.odpoved[1];
answer3.innerHTML = q.odpoved[2];
photo.src = q.foto;
}
 
//všechny otázky jsou klikatelné
const odpoved = document.querySelectorAll('.odpoved')
odpoved.forEach((odpoved) => {
    odpoved.addEventListener('click', result);
})


//co se po kliku stane (nová otázka a pořadí, kontrola, skore, vložení odpovědí do výsledku a nakonec zobrazení výsledku)
function result(udalost){
    let myChoice = udalost.target.dataset.odpoved

    if (document.querySelector('#poradi').innerHTML==='1/3'){
        changeQuestion(poleOtazek[1],'2/3');
        if (poleOtazek[0].spravnaOdpoved===myChoice){
            score();
            document.querySelector('#tvoje1').innerHTML = 'Tvoje odpověď je SPRÁVNÁ';
        }
        else {
            document.querySelector('#tvoje1').innerHTML+='Tvoje odpověď: '+ '<span>' + poleOtazek[0].odpoved[myChoice] + '</span>';
        } 
    }
    else if (document.querySelector('#poradi').innerHTML==='2/3'){
        changeQuestion(poleOtazek[2],'3/3');
        if (poleOtazek[1].spravnaOdpoved===myChoice){
            score();
            document.querySelector('#tvoje2').innerHTML = 'Tvoje odpověď je SPRÁVNÁ';
        }
        else {
            document.querySelector('#tvoje2').innerHTML+='Tvoje odpověď: '+ '<span>' + poleOtazek[1].odpoved[myChoice] + '</span>';
        } 
    }
    else if (document.querySelector('#poradi').innerHTML==='3/3'){ 
        if (poleOtazek[2].spravnaOdpoved===myChoice){
            score();
            document.querySelector('#tvoje3').innerHTML = 'Tvoje odpověď je SPRÁVNÁ';
        }
        else {
            document.querySelector('#tvoje3').innerHTML+='Tvoje odpověď: '+ '<span>' + poleOtazek[2].odpoved[myChoice] + '</span>';
        } 
        document.querySelector('.kviz').style.display = 'none';
        document.querySelector('.vysledek').style.display = 'block';
        let myResult = document.getElementById('soucet-odpovedi').innerText

        if (myResult==='1') {
            document.getElementById('procenta').innerText = '33';
        }
        else if (myResult==='2') {
            document.getElementById('procenta').innerText = '66';
        }
        else if(myResult==='3') {
            document.getElementById('procenta').innerText = '100';
            document.getElementById('vitez').textContent='Jsi chytrý jako švec Čič!';
        }
    }
}

//počítadlo
let counter = 1
function score(){
	document.getElementById('soucet-odpovedi').innerText = counter++;
}
