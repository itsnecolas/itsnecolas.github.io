const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("on");
    }
}

function showSlider() {
    slider[currentSlide].classList.add("on")
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}
function prevSlider() {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

function toggle(){
    var popup = document.getElementById('popup');
    popup.classList.toggle('ativo');
}

function toggle1(){
    var popup = document.getElementById('popup1');
    popup.classList.toggle('ativo');
}

function toggle2(){
    var popup = document.getElementById('popup2');
    popup.classList.toggle('ativo');
}

function toggle3(){
    var popup = document.getElementById('popup3');
    popup.classList.toggle('ativo');
}




