// Start--Menu Behavior
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1000) {
            header.style.background = "var(--deepSlate)";
        } else {
            header.style.background = "transparent"; // Reset when at the top
        }
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').slice(1); // Get the target section's id
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element with smooth scroll
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// End--Menu Behavior

// Start--About Me
document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".about-whole-description");
    const target2 = document.querySelector("#skills");
    const target3 = document.querySelector("#projects");
    const target4 = document.querySelector("#contact");
    const single_skills = document.querySelectorAll(".single-skill");
    const work_experience = document.querySelector(".work-experience");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Check if the target is being observed
                    if (entry.target === target) {
                        target.style.animation = "fadeIn 1.5s ease-in-out forwards";
                    }
                    if (entry.target === target2) {
                        target2.style.animation = "fadeSlideUp 1.5s ease-in-out forwards";
                        // Apply animation to each .single-skill
                        single_skills.forEach((single_skill, index) => {
                            const animationDuration = 1; // Change to your desired duration in seconds
                            const staggerDelay = 0.7 * index; // Adjust stagger delay multiplier
                        
                            single_skill.style.animation = `fadeSlideUp ${animationDuration}s ease-out forwards ${staggerDelay}s`;
                        });
                        work_experience.style.animation = "fadeSlideUp 2s ease-in-out forwards";
                        
                    }
                    if (entry.target === target3) {
                        target3.style.animation = "fadeInRight 1.5s ease-in-out forwards";
                    }
                    if (entry.target === target4) {
                        target4.style.animation = "fadeSlideUp 1.5s ease-in-out forwards";
                    }
                    observer.unobserve(entry.target); // Stop observing the element after animation
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    observer.observe(target);
    observer.observe(target2);
    observer.observe(target3);
    observer.observe(target4);
});
// End--About Me

// Start--Accordion
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header, index) => {
        const content = header.nextElementSibling;
        const icon = header.querySelector("i");

        // Automatically open the first accordion item
        if (index === 0) {
            content.style.maxHeight = content.scrollHeight + "px";
            if (icon) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            }
        }

        header.addEventListener("click", () => {
            // Toggle content and icons
            const content = header.nextElementSibling;
            const icon = header.querySelector("i");

            // Close other open accordion items and reset their icons
            document.querySelectorAll(".accordion-content").forEach((openContent) => {
                if (openContent !== content) {
                    openContent.style.maxHeight = null;
                    const otherIcon = openContent.previousElementSibling.querySelector("i");
                    if (otherIcon) {
                        otherIcon.classList.remove("fa-chevron-up");
                        otherIcon.classList.add("fa-chevron-down");
                    }
                }
            });

            // Toggle the clicked accordion content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                if (icon) {
                    icon.classList.remove("fa-chevron-up");
                    icon.classList.add("fa-chevron-down");
                }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                if (icon) {
                    icon.classList.remove("fa-chevron-down");
                    icon.classList.add("fa-chevron-up");
                }
            }
        });
    });
});

// End--Accordion  

// Start--Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".projects_list");
    const projects = document.querySelectorAll(".project_item");
    const prevButton = document.querySelector(".carousel_button.prev");
    const nextButton = document.querySelector(".carousel_button.next");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate the translateX value
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
// End--Carousel


// Start--Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menus = document.querySelector(".menus");

    toggleButton.addEventListener("click", () => {
        menus.classList.toggle("open");
    });
});
// End--Mobile Menu