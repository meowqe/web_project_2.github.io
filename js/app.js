document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.animated-button');


    button.addEventListener('mouseleave', function () {
        this.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });


    button.addEventListener('mouseenter', function () {
        this.style.willChange = 'transform, box-shadow, letter-spacing';
    });

    button.addEventListener('mouseleave', function () {
        this.style.willChange = 'auto';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerOverlay = document.createElement('div');
    const burgerNav = document.createElement('nav');
    
    // Create overlay
    burgerOverlay.className = 'burger-overlay';
    document.body.appendChild(burgerOverlay);
    
    // Create mobile nav
    burgerNav.className = 'burger-nav';
    
    // Clone desktop menu for mobile
    const desktopMenu = document.querySelector('.menu_list').cloneNode(true);
    const phoneCanvas = document.querySelector('.phone_canvas_content').cloneNode(true);
    
    burgerNav.appendChild(desktopMenu);
    
    // Add phone to mobile menu
    const phoneContainer = document.createElement('div');
    phoneContainer.className = 'burger-phone';
    phoneContainer.appendChild(phoneCanvas);
    burgerNav.appendChild(phoneContainer);
    
    document.body.appendChild(burgerNav);
    
    // Toggle menu
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        burgerOverlay.classList.toggle('active');
        burgerNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu on overlay click
    burgerOverlay.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        this.classList.remove('active');
        burgerNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close menu on link click
    burgerNav.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu_link')) {
            burgerBtn.classList.remove('active');
            burgerOverlay.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Prevent body scroll when menu is open
    document.body.classList.remove('no-scroll');
});


// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerOverlay = document.createElement('div');
    const burgerNav = document.createElement('nav');
    
    // Create overlay
    burgerOverlay.className = 'burger-overlay';
    document.body.appendChild(burgerOverlay);
    
    // Create mobile nav
    burgerNav.className = 'burger-nav';
    
    // Clone desktop menu for mobile
    const desktopMenu = document.querySelector('.menu_list').cloneNode(true);
    const phoneCanvas = document.querySelector('.phone_canvas_content').cloneNode(true);
    
    burgerNav.appendChild(desktopMenu);
    
    // Add phone to mobile menu
    const phoneContainer = document.createElement('div');
    phoneContainer.className = 'burger-phone';
    phoneContainer.appendChild(phoneCanvas);
    burgerNav.appendChild(phoneContainer);
    
    document.body.appendChild(burgerNav);
    
    // Function to close menu
    function closeMenu() {
        burgerBtn.classList.remove('active');
        burgerOverlay.classList.remove('active');
        burgerNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Function to check screen width and close menu if needed
    function checkScreenWidth() {
        if (window.innerWidth > 1200) {
            closeMenu();
        }
    }
    
    // Toggle menu
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        burgerOverlay.classList.toggle('active');
        burgerNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu on overlay click
    burgerOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu on link click
    burgerNav.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu_link')) {
            closeMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Check screen width on resize
    window.addEventListener('resize', function() {
        checkScreenWidth();
        
        // Debounce to avoid multiple calls
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(checkScreenWidth, 250);
    });
    
    // Initial check
    checkScreenWidth();
});

function handleResize() {
    const width = window.innerWidth;
    
    // Автоматически закрываем бургер-меню на больших экранах
    if (width > 1200) {
        closeMenu();
    }
    
    // Оптимизация для мобильных устройств
    if (width <= 575) {
        // Добавляем дополнительные классы для мобильной оптимизации
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

// Вызываем при загрузке и изменении размера
window.addEventListener('load', handleResize);
window.addEventListener('resize', function() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(handleResize, 250);
});

// Оптимизация касаний для мобильных
document.addEventListener('touchstart', function() {}, { passive: true });


        // Активация мобильного меню
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('active');
        });
        
        // Закрытие меню при клике на пункт
        document.querySelectorAll('.menu_link').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.menu').classList.remove('active');
            });
        });


