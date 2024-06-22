document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    const dropdownToggles = document.querySelectorAll('.nav__item--dropdown > .nav__link');

    // Toggle navigation list on mobile
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling up to document
        navList.classList.toggle('nav__list--open');
    });

    // Handle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Prevent default link behavior
            e.preventDefault();

            // Toggle the visibility of the dropdown
            const dropdown = toggle.nextElementSibling;
            dropdown.classList.toggle('nav__dropdown--open');

            // Close other open dropdowns
            document.querySelectorAll('.nav__dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('nav__dropdown--open');
                }
            });
        });
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__item--dropdown') && !e.target.closest('.menu-toggle')) {
            document.querySelectorAll('.nav__dropdown').forEach(d => d.classList.remove('nav__dropdown--open'));
            navList.classList.remove('nav__list--open');
        }
    });

    // Ensure dropdowns close when resizing from mobile to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            document.querySelectorAll('.nav__dropdown').forEach(d => d.classList.remove('nav__dropdown--open'));
            navList.classList.remove('nav__list--open');
        }
    });
});



