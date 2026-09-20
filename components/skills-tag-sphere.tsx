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

    // Position sphere origin right above and between the character's cupped hands
    const sphereRadius = Math.min(width, height) * 0.32;
    const centerYOffset = height * 0.52;

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

    let rotX = 0.002;
    let rotY = 0.0035;
    let angleX = 0.15;
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
        angleY += deltaX * 0.006;
        angleX -= deltaY * 0.006;
        rotY = deltaX * 0.0025;
        rotX = -deltaY * 0.0025;
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
        angleY += deltaX * 0.006;
        angleX -= deltaY * 0.006;
        rotY = deltaX * 0.0025;
        rotX = -deltaY * 0.0025;
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

      // Dampen rotation speed back to gentle drift
      if (!isDragging) {
        rotX = rotX * 0.96 + 0.001 * 0.04;
        rotY = rotY * 0.96 + 0.003 * 0.04;
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
        const screenX = width / 2 + x1 * sphereRadius * scale;
        const screenY = centerYOffset + y1 * sphereRadius * scale;
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

      // Sort by Z depth (draw furthest first)
      projected.sort((a, b) => a.z - b.z);

      // Render tags with warm studio amber & bone palette (no purple/blue)
      projected.forEach((p) => {
        const fontSize = Math.max(10, Math.min(20, 12.5 * p.scale * (window.devicePixelRatio > 1 ? 1.35 : 1)));
        ctx.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Studio warm lighting: front tags glow copper/amber, middle are champagne bone, back are muted stone
        if (p.z > 0.35) {
          ctx.fillStyle = `rgba(229, 140, 54, ${p.alpha})`; // Radiant Amber-Copper
          ctx.shadowColor = "rgba(229, 140, 54, 0.6)";
          ctx.shadowBlur = 8 * p.scale;
        } else if (p.z > -0.15) {
          ctx.fillStyle = `rgba(245, 239, 235, ${p.alpha * 0.95})`; // Champagne Bone
          ctx.shadowColor = "rgba(245, 239, 235, 0.3)";
          ctx.shadowBlur = 4 * p.scale;
        } else {
          ctx.fillStyle = `rgba(168, 162, 158, ${p.alpha * 0.45})`; // Muted Studio Stone
          ctx.shadowBlur = 0;
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
      className="group relative flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none w-full h-[460px] sm:h-[540px] rounded-2xl border border-white/10 bg-[#0D0F14] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      {/* AI Cartoon Developer Portrait holding the sphere */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ai-developer-holding-globe.png"
        alt="AI Developer Character holding the 3D Rotary Skills Globe"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none select-none scale-105"
      />

      {/* Studio lighting vignette & dark depth mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-[#0A0B0E]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(229,140,54,0.18)_0%,transparent_60%)] pointer-events-none" />

      {/* Glowing energy halo between his cupped hands */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#E58C36]/25 to-transparent blur-3xl pointer-events-none animate-pulse" />

      {/* Top telemetry badge */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#E58C36] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#F5EFEB]">
            AI Developer · Rotary Skill Sphere
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#A8A29E] hidden sm:inline-block bg-black/50 px-2.5 py-1 rounded-full border border-white/5">
          Drag to spin in 3D
        </span>
      </div>

      {/* 3D Canvas rendering the rotary skill globe between his hands */}
      <canvas
        ref={canvasRef}
        className="relative z-10 h-full w-full object-contain"
        aria-label="Interactive 3D Rotary Skill Sphere held by AI Developer"
      />

      {/* Bottom studio status tag */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <span className="font-mono text-[10px] text-[#A8A29E]/80 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
          34 Verified Technical Competencies
        </span>
        <span className="font-mono text-[10px] text-[#E58C36] bg-black/60 px-2.5 py-1 rounded-full border border-[#E58C36]/20 backdrop-blur-sm">
          Active Hologram
        </span>
      </div>
    </div>
  );
}
