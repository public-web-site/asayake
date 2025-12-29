document.addEventListener('DOMContentLoaded', () => {
    console.log('ASAYAKE LP Initialized');

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.site-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // Slideshow Logic
    const slideshowTrack = document.getElementById('slideshowTrack');
    if (slideshowTrack) {
        const images = [
            'public/images/1.jpg',
            'public/images/2.jpg',
            'public/images/3.jpg',
            'public/images/4.jpg',
            'public/images/5.jpg',
            'public/images/6.jpg'
        ];

        // Function to create image element
        const createSlide = (src) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Event Highlight';
            img.classList.add('slide-item');
            return img;
        };

        // Populate track with images (duplicate for seamless loop)
        // We need enough images to cover the screen width + buffer.
        // For simplicity, we'll duplicate the set a few times.
        const setRepeats = 4;

        for (let r = 0; r < setRepeats; r++) {
            images.forEach(src => {
                slideshowTrack.appendChild(createSlide(src));
            });
        }
    }
});
