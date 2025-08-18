// Menú hamburguesa
        function toggleMobileMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        function closeMobileMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }

        // Botón flotante para ir al inicio
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Cerrar menú móvil al redimensionar ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // Carrusel
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');

        function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    // Activar animación de texto solo en el slide visible
    slides.forEach((slide, i) => {
    const content = slide.querySelector('.carousel-content');
    if (content) {
        content.style.animation = 'none';
        void content.offsetWidth;
        content.style.animation = 'fadeInText 5s ease-in forwards';
    }
});

}


        function changeSlide(direction) {
            currentSlideIndex += direction;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }
            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        // Auto-play del carrusel
        setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Navegación suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Animaciones al hacer scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);

        // Formulario
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            // Simular envío de email
            enviarEmail(data);
            enviarWhatsApp(data);
            mostrarNotificacion();
            
            // Limpiar formulario
            this.reset();
        });

        function enviarEmail(data) {
            // En una implementación real, aquí se conectaría con un servicio de email
            const emailContent = `
                Nueva solicitud de información:
                
                Nombre: ${data.nombre}
                Email: ${data.email}
                Teléfono: ${data.telefono}
                Edad: ${data.edad || 'No especificada'}
                Área de Interés: ${data.interes}
                Modalidad: ${data.modalidad}
                Mensaje: ${data.mensaje || 'Sin mensaje adicional'}
                
                Fecha: ${new Date().toLocaleString('es-BO')}
            `;
            
            console.log('Email enviado a rectora@instituto.edu.bo:', emailContent);
            
            // Aquí podrías usar EmailJS, un webhook, o cualquier servicio de email
            // Por ejemplo: emailjs.send('service_id', 'template_id', data);
        }

        function enviarWhatsApp(data) {
            // Simular envío a WhatsApp de secretaria
            const whatsappMessage = `
                🎓 *Nueva solicitud de información*
                
                👤 *Nombre:* ${data.nombre}
                📧 *Email:* ${data.email}
                📱 *Teléfono:* ${data.telefono}
                🎯 *Interés:* ${data.interes}
                📅 *Fecha:* ${new Date().toLocaleDateString('es-BO')}
            `;
            
            console.log('Mensaje WhatsApp para secretaria:', whatsappMessage);
            
            // En una implementación real, podrías usar la API de WhatsApp Business
            // o servicios como Twilio para enviar mensajes automáticos
        }

        function mostrarNotificacion() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        }

        // Inicializar animaciones
        document.addEventListener('DOMContentLoaded', function() {
            // Configurar estilos iniciales para animaciones
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            });
            
            // Ejecutar animación inicial
            setTimeout(animateOnScroll, 100);
        });