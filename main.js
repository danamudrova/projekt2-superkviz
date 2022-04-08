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


//první otázka a pořadí
    changeQuestion(poleOtazek[0],'1/3')
    

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
photo.src = poleOtazek[0].foto;


//zabalení do divu fotky
picture.appendChild(photo)

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
answer1.className ='odpoved'
answer1.setAttribute('data-odpoved', "0");


let answer2 = document.createElement('li');
answer2.className ='odpoved'
answer2.setAttribute('data-odpoved', "1");


let answer3 = document.createElement('li');
answer3.className ='odpoved'
answer3.setAttribute('data-odpoved', "2");


//zabalení otázek do divu otazek

answers.appendChild(answer1)
answers.appendChild(answer2)
answers.appendChild(answer3)

//zabalení do divu možností
choice.appendChild(answers)

//zabaleni možností do divu obsahu
content.appendChild(choice)


//zabalení všeho do divu kviz
let quiz = document.querySelector('.kviz');
quiz.appendChild(content)

changeAnswersPhoto(poleOtazek[0])
//funkce pro nahrazení hodnot z dalšího pole
function newQuestion (){
}

//všechny otázky jsou klikatelné
const odpoved = document.querySelectorAll('.odpoved')
odpoved.forEach((odpoved) => {
    odpoved.addEventListener('click', result)
})



// function yourAnswer(udalost){
//     
//     
//     //nová otázka a pořadí
//     changeQuestion(poleOtazek[1],'2/3')
//     //a nové otázky ¨
//    changeAnswersPhoto(poleOtazek[1])
//    result()
    
//}


 function changeQuestion(q,order){
 document.querySelector('#otazka').textContent = q.otazka;
 document.querySelector('#poradi').textContent = order}

function changeAnswersPhoto(q){
    answer1.innerHTML = q.odpoved[0];
    answer2.innerHTML = q.odpoved[1];
    answer3.innerHTML = q.odpoved[2];
    photo.src = q.foto;
}

//  //pro výsledek se musí porovnat čísla vybraných odpovědí (data set) s indexem správných odpovědí (přes if) a podle toho se zobrazí výsledek počtu odpovědí (počítadlo?)
function result(udalost){
    document.querySelector('.kviz').style.display = 'none'
    document.querySelector('.vysledek').style.display = 'block'

    //kontrola odpovědí
    if (poleOtazek[0].spravnaOdpoved===udalost.target.dataset.odpoved){score()}
    if (poleOtazek[1].spravnaOdpoved===udalost.target.dataset.odpoved){score()}
    if (poleOtazek[2].spravnaOdpoved===udalost.target.dataset.odpoved){score()}
    if (counter!==3){console.log('propadák')}
}

//počítadlo
let counter = 0
function score(){
	document.getElementById('soucet-odpovedi').innerText = counter++;
}