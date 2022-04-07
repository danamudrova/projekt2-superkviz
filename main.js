//SUPERKVIZ

//otázky a odpovědi

let poleOtazek = [{
    otazka:'Kdo umí všechny řeči?', 
    foto:'obrazky/papouch.jpg',
    odpoved: ["Google translator", "Ozvěna", "Dana"],
    spravnaOdpoved: 'jupi'
},

{
    otazka:'Naháč nahatý, nahatější být nemůže. Co je to?', 
    foto:'obrazky/pes.jpg',
    odpoved:["Lidská kostra", "Čínský chocholatý pes", "Ptačí holátko"],
    
},
{
    otazka:'Kdo mě našel, ztratil mne. Co je to?', 
    foto:'obrazky/penize.jpg',
    odpoved:["Peníze", "Hádanka", "Moudrost"],
    
}]



//pole vybraných odpovědí



//změna otázky a pořadí
function otazky(question,order){
    document.querySelector('#otazka').textContent = question.otazka
    document.querySelector('#poradi').textContent = order
}

document.querySelector('#obrazek').src = poleOtazek[0].foto

console.log(poleOtazek[0].spravnaOdpoved)
// document.querySelector('#jedna').textContent = otazka1.odpoved[0]
// document.querySelector('#dve').textContent = otazka2.odpoved[1]
// document.querySelector('#tri').textContent = otazka1.odpoved[2]


 

 // při otevření se načte 
 //první otázka a pořadí
 otazky(poleOtazek[0],'1/3')
 //vlozit blok s fotkou a odpověďmi: 
    //1) vytvorit div obsah s class obsah, vytvorit v nem div foto s class foto, vytvorit v nem img s id obrazek
    
    //div pro obsah


// let content = document.createElement('div');
// content.id='obsah'

// let questionFont = document.querySelector('.kviz');
// questionFont.appendChild(question);
    

//2) vytvorit ul a li s id 


 //po kliknutí na odpověď se  vybraná odpověď uloží do pole odpovědí hráče a smaže se seznam a nahradí dalším blokem

 //pro výsledek se musí porovnat čísla vybraných odpovědí s indexem správných odpovědí (přes if) a podle toho se zobrazí výsledek počtu odpovědí (počítadlo?) 
 


