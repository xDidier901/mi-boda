// Carousel image array
const carouselImages = [
    'images/Didier_Valeria-0002EDIT 2.jpg',
    'images/Didier_Valeria-0007EDIT 2.jpg',
    'images/Didier_Valeria-0013EDIT 2.jpg',
    'images/Didier_Valeria-0026EDIT 2.jpg',
    'images/Didier_Valeria-0043EDIT 2.jpg',
    'images/Didier_Valeria-0063EDIT 2.jpg',
    'images/Didier_Valeria-0090EDIT 2.jpg',
    'images/Didier_Valeria-0109EDIT 2.jpg',
    'images/Didier_Valeria-0123EDIT 2.jpg',
    'images/Didier_Valeria-0131EDIT 2.jpg',
    'images/Didier_Valeria-0176EDIT 2.jpg',
    'images/Didier_Valeria-0235EDIT 2.jpg',
    'images/Didier_Valeria-0283EDIT 2.jpg',
    'images/Didier_Valeria-0297EDIT 2.jpg',
    'images/Didier_Valeria-0326EDIT 2.jpg',
    'images/Didier_Valeria-0340EDIT 2.jpg',
    'images/Didier_Valeria-0348EDIT 2.jpg',
    'images/Didier_Valeria-0349EDIT 2.jpg',
    'images/Didier_Valeria-0395EDIT 2.jpg',
    'images/Didier_Valeria-0419EDIT 2.jpg',
    'images/Didier_Valeria-0426EDIT 2.jpg',
    'images/Didier_Valeria-0442EDIT 2.jpg'
];

const galleryCarouselImages = [
    'images/Didier_Valeria-0002EDIT 2.jpg',
    'images/Didier_Valeria-0007EDIT 2.jpg',
    'images/Didier_Valeria-0013EDIT 2.jpg',
    'images/Didier_Valeria-0026EDIT 2.jpg',
    'images/Didier_Valeria-0043EDIT 2.jpg',
    'images/Didier_Valeria-0063EDIT 2.jpg',
    'images/Didier_Valeria-0090EDIT 2.jpg',
    'images/Didier_Valeria-0109EDIT 2.jpg',
    'images/Didier_Valeria-0123EDIT 2.jpg',
    'images/Didier_Valeria-0131EDIT 2.jpg',
    'images/Didier_Valeria-0176EDIT 2.jpg',
    'images/Didier_Valeria-0235EDIT 2.jpg'
];

let currentImageIndex = 0;
let currentGallerySlide = 0;

const galleryCarouselCaptions = [
    'Un paseo lleno de amor y risas inolvidables.',
    'Recuerdos que celebran nuestra unión y felicidad.',
    'Entre miradas, abrazos y ganas de compartir juntos.',
    'Un día mágico lleno de alegría y ternura.',
    'El comienzo de una nueva historia juntos.',
    'Nuestros mejores momentos bajo la luz del amor.',
    'Sonrisas compartidas en cada paso del camino.',
    'Abraza la emoción de este día tan especial.',
    'Instantes que quedarán por siempre en el corazón.',
    'Cada mirada cuenta una historia de cariño.',
    'El amor se celebra con cada detalle y gesto.',
    'Así comienza nuestra aventura para siempre.'
];

const whatsappNumber = '526622687618';

function getGalleryItemsPerSlide() {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    if (width <= 992) return 2;
    return 3;
}

function getGalleryTotalSlides() {
    return Math.ceil(galleryCarouselImages.length / getGalleryItemsPerSlide());
}

function changeCarouselImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
    }
    const carouselImg = document.querySelector('.carousel-image');
    if (!carouselImg) return;
    carouselImg.style.opacity = '0.5';
    setTimeout(() => {
        carouselImg.src = carouselImages[currentImageIndex];
        carouselImg.style.opacity = '1';
    }, 150);
}

function changeGallerySlide(direction) {
    const totalSlides = getGalleryTotalSlides();
    currentGallerySlide += direction;

    if (currentGallerySlide >= totalSlides) {
        currentGallerySlide = 0;
    }

    if (currentGallerySlide < 0) {
        currentGallerySlide = totalSlides - 1;
    }

    updateGalleryState();
}

function updateGalleryState() {
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryCaption = document.querySelector('.gallery-caption');
    const dots = document.querySelectorAll('.gallery-dot');
    const itemsPerSlide = getGalleryItemsPerSlide();
    const slideIndex = currentGallerySlide;
    const captionIndex = Math.min(galleryCarouselImages.length - 1, slideIndex * itemsPerSlide);

    if (!galleryTrack) return;
    galleryTrack.style.transform = `translateX(-${slideIndex * 100}%)`;

    if (galleryCaption) {
        galleryCaption.textContent = galleryCarouselCaptions[captionIndex] || 'Desliza o espera mientras las imágenes cuentan nuestra historia.';
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function initGalleryDots() {
    const dotsContainer = document.querySelector('.gallery-dots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    const totalSlides = getGalleryTotalSlides();

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        if (i === currentGallerySlide) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentGallerySlide = i;
            updateGalleryState();
        });
        dotsContainer.appendChild(dot);
    }
}

// Auto-scroll carousel every 8 seconds
setInterval(() => {
    const carouselImg = document.querySelector('.carousel-image');
    if (carouselImg) {
        changeCarouselImage(1);
    }

    const galleryViewport = document.querySelector('.gallery-carousel-viewport');
    if (galleryViewport) {
        changeGallerySlide(1);
    }
}, 8000);

// Smooth opacity transition
const style = document.createElement('style');
style.textContent += `
    .carousel-image {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// RSVP form handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    function initializeCountdown() {
        // Wedding date: February 20, 2027 at 4:00 PM in Hermosillo (UTC-7)
        // Hermosillo is in the Pacific Time Zone (UTC-7)
        const weddingDate = new Date('2027-02-20T16:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            if (distance < 0) {
                document.getElementById('days').textContent = '000';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(3, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    initializeCountdown();
    
    const rsvpForm = document.querySelector('.rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Retrieve form values
            const name = document.getElementById('name').value;
            const guests = document.getElementById('guests').value;
            
            // Validate required fields
            if (!name || !guests) {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            const message = `Boda Valeria y Didier - Hola! Soy ${name} y confirmo la asistencia de ${guests} personas. Gracias!`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
            
            // Save to localStorage (for demo)
            const formData = {
                name: name,
                guests: guests,
                date: new Date().toISOString(),
                whatsappUrl: whatsappUrl
            };
            const confirmaciones = JSON.parse(localStorage.getItem('confirmaciones') || '[]');
            confirmaciones.push(formData);
            localStorage.setItem('confirmaciones', JSON.stringify(confirmaciones));
            
            // Show success message
            const btn = rsvpForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Abriendo WhatsApp...';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            // Navigate to WhatsApp in the same tab if a new window/tab is blocked
            window.location.href = whatsappUrl;
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
            
            rsvpForm.reset();
            console.log('Datos del formulario:', formData);
        });
    }
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page load effect
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add entrance animation to elements
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.animation = `slideIn 0.5s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });

    initGalleryDots();
    updateGalleryState();

    // Add loading animation to gallery images
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.classList.add('loading');
        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                item.classList.remove('loading');
            });
            // If already loaded
            if (img.complete) {
                item.classList.remove('loading');
            }
        }
    });

    window.addEventListener('resize', () => {
        initGalleryDots();
        const totalSlides = getGalleryTotalSlides();
        if (currentGallerySlide >= totalSlides) {
            currentGallerySlide = totalSlides - 1;
        }
        updateGalleryState();
    });
});

// Animation styles
const styleAnimation = document.createElement('style');
styleAnimation.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleAnimation);
