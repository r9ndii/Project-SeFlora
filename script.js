document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown menu
    const dropdowns = document.querySelectorAll('.nav__item--dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.nav__dropdown').classList.add('visible');
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.nav__dropdown').classList.remove('visible');
        });
    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('.nav__link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
