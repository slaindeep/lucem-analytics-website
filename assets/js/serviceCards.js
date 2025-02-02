class ServiceCards {
    constructor(particleSystem) {
        this.particleSystem = particleSystem;
        this.cards = document.querySelectorAll('.service-card');
        this.initializeCards();
    }

    initializeCards() {
        this.cards.forEach(card => {
            // Create individual particle system for each card
            const canvas = document.createElement('canvas');
            canvas.classList.add('service-particles');
            card.appendChild(canvas);
            
            const miniSystem = new ParticleSystem(canvas, 30); // Smaller particle count for cards
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                const shape = card.dataset.shape;
                this.transformParticles(miniSystem, shape);
                card.classList.add('active');
            });

            card.addEventListener('mouseleave', () => {
                miniSystem.resetToDefault();
                card.classList.remove('active');
            });
        });
    }

    transformParticles(system, shape) {
        const canvas = system.canvas;
        const width = canvas.width;
        const height = canvas.height;

        let targetPoints;
        switch(shape) {
            case 'dashboard':
                targetPoints = Shapes.barChart(width, height);
                break;
            case 'analytics':
                targetPoints = Shapes.scatterPlot(width, height);
                break;
            case 'automation':
                targetPoints = Shapes.pieChart(width, height);
                break;
            case 'apps':
                targetPoints = Shapes.logo(width, height);
                break;
            default:
                targetPoints = Shapes.logo(width, height);
        }

        system.transformToShape(targetPoints);
    }
}