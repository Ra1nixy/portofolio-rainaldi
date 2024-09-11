
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 1200,  // Adjust animation duration in milliseconds
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const screenWidth = window.innerWidth;
    
        // Cek jika lebar layar lebih dari 768px (biasanya dianggap sebagai batas mobile)
        if (screenWidth > 768) {
            if (window.scrollY > 100) {  // Adjust the scroll value as needed
                header.classList.add('blur');
            } else {
                header.classList.remove('blur');
            }
        } else {
            header.classList.remove('blur');  // Hapus blur pada tampilan mobile
        }
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".progress");
    
        const animateProgressBars = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progressValue = progressBar.getAttribute("data-progress");
                    progressBar.style.width = progressValue;
                } else {
                    entry.target.style.width = '0'; // Reset the width when it goes out of view
                }
            });
        };
    
        const observer = new IntersectionObserver(animateProgressBars, {
            threshold: 0.5 // Adjust this value to control when the animation triggers
        });
    
        progressBars.forEach(progressBar => {
            observer.observe(progressBar);
        });
    });
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
// Tambahkan smooth scroll pada halaman
document.documentElement.style.scrollBehavior = 'smooth';    