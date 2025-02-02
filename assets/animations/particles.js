const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const particleCount = 100;
const colors = ['#1b75b8', '#598cc0'];
const statusDiv = document.getElementById('status');

// Set canvas size
function resizeCanvas() {
    canvas.width = 800;
    canvas.height = 600;
}
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(27, 117, 184, ${1 - distance / 100})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function render() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    drawLines();
}

let recording = false;
let gif = null;

document.getElementById('recordButton').addEventListener('click', function() {
    if (recording) return;
    
    recording = true;
    this.disabled = true;
    statusDiv.textContent = 'Recording... Please wait';

    gif = new GIF({
        workers: 2,
        quality: 10,
        width: canvas.width,
        height: canvas.height,
        workerScript: 'https://unpkg.com/gif.js-upgrade/dist/gif.worker.js'
    });

    let frames = 0;
    const captureFrame = () => {
        if (frames < 50) {  // 50 frames = ~2.5 seconds
            render();
            gif.addFrame(canvas, {copy: true, delay: 50});
            frames++;
            requestAnimationFrame(captureFrame);
        } else {
            statusDiv.textContent = 'Processing GIF...';
            gif.on('finished', function(blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'lucem-particles.gif';
                a.click();
                
                recording = false;
                document.getElementById('recordButton').disabled = false;
                statusDiv.textContent = 'GIF saved!';
                
                setTimeout(() => {
                    statusDiv.textContent = '';
                }, 2000);
            });
            gif.render();
        }
    };
    
    captureFrame();
});

function animate() {
    if (!recording) {
        render();
    }
    requestAnimationFrame(animate);
}

animate();