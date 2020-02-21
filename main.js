const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextslide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevslide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // check for next slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
//buttons events
next.addEventListener('click', e => {
    nextslide();
    if(auto){
       clearInterval(slideInterval);
       slideInterval = setInterval(nextslide, intervalTime); 
    }
});
prev.addEventListener('click', e => {
    prevslide();
    slideInterval = setInterval(nextslide, intervalTime);
});

//auto slide
if(auto){
    //run next slide at interval time
    slideInterval = setInterval(nextslide, intervalTime);
}