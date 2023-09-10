const nav = document.querySelector('.fixed-nav');

const scrollThreshold = 100; 

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;

    if (scrollPos > scrollThreshold) {
        nav.style.backgroundColor = '#BD9354'; 
        nav.classList.add('scrolled'); 
    } else {
        nav.style.backgroundColor = 'transparent'; 
        nav.classList.remove('scrolled'); 
    }
});
