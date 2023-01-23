// grab the hamburger menu div
const hamburgerMenu = document.getElementById('hamburger');

// grab offCanvasMenu
const offCanvasMenu = document.querySelector('.off-canvas-menu');

// grab closebtn
const closeBtn = document.querySelector('.closebtn');

// add event listener to hamburger icon
hamburgerMenu.addEventListener('click', (event) => {
	offCanvasMenu.style.width = '35vw';
});

// add event listener to close btn
closeBtn.addEventListener('click', (event) => {
	offCanvasMenu.style.width = '0vw';
});
