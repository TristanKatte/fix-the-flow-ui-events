let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//1e animatie met pudding animatie
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', Rotate)
frontend.addEventListener('animationed', Rotate)

function Rotate() {
  frontend.classList.toggle('around')
}

//2e animatie met ronddraaien na dubbelklikken
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', Around)

function Around() {
  design.classList.toggle('rotate')
}

//3e animatie met scaling animatie en mouseover event
let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('mouseover', Enlarge)

function Enlarge() {
  and.classList.toggle('big');
}

//4e animatie met pudding animatie
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseleave', Change)

function Change() {
  development.classList.toggle('change');
}

//5e animatie met animatie en keydown
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', Outside)

function Outside() {
  sprint5.classList.toggle('off')
}

//6e animatie
let fix = document.querySelector('a:nth-of-type(6)')


fix.addEventListener('dblclick', Away);

function Away() {

      fix.classList.toggle('fade')

	}	


let the = document.querySelector('a:nth-of-type(7)');

the.addEventListener('keydown', Whirl);

function Whirl() {
  the.classList.toggle('swirl')
}

//8e animatie met steps animatie
let flow = document.querySelector('a:nth-of-type(8)');

flow.addEventListener('click', Other);

function Other() {
  flow.classList.toggle('changing')
}

//9e animatie
let user = document.querySelector('a:nth-of-type(9)');

user.addEventListener('mouseleave', Down);

function Down() {
  user.classList.toggle('sinking')
}

//10e knop
let interface = document.querySelector('a:nth-of-type(10)');

interface.addEventListener('keydown', jumpkey);

function jumpkey() {
  interface.classList.toggle('jumpy')
}

//11e knop
let events = document.querySelector('a:nth-of-type(11)');

events.addEventListener('keyup', Bomb);

function Bomb() {
  events.classList.toggle('explode')
}

//13e knop
let userflow = document.querySelector('a:nth-of-type(13)');

userflow.addEventListener('keypress', Heart);

function Heart() {
  userflow.classList.toggle('heart')
}

//14e knop
let wireflow = document.querySelector('a:nth-of-type(14)');

wireflow.addEventListener('click', Draai);

function Draai() {
  wireflow.classList.toggle('upside')
}