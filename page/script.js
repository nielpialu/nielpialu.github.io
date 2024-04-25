document.addEventListener("DOMContentLoaded", function() {
    // Efek Hover pada Link Navigasi
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#00ff73';
        });
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#fff';
            }
        });
    });

    // Galeri Lightbox
    const galleryImages = document.querySelectorAll('.content img');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<img src="${this.src}" alt="gambar galeri">`;
            document.body.appendChild(modal);
            modal.addEventListener('click', function() {
                modal.remove();
            });
        });
    });

    // Validasi Form Kontak
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.querySelector('.contact-form input[type="text"]');
            const emailInput = document.querySelector('.contact-form input[type="email"]');
            const messageInput = document.querySelector('.contact-form textarea');
            if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
                alert('Harap isi semua bidang sebelum mengirimkan pesan!');
            } else {
                // Lakukan sesuatu dengan data formulir (misalnya, kirim ke server)
                alert('Pesan telah terkirim!');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            }
        });
    }

    // Efek Scroll-to-Top
    const scrollTopButton = document.createElement('button');
    scrollTopButton.classList.add('scroll-top-button');
    scrollTopButton.textContent = 'Scroll to Top';
    document.body.appendChild(scrollTopButton);
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopButton.style.opacity = '1';
        } else {
            scrollTopButton.style.opacity = '0';
        }
    });
});
