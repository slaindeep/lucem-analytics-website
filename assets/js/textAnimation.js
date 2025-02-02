class TextAnimator {
    constructor() {
        this.companyName = document.querySelector('.company-name');
        this.tagline = document.querySelector('.tagline');
        this.subtitle = document.querySelector('.subtitle');
        
        this.init();
    }

    init() {
        // Initialize GSAP animations
        gsap.from(this.companyName, {
            duration: 2,
            opacity: 0,
            y: -50,
            ease: "power3.out"
        });

        gsap.from(this.tagline, {
            duration: 2,
            opacity: 0,
            y: 50,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(this.subtitle, {
            duration: 2,
            opacity: 0,
            y: 30,
            ease: "power3.out",
            delay: 1
        });
    }
}