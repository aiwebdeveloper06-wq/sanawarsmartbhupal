/**
 * Sanawar Smart School Bhupal, Mansa (Punjab)
 * Centralized Vanilla JavaScript — assets/js/main.js
 * Limited strictly to:
 * 1. Sticky header & scroll state effects
 * 2. Scroll-triggered entrance reveal animations
 * 3. Active navigation indicator & small UI interactions
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Sticky Header Scroll Effect
    var header = document.querySelector('.site-header');
    function updateHeaderOnScroll() {
      if (!header) return;
      if (window.scrollY > 36) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
    updateHeaderOnScroll();

    // 2. Scroll-Triggered Entrance Reveal Animations
    var revealElements = document.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    );

    if ('IntersectionObserver' in window && revealElements.length > 0) {
      document.documentElement.classList.add('js-anim-ready');
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08
        }
      );

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }

    // 3. Highlight Current Page in Navigation
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.site-header .nav-link, .site-header .dropdown-item');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
        var parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          var toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });

    // 4. Small UI Interaction: Contact / Admission Enquiry Form Feedback
    var forms = document.querySelectorAll('.js-school-enquiry-form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var statusEl = form.querySelector('.js-form-status');
        var nameInput = form.querySelector('[name="name"]');
        var phoneInput = form.querySelector('[name="phone"]');
        var emailInput = form.querySelector('[name="email"]');
        var messageInput = form.querySelector('[name="message"]');

        var nameVal = nameInput ? nameInput.value.trim() : '';
        var phoneVal = phoneInput ? phoneInput.value.trim() : '';
        var emailVal = emailInput ? emailInput.value.trim() : '';
        var msgVal = messageInput ? messageInput.value.trim() : '';

        if (!nameVal || !phoneVal || !emailVal || !msgVal) {
          if (statusEl) {
            statusEl.className = 'js-form-status alert alert-danger mt-3 mb-0 py-2 px-3 small';
            statusEl.textContent = 'Please complete all required fields before submitting your enquiry.';
            statusEl.removeAttribute('hidden');
          }
          return;
        }

        if (statusEl) {
          statusEl.className = 'js-form-status alert alert-success mt-3 mb-0 py-3 px-3 small';
          statusEl.innerHTML =
            '<strong>Thank you, ' +
            nameVal.replace(/[<>&"']/g, '') +
            '.</strong> Your enquiry has been recorded for the Office of Sanawar Smart School Bhupal (+91-94170-94850 / sanawarsmart.hsb@gmail.com).';
          statusEl.removeAttribute('hidden');
        }
        form.reset();
      });
    });
  });
})();
