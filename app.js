 // Mobile Navigation
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.innerHTML = navLinks.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Sticky Header
      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("scrolled", window.scrollY > 0);
      });

      // Portfolio Filter
      const filterBtns = document.querySelectorAll(".filter-btn");
      const portfolioItems = document.querySelectorAll(".portfolio-item");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          filterBtns.forEach((btn) => btn.classList.remove("active"));
          // Add active class to clicked button
          btn.classList.add("active");

          const filter = btn.getAttribute("data-filter");

          portfolioItems.forEach((item) => {
            if (
              filter === "all" ||
              item.getAttribute("data-category") === filter
            ) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });

      // Animate elements when scrolling
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(
          ".hero-text, .hero-image, .about-image, .about-text, .service-card, .portfolio-item, .contact-info, .contact-form"
        );

        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (elementPosition < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translate(0)";
          }
        });
      };

      // Initialize animations
      window.addEventListener("load", () => {
        animateOnScroll();
      });

      window.addEventListener("scroll", () => {
        animateOnScroll();
      });

      // Skill bars animation
      const skillBars = document.querySelectorAll(".skill-progress");

      const animateSkillBars = () => {
        skillBars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 300);
        });
      };

      // Animate skill bars when about section is in view
      const aboutSection = document.getElementById("about");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillBars();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(aboutSection);