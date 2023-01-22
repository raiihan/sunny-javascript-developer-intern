import './style.scss'

let slideIndex = 1;
showSlides(slideIndex)


function plusSlide(n) {
    showSlides(slideIndex += n)
}

document.getElementById("prev").addEventListener("click", ()=>plusSlide(-1))
document.getElementById('next').addEventListener("click", ()=>plusSlide(1))
let navigation = document.getElementsByClassName('dot')

if(navigation){
    for (let index = 0; index < navigation.length; index++) {
        const element = navigation[index];
        element.addEventListener("click", ()=>currentSlide(index +1))
    }
}




function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slide')
    let navigation = document.getElementsByClassName('dot')

     if(n > slides.length) {slideIndex = 1}
     if(n < 1 ) {slideIndex = slides.length}

     for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
        navigation[i].className = navigation[i].className.replace("active", "")
     }

    

     slides[slideIndex - 1].style.display = "block"
     navigation[slideIndex - 1].className += " active"
}


function repeat(){
    let navigation = document.getElementsByClassName('dot')
    let i = 1;
    function repeater(){
        setTimeout(function(){
            showSlides(slideIndex = i)
            i++;
            if(navigation.length == i){
                i = 0
            }
            if(i >= navigation.length){
                return;
            }
            repeater()
        }, 4000)
    }
    repeater()
}
repeat()