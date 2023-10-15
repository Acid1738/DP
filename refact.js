let marks;
let testnum;
let subject;
let statement;

if (!localStorage.getItem('maths')) {
	localStorage.setItem('technics', '[0,0,0]');
	localStorage.setItem('powers', '[0,0,0]');
	localStorage.setItem('ie', '[0,0,0]');
	localStorage.setItem('maths', '[0,0,0]');
}

//when changing marks
document.body.addEventListener('click', (event) => {
	let el = event.target;
	let test = el.closest('[data-test]');

	if (el.closest('[data-subject]')) {
		subject = el.closest('[data-subject]');
	}

	if (test) {
		testnum = test.getAttribute('data-test');
		document.getElementById('popup').style.display = 'block';
	}

	if (subject) {
		marks = subject.querySelectorAll('.mark-bar');
		statement = subject.querySelector('.statement');
	}

	if (el.id === 'save') {
		let sub = subject.getAttribute('data-subject');
		let storemarks = JSON.parse(localStorage.getItem(sub));

		//take edit num
		let edited = document.getElementById('mark-enter').value;
		let j = testnum - 1;
		storemarks[j] = Number(edited);

		//calculate
		storemarks[2] = Math.round(storemarks[0] * 0.3 + storemarks[1] * 0.7);

		//save to sotrage
		localStorage.setItem(sub, JSON.stringify(storemarks));

		//change marks in page
		marks[0].innerText = storemarks[0];
		marks[1].innerText = storemarks[1];
		marks[2].innerText = storemarks[2];

		MarknColor();

		if (j === 1) {
			if (marks[2].innerText > 39) {
				document.getElementById('clap').play();
			} else {
				document.getElementById('sad').play();
			}
		}

		Statements();
		//close pop up
		document.getElementById('popup').style.display = 'none';
		document.getElementById('mark-enter').value = '';
	}

	if (el.id === 'cancel') {
		document.getElementById('popup').style.display = 'none';
	}
});

function MarknColor() {
	let tj = 0;
	let MarkBar = document.body.querySelectorAll('.mark-bar');
	for (i = 0; i < MarkBar.length; i++) {
		//hide 0s
		if (MarkBar[i].innerText === '0') {
			MarkBar[i].style.color = 'white';
		} else {
			MarkBar[i].style.color = 'black';
		}
		//color the bars
		let mark = MarkBar[i].innerText;
		MarkBar[i].style.width = `${mark}%`;
		if (mark > 79) {
			MarkBar[i].style.backgroundColor = 'green';
		} else if (mark < 40) {
			MarkBar[i].style.backgroundColor = 'red';
		} else {
			MarkBar[i].style.backgroundColor = 'orange';
		}
		tj += 1;

		if (tj % 3 === 0) {
			if (mark < 40) {
				MarkBar[i].style.backgroundColor = 'red';
			} else {
				MarkBar[i].style.backgroundColor = 'green';
			}
		}
	}
}

let t = -1;
function PrintMarks() {
	let subs = ['ie', 'maths', 'powers', 'technics'];
	let everybar = document.body.querySelectorAll('.mark-bar');

	for (let i = 0; i < 4; i++) {
		let sos = JSON.parse(localStorage.getItem(subs[i]));

		for (let k = 0; k < 3; k++) {
			t += 1;
			everybar[t].innerText = sos[k];
		}
	}
}

function Statements() {
	let everybar = document.body.getElementsByClassName('mark-bar');
	let everystate = document.body.getElementsByClassName('statement');
	let s = -1;
	let k = -1;
	for (let i = 0; i < 12; i += 3) {
		let e = i + 1;
		k += 1;
		s += 3;
		//wrote both

		if (everybar[i].innerText > 0 && everybar[e].innerText > 0) {
			if (everybar[s].innerText > 39) {
				everystate[k].innerText = 'You qualify for Exams';
			} else {
				everystate[k].innerText = 'Unfortunately you do not qualify for exams';
			}
		} else if (everybar[i].innerText > 0 && everybar[e].innerText == 0) {
			//wrote test 1
			everystate[k].innerText =
				'You need to score more than ' +
				Math.round(400 / 7 - (3 / 7) * Number(everybar[i].innerText)) +
				'% in Test 2 to qaulify for exams';
		} else if (everybar[i].innerText == 0 && everybar[e].innerText > 0) {
			//wrote test 2
			if (everybar[e].innerText < 15) {
				everystate[k].innerText = 'Ngeke usakhava, Yekela';
			} else if (everybar[e].innerText > 58) {
				everystate[k].innerText = 'You qualify for Exams';
			} else {
				everystate[k].innerText =
					'You need to score more than ' +
					Math.round(400 / 3 - (7 / 3) * everybar[e].innerText) +
					'% in Test 1 to qaulify for exams';
			}
		} else {
			//wrote none
			everystate[k].innerText = ' ';
		}
	}
}

PrintMarks();
MarknColor();
Statements();