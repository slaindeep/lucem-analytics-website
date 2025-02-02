class CosmicSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.galaxies = new Map();
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.currentSection = 'hero';
        
        // Brand colors
        this.colors = {
            primary: '#1b75b8',
            secondary: '#598cc0',
            background: '#000000',
            accent: '#001F3F'
        };
        
        this.init();
    }
    
    init() {
        this.resize();
        this.setupEventListeners();
        this.createServiceGalaxies();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.updateGalaxyPositions();
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    createServiceGalaxies() {
        const services = [
            { 
                name: 'Power BI',
                type: 'dashboard',
                patterns: ['grid', 'chart', 'dashboard']
            },
            {
                name: 'Power Apps',
                type: 'apps',
                patterns: ['mobile', 'tablet', 'interface']
            },
            {
                name: 'Data Analytics',
                type: 'analytics',
                patterns: ['graph', 'scatter', 'trend']
            },
            {
                name: 'Process Automation',
                type: 'automation',
                patterns: ['flow', 'cycle', 'system']
            },
            {
                name: 'Data Visualization',
                type: 'visualization',
                patterns: ['chart', 'plot', 'diagram']
            }
        ];
        
        services.forEach((service, index) => {
            this.galaxies.set(service.name, new ServiceGalaxy(
                service.type,
                this.calculateGalaxyPosition(index, services.length),
                service.patterns,
                this.colors
            ));
        });
    }
    
    calculateGalaxyPosition(index, total) {
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.3;
        const angle = (index / total) * Math.PI * 2;
        return {
            x: this.canvas.width/2 + Math.cos(angle) * radius,
            y: this.canvas.height/2 + Math.sin(angle) * radius
        };
    }
    
    updateGalaxyPositions() {
        let index = 0;
        this.galaxies.forEach(galaxy => {
            const position = this.calculateGalaxyPosition(index, this.galaxies.size);
            galaxy.updatePosition(position.x, position.y);
            index++;
        });
    }
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }
    
    handleScroll() {
        // Update current section based on scroll position
        // This will be implemented when we add scroll-based transitions
    }
    
    animate() {
        this.ctx.fillStyle = this.colors.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw all galaxies
        this.galaxies.forEach(galaxy => {
            galaxy.update(this.mouse);
            galaxy.draw(this.ctx);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

class ServiceGalaxy {
    constructor(type, position, patterns, colors) {
        this.type = type;
        this.position = position;
        this.patterns = patterns;
        this.colors = colors;
        this.particles = [];
        this.currentPattern = 'chaos';
        this.transitionProgress = 0;
        
        this.createParticles();
    }
    
    createParticles() {
        const particleCount = 200;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(
                this.position.x,
                this.position.y,
                this.colors.primary
            ));
        }
    }
    
    updatePosition(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.particles.forEach(particle => {
            particle.updateBasePosition(x, y);
        });
    }
    
    update(mouse) {
        const distanceToMouse = Math.hypot(
            mouse.x - this.position.x,
            mouse.y - this.position.y
        );
        
        if (distanceToMouse < 200) {
            this.transitionProgress = Math.min(1, this.transitionProgress + 0.02);
        } else {
            this.transitionProgress = Math.max(0, this.transitionProgress - 0.01);
        }
        
        this.particles.forEach(particle => {
            particle.update(this.transitionProgress, this.currentPattern);
        });
    }
    
    draw(ctx) {
        // Draw particles
        this.particles.forEach(particle => {
            particle.draw(ctx);
        });
        
        // Draw galaxy name
        ctx.font = 'bold 20px Montserrat';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(this.type, this.position.x, this.position.y + 100);
    }
}

class Particle {
    constructor(baseX, baseY, color) {
        this.baseX = baseX;
        this.baseY = baseY;
        this.x = baseX + (Math.random() - 0.5) * 200;
        this.y = baseY + (Math.random() - 0.5) * 200;
        this.size = Math.random() * 2 + 1;
        this.color = color;
        this.targetX = baseX;
        this.targetY = baseY;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
    }
    
    updateBasePosition(x, y) {
        this.baseX = x;
        this.baseY = y;
    }
    
    update(transitionProgress, pattern) {
        if (transitionProgress === 0) {
            // Chaotic movement
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            
            // Boundary checking
            const distance = Math.hypot(this.x - this.baseX, this.y - this.baseY);
            if (distance > 100) {
                const angle = Math.atan2(this.y - this.baseY, this.x - this.baseX);
                this.x = this.baseX + Math.cos(angle) * 100;
                this.y = this.baseY + Math.sin(angle) * 100;
                this.velocity.x *= -0.5;
                this.velocity.y *= -0.5;
            }
        } else {
            // Pattern-based movement
            const angle = Math.atan2(this.y - this.baseY, this.x - this.baseX);
            const targetDistance = 50 + Math.sin(angle * 3) * 20;
            this.targetX = this.baseX + Math.cos(angle) * targetDistance;
            this.targetY = this.baseY + Math.sin(angle) * targetDistance;
            
            this.x += (this.targetX - this.x) * 0.1;
            this.y += (this.targetY - this.y) * 0.1;
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Export for use
window.CosmicSystem = CosmicSystem;