import { useEffect, useRef } from "react";

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      const isDark = document.documentElement.classList.contains("dark");

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - (mouseY)) ** 2);
          const maxDist = 200;
          const intensity = Math.max(0, 1 - dist / maxDist);

          ctx.beginPath();
          ctx.arc(x, y, 1 + intensity * 2.5, 0, Math.PI * 2);
          if (isDark) {
            ctx.fillStyle = `rgba(99, 102, 241, ${0.08 + intensity * 0.5})`;
          } else {
            ctx.fillStyle = `rgba(99, 102, 241, ${0.06 + intensity * 0.4})`;
          }
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default GridBackground;
