document.addEventListener('DOMContentLoaded', function () {
    const contactBlock = document.querySelector('.contact__block');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        if (isElementInViewport(contactBlock)) {
            contactBlock.classList.add('visible');
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});