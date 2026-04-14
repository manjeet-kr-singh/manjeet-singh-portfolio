$(document).ready(function () {

    // =========================================
    // 1. TYPING ANIMATION (Typed.js)
    // =========================================
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'I build scalable enterprise solutions.',
                'I craft secure Spring Boot APIs.',
                'I design responsive web experiences.',
                'I solve complex backend problems.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // =========================================
    // 2. NAVBAR — SCROLL SHADOW EFFECT
    // =========================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // =========================================
    // 3. SMOOTH SCROLLING FOR NAV LINKS
    // =========================================
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(this.hash).offset().top - 70 }, 800);
        }
    });

    // =========================================
    // 4. ACTIVE NAV LINK ON SCROLL
    // =========================================
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        $('a.nav-link[href^="#"]').each(function () {
            var refElement = $($(this).attr("href"));
            if (refElement.length && refElement.position().top - 80 <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $('a.nav-link').removeClass("active");
                $(this).addClass("active");
            }
        });
    });

    // =========================================
    // 5. SCROLL REVEAL ANIMATION
    // =========================================
    $('<style>.reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s ease, transform 0.7s ease;}.reveal.active{opacity:1;transform:translateY(0);}</style>').appendTo('head');

    function reveal() {
        $('.reveal').each(function () {
            if (this.getBoundingClientRect().top < window.innerHeight - 100) {
                $(this).addClass('active');
            }
        });
    }
    $(window).scroll(reveal);
    reveal();

    // =========================================
    // 6. ANIMATED STATS COUNTER
    // =========================================
    var counterStarted = false;
    function animateCounters() {
        if (counterStarted) return;
        var statsSection = $('#stats');
        if (!statsSection.length) return;
        if ($(window).scrollTop() + $(window).height() > statsSection.offset().top + 100) {
            counterStarted = true;
            $('.stat-number').each(function () {
                var $el = $(this), target = parseInt($el.data('target'));
                var stepTime = Math.max(Math.floor(1500 / target), 20);
                var current = 0;
                var timer = setInterval(function () {
                    current++;
                    $el.text(current);
                    if (current >= target) { clearInterval(timer); $el.text(target); }
                }, stepTime);
            });
        }
    }
    $(window).scroll(animateCounters);
    animateCounters();

    // =========================================
    // 7. A1: SKILL PROGRESS BAR ANIMATION
    // =========================================
    var skillsAnimated = false;
    function animateSkillBars() {
        if (skillsAnimated) return;
        var skillsSection = $('#skills');
        if (!skillsSection.length) return;
        if ($(window).scrollTop() + $(window).height() > skillsSection.offset().top + 150) {
            skillsAnimated = true;
            $('.progress-fill').each(function () {
                var targetWidth = $(this).data('width') + '%';
                $(this).css('width', targetWidth);
            });
        }
    }
    $(window).scroll(animateSkillBars);
    animateSkillBars();

    // =========================================
    // 8. A3: BACK TO TOP BUTTON
    // =========================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#backToTopBtn').fadeIn(300);
        } else {
            $('#backToTopBtn').fadeOut(300);
        }
    });
    $('#backToTopBtn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 700, 'swing');
    });

    // =========================================
    // 9. C1: CONTACT FORM — AJAX SUBMIT
    // =========================================
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var $btn = $('#contactSubmitBtn');
        var $toast = $('#contactToast');
        $('#btnText').hide();
        $('#btnLoading').show();
        $btn.prop('disabled', true);

        var formData = {
            name: $('#contactName').val(),
            email: $('#contactEmail').val(),
            subject: $('#contactSubject').val(),
            message: $('#contactMessage').val()
        };

        $.ajax({
            url: '/ManjeetSinghPortfolio/api/contact',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function () {
                $toast.removeClass('error').addClass('success')
                    .text('✅ Message sent! I\'ll get back to you soon.')
                    .fadeIn(400);
                $('#contactForm')[0].reset();
            },
            error: function () {
                $toast.removeClass('success').addClass('error')
                    .text('❌ Something went wrong. Please email me directly.')
                    .fadeIn(400);
            },
            complete: function () {
                $('#btnText').show();
                $('#btnLoading').hide();
                $btn.prop('disabled', false);
                setTimeout(function () { $toast.fadeOut(400); }, 5000);
            }
        });
    });

});
