const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdown) {
    dropdown.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
}

// Basic smooth scrolling for navigation links (both desktop and dropdown)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Close the dropdown after clicking a link (if it's open)
            if (dropdownContent && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (dropdownContent && dropdown.contains(event.target) === false) {
        dropdownContent.classList.remove('show');
    }
});

// ... existing script ...

const progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const progress = bar.dataset.progress;
        const fill = bar.querySelector('.progress-fill');
        fill.style.width = progress + '%';
    });
}

// Trigger the animation when the about section is in view using Intersection Observer
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(aboutSection); // Animate only once
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

if (aboutSection) {
    observer.observe(aboutSection);
}

// My Projects Pages

function viewMore1(){
    location.href="Projects/web_clones.html"
}

function viewMore3(){
    location.href="Projects/resume_builder.html"
}

function viewMore2(){
    location.href="Projects/chemical_track.html"
}

// Download CV btn

document.getElementById("download-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "aditya_cv.pdf"; // Replace with your file path
    link.download = "aditya_cv.png"; // Desired file name
    link.click();
  });
  