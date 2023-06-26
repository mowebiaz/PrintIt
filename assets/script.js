const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Recover the elements
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const classDots = document.querySelector(".dots");
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Add bullets points according to the number of slides
for (var i = 0; i < slides.length; i++) {
	let divDot = document.createElement('div');
	divDot.className = 'dot';
	classDots.appendChild(divDot);
}
let dots = document.querySelectorAll('.dot'); 

// Display the first bullet point as active
dots[0].classList.add('dot_selected');

let current = 0
// Right arrow
rightArrow.addEventListener("click", function() {
	if (current == slides.length - 1) {
		current = 0;
	} else {
		current++;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[current].image}`;
	bannerText.innerHTML = slides[current].tagLine;
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[current].classList.add('dot_selected');
 });

 // Left Arrow
leftArrow.addEventListener("click", function() {
	if (current == 0) {
		current = slides.length -1;
	} else {
		current--;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[current].image}`;
	bannerText.innerHTML = slides[current].tagLine;
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[current].classList.add('dot_selected');
});


