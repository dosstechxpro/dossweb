// script.js for navigation, smooth scrolling, and interactive elements

// Smooth scrolling for anchor links
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Navigation highlighting
$(document).on('scroll', function() {
    const scrollDistance = $(document).scrollTop();
    $('nav a').each(function() {
        const section = $($(this).attr('href'));
        if (section.length && section.position().top <= scrollDistance && section.position().top + section.height() > scrollDistance) {
            $('nav a').removeClass('active');
            $(this).addClass('active');
        }
    });
});

// Interactive elements (e.g., modals)
$('.modal-trigger').on('click', function() {
    const targetModal = $($(this).data('target'));
    targetModal.fadeIn();
});

$('.modal-close').on('click', function() {
    $(this).closest('.modal').fadeOut();
});
