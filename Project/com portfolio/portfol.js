// Portfolio Website JavaScript

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initThemeToggle();
  initMobileMenu();
  initScrollEffects();
  initAnimations();
  initSkillBars();
  initStats();
  initContactForm();
  initSmoothScrolling();
  initParallax();
});

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", currentTheme);
  updateThemeIcon(icon, currentTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(icon, newTheme);

    // Add animation effect
    themeToggle.style.transform = "scale(0.9)";
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)";
    }, 150);
  });
}

function updateThemeIcon(icon, theme) {
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Mobile Menu Functionality
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}

// Scroll Effects
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    // Navbar background on scroll
    if (scrollTop > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Hide scroll indicator after scrolling
    if (scrollTop > 100) {
      scrollIndicator.style.opacity = "0";
    } else {
      scrollIndicator.style.opacity = "1";
    }

    // Active navigation link
    updateActiveNavLink();

    // Parallax effect for hero section
    const hero = document.querySelector(".hero");
    if (hero) {
      const parallaxSpeed = scrollTop * 0.5;
      hero.style.transform = `translateY(${parallaxSpeed}px)`;
    }
  });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");

        // Special handling for different animation types
        if (entry.target.classList.contains("skill-item")) {
          animateSkillBar(entry.target);
        }

        if (entry.target.classList.contains("stat-item")) {
          animateCounter(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".glass-card, .hero-content, .section-header"
  );
  animateElements.forEach((el) => observer.observe(el));
}

// Skill bars animation
function initSkillBars() {
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBar(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(item);
  });
}

function animateSkillBar(skillItem) {
  const progressBar = skillItem.querySelector(".skill-progress");
  const targetWidth = progressBar.getAttribute("data-width");

  setTimeout(() => {
    progressBar.style.width = targetWidth + "%";
  }, 300);
}

// Stats counter animation
function initStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(stat);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      // Validate form
      if (validateForm(data)) {
        // Simulate form submission
        submitForm(data);
      }
    });

    // Add input animations
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.classList.remove("focused");
        }
      });

      // Check if input has value on page load
      if (input.value) {
        input.parentElement.classList.add("focused");
      }
    });
  }
}

function validateForm(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.name || data.name.trim().length < 2) {
    showFormMessage("Please enter a valid name", "error");
    return false;
  }

  if (!emailRegex.test(data.email)) {
    showFormMessage("Please enter a valid email address", "error");
    return false;
  }

  if (!data.subject || data.subject.trim().length < 3) {
    showFormMessage("Please enter a subject", "error");
    return false;
  }

  if (!data.message || data.message.trim().length < 10) {
    showFormMessage("Please enter a message (at least 10 characters)", "error");
    return false;
  }

  return true;
}

function submitForm(data) {
  const submitButton = document.querySelector(
    '#contact-form button[type="submit"]'
  );
  const originalText = submitButton.textContent;

  // Show loading state
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Simulate API call
  setTimeout(() => {
    showFormMessage(
      "Thank you! Your message has been sent successfully.",
      "success"
    );
    document.getElementById("contact-form").reset();

    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;

    // Remove focused class from form groups
    document.querySelectorAll(".form-group").forEach((group) => {
      group.classList.remove("focused");
    });
  }, 2000);
}

function showFormMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;

  // Insert message
  const form = document.getElementById("contact-form");
  form.insertBefore(messageDiv, form.firstChild);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Parallax effects
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element) => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

// Scroll indicator animation
function initScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    // Animate the scroll arrow
    setInterval(() => {
      scrollIndicator.style.transform = "translateY(10px)";
      setTimeout(() => {
        scrollIndicator.style.transform = "translateY(0)";
      }, 500);
    }, 2000);
  }
}

// Project card hover effects
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Typing animation for hero title
function initTypingAnimation() {
  const titleRole = document.querySelector(".title-role");

  if (titleRole) {
    const roles = [
      "CS Engineering Student",
      "Full Stack Developer",
      "Problem Solver",
      "Tech Enthusiast",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        titleRole.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        titleRole.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before next role
      }

      setTimeout(typeRole, typeSpeed);
    }

    // Start typing animation after page load
    setTimeout(typeRole, 1000);
  }
}

// Add loading animation
function initPageLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".page-loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }

    // Start other animations
    initScrollIndicator();
    initProjectCards();
    initTypingAnimation();
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add resize handler
window.addEventListener(
  "resize",
  debounce(() => {
    // Recalculate any position-dependent elements
    updateActiveNavLink();
  }, 250)
);

// Add scroll handler with throttling
window.addEventListener(
  "scroll",
  throttle(() => {
    // Performance optimized scroll handling
    requestAnimationFrame(() => {
      // Any additional scroll-based animations
    });
  }, 16)
); // 60fps

// Initialize page loader
initPageLoader();

// Add CSS classes for animations via JavaScript
function addAnimationClasses() {
  // Add stagger animation to skill items
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Add stagger animation to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });
}

// Call animation classes setup
addAnimationClasses();

// Error handling
window.addEventListener("error", (e) => {
  console.error("An error occurred:", e.error);
});

// Add focus trap for accessibility
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
  );

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }

    if (e.key === "Escape") {
      // Close modal or menu
      element.style.display = "none";
    }
  });
}
