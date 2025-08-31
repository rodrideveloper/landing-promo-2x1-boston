// Countdown Timer
function updateCountdown() {
    // Fecha objetivo: 7 días desde ahora
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(targetDate.getHours(), targetDate.getMinutes(), targetDate.getSeconds(), 0);

    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar countdown del header
    const headerDays = document.getElementById('days');
    const headerHours = document.getElementById('hours');
    const headerMinutes = document.getElementById('minutes');
    const headerSeconds = document.getElementById('seconds');

    if (headerDays) headerDays.textContent = String(days).padStart(2, '0');
    if (headerHours) headerHours.textContent = String(hours).padStart(2, '0');
    if (headerMinutes) headerMinutes.textContent = String(minutes).padStart(2, '0');
    if (headerSeconds) headerSeconds.textContent = String(seconds).padStart(2, '0');

    // Actualizar countdown principal grande del hero
    const mainDays = document.getElementById('mainDays');
    const mainHours = document.getElementById('mainHours');
    const mainMinutes = document.getElementById('mainMinutes');
    const mainSeconds = document.getElementById('mainSeconds');

    if (mainDays) {
        const newDays = String(days).padStart(2, '0');
        if (mainDays.textContent !== newDays) {
            addFlipAnimation(mainDays);
            mainDays.textContent = newDays;
        }
    }

    if (mainHours) {
        const newHours = String(hours).padStart(2, '0');
        if (mainHours.textContent !== newHours) {
            addFlipAnimation(mainHours);
            mainHours.textContent = newHours;
        }
    }

    if (mainMinutes) {
        const newMinutes = String(minutes).padStart(2, '0');
        if (mainMinutes.textContent !== newMinutes) {
            addFlipAnimation(mainMinutes);
            mainMinutes.textContent = newMinutes;
        }
    }

    if (mainSeconds) {
        const newSeconds = String(seconds).padStart(2, '0');
        if (mainSeconds.textContent !== newSeconds) {
            addFlipAnimation(mainSeconds);
            mainSeconds.textContent = newSeconds;
        }
    }

    // Actualizar mini countdown
    const miniDays = document.getElementById('miniDays');
    const miniHours = document.getElementById('miniHours');
    const miniMinutes = document.getElementById('miniMinutes');
    const miniSecondsEl = document.getElementById('miniSeconds');

    if (miniDays) miniDays.textContent = String(days).padStart(2, '0');
    if (miniHours) miniHours.textContent = String(hours).padStart(2, '0');
    if (miniMinutes) miniMinutes.textContent = String(minutes).padStart(2, '0');
    if (miniSecondsEl) miniSecondsEl.textContent = String(seconds).padStart(2, '0');

    // Efectos especiales cuando quedan menos de 1 hora
    if (distance > 0 && hours === 0 && days === 0) {
        document.body.classList.add('final-countdown');
        if (minutes <= 10) {
            addUrgentEffects();
        }
    }

    // Si el countdown termina
    if (distance < 0) {
        const mainCountdown = document.getElementById('countdown');
        const heroCountdown = document.getElementById('mainCountdown');
        const miniCountdown = document.getElementById('miniCountdown');

        if (mainCountdown) {
            mainCountdown.innerHTML = '<span style="color: #ff6b6b; font-weight: bold;">¡OFERTA FINALIZADA!</span>';
        }
        if (heroCountdown) {
            heroCountdown.innerHTML = '<div class="expired-message">🔥 ¡OFERTA EXPIRADA! 🔥</div>';
        }
        if (miniCountdown) {
            miniCountdown.innerHTML = '<span style="color: #ff6b6b; font-weight: bold;">¡OFERTA FINALIZADA!</span>';
        }

        // Detener el countdown
        clearInterval(countdownInterval);
    }

    // Variable global para el intervalo del countdown
    let countdownInterval;

    // Countdown Timer
    function updateCountdown() {
        // Fecha objetivo: 7 días desde ahora
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
        targetDate.setHours(targetDate.getHours(), targetDate.getMinutes(), targetDate.getSeconds(), 0);

        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar countdown del header
        const headerDays = document.getElementById('days');
        const headerHours = document.getElementById('hours');
        const headerMinutes = document.getElementById('minutes');
        const headerSeconds = document.getElementById('seconds');

        if (headerDays) headerDays.textContent = String(days).padStart(2, '0');
        if (headerHours) headerHours.textContent = String(hours).padStart(2, '0');
        if (headerMinutes) headerMinutes.textContent = String(minutes).padStart(2, '0');
        if (headerSeconds) headerSeconds.textContent = String(seconds).padStart(2, '0');

        // Actualizar countdown principal grande del hero
        const mainDays = document.getElementById('mainDays');
        const mainHours = document.getElementById('mainHours');
        const mainMinutes = document.getElementById('mainMinutes');
        const mainSeconds = document.getElementById('mainSeconds');

        if (mainDays) {
            const newDays = String(days).padStart(2, '0');
            if (mainDays.textContent !== newDays) {
                addFlipAnimation(mainDays);
                mainDays.textContent = newDays;
            }
        }

        if (mainHours) {
            const newHours = String(hours).padStart(2, '0');
            if (mainHours.textContent !== newHours) {
                addFlipAnimation(mainHours);
                mainHours.textContent = newHours;
            }
        }

        if (mainMinutes) {
            const newMinutes = String(minutes).padStart(2, '0');
            if (mainMinutes.textContent !== newMinutes) {
                addFlipAnimation(mainMinutes);
                mainMinutes.textContent = newMinutes;
            }
        }

        if (mainSeconds) {
            const newSeconds = String(seconds).padStart(2, '0');
            if (mainSeconds.textContent !== newSeconds) {
                addFlipAnimation(mainSeconds);
                mainSeconds.textContent = newSeconds;
            }
        }

        // Actualizar mini countdown
        const miniDays = document.getElementById('miniDays');
        const miniHours = document.getElementById('miniHours');
        const miniMinutes = document.getElementById('miniMinutes');
        const miniSecondsEl = document.getElementById('miniSeconds');

        if (miniDays) miniDays.textContent = String(days).padStart(2, '0');
        if (miniHours) miniHours.textContent = String(hours).padStart(2, '0');
        if (miniMinutes) miniMinutes.textContent = String(minutes).padStart(2, '0');
        if (miniSecondsEl) miniSecondsEl.textContent = String(seconds).padStart(2, '0');

        // Efectos especiales cuando quedan menos de 1 hora
        if (distance > 0 && hours === 0 && days === 0) {
            document.body.classList.add('final-countdown');
            if (minutes <= 10) {
                addUrgentEffects();
            }
        }

        // Si el countdown termina
        if (distance < 0) {
            const mainCountdown = document.getElementById('countdown');
            const heroCountdown = document.getElementById('mainCountdown');
            const miniCountdown = document.getElementById('miniCountdown');

            if (mainCountdown) {
                mainCountdown.innerHTML = '<span style="color: #ff6b6b; font-weight: bold;">¡OFERTA FINALIZADA!</span>';
            }
            if (heroCountdown) {
                heroCountdown.innerHTML = '<div class="expired-message">🔥 ¡OFERTA EXPIRADA! 🔥</div>';
            }
            if (miniCountdown) {
                miniCountdown.innerHTML = '<span style="color: #ff6b6b; font-weight: bold;">¡OFERTA FINALIZADA!</span>';
            }

            // Detener el countdown
            clearInterval(countdownInterval);
        }

        // Debug para verificar que funciona
        console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    // Función para agregar animación flip a los números
    function addFlipAnimation(element) {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'numberFlip 0.6s ease-in-out';

        setTimeout(() => {
            element.style.animation = '';
        }, 600);
    }

    // Efectos de urgencia para los últimos 10 segundos
    function addUrgentEffects() {
        const countdownContainer = document.querySelector('.main-countdown-container');
        if (countdownContainer) {
            countdownContainer.classList.add('final-seconds');
        }

        // Crear efecto de alerta roja
        const alert = document.createElement('div');
        alert.className = 'urgent-alert';
        alert.innerHTML = '🚨 ¡ÚLTIMOS SEGUNDOS! 🚨';
        alert.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff4757, #ff3742);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        animation: urgentAlert 0.5s ease-in-out infinite alternate;
        box-shadow: 0 0 50px rgba(255, 71, 87, 0.8);
    `;

        document.body.appendChild(alert);

        setTimeout(() => {
            if (document.body.contains(alert)) {
                alert.remove();
            }
        }, 5000);
    }

    // FAQ Toggle
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Cerrar todos los items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });

                // Abrir el item clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Smooth Scroll
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Offset para header

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Intersection Observer para animaciones
    function initScrollAnimations() {
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

        // Observar elementos que deben animarse
        const animatedElements = document.querySelectorAll('.product-card, .feature, .testimonial, .faq-item');

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    // WhatsApp Button Tracking
    function initWhatsAppTracking() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

        whatsappButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Aquí puedes agregar tracking analytics
                console.log('WhatsApp button clicked');

                // Google Analytics event (si tienes GA configurado)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'WhatsApp',
                        'event_label': 'Landing Page CTA'
                    });
                }

                // Facebook Pixel event (si tienes FB Pixel configurado)
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'Contact');
                }
            });
        });
    }

    // CTA Button Tracking
    function initCTATracking() {
        const ctaButtons = document.querySelectorAll('.btn-primary');

        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('CTA button clicked');

                // Analytics tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Promo 2x1'
                    });
                }
            });
        });
    }

    // Lazy Loading para imágenes
    function initLazyLoading() {
        const images = document.querySelectorAll('img[src]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Efectos de hover dinámicos
    function initDynamicEffects() {
        // Efecto parallax suave en hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');

            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Efecto de movimiento del mouse en las tarjetas de producto
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // Función para mostrar notificaciones de urgencia
    function showUrgencyNotifications() {
        const messages = [
            "🔥 ¡3 personas están viendo esta oferta ahora!",
            "⚡ ¡Solo quedan pocas unidades disponibles!",
            "🎯 ¡Alguien acaba de comprar su combo 2x1!",
            "⏰ ¡La oferta termina pronto, no te quedes sin la tuya!"
        ];

        let messageIndex = 0;

        function showNotification() {
            // Crear elemento de notificación
            const notification = document.createElement('div');
            notification.className = 'urgency-notification';
            notification.innerHTML = `
            <div class="notification-content">
                <span>${messages[messageIndex]}</span>
                <button class="close-notification">&times;</button>
            </div>
        `;

            // Estilos
            notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
            z-index: 9999;
            max-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 600;
            font-size: 14px;
        `;

            document.body.appendChild(notification);

            // Mostrar notificación
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            // Cerrar notificación
            const closeBtn = notification.querySelector('.close-notification');
            closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            margin-left: 10px;
            padding: 0;
        `;

            closeBtn.addEventListener('click', () => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });

            // Auto-cerrar después de 5 segundos
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }
            }, 5000);

            messageIndex = (messageIndex + 1) % messages.length;
        }

        // Mostrar primera notificación después de 10 segundos
        setTimeout(showNotification, 10000);

        // Mostrar notificaciones cada 45 segundos
        setInterval(showNotification, 45000);
    }

    // Detectar cuando el usuario está a punto de salir de la página
    function initExitIntent() {
        let exitIntentShown = false;

        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !exitIntentShown) {
                exitIntentShown = true;
                showExitModal();
            }
        });
    }

    function showExitModal() {
        const modal = document.createElement('div');
        modal.className = 'exit-intent-modal';
        modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>¡ESPERA! 🛑</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <h3>¿Te vas sin aprovechar tu descuento del 50%?</h3>
                    <p>Esta es tu última oportunidad de conseguir 2 uniformes premium pagando solo 1</p>
                    <div class="modal-countdown">
                        <span>Esta oferta expira en:</span>
                        <div class="exit-countdown" id="exitCountdown">05:00</div>
                    </div>
                    <a href="https://wa.me/542477238703?text=¡Espera!%20No%20quiero%20perder%20mi%20descuento%20del%2050%25.%20¿Me%20ayudas%20con%20la%20promo%202x1?" 
                       class="modal-cta" target="_blank">
                        SÍ, QUIERO MI 50% DE DESCUENTO
                    </a>
                </div>
            </div>
        </div>
    `;

        // Estilos del modal
        modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

        document.body.appendChild(modal);

        // Cerrar modal
        const closeBtn = modal.querySelector('.close-modal');
        const overlay = modal.querySelector('.modal-overlay');

        function closeModal() {
            modal.remove();
        }

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });

        // Countdown del modal (5 minutos)
        let timeLeft = 300; // 5 minutos en segundos
        const exitCountdownEl = modal.querySelector('#exitCountdown');

        const exitCountdownInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            exitCountdownEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(exitCountdownInterval);
                closeModal();
            }
        }, 1000);
    }

    // Función principal de inicialización
    function init() {
        // Inicializar countdown
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);

        // Inicializar otras funciones cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initFAQ();
                initSmoothScroll();
                initScrollAnimations();
                initWhatsAppTracking();
                initCTATracking();
                initLazyLoading();
                initDynamicEffects();
                showUrgencyNotifications();
                initExitIntent();
            });
        } else {
            initFAQ();
            initSmoothScroll();
            initScrollAnimations();
            initWhatsAppTracking();
            initCTATracking();
            initLazyLoading();
            initDynamicEffects();
            showUrgencyNotifications();
            initExitIntent();
        }
    }

    // Inicializar la aplicación
    init();

    // CSS adicional para elementos creados dinámicamente
    const additionalCSS = `
    .exit-intent-modal .modal-overlay {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .exit-intent-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 500px;
        width: 100%;
        position: relative;
        animation: modalAppear 0.3s ease-out;
    }
    
    @keyframes modalAppear {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .exit-intent-modal .modal-header {
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 20px 30px;
        border-radius: 15px 15px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .exit-intent-modal .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .exit-intent-modal .close-modal {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .exit-intent-modal .close-modal:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .exit-intent-modal .modal-body {
        padding: 30px;
        text-align: center;
    }
    
    .exit-intent-modal .modal-body h3 {
        color: #2c3e50;
        margin-bottom: 15px;
        font-size: 1.3rem;
    }
    
    .exit-intent-modal .modal-body p {
        color: #7f8c8d;
        margin-bottom: 25px;
        line-height: 1.6;
    }
    
    .exit-intent-modal .modal-countdown {
        background: #f8f9fc;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
    }
    
    .exit-intent-modal .modal-countdown span {
        display: block;
        color: #2c3e50;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .exit-intent-modal .exit-countdown {
        font-size: 2rem;
        font-weight: bold;
        color: #ff6b6b;
        font-family: 'Courier New', monospace;
    }
    
    .exit-intent-modal .modal-cta {
        background: linear-gradient(45deg, #4ecdc4, #44a08d);
        color: white;
        padding: 18px 35px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        display: inline-block;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .exit-intent-modal .modal-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .urgency-notification {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

    // Agregar CSS adicional al head
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
