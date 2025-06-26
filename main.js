document.addEventListener('DOMContentLoaded', function() {
    // Back to top button
    let backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        }
        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);
        backtotop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.getElementById('navbar');
    if (mobileNavToggle && navbar) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                let target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Typed.js initialization
    if (document.querySelector('.typed')) {
        let typed = new Typed('.typed', {
            strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    // Scroll to sections with offset
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);
});