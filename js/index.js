var aboutdiv = document.querySelector('#about');

let observer_about = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutAnim();
            observer.unobserve(entry.target)
        }
    });
}, {threshold: 0.5});
observer_about.observe(aboutdiv);

function aboutAnim() {
    var aboutTopImg = document.querySelector('.about-img-top');
    var aboutBottomImg =  document.querySelector('.about-img-bottom');
    aboutTopImg.classList.add('about-top-animate');
    aboutBottomImg.classList.add('about-bottom-animate');
}