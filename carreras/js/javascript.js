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

        // Cerrar menú móvil al redimensionar ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

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

        // Formulario de inscripción
    /* document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            // Simular envío de información
            enviarInformacion(data);
            mostrarNotificacion();
            
            // Limpiar formulario
            this.reset();
        });

        function enviarInformacion(data) {
            // Simular envío de email a rectora
            const emailContent = `
                Nueva solicitud de inscripción - Ingeniería en Sistemas:
                
                Nombre: ${data.nombre}
                Email: ${data.email}
                Teléfono: ${data.telefono}
                Eda */
                document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recopilar datos del formulario
    const formData = new FormData(this);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    //  envío de información
    enviarInformacion(data);
    mostrarNotificacion();

    // Limpiar formulario
    this.reset();
});

function enviarInformacion(data) {
    //  contenido de un correo
    const emailContent = `
    📥 Nueva solicitud de inscripción - Ingeniería en Sistemas
    
    👤 Nombre: ${data.nombre}
    📧 Email: ${data.email}
    📱 Teléfono: ${data.telefono}
    🎂 Edad: ${data.edad || 'No especificada'}
    🏙️ Ciudad: ${data.ciudad || 'No especificada'}
    🖥️ Modalidad: ${data.modalidad}
    ⏰ Turno: ${data.turno}
    📚 Experiencia: ${data.experiencia}
    📝 Motivación: ${data.motivacion || 'Sin comentarios'}
    
    📅 Fecha y hora: ${new Date().toLocaleString('es-BO')}
    `;

    console.log("📩 Email simulado enviado a: rectoria@instituto.edu.bo");
    console.log(emailContent);
}

function mostrarNotificacion() {
    const notification = document.createElement('div');
    notification.className = 'notification show';
    notification.innerText = '✅ Solicitud enviada correctamente.';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}