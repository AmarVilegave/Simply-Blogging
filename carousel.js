let i = 0;
let img = [
	"horizon.jpg",
	"spiderman.jpg",
	"ghost.jpg",
	"god_of_war.jpg",
	"acv.jpg",
	"the_last_of_us.jpg",
];

function slideImg() {
	document.slide.src = img[i];

	if (i < img.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("slideImg()", 3000);
}

window.onload = slideImg;
