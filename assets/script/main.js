let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', Rotate)
frontend.addEventListener('animationed', Rotate)

function Rotate() {
  frontend.classList.toggle('around')
}

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', Around)

function Around() {
  design.classList.toggle('rotate')
}

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('mouseover', Enlarge)

function Enlarge() {
  and.classList.toggle('big');
}

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseleave', Change)

function Change() {
  development.classList.toggle('change');
}

let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('click', Outside)

function Outside() {
  sprint.classList.toggle('off')
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener("keydown", MoveSomething, false);

function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
			// left key pressed
			break;
      fix.classList.toggle('text')

	}	
}

