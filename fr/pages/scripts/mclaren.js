document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelector('.parallax-container');
    const image = document.querySelector('.parallax-image');
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    parallax.addEventListener('mousemove', function(e) {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });

    function updateParallax() {
        const deltaX = (mouseX - currentX) * 0.1;
        const deltaY = (mouseY - currentY) * 0.1;

        currentX += deltaX;
        currentY += deltaY;

        const transformValue = `translate(${currentX * 50}px, ${currentY * 50}px)`;
        image.style.transform = transformValue;

        requestAnimationFrame(updateParallax);
    }

    updateParallax();
});

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    let cursorX = 0, cursorY = 0;

    function moveCursor() {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(moveCursor);
    }

    moveCursor();

    document.addEventListener('mousemove', function(e) {
        cursorX = e.clientX - cursor.offsetWidth / 2;
        cursorY = e.clientY - cursor.offsetHeight / 2;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('ul').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('ul').style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const parallaxContainer = document.getElementById('parallax-container');
    const parallaxImage = document.getElementById('parallax-image');
    const header = document.getElementById('header');

    function handleMouseMove(e) {
        const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
        const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;

        parallaxImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        header.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }

    parallaxContainer.addEventListener('mousemove', handleMouseMove);
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const menuOverlay = document.querySelector('.menu-overlay');

    burgerCheckbox.addEventListener('change', function() {
        menuOverlay.style.display = burgerCheckbox.checked ? 'block' : 'none';
    });
});