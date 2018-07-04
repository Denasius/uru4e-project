let slideIndex = 1,
	slides = document.getElementsByClassName('slider-image'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next');

function showSlides(n){
	if (n > slides.length){
		slideIndex = 1;
	}

	if(n < 1){
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';
}

function plusSlide (count) {
	showSlides(slideIndex += count)
}

prev.addEventListener('click', function () {
	plusSlide(-1);
})

next.addEventListener('click', function () {
	plusSlide(1);
})

showSlides(slideIndex);