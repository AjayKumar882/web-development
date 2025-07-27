
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


let currentSlide = 0;


function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  updateSlider();
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  updateSlider();
}

function updateSlider() {
  sliderImages.forEach((img, index) => {
    img.style.opacity = index === currentSlide ? 1 : 0;
  });
}

function autoSlide(){
  prevSlide(1);
  setInterval(nextSlide, 3000);
}
document.addEventListener('DOMContentLoaded',() =>{
  autoSlide();
})

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

updateSlider();








const form = document.getElementById('registration-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const country= document.getElementById('country').value;
    

   
    alert('Registration successful!');
});
