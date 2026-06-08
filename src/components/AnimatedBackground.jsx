import { useEffect, useRef } from "react";

const STAR_COUNT = 180;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let animationId = 0;
    let shootingStar = null;
    let nextShootingStarAt = performance.now() + 4000;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.4 + 0.4,
      twinkleSpeed: Math.random() * 0.003 + 0.001,
      twinkleOffset: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.85 ? 180 : 0,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnShootingStar = (time) => {
      shootingStar = {
        x: Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
        y: Math.random() * canvas.height * 0.35,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 1,
        bornAt: time,
      };
      nextShootingStarAt = time + Math.random() * 8000 + 6000;
    };

    const drawShootingStar = (time) => {
      if (!shootingStar) {
        if (time >= nextShootingStarAt) spawnShootingStar(time);
        return;
      }

      const age = time - shootingStar.bornAt;
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
      shootingStar.opacity = Math.max(0, 1 - age / 900);

      const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
      const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

      const gradient = ctx.createLinearGradient(
        tailX,
        tailY,
        shootingStar.x,
        shootingStar.y
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(0.6, `rgba(130, 232, 235, ${shootingStar.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(shootingStar.x, shootingStar.y);
      ctx.stroke();

      if (shootingStar.opacity <= 0) {
        shootingStar = null;
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle =
          0.35 +
          0.65 * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset));
        const color =
          star.hue === 180
            ? `rgba(130, 232, 235, ${twinkle})`
            : `rgba(255, 255, 255, ${twinkle})`;

        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = color;
        ctx.fill();
      });

      drawShootingStar(time);
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__base" />
      <div className="animated-bg__mesh" />
      <div className="animated-bg__aurora animated-bg__aurora--1" />
      <div className="animated-bg__aurora animated-bg__aurora--2" />
      <div className="animated-bg__aurora animated-bg__aurora--3" />
      <div className="animated-bg__aurora animated-bg__aurora--4" />

      <div className="animated-bg__particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="animated-bg__particle" style={{ "--i": i }} />
        ))}
      </div>

      <canvas ref={canvasRef} className="animated-bg__canvas" />
    </div>
  );
};

export default AnimatedBackground;
