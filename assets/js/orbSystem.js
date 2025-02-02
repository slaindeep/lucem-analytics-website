class OrbSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.orbs = [];
    this.mouse = { x: null, y: null };
    
    this.resize();
    this.init();
    this.setupEventListeners();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const orbData = [
      { id: 'analytics', color: '#1b75b8' },
      { id: 'powerbi', color: '#598cc0' },
      { id: 'automation', color: '#3390d0' }
    ];

    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const radius = Math.min(this.canvas.width, this.canvas.height) * 0.2;

    orbData.forEach((orb, i) => {
      const angle = (i * 2 * Math.PI) / orbData.length;
      this.orbs.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        size: 50,
        color: orb.color,
        id: orb.id,
        originalX: centerX + Math.cos(angle) * radius,
        originalY: centerY + Math.sin(angle) * radius
      });
    });
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resize());
    
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
  }

  drawOrb(orb) {
    this.ctx.beginPath();
    this.ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
    
    const gradient = this.ctx.createRadialGradient(
      orb.x, orb.y, 0,
      orb.x, orb.y, orb.size
    );
    
    gradient.addColorStop(0, orb.color);
    gradient.addColorStop(1, 'transparent');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let orb of this.orbs) {
      if (this.mouse.x && this.mouse.y) {
        const dx = this.mouse.x - orb.x;
        const dy = this.mouse.y - orb.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          orb.x = orb.x - Math.cos(angle) * 2;
          orb.y = orb.y - Math.sin(angle) * 2;
        } else {
          orb.x += (orb.originalX - orb.x) * 0.05;
          orb.y += (orb.originalY - orb.y) * 0.05;
        }
      }

      this.drawOrb(orb);
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize orb system
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('orbCanvas');
  new OrbSystem(canvas);
});