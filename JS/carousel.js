let i = 0;
let img = [
	"../Images/horizon.jpg",
	"../Images/spiderman.jpg",
	"../Images/ghost.jpg",
	"../Images/god_of_war.jpg",
	"../Images/acv.jpg",
	"../Images/the_last_of_us.jpg",
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
