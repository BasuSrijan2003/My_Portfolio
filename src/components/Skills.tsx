import { useState, useEffect, useRef, useCallback } from "react";

// ── Types ──
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: SkillLevel;
}

// ── Data ──
const levelGlow: Record<
  SkillLevel,
  { dots: number; color: string; intensity: string }
> = {
  Beginner: {
    dots: 1,
    color: "rgba(148,163,184,0.8)",
    intensity: "0 0 6px rgba(148,163,184,0.5)",
  },
  Intermediate: {
    dots: 2,
    color: "rgba(251,191,36,0.9)",
    intensity: "0 0 8px rgba(251,191,36,0.6)",
  },
  Advanced: {
    dots: 3,
    color: "rgba(96,165,250,0.95)",
    intensity: "0 0 10px rgba(96,165,250,0.7)",
  },
  Expert: {
    dots: 4,
    color: "rgba(52,211,153,1)",
    intensity: "0 0 14px rgba(52,211,153,0.8), 0 0 28px rgba(52,211,153,0.3)",
  },
};

const allSkills: Skill[] = [
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    category: "languages",
    level: "Expert",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    category: "languages",
    level: "Expert",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    category: "languages",
    level: "Advanced",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    category: "frontend",
    level: "Expert",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    category: "frontend",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    category: "frontend",
    level: "Expert",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
    category: "frontend",
    level: "Expert",
  },
  {
    name: "React Router",
    icon: "https://cdn.simpleicons.org/reactrouter/CA4245",
    category: "frontend",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    category: "backend",
    level: "Expert",
  },
  {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express/white",
    category: "backend",
    level: "Advanced",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
    category: "backend",
    level: "Advanced",
  },
  {
    name: "Django",
    icon: "https://cdn.simpleicons.org/django/white",
    category: "backend",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
    category: "database",
    level: "Advanced",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    category: "database",
    level: "Advanced",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    category: "database",
    level: "Intermediate",
  },
  {
    name: "DynamoDB",
    icon: "https://cdn.simpleicons.org/amazondynamodb/4053D6",
    category: "database",
    level: "Intermediate",
  },
  {
    name: "NeonDB",
    icon: "https://cdn.simpleicons.org/neon/00E599",
    category: "database",
    level: "Intermediate",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/white",
    category: "devops",
    level: "Intermediate",
  },
  {
    name: "Netlify",
    icon: "https://cdn.simpleicons.org/netlify/00C7B7",
    category: "devops",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    category: "devops",
    level: "Expert",
  },
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
    category: "devops",
    level: "Intermediate",
  },
  {
    name: "REST API",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
    category: "api",
    level: "Expert",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.simpleicons.org/graphql/E10098",
    category: "api",
    level: "Intermediate",
  },
  {
    name: "JWT Auth",
    icon: "https://cdn.simpleicons.org/jsonwebtokens/white",
    category: "api",
    level: "Advanced",
  },
  {
    name: "OAuth 2.0",
    icon: "https://cdn.simpleicons.org/auth0/EB5424",
    category: "api",
    level: "Intermediate",
  },
  {
    name: "WebSockets",
    icon: "https://cdn.simpleicons.org/socketdotio/white",
    category: "api",
    level: "Intermediate",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    category: "design",
    level: "Intermediate",
  },
  {
    name: "Canva",
    icon: "https://cdn.simpleicons.org/canva/00C4CC",
    category: "design",
    level: "Advanced",
  },
  {
    name: "Adobe Premiere",
    icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF",
    category: "design",
    level: "Intermediate",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF",
    category: "design",
    level: "Beginner",
  },
];

const categoryMeta: { key: string; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "devops", label: "Cloud & DevOps" },
  { key: "api", label: "API & Security" },
  { key: "design", label: "Design Tools" },
];

// ── Dot Grid Canvas ──
function DotGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.008;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const gap = 32;
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          const dist =
            Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7);
          const alpha = 0.06 + dist * 0.04;
          ctx.fillStyle = `rgba(100, 200, 220, ${Math.max(0.02, alpha)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ── Proficiency Dot with Glow Line ──
function ProficiencyDot({ level }: { level: SkillLevel }) {
  const { color, intensity } = levelGlow[level];
  const lineWidth =
    level === "Expert"
      ? "70%"
      : level === "Advanced"
        ? "55%"
        : level === "Intermediate"
          ? "35%"
          : "18%";

  return (
    <div className="flex items-center gap-2 mt-1.5">
      {/* Glowing dot */}
      <div
        className="w-2 h-2 rounded-full animate-pulse shrink-0"
        style={{ backgroundColor: color, boxShadow: intensity }}
      />
      {/* Glow line track */}
      <div
        className="relative h-[2px] flex-1 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        {/* Static fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: lineWidth,
            background: `linear-gradient(90deg, ${color}, transparent)`,
          }}
        />
        {/* Moving glow */}
        <div
          className="absolute inset-y-0 w-6 rounded-full"
          style={{
            background: `radial-gradient(ellipse, ${color} 0%, transparent 70%)`,
            filter: `blur(2px)`,
          }}
        />
      </div>
    </div>
  );
}

// ── Magnetic Skill Pill ──
function SkillPill({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.15;
    const dy = (e.clientY - cy) * 0.15;
    setOffset({ x: dx, y: dy });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-default"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition:
          offset.x === 0
            ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
            : "transform 0.1s ease-out",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{
          background: `radial-gradient(circle, ${levelGlow[skill.level].color} 0%, transparent 70%)`,
        }}
      />
      <div className="relative bg-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-xl px-3.5 py-2.5 group-hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
            <img
              src={skill.icon}
              alt={`${skill.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium text-gray-200">
            {skill.name}
          </span>
        </div>
        <ProficiencyDot level={skill.level} />
      </div>
    </div>
  );
}

// ── Category Card ──
function CategoryCard({
  category,
  skills,
}: {
  category: { key: string; label: string };
  skills: Skill[];
}) {
  return (
    <div className="relative group">
      {/* Glass card */}
      <div className="relative rounded-2xl p-5 border border-gray-800 bg-gray-900/50 backdrop-blur-xl overflow-hidden h-full">
        {/* Subtle corner glow */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />

        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 font-display">
          {category.label}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Legend ──
function Legend() {
  const levels: SkillLevel[] = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-10">
      {levels.map((level) => (
        <div key={level} className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: levelGlow[level].color,
              boxShadow: levelGlow[level].intensity,
            }}
          />
          <span className="text-xs text-gray-400 font-body">{level}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main Section ──
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white overflow-hidden py-24"
    >
      {/* Dot grid */}
      <DotGridCanvas />

      {/* Aurora blobs (using solid colors for Tailwind compatibility) */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "#06b6d4" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "#a855f7" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "#14b8a6" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-cyan-400">Skills</span>
            <span className="text-white"> & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Technologies refined through real-world projects and continuous
            learning.
          </p>
          <div className="w-16 h-0.5 bg-cyan-500/60 mx-auto mt-6 rounded-full" />
        </div>

        {/* Legend */}
        <Legend />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categoryMeta.map((cat) => {
            const skills = allSkills.filter((s) => s.category === cat.key);
            return (
              <CategoryCard key={cat.key} category={cat} skills={skills} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
