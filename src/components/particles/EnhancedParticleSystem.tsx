import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  originalX: number;
  originalY: number;
}

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  mix-blend-mode: screen;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/particlebackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const colors = ['#00f2fe', '#4facfe', '#7367f0', '#cf3ef1', '#ff5858'];

const EnhancedParticleSystem: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOrganized, setIsOrganized] = useState(false);

  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000); // Reduced particle count
    const newParticles: Particle[] = [];
    const gridSize = Math.sqrt(particleCount);
    const spacing = Math.min(canvas.width, canvas.height) / gridSize;

    for (let i = 0; i < particleCount; i++) {
      const randomX = Math.random() * canvas.width;
      const randomY = Math.random() * canvas.height;
      
      const col = i % Math.floor(gridSize);
      const row = Math.floor(i / gridSize);
      const targetX = (col + 1) * spacing;
      const targetY = (row + 1) * spacing;

      newParticles.push({
        x: randomX,
        y: randomY,
        vx: (Math.random() - 0.5) * 0.2, // Reduced initial velocity by 90%
        vy: (Math.random() - 0.5) * 0.2, // Reduced initial velocity by 90%
        targetX,
        targetY,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        originalX: randomX,
        originalY: randomY
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update particle position with reduced speed
        particle.x += particle.vx * 0.1; // Further reduced speed
        particle.y += particle.vy * 0.1; // Further reduced speed

        // Bounce off edges with reduced velocity
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8; // Reduced bounce velocity
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8; // Reduced bounce velocity
        }

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections with increased visibility
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles]);

  return (
    <>
      <Container />
      <Canvas ref={canvasRef} className={className} />
    </>
  );
};

export default EnhancedParticleSystem;