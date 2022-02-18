/*
    Variables declaretion 
*/
let index = 0; //slide's index 

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const slideImg = document.getElementsByClassName('slide-img');
const slideText = document.getElementsByClassName('slide-text');

/*
    Functions
*/
//Function which changes slides state and blocks invalid index values
const showSlide = () => {
    if (index > slideImg.length - 1){
        index = 0;
    } else if (index < 0){
        index = slideImg.length - 1;
    }

    slideImg[index].style.display = 'block';
    slideText[index].style.display = 'block';
}

//Function showSlide is invoked to let render initial slide
showSlide();

//Function which swhiches off current slide and its animation
const hideSlide = () => {
    slideImg[index].className = 'slide-img';
    slideText[index].className = 'slide-text';
    slideImg[index].style.display = 'none';
    slideText[index].style.display = 'none';
}

//Function which loads next slide
const nextSlide = () =>{
    hideSlide();
    index++;
    showSlide();
    slideImg[index].classList.add('from-right');
    slideText[index].classList.add('from-right');
}

//Function which loads previous slide
const prevSlide = () =>{
    hideSlide();
    index--;
    showSlide();
    slideImg[index].classList.add('from-left');
    slideText[index].classList.add('from-left');
}

/*
    Events
*/
//swhiching slides which buttons
nextBtn.onclick = () => nextSlide();
prevBtn.onclick = () => prevSlide();

//Swhiching slides with arrow keys
window.addEventListener('keydown', function(e){//highlighting buttons while pressing keys
    if(e.key === 'ArrowLeft'){
        prevBtn.style.backgroundColor = 'hsl(240, 38%, 20%)';
    } else if (e.key === 'ArrowRight'){
        nextBtn.style.backgroundColor = 'hsl(240, 38%, 20%)';
    }
});

window.addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        prevSlide();
        prevBtn.removeAttribute('style');
    } else if (e.key === 'ArrowRight'){
        nextSlide();
        nextBtn.removeAttribute('style');
    }
});
