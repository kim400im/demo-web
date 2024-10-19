// Adding scroll event listener to apply fade-in effect to blocks as they appear in viewport
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.block');
    
    elements.forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        // If the element is within the viewport, add the fade-in class
        if (position < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
});
