// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Chalets data
const chaletsData = {
    royal: {
        name: 'شاليه الغلا الملكي',
        description: 'أفخم شاليهاتنا مع إطلالة بانورامية على البحر الميت ومرافق ملكية حصرية',
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: [
            { icon: 'fas fa-swimming-pool', name: 'مسبح لا متناهي' },
            { icon: 'fas fa-hot-tub', name: 'جاكوزي خاص' },
            { icon: 'fas fa-bed', name: '4 غرف نوم فاخرة' },
            { icon: 'fas fa-tree', name: 'حديقة خاصة' },
            { icon: 'fas fa-wifi', name: 'إنترنت عالي السرعة' },
            { icon: 'fas fa-car', name: 'مواقف خاصة' },
            { icon: 'fas fa-utensils', name: 'مطبخ ملكي' },
            { icon: 'fas fa-tv', name: 'تلفزيون ذكي' },
            { icon: 'fas fa-fire', name: 'مدفأة خارجية' },
            { icon: 'fas fa-concierge-bell', name: 'خدمة كونسيرج' }
        ],
        pricing: [
            { label: 'أيام الأسبوع', value: '350 JOD' },
            { label: 'نهاية الأسبوع', value: '450 JOD' },
            { label: 'المواسم والعطل', value: '550 JOD' },
            { label: 'الحد الأقصى للضيوف', value: '12 شخص' }
        ],
        location: [
            { icon: 'fas fa-map-marker-alt', text: 'منطقة البحر الميت الشمالية' },
            { icon: 'fas fa-car', text: '45 دقيقة من عمان' },
            { icon: 'fas fa-mountain', text: 'إطلالة بانورامية' },
            { icon: 'fas fa-shield-alt', text: 'منطقة آمنة ومحروسة' }
        ]
    },
    diamond: {
        name: 'شاليه الغلا الماسي',
        description: 'شاليه عصري بتصميم أنيق ومرافق متكاملة مثالي للعائلات الكبيرة',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: [
            { icon: 'fas fa-swimming-pool', name: 'مسبح مُدفأ' },
            { icon: 'fas fa-bed', name: '3 غرف نوم' },
            { icon: 'fas fa-utensils', name: 'مطبخ متكامل' },
            { icon: 'fas fa-fire', name: 'شواية خارجية' },
            { icon: 'fas fa-wifi', name: 'إنترنت مجاني' },
            { icon: 'fas fa-car', name: 'مواقف سيارات' },
            { icon: 'fas fa-tv', name: 'تلفزيون ذكي' },
            { icon: 'fas fa-snowflake', name: 'تكييف مركزي' },
            { icon: 'fas fa-gamepad', name: 'منطقة ألعاب' }
        ],
        pricing: [
            { label: 'أيام الأسبوع', value: '250 JOD' },
            { label: 'نهاية الأسبوع', value: '320 JOD' },
            { label: 'المواسم والعطل', value: '400 JOD' },
            { label: 'الحد الأقصى للضيوف', value: '10 أشخاص' }
        ],
        location: [
            { icon: 'fas fa-map-marker-alt', text: 'منطقة البحر الميت الوسطى' },
            { icon: 'fas fa-car', text: '50 دقيقة من عمان' },
            { icon: 'fas fa-water', text: 'قريب من الشاطئ' },
            { icon: 'fas fa-store', text: 'قريب من المرافق التجارية' }
        ]
    },
    golden: {
        name: 'شاليه الغلا الذهبي',
        description: 'شاليه مريح بإطلالة ساحرة ومرافق ممتازة مناسب للمجموعات الصغيرة',
        image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: [
            { icon: 'fas fa-swimming-pool', name: 'مسبح دائري' },
            { icon: 'fas fa-bed', name: '2 غرف نوم' },
            { icon: 'fas fa-home', name: 'تراس واسع' },
            { icon: 'fas fa-fire', name: 'منطقة شواء' },
            { icon: 'fas fa-wifi', name: 'إنترنت مجاني' },
            { icon: 'fas fa-car', name: 'موقف سيارة' },
            { icon: 'fas fa-tv', name: 'تلفزيون' },
            { icon: 'fas fa-coffee', name: 'ركن قهوة' }
        ],
        pricing: [
            { label: 'أيام الأسبوع', value: '200 JOD' },
            { label: 'نهاية الأسبوع', value: '260 JOD' },
            { label: 'المواسم والعطل', value: '320 JOD' },
            { label: 'الحد الأقصى للضيوف', value: '6 أشخاص' }
        ],
        location: [
            { icon: 'fas fa-map-marker-alt', text: 'منطقة البحر الميت الجنوبية' },
            { icon: 'fas fa-car', text: '55 دقيقة من عمان' },
            { icon: 'fas fa-sun', text: 'إطلالة على الغروب' },
            { icon: 'fas fa-tree', text: 'محاط بالطبيعة' }
        ]
    },
    pearl: {
        name: 'شاليه الغلا اللؤلؤي',
        description: 'شاليه عائلي دافئ بتصميم كلاسيكي ومرافق مناسبة للأطفال',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: [
            { icon: 'fas fa-swimming-pool', name: 'مسبح آمن للأطفال' },
            { icon: 'fas fa-bed', name: '3 غرف نوم' },
            { icon: 'fas fa-gamepad', name: 'منطقة ألعاب' },
            { icon: 'fas fa-tree', name: 'حديقة آمنة' },
            { icon: 'fas fa-wifi', name: 'إنترنت مجاني' },
            { icon: 'fas fa-car', name: 'مواقف سيارات' },
            { icon: 'fas fa-baby', name: 'مرافق للأطفال' },
            { icon: 'fas fa-shield-alt', name: 'أمان عالي' }
        ],
        pricing: [
            { label: 'أيام الأسبوع', value: '180 JOD' },
            { label: 'نهاية الأسبوع', value: '230 JOD' },
            { label: 'المواسم والعطل', value: '280 JOD' },
            { label: 'الحد الأقصى للضيوف', value: '8 أشخاص' }
        ],
        location: [
            { icon: 'fas fa-map-marker-alt', text: 'منطقة البحر الميت العائلية' },
            { icon: 'fas fa-car', text: '48 دقيقة من عمان' },
            { icon: 'fas fa-playground', text: 'قريب من ملاعب الأطفال' },
            { icon: 'fas fa-hospital', text: 'قريب من المرافق الطبية' }
        ]
    },
    emerald: {
        name: 'شاليه الغلا الزمردي',
        description: 'أحدث شاليهاتنا بتصميم عصري ومرافق حديثة مثالي للمجموعات الشابة',
        image: 'https://images.pexels.com/photos/1516438/pexels-photo-1516438.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: [
            { icon: 'fas fa-swimming-pool', name: 'مسبح عصري' },
            { icon: 'fas fa-bed', name: '2 غرف نوم' },
            { icon: 'fas fa-robot', name: 'تقنيات ذكية' },
            { icon: 'fas fa-home', name: 'تصميم عصري' },
            { icon: 'fas fa-wifi', name: 'إنترنت فائق السرعة' },
            { icon: 'fas fa-car', name: 'موقف سيارة' },
            { icon: 'fas fa-music', name: 'نظام صوتي' },
            { icon: 'fas fa-lightbulb', name: 'إضاءة ذكية' }
        ],
        pricing: [
            { label: 'أيام الأسبوع', value: '220 JOD' },
            { label: 'نهاية الأسبوع', value: '280 JOD' },
            { label: 'المواسم والعطل', value: '350 JOD' },
            { label: 'الحد الأقصى للضيوف', value: '6 أشخاص' }
        ],
        location: [
            { icon: 'fas fa-map-marker-alt', text: 'منطقة البحر الميت الحديثة' },
            { icon: 'fas fa-car', text: '42 دقيقة من عمان' },
            { icon: 'fas fa-city', text: 'قريب من المراكز الحديثة' },
            { icon: 'fas fa-signal', name: 'تغطية ممتازة للشبكة' }
        ]
    }
};

// Initialize all website functionality
function initializeWebsite() {
    initializeNavigation();
    initializeChaletModal();
    initializeGallery();
    initializeContactForm();
    initializeFAQ();
    initializeScrollAnimations();
    initializeReviewsFilter();
    initializeLightbox();
    initializeVideoControls();
}

// Initialize video controls
function initializeVideoControls() {
    const videos = document.querySelectorAll('.video-container video');
    
    videos.forEach(video => {
        // Pause video when not in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);
        
        // Add click to play/pause
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
}

// Initialize chalet modal functionality
function initializeChaletModal() {
    const chaletCards = document.querySelectorAll('.chalet-card');
    const modal = document.getElementById('chaletModal');
    const closeBtn = document.querySelector('.modal-close');
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Open modal when chalet card is clicked
    chaletCards.forEach(card => {
        card.addEventListener('click', function() {
            const chaletId = this.getAttribute('data-chalet');
            openChaletModal(chaletId);
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeChaletModal);
    }
    
    // Close modal when clicking outside
    modal?.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeChaletModal();
        }
    });
    
    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal?.style.display === 'block') {
            closeChaletModal();
        }
    });
}

// Open chalet modal with data
function openChaletModal(chaletId) {
    const chalet = chaletsData[chaletId];
    if (!chalet) return;
    
    const modal = document.getElementById('chaletModal');
    
    // Update modal content
    document.getElementById('modalImage').src = chalet.image;
    document.getElementById('modalTitle').textContent = chalet.name;
    document.getElementById('modalDescription').textContent = chalet.description;
    
    // Update amenities
    const amenitiesContainer = document.getElementById('modalAmenities');
    amenitiesContainer.innerHTML = chalet.amenities.map(amenity => `
        <div class="amenity-item">
            <i class="${amenity.icon}"></i>
            <span>${amenity.name}</span>
        </div>
    `).join('');
    
    // Update pricing
    const pricingContainer = document.getElementById('modalPricing');
    pricingContainer.innerHTML = chalet.pricing.map(price => `
        <div class="pricing-row">
            <span class="pricing-label">${price.label}</span>
            <span class="pricing-value">${price.value}</span>
        </div>
    `).join('');
    
    // Update location
    const locationContainer = document.getElementById('modalLocation');
    locationContainer.innerHTML = chalet.location.map(location => `
        <div class="detail-item">
            <i class="${location.icon}"></i>
            <span>${location.text}</span>
        </div>
    `).join('');
    
    // Update booking button
    const bookingButton = document.getElementById('modalBookingButton');
    const whatsappMessage = `مرحباً، أود حجز ${chalet.name} في شاليه الغلا`;
    bookingButton.href = `https://wa.me/962792061993?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset to first tab
    switchTab('amenities');
}

// Close chalet modal
function closeChaletModal() {
    const modal = document.getElementById('chaletModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Switch modal tabs
function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Gallery functionality
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('fade-in');
                    }
                });
            });
        });
    }
    
    // Gallery item click handlers
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            if (img && overlay) {
                openLightbox(img.src, overlay.querySelector('h3').textContent, overlay.querySelector('p').textContent);
            }
        });
    });
}

// Lightbox functionality
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Collect all gallery images
    function updateGalleryImages() {
        galleryImages = Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"]) img'));
    }
    
    window.openLightbox = function(src, title, desc) {
        updateGalleryImages();
        currentImageIndex = galleryImages.findIndex(img => img.src === src);
        
        lightboxImg.src = src;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showPrevImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
    
    function showNextImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    
    function updateLightboxImage() {
        const currentImg = galleryImages[currentImageIndex];
        const galleryItem = currentImg.closest('.gallery-item');
        const overlay = galleryItem.querySelector('.gallery-overlay');
        
        lightboxImg.src = currentImg.src;
        lightboxTitle.textContent = overlay.querySelector('h3').textContent;
        lightboxDesc.textContent = overlay.querySelector('p').textContent;
    }
    
    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const checkin = formData.get('checkin');
        const guests = formData.get('guests');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate required fields
        if (!name || !phone || !subject || !message) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }
        
        // Create WhatsApp message
        let whatsappMessage = `مرحباً، اسمي ${name}\n`;
        whatsappMessage += `رقم الهاتف: ${phone}\n`;
        if (email) whatsappMessage += `البريد الإلكتروني: ${email}\n`;
        if (checkin) whatsappMessage += `تاريخ الوصول المرغوب: ${checkin}\n`;
        if (guests) whatsappMessage += `عدد الضيوف: ${guests}\n`;
        whatsappMessage += `الموضوع: ${subject}\n`;
        whatsappMessage += `الرسالة: ${message}`;
        
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/962792061993?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        showNotification('تم إرسال رسالتكم بنجاح! سيتم تحويلكم إلى واتساب', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.info-card, .service-card, .feature-item, .review-card, .pricing-card, .offer-card, .contact-card, .chalet-card, .video-item');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Reviews filter functionality
function initializeReviewsFilter() {
    const reviewFilterButtons = document.querySelectorAll('.reviews-filter .filter-btn');
    const reviewItems = document.querySelectorAll('.review-item');
    
    if (reviewFilterButtons.length === 0) return;
    
    reviewFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            
            // Update active button
            reviewFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter review items
            reviewItems.forEach(item => {
                const itemRating = item.getAttribute('data-rating');
                if (rating === 'all' || itemRating >= rating) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Load more reviews functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more reviews
            showNotification('تم تحميل المزيد من التقييمات', 'success');
            
            // Here you would typically load more reviews from a server
            // For now, we'll just show a message
            setTimeout(() => {
                this.style.display = 'none';
            }, 1000);
        });
    }
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 16px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                transform: translateX(400px);
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification-success {
                border-right: 4px solid var(--success-color);
            }
            
            .notification-error {
                border-right: 4px solid var(--error-color);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-success i {
                color: var(--success-color);
            }
            
            .notification-error i {
                color: var(--error-color);
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// WhatsApp button functionality
function initializeWhatsAppButtons() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click tracking or analytics here if needed
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth scroll to top functionality
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'العودة للأعلى');
    
    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--accent-color), var(--gold-dark));
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .scroll-to-top:hover {
            background: linear-gradient(135deg, var(--gold-dark), var(--accent-color));
            transform: translateY(-2px);
            box-shadow: var(--shadow-gold);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
    `;
    
    if (!document.querySelector('#scroll-to-top-styles')) {
        styles.id = 'scroll-to-top-styles';
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeWhatsAppButtons();
    initializeLazyLoading();
    initializeScrollToTop();
});

// Handle form submissions with enhanced validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    // Add error styles if not already added
    if (!document.querySelector('#form-validation-styles')) {
        const styles = document.createElement('style');
        styles.id = 'form-validation-styles';
        styles.textContent = `
            .form-group input.error,
            .form-group select.error,
            .form-group textarea.error {
                border-color: var(--error-color);
                background-color: rgba(239, 68, 68, 0.05);
            }
        `;
        document.head.appendChild(styles);
    }
    
    return isValid;
}

// Enhanced accessibility features
function initializeAccessibility() {
    // Add keyboard navigation for custom elements
    document.querySelectorAll('.gallery-item, .faq-question, .chalet-card').forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Add aria-labels for better screen reader support
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            link.setAttribute('aria-label', 'تواصل عبر واتساب');
        }
    });
    
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            link.setAttribute('aria-label', 'زيارة حساب إنستاجرام');
        }
    });
}

// Initialize accessibility on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAccessibility();
});

// Performance optimization - Defer non-critical operations
function deferNonCriticalOperations() {
    // Defer analytics or other non-critical scripts
    setTimeout(() => {
        // Add any analytics or tracking code here
    }, 2000);
}

// Call deferred operations after page load
window.addEventListener('load', deferNonCriticalOperations);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken images with placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY0Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwTDEyNSA4MEwxNzUgODBMMTUwIDEwMFoiIGZpbGw9IiNBOEE4QTgiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iNzAiIHI9IjEwIiBmaWxsPSIjQThBOEE4Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQThBOEE4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPtmu2KfYsdip2Yo8L3RleHQ+Cjwvc3ZnPgo=';
            this.alt = 'صورة غير متاحة';
        });
    });
});