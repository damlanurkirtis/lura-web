/* 

JavaScript Document

TemplateMo 611 Maison Doree

https://templatemo.com/tm-611-maison-doree

*/

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
   if (window.scrollY > 100) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
});

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

function openMobileNav() {
   mobileNav.classList.add('active');
   mobileOverlay.classList.add('active');
   document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
   mobileNav.classList.remove('active');
   mobileOverlay.classList.remove('active');
   document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMobileNav);
mobileNavClose.addEventListener('click', closeMobileNav);
mobileOverlay.addEventListener('click', closeMobileNav);

mobileNavLinks.forEach(link => {
   link.addEventListener('click', closeMobileNav);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#') {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
         return;
      }
      const target = document.querySelector(href);
      if (target) {
         const headerHeight = header.offsetHeight;
         const targetPosition = target.offsetTop - headerHeight;
         window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
         });
      }
   });
});

// Hero image slideshow
const slides = document.querySelectorAll('.hero-slide');
const heroTitle = document.getElementById('heroTitle');
const heroPrice = document.getElementById('heroPrice');
let currentSlide = 0;

function changeSlide() {
   slides[currentSlide].classList.remove('active');
   currentSlide = (currentSlide + 1) % slides.length;

   // Fade out text
   heroTitle.style.opacity = '0';
   heroPrice.style.opacity = '0';

   setTimeout(() => {
      heroTitle.textContent = slides[currentSlide].dataset.title;
      heroPrice.textContent = slides[currentSlide].dataset.price;
      heroTitle.style.opacity = '1';
      heroPrice.style.opacity = '1';
   }, 500);

   slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 4000);

// Form submission
const form = document.getElementById('appointmentForm');
form.addEventListener('submit', function (e) {
   e.preventDefault();
   alert('Thank you for your inquiry! We will contact you within 24 hours to confirm your appointment.');
   form.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.style.opacity = '1';
         entry.target.style.transform = 'translateY(0)';
      }
   });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
   section.style.opacity = '0';
   section.style.transform = 'translateY(30px)';
   section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
   observer.observe(section);
   
});
// JS Dosyasının en başı veya en sonu
const collectionData = {
    'AyIsigi': {
        title: 'Ay Işığı Serisi',
        description: 'Zarafetin doruk noktası: Ay Işığı koltuk takımı. Özel dokuma kumaşlar ve soft renk paleti.',
        price: '250.500 TL',
        image: 'images/ayışığı.png'
    },
    'Seramik': {
        title: 'El Yapımı Seramik',
        description: 'Atölyemizde tek tek elde şekillendirilen, yüksek derece fırınlanmış sanatsal seramikler.',
        price: '8.500 TL\'den başlayan',
        image: 'images/seramik.jpeg' // Buraya seramik görselinin adını yazabilirsin
    },
    'Aydinlatma': {
        title: 'Özel Tasarım Aydınlatma',
        description: 'Mekanınıza sıcaklık katacak, el işçiliği pirinç ve cam aydınlatma üniteleri.',
        price: '30.200 TL\'den başlayan',
        image: 'images/aydınlatma.jpeg' // Buraya aydınlatma görselinin adını yazabilirsin
    },
    'SanatObjeleri': {
        title: 'Sanat Objeleri',
        description: 'Sınırlı sayıda üretilen, koleksiyon değeri taşıyan heykel ve dekoratif objeler.',
        price: '7.500 TL\'den başlayan',
        image: 'images/sanat.jpeg'
    },
    'MekanTasarimi': {
        title: 'Kişiye Özel Tasarım',
        description: 'LuraMoon estetiğini evinize taşıyoruz. Profesyonel mimari dokunuşlar.',
        price: 'Ücretsiz Ön Görüşme',
        image: 'images/kişiye özel.jpeg'
    },
    'YasamAlani': {
        title: 'The Lura Moon',
        description: 'Yaşam alanlarınıza ruh katan en özel tasarımlarımızı içerir.',
        price: '165.000 TL\'den başlayan',
        image: 'images/the lura moon.jpeg'
    },
    'GunlukEstetik': {
        title: 'Moonlight by Lura',
        description: 'Zarafetin günlük objelerle buluştuğu minimalist koleksiyon.',
        price: '75.000 TL\'den başlayan',
        image: 'images/moonlight.jpeg'
    }
};

// Tüm Tasarımları Görüntüleme Fonksiyonu
function openCollection(id) {
    const data = collectionData[id];
    const modal = document.getElementById('collectionModal');
    const body = document.getElementById('modalBody');
    
    if (!data) return;

    // Pencere içeriğini oluşturuyoruz
    body.innerHTML = `
        <div style="text-align: center;">
            <img src="${data.image}" style="width:100%; border-radius:15px; margin-bottom:20px; height: 300px; object-fit: cover; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            
            <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 28px; color: #333; margin-bottom: 10px;">${data.title}</h2>
            
            <p style="color: #d4a373; font-weight: 600; font-size: 18px; margin-bottom: 15px;">${data.price}</p>
            
            <div style="background: #fdfdfd; padding: 15px; border-radius: 10px; border-left: 3px solid #d4a373; text-align: left;">
                <p style="color: #666; font-family: 'DM Sans', sans-serif; line-height: 1.8; font-size: 15px; margin: 0;">
                    ${data.description}
                </p>
            </div>
            
            <button onclick="closeCollection()" style="margin-top: 25px; width: 100%; padding: 12px; background: #333; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; transition: 0.3s;">
                Kapat
            </div>
        </div>
    `;
    
    modal.style.display = "flex"; // Tam ortalama için flex kullanıyoruz
    document.body.style.overflow = "hidden"; // Arka planın kaymasını engeller
}

function closeCollection() {
    document.getElementById('collectionModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('collectionModal');
    if (event.target == modal) { closeCollection(); }
}
// Katalog Görüntüleme Fonksiyonu
function showCatalog(type) {
    const modal = document.getElementById('collectionModal');
    const body = document.getElementById('modalBody');
    
    let title = 'LuraMoon Tüm Tasarımlar';
    let filteredKeys = [];

    // Hangi verilerin çekileceğine karar ver
    if (type === 'collections') {
        filteredKeys = ['AyIsigi', 'YasamAlani', 'GunlukEstetik'];
    } else if (type === 'categories') {
        filteredKeys = ['Seramik', 'Aydinlatma', 'SanatObjeleri', 'MekanTasarimi'];
    } else {
        // 'all' seçeneği: collectionData içindeki her şeyi al
        filteredKeys = Object.keys(collectionData);
        title = 'LuraMoon Koleksiyon & Kategoriler';
    }

    let catalogHTML = `
        <h2 style="font-family: 'Cormorant Garamond', serif; margin-bottom: 20px; color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">${title}</h2>
        <div style="max-height: 480px; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: left; padding-right: 5px;">
    `;

    filteredKeys.forEach(key => {
        const item = collectionData[key];
        if(item) {
            catalogHTML += `
                <div onclick="openCollection('${key}')" style="background: #fff; padding: 10px; border-radius: 12px; border: 1px solid #eee; cursor: pointer; transition: transform 0.2s;">
                    <img src="${item.image}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
                    <h4 style="margin: 0; font-size: 13px; color: #333; height: 32px; overflow: hidden;">${item.title}</h4>
                    <p style="margin: 5px 0 0; font-size: 12px; color: #d4a373; font-weight: bold;">${item.price}</p>
                </div>
            `;
        }
    });

    catalogHTML += `</div>`;
    catalogHTML += `<button onclick="closeCollection()" style="margin-top: 20px; padding: 12px; background: #333; color: white; border: none; border-radius: 8px; cursor: pointer; width: 100%;">Kapat</button>`;
    
    body.innerHTML = catalogHTML;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}