// Card visibility with stagger effect
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
});

// Theme toggle with animation
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });
});

// Search functionality with debounce
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    let timeout;
    searchBar.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const query = searchBar.value.toLowerCase();
            const cards = document.querySelectorAll('.tool-card');
            cards.forEach(card => {
                const toolName = card.getAttribute('data-tool').toLowerCase();
                if (toolName.includes(query)) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }, 300); // Debounce delay
    });
});

// Modern Back to Top Button (using jQuery)
$(document).ready(function() {
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});

// Tool card click enhancement
document.addEventListener('DOMContentLoaded', () => {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('doc-link')) return; // Ignore clicks on links
            const toolName = card.getAttribute('data-tool');
            card.classList.add('clicked');
            setTimeout(() => card.classList.remove('clicked'), 200);
            console.log(`Clicked on ${toolName}`);
        });
    });
});