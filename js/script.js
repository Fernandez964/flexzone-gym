(() => {
  const galleryData = [
    {
      title: 'Cardio Zone',
      alt: 'Cardio training area at FlexZone Gym',
      src: 'images/cardioarea.jpg'
    },
    {
      title: 'Strength Area',
      alt: 'Strength training area at FlexZone Gym',
      src: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#001f3f"/>
              <stop offset="100%" stop-color="#ff6b35"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <rect x="160" y="260" width="880" height="280" rx="28" fill="#ffffff" opacity="0.14"/>
          <rect x="260" y="315" width="680" height="170" rx="18" fill="#ffffff" opacity="0.22"/>
          <rect x="180" y="385" width="160" height="110" rx="18" fill="#ffffff" opacity="0.9"/>
          <rect x="860" y="385" width="160" height="110" rx="18" fill="#ffffff" opacity="0.9"/>
          <text x="600" y="610" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="68" fill="#ffffff" font-weight="700">STRENGTH AREA</text>
        </svg>
      `)
    },
    {
      title: 'Group Classes',
      alt: 'Group fitness class at FlexZone Gym',
      src: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#36454f"/>
              <stop offset="50%" stop-color="#ff6b35"/>
              <stop offset="100%" stop-color="#001f3f"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <circle cx="300" cy="300" r="120" fill="#ffffff" opacity="0.9"/>
          <circle cx="600" cy="240" r="150" fill="#ffffff" opacity="0.72"/>
          <circle cx="900" cy="300" r="120" fill="#ffffff" opacity="0.9"/>
          <path d="M210 610c90-140 200-210 390-210s300 70 390 210" fill="none" stroke="#ffffff" stroke-width="42" stroke-linecap="round" opacity="0.88"/>
          <text x="600" y="690" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="68" fill="#ffffff" font-weight="700">GROUP CLASSES</text>
        </svg>
      `)
    },
    {
      title: 'Functional Training',
      alt: 'Functional training rig at FlexZone Gym',
      src: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#001f3f"/>
              <stop offset="100%" stop-color="#36454f"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <path d="M250 220v360M950 220v360M250 220h700M250 580h700" stroke="#ff6b35" stroke-width="34" stroke-linecap="round"/>
          <path d="M390 580V330M600 580V330M810 580V330" stroke="#ffffff" stroke-width="28" stroke-linecap="round" opacity="0.9"/>
          <text x="600" y="680" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="66" fill="#ffffff" font-weight="700">FUNCTIONAL TRAINING</text>
        </svg>
      `)
    },
    {
      title: 'Recovery Space',
      alt: 'Recovery and mobility space at FlexZone Gym',
      src: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#001f3f"/>
              <stop offset="100%" stop-color="#ff6b35"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <path d="M600 180c-190 0-340 150-340 340s150 340 340 340 340-150 340-340-150-340-340-340z" fill="#ffffff" opacity="0.12"/>
          <path d="M600 310c-115 0-210 95-210 210s95 210 210 210 210-95 210-210-95-210-210-210z" fill="#ffffff" opacity="0.2"/>
          <circle cx="600" cy="520" r="90" fill="#ffffff" opacity="0.82"/>
          <text x="600" y="680" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="66" fill="#ffffff" font-weight="700">RECOVERY SPACE</text>
        </svg>
      `)
    },
    {
      title: 'Community Events',
      alt: 'Community fitness event at FlexZone Gym',
      src: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#ff6b35"/>
              <stop offset="100%" stop-color="#36454f"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <path d="M180 260h840v330H180z" fill="#ffffff" opacity="0.12"/>
          <path d="M300 380h600M300 470h600M300 560h600" stroke="#ffffff" stroke-width="34" stroke-linecap="round" opacity="0.86"/>
          <circle cx="230" cy="380" r="55" fill="#ffffff" opacity="0.9"/>
          <circle cx="230" cy="470" r="55" fill="#ffffff" opacity="0.9"/>
          <circle cx="230" cy="560" r="55" fill="#ffffff" opacity="0.9"/>
          <text x="600" y="690" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="66" fill="#ffffff" font-weight="700">COMMUNITY EVENTS</text>
        </svg>
      `)
    }
  ];

  let lightbox;
  let lightboxImage;
  let lightboxCaption;
  let lightboxClose;
  let activeModal = null;
  let lastFocusedElement = null;

  document.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    initTabs();
    initAccordion();
    initModal();
    initGallery();
    initRevealAnimations();
    initMap();
    initEnquiryForm();
    initContactForm();
  });

  function svgData(svg) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function initDropdown() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector('.dropbtn');

      if (!button) {
        return;
      }

      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(isOpen));
      });
    });

    document.addEventListener('click', () => {
      dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('.dropbtn');
        dropdown.classList.remove('is-open');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        const tabPanel = document.getElementById(`tab-${tabName}`);

        tabButtons.forEach((currentButton) => {
          currentButton.classList.remove('active');
          currentButton.setAttribute('aria-selected', 'false');
        });

        document.querySelectorAll('.tab-panel').forEach((panel) => {
          panel.classList.remove('active');
          panel.hidden = true;
        });

        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        tabPanel.classList.add('active');
        tabPanel.hidden = false;
      });
    });
  }

  function initAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach((trigger) => {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      if (panel) {
        panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
      }

      trigger.addEventListener('click', () => {
        const willOpen = trigger.getAttribute('aria-expanded') !== 'true';

        trigger.setAttribute('aria-expanded', String(willOpen));
        trigger.classList.toggle('active', willOpen);

        if (panel) {
          panel.classList.toggle('active', willOpen);
          panel.style.maxHeight = willOpen ? `${panel.scrollHeight}px` : '0px';
        }
      });
    });

    window.addEventListener('resize', () => {
      document.querySelectorAll('.accordion-trigger[aria-expanded="true"]').forEach((trigger) => {
        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        if (panel) {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });
  }

  function initModal() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modal = document.getElementById('tourModal');
    const form = document.getElementById('tourForm');
    const status = document.getElementById('tourStatus');

    modalTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => openModal(modal));
    });

    if (!modal) {
      return;
    }

    modal.addEventListener('click', (event) => {
      if (event.target.matches('[data-close-modal]')) {
        closeModal(modal);
      }
    });

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('tourName').value.trim();
        if (status) {
          status.textContent = `Thanks, ${name}. Your tour request has been recorded.`;
        }
        form.reset();
      });
    }
  }

  function openModal(modal) {
    if (!modal) {
      return;
    }

    activeModal = modal;
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const focusTarget = modal.querySelector('input, button, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusTarget) {
      focusTarget.focus();
    }
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeModal = null;

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');

    if (!galleryGrid) {
      return;
    }

    galleryGrid.innerHTML = '';

    galleryData.forEach((item, index) => {
      const button = document.createElement('button');
      const image = document.createElement('img');
      const caption = document.createElement('span');

      button.type = 'button';
      button.className = 'gallery-item';
      button.setAttribute('aria-label', `Open ${item.title} gallery image`);

      image.src = item.src;
      image.alt = item.alt;
      image.loading = 'lazy';

      caption.className = 'gallery-caption';
      caption.textContent = item.title;

      button.append(image, caption);
      button.addEventListener('click', () => openLightbox(index));
      galleryGrid.appendChild(button);
    });
  }

  function createLightbox() {
    if (lightbox) {
      return;
    }

    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="lightboxCaption">
        <button class="lightbox-close" type="button" aria-label="Close gallery lightbox">Ã—</button>
        <img class="lightbox-image" alt="">
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;

    lightboxClose = lightbox.querySelector('.lightbox-close');
    lightboxImage = lightbox.querySelector('.lightbox-image');
    lightboxCaption = lightbox.querySelector('.lightbox-caption');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.body.appendChild(lightbox);
  }

  function openLightbox(index) {
    createLightbox();

    const item = galleryData[index];
    if (!item) {
      return;
    }

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = item.title;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => observer.observe(element));
  }

  function initMap() {
    const mapElement = document.getElementById('locationMap');

    if (!mapElement || typeof L === 'undefined') {
      if (mapElement) {
        mapElement.textContent = 'Interactive map could not load. Please check your connection and reload the page.';
      }
      return;
    }

    const map = L.map('locationMap', {
      scrollWheelZoom: false
    }).setView([-33.9249, 18.4241], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-33.9249, 18.4241]).addTo(map)
      .bindPopup('<strong>FlexZone Gym</strong><br>Cape Town, South Africa')
      .openPopup();
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (activeModal) {
        closeModal(activeModal);
      }
      closeLightbox();
    }

    if (lightbox && lightbox.classList.contains('is-open')) {
      if (event.key === 'ArrowLeft') {
        const currentIndex = galleryData.findIndex((item) => item.src === lightboxImage.src);
        const previousIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(previousIndex);
      }

      if (event.key === 'ArrowRight') {
        const currentIndex = galleryData.findIndex((item) => item.src === lightboxImage.src);
        const nextIndex = (currentIndex + 1) % galleryData.length;
        openLightbox(nextIndex);
      }
    }
  });

  // ========================================
  // FORM VALIDATION AND AJAX SUBMISSION
  // ========================================

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{2,4}\)?[\s\d]{7,14}$/;
    return phoneRegex.test(phone);
  }

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function clearErrors(form) {
    const errorElements = form.querySelectorAll('.error-message');
    errorElements.forEach((el) => el.textContent = '');
  }

  // ENQUIRY FORM HANDLING - AJAX submission with cost/availability response
  function initEnquiryForm() {
    const form = document.getElementById('enquiryForm');
    const status = document.getElementById('enquiryStatus');

    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors(form);

      const name = document.getElementById('enquiryName').value.trim();
      const surname = document.getElementById('enquirySurname').value.trim();
      const inquiry = document.getElementById('inquiry').value;
      const email = document.getElementById('enquiryEmail').value.trim();
      const mobile = document.getElementById('enquiryMobile').value.trim();
      let isValid = true;

      // Validate name
      if (!name) {
        showError('nameError', 'Please enter your name');
        isValid = false;
      }

      // Validate surname
      if (!surname) {
        showError('surnameError', 'Please enter your surname');
        isValid = false;
      }

      // Validate inquiry type
      if (!inquiry) {
        showError('inquiryError', 'Please select an inquiry type');
        isValid = false;
      }

      // Validate email
      if (!email || !validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      }

      // Validate mobile
      if (!mobile || !validatePhone(mobile)) {
        showError('mobileError', 'Please enter a valid phone number');
        isValid = false;
      }

      if (!isValid) {
        status.textContent = 'Please correct the errors above.';
        status.style.color = '#ff6b6b';
        return;
      }

      // AJAX submission - simulate form processing with pricing/availability info
      const priceInfo = {
        'membership': 'Memberships start at R399/month. We offer Basic, Premium, and VIP options.',
        'personal-training': 'Personal training sessions start at R299 per session. Package discounts available.',
        'classes': 'Group classes are included in Premium (R699) and VIP (R999) memberships.',
        'billing': 'Our billing department will contact you within 24 hours regarding account matters.',
        'volunteer': 'Volunteer opportunities available for community events and youth programs. Applications reviewed monthly.',
        'sponsor': 'Sponsorship packages start at R1500/month. Contact our partnership team for details.',
        'general': 'Thank you for your enquiry. We will respond within 24 hours.'
      };

      status.innerHTML = `
        <strong>Thank you, ${name}!</strong><br>
        ${priceInfo[inquiry] || 'We will respond with information shortly.'}<br>
        A confirmation has been sent to ${email}.
      `;
      status.style.color = '#b7f7d1';

      // Clean up form after delay
      setTimeout(() => {
        form.reset();
      }, 2000);
    });
  }

  // CONTACT FORM HANDLING - AJAX submission for general messages
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');

    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors(form);

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const messageType = document.getElementById('messageType').value;
      const message = document.getElementById('contactMessage').value.trim();
      let isValid = true;

      // Validate name
      if (!name) {
        showError('nameError', 'Please enter your name');
        isValid = false;
      }

      // Validate email
      if (!email || !validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      }

      // Validate phone (optional but format check if provided)
      if (phone && !validatePhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
      }

      // Validate message type
      if (!messageType) {
        showError('typeError', 'Please select a message type');
        isValid = false;
      }

      // Validate message
      if (!message) {
        showError('messageError', 'Please enter your message');
        isValid = false;
      }

      if (!isValid) {
        status.textContent = 'Please correct the errors above.';
        status.style.color = '#ff6b6b';
        return;
      }

      // AJAX submission - compile email data for recipient
      const emailData = {
        to: 'hello@flexzonegym.co.za',
        subject: `FlexZone Gym - ${messageType.charAt(0).toUpperCase() + messageType.slice(1)} from ${name}`,
        body: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message Type: ${messageType}

Message:
${message}
        `
      };

      // Simulate AJAX email submission
      status.innerHTML = `
        <strong>Message Sent!</strong><br>
        Your message has been sent to our team.<br>
        We will respond within 24 hours.
      `;
      status.style.color = '#b7f7d1';

      // Reset form after delay
      setTimeout(() => {
        form.reset();
      }, 2000);
    });
  }
})();
