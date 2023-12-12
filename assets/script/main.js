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
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('click', Outside)

function Outside() {
  sprint.classList.toggle('off')
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener("keydown", MoveSomething, true);

function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
			// left key pressed
			break;
      fix.classList.toggle('text')

	}	
}

let the = document.querySelector('a:nth-of-type(7)');

the.addEventListener('click', Whirl);
function Whirl() {
  the.classList.toggle('swirl')
}

let flow = document.querySelector('a:nth-of-type(8)');

flow.addEventListener('click', Other);

function Other() {
  flow.classList.toggle('changing')
}