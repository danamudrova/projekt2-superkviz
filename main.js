//SUPERKVIZ

//div pro kvíz

let superQuiz = document.createElement('div');
superQuiz.className = 'kviz';

let background = document.querySelector('body');
background.appendChild(superQuiz);

//div pro pořadí

let order = document.createElement('div');
order.id='poradi'


let orderFont = document.querySelector('.kviz');
orderFont.appendChild(order);

order.innerHTML = "Otázka 1/3";

//div pro otázku

let question = document.createElement('div');
question.id='otazka'

let questionFont = document.querySelector('.kviz');
questionFont.appendChild(question);

question.innerHTML = "Kdo je na světě nejkrásnější?";


//fotka

//možnosti





