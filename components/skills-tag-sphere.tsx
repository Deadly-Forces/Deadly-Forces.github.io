"use client";

import { useEffect, useRef, useState } from "react";

interface SkillItem {
  name: string;
  category: "core" | "ai" | "backend" | "systems";
}

const SKILLS: SkillItem[] = [
  { name: "TypeScript", category: "core" },
  { name: "Python", category: "core" },
  { name: "Next.js", category: "core" },
  { name: "React.js", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "DBMS", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Tailwind CSS v4", category: "core" },
  { name: "HTML5", category: "core" },
  { name: "CSS3", category: "core" },
  { name: "Machine Learning", category: "ai" },
  { name: "OpenVINO", category: "ai" },
  { name: "AI Benchmarking", category: "ai" },
  { name: "Vulnerability Scanning", category: "systems" },
  { name: "Linux Administration", category: "systems" },
  { name: "GNU/Linux", category: "systems" },
  { name: "Ubuntu", category: "systems" },
  { name: "BASH Scripting", category: "systems" },
  { name: "Shell Scripting", category: "systems" },
  { name: "PowerShell", category: "systems" },
  { name: "Operating Systems", category: "systems" },
  { name: "Git & GitHub", category: "systems" },
  { name: "Computer Science", category: "core" },
  { name: "Computer Engineering", category: "core" },
  { name: "Trading Strategies", category: "core" },
  { name: "Financial Analysis", category: "core" },
  { name: "Leadership", category: "core" },
  { name: "Marketing Strategy", category: "core" },
  { name: "Copywriting", category: "core" },
];

export function SkillsTagSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const radius = Math.min(width, height) * 0.38;

    // Distribute skills evenly on a 3D sphere using Fibonacci sphere algorithm
    const count = SKILLS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    const tags = SKILLS.map((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      return {
        name: skill.name,
        category: skill.category,
        x: Math.cos(theta) * r,
        y: y,
        z: Math.sin(theta) * r,
      };
    });

    let rotX = 0.003;
    let rotY = 0.004;
    let angleX = 0;
    let angleY = 0;

    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        angleY += deltaX * 0.005;
        angleX -= deltaY * 0.005;
        rotY = deltaX * 0.002;
        rotX = -deltaY * 0.002;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - lastMouseX;
        const deltaY = e.touches[0].clientY - lastMouseY;
        angleY += deltaX * 0.005;
        angleX -= deltaY * 0.005;
        rotY = deltaX * 0.002;
        rotX = -deltaY * 0.002;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
    }

    const render = () => {
      animationId = requestAnimationFrame(render);

      ctx.clearRect(0, 0, width, height);

      // Dampen rotation speed back to base drift
      if (!isDragging) {
        rotX = rotX * 0.96 + 0.0015 * 0.04;
        rotY = rotY * 0.96 + 0.0035 * 0.04;
        angleX += rotX;
        angleY += rotY;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate and project points
      const projected = tags.map((t) => {
        // Rotate around Y
        let x1 = t.x * cosY - t.z * sinY;
        let z1 = t.z * cosY + t.x * sinY;

        // Rotate around X
        let y1 = t.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + t.y * sinX;

        // Perspective scale: d / (d + z)
        const d = 2.4;
        const scale = d / (d + z2);
        const screenX = width / 2 + x1 * radius * scale;
        const screenY = height / 2 + y1 * radius * scale;
        const alpha = Math.max(0.12, (z2 + 1) / 2);

        return {
          name: t.name,
          category: t.category,
          x: screenX,
          y: screenY,
          z: z2,
          scale: scale,
          alpha: alpha,
        };
      });

      // Sort by Z depth (painter's algorithm: draw furthest first)
      projected.sort((a, b) => a.z - b.z);

      // Render tags
      projected.forEach((p) => {
        const fontSize = Math.max(10, Math.min(22, 13 * p.scale * (window.devicePixelRatio > 1 ? 1.4 : 1)));
        ctx.font = `500 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Color coding with blackhole warm highlight on front tags
        if (p.z > 0.3) {
          ctx.fillStyle = `rgba(255, 152, 56, ${p.alpha})`; // Warm Orange Accent for front tags
        } else if (p.z > -0.1) {
          ctx.fillStyle = `rgba(255, 243, 222, ${p.alpha * 0.9})`; // Cream for mid tags
        } else {
          ctx.fillStyle = `rgba(255, 243, 222, ${p.alpha * 0.4})`; // Dim for rear tags
        }

        ctx.fillText(p.name, p.x, p.y);
      });
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none w-full h-[380px] sm:h-[460px] rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#FF9838] animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          Interactive 3D Skill Sphere · Drag to Rotate
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className="h-full w-full object-contain"
        aria-label="Interactive 3D Rotary Skill Sphere"
      />

      <div className="absolute bottom-3 text-center pointer-events-none">
        <span className="font-mono text-[10px] text-white/30">
          Core Languages · AI Systems · Backend Architecture · Cloud
        </span>
      </div>
    </div>
  );
}
