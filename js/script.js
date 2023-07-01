let offset = 0;
const imagesSlider = document.querySelector(".images");
const dot1 = document.querySelector(".dot1")
const dot2 = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3")
const headline1 = document.querySelector(".headline1")
const headline2 = document.querySelector(".headline2")
const headline3 = document.querySelector(".headline3")

document.querySelector(".next").addEventListener("click", function(){
	offset = offset + 483;
	if (offset > 966) {
		offset = 0;
	}
	if (offset === 0 ) {
		dot1.classList.add("dotWhite");
		headline1.classList.add("brownJS");
	} else {
		dot1.classList.remove("dotWhite");
		headline1.classList.remove("brownJS");
	}
	if (offset === 483) {
		dot2.classList.add("dotWhite");
		headline2.classList.add("brownJS");
	} else {
		dot2.classList.remove("dotWhite");
		headline2.classList.remove("brownJS");
	}
	if (offset === 966 ) {
		dot3.classList.add("dotWhite");
		headline3.classList.add("brownJS");
	} else {
		dot3.classList.remove("dotWhite");
		headline3.classList.remove("brownJS");
	}

	imagesSlider.style.top = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function(){
	offset = offset - 483;
	if (offset < 0) {
		offset = 966;
	}
	imagesSlider.style.top = -offset + "px";
});

//Перекрас точек и текста


function changeColor() {
	if (imagesSlider === "483px"
	) {
		dot1.classList.replace("dot", "dotWhite")
	}
}


