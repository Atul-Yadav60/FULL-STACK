// Carousel functionality
class CarouselController {
  constructor() {
    this.carousel = document.querySelector(".carousel");
    this.list = document.querySelector(".carousel .list");
    this.items = document.querySelectorAll(".carousel .list .list-item");
    this.prevBtn = document.getElementById("prev");
    this.nextBtn = document.getElementById("next");
    this.exploreButtons = document.querySelectorAll(".explore");

    this.currentIndex = 1; // Start with second item (index 1) as active
    this.isAnimating = false;
    this.autoSlideInterval = null;

    this.init();
  }

  init() {
    // Set initial positions
    this.updateItemPositions();

    // Add event listeners
    this.addEventListeners();

    // Start auto-slide
    this.startAutoSlide();

    // Handle visibility change for auto-slide
    this.handleVisibilityChange();
  }

  addEventListeners() {
    // Navigation buttons
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.prevBtn.addEventListener("click", () => this.prevSlide());

    // Explore buttons
    this.exploreButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => this.handleExploreClick(index));
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch/swipe support for mobile
    this.addTouchSupport();

    // Pause auto-slide on hover
    this.carousel.addEventListener("mouseenter", () => this.stopAutoSlide());
    this.carousel.addEventListener("mouseleave", () => this.startAutoSlide());
  }

  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const minSwipeDistance = 100;

    this.carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      const swipeDistance = Math.abs(endX - startX);

      if (swipeDistance > minSwipeDistance) {
        if (endX < startX) {
          this.nextSlide(); // Swipe left - next slide
        } else {
          this.prevSlide(); // Swipe right - previous slide
        }
      }
    });
  }

  updateItemPositions() {
    this.items.forEach((item, index) => {
      item.classList.remove("active", "prev", "next", "hidden");

      const relativeIndex = this.getRelativeIndex(index);

      switch (relativeIndex) {
        case 0:
          item.style.transform = "var(--item1-transform)";
          item.style.filter = "var(--item1-filter)";
          item.style.zIndex = "var(--item1-zIndex)";
          item.style.opacity = "var(--item1-opacity)";
          item.classList.add("hidden");
          break;
        case 1:
          item.style.transform = "var(--item2-transform)";
          item.style.filter = "var(--item2-filter)";
          item.style.zIndex = "var(--item2-zIndex)";
          item.style.opacity = "var(--item2-opacity)";
          item.classList.add("active");
          break;
        case 2:
          item.style.transform = "var(--item3-transform)";
          item.style.filter = "var(--item3-filter)";
          item.style.zIndex = "var(--item3-zIndex)";
          item.style.opacity = "var(--item3-opacity)";
          item.classList.add("next");
          break;
        case 3:
          item.style.transform = "var(--item4-transform)";
          item.style.filter = "var(--item4-filter)";
          item.style.zIndex = "var(--item4-zIndex)";
          item.style.opacity = "var(--item4-opacity)";
          break;
        case 4:
          item.style.transform = "var(--item5-transform)";
          item.style.filter = "var(--item5-filter)";
          item.style.zIndex = "var(--item5-zIndex)";
          item.style.opacity = "var(--item5-opacity)";
          item.classList.add("hidden");
          break;
        default:
          item.style.opacity = "0";
          item.classList.add("hidden");
          break;
      }
    });
  }

  getRelativeIndex(itemIndex) {
    const totalItems = this.items.length;
    return (itemIndex - this.currentIndex + totalItems) % totalItems;
  }

  nextSlide() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.carousel.classList.add("next");

    // Update current index
    this.currentIndex = (this.currentIndex + 1) % this.items.length;

    // Reset animation class and update positions after animation
    setTimeout(() => {
      this.carousel.classList.remove("next");
      this.updateItemPositions();
      this.isAnimating = false;
    }, 500);

    // Reset auto-slide timer
    this.resetAutoSlide();
  }

  prevSlide() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.carousel.classList.add("prev");

    // Update current index
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;

    // Reset animation class and update positions after animation
    setTimeout(() => {
      this.carousel.classList.remove("prev");
      this.updateItemPositions();
      this.isAnimating = false;
    }, 500);

    // Reset auto-slide timer
    this.resetAutoSlide();
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;

    const direction = index > this.currentIndex ? "next" : "prev";
    this.currentIndex = index;

    this.isAnimating = true;
    this.carousel.classList.add(direction);

    setTimeout(() => {
      this.carousel.classList.remove(direction);
      this.updateItemPositions();
      this.isAnimating = false;
    }, 500);

    this.resetAutoSlide();
  }

  handleExploreClick(index) {
    // Add click animation
    const button = this.exploreButtons[index];
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 150);

    // Add your explore functionality here
    console.log(`Exploring item ${index + 1}`);

    // Example: You could navigate to a product page, show a modal, etc.
    this.showProductInfo(index);
  }

  showProductInfo(index) {
    const item = this.items[index];
    const category = item.querySelector(".category").textContent;
    const description = item.querySelector(".description h1").textContent;

    // Simple alert for demonstration - replace with your preferred method
    alert(
      `Product: ${category}\n${description}\n\nThis would normally open a product page or modal.`
    );
  }

  startAutoSlide() {
    this.stopAutoSlide(); // Clear any existing interval
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  handleVisibilityChange() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopAutoSlide();
      } else {
        this.startAutoSlide();
      }
    });
  }
}

// Navigation Enhancement
class NavigationController {
  constructor() {
    this.navLinks = document.querySelectorAll(".nav-element a");
    this.sections = document.querySelectorAll('[class^="page"]');
    this.currentSection = 0;

    this.init();
  }

  init() {
    this.addScrollSpy();
    this.addSmoothScroll();
    this.addActiveStates();
  }

  addScrollSpy() {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-10% 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = Array.from(this.sections).indexOf(entry.target);
          this.updateActiveNavLink(sectionIndex);
        }
      });
    }, observerOptions);

    this.sections.forEach((section) => observer.observe(section));
  }

  addSmoothScroll() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection =
            document.getElementById(targetId) ||
            document.querySelector(`.${targetId}`);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  addActiveStates() {
    this.navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.transform = "translateY(-2px)";
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  }

  updateActiveNavLink(sectionIndex) {
    this.navLinks.forEach((link, index) => {
      link.classList.toggle("active", index === sectionIndex);
    });
  }
}

// Performance Optimization
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.optimizeImages();
    this.addIntersectionObserver();
    this.optimizeAnimations();
  }

  optimizeImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.loading = "lazy";
      img.addEventListener("load", () => {
        img.style.opacity = "1";
      });
    });
  }

  addIntersectionObserver() {
    const animatedElements = document.querySelectorAll(
      ".list-item, .nav-element"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }

  optimizeAnimations() {
    // Reduce animations on slower devices
    if (navigator.hardwareConcurrency < 4) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.3s"
      );
    }

    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.1s"
      );
    }
  }
}

// Utility Functions
class Utils {
  static debounce(func, wait) {
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

  static throttle(func, limit) {
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

  static fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = "block";

    const start = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  static fadeOut(element, duration = 300) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = startOpacity * (1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = "none";
      }
    }

    requestAnimationFrame(animate);
  }
}

// Loading Animation
class LoadingController {
  constructor() {
    this.init();
  }

  init() {
    this.showLoadingAnimation();
    this.hideLoadingWhenReady();
  }

  showLoadingAnimation() {
    const loadingOverlay = document.createElement("div");
    loadingOverlay.id = "loading-overlay";
    loadingOverlay.innerHTML = `
          <div class="loading-spinner">
              <div class="spinner"></div>
              <p>Loading Premium Collection...</p>
          </div>
      `;

    const style = document.createElement("style");
    style.textContent = `
          #loading-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              transition: opacity 0.5s ease;
          }
          
          .loading-spinner {
              text-align: center;
              color: white;
          }
          
          .spinner {
              width: 50px;
              height: 50px;
              border: 3px solid rgba(255,255,255,0.3);
              border-top: 3px solid white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
          }
          
          @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }
          
          .loading-spinner p {
              font-family: 'Poppins', sans-serif;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 1px;
          }
      `;

    document.head.appendChild(style);
    document.body.appendChild(loadingOverlay);
  }

  hideLoadingWhenReady() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const overlay = document.getElementById("loading-overlay");
        if (overlay) {
          overlay.style.opacity = "0";
          setTimeout(() => overlay.remove(), 500);
        }
      }, 1000); // Show loading for at least 1 second
    });
  }
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize loading controller first
  new LoadingController();

  // Initialize other controllers after a short delay
  setTimeout(() => {
    new CarouselController();
    new NavigationController();
    new PerformanceOptimizer();
  }, 100);
});

// Handle window resize
window.addEventListener(
  "resize",
  Utils.debounce(() => {
    // Re-initialize carousel if needed
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      carousel.style.transition = "none";
      setTimeout(() => {
        carousel.style.transition = "";
      }, 100);
    }
  }, 250)
);

// Export for potential external use
window.CarouselController = CarouselController;
window.NavigationController = NavigationController;
window.Utils = Utils;
