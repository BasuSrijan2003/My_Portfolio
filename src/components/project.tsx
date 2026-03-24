import React, { useRef, useState, useCallback, memo } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
  github?: string;
  demo?: string;
  color: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Life Expectancy Intelligence Dashboard",
    description:
      "End-to-end ML pipeline on WHO health data featuring a Random Forest Regressor and an interactive 5-tab dashboard.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Plotly"],
    category: "Machine Learning",
    features: [
      "Trained model achieving R² = 96.91% and MAE = ±1.05 years",
      "Interactive what-if policy simulator with marginal impact breakdown",
      "Plain-English data query engine built on pure Pandas",
      "Deployed on Streamlit Cloud with cold-start auto-training",
    ],
    github: "https://github.com/BasuSrijan2003/life-expectancy-dashboard",
    demo: "https://life-expectancy-prediction-2026.streamlit.app",
    color: "from-emerald-400 to-cyan-500",
    accent: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: 2,
    title: "Resumware — AI ATS Builder",
    description:
      "Full-stack AI-powered resume builder generating ATS-optimized resumes using LaTeX templates and the Gemini 1.5 API.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    category: "Full-Stack AI",
    features: [
      "AI-powered content generation via Gemini 1.5 Flash API",
      "LaTeX-based professional PDF export",
      "REST APIs designed with Node.js, Express, and TypeScript",
      "Git-based CI/CD deployment on Netlify and Vercel",
    ],
    github: "https://github.com/BasuSrijan2003",
    demo: "https://resumware.netlify.app",
    color: "from-purple-500 to-pink-500",
    accent: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: 3,
    title: "Callsure.ai",
    description:
      "AI-powered healthcare platform for automated call management and secure patient data handling.",
    technologies: ["FastAPI", "Python", "React", "DynamoDB", "AWS"],
    category: "AI / Healthcare",
    features: [
      "Automated AI-driven call handling for healthcare facilities",
      "Healthcare appointment scheduling integration",
      "Secure, HIPAA-compliant patient data management",
      "Real-time call analytics and AWS DynamoDB integration",
    ],
    color: "from-blue-500 to-indigo-500",
    accent: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 4,
    title: "Daily Finance Collection App",
    description:
      "Django-based finance tracking application designed for local small businesses to manage daily collections.",
    technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
    features: [
      "Daily transaction recording and tracking",
      "Collection summary and financial reports",
      "Successfully adopted by local small businesses",
      "Intuitive dashboard for quick daily overviews",
    ],
    color: "from-orange-400 to-red-500",
    accent: "rgba(251, 146, 60, 0.15)",
  },
];

const GithubIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-7 0C6.2 2.75 5.1 3.1 5.1 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.6 12c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
));

const ExternalLinkIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
));

// Optimized Spotlight Card Component
const SpotlightCard = memo(({ project }: { project: Project }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl overflow-hidden group transition-all duration-700 hover:scale-[1.02] hover:border-white/20"
      style={{
        transform: isHovered
          ? "translateY(-8px) rotateX(2deg)"
          : "translateY(0) rotateX(0)",
        boxShadow: isHovered
          ? `0 20px 60px -15px ${project.accent}, 0 0 0 1px rgba(255,255,255,0.1)`
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Animated Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* Glowing Top Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          boxShadow: `0 0 20px ${project.accent}`,
        }}
      />

      {/* Animated Corner Accents */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
      />
      <div
        className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${project.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
      />

      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-3">
            <span
              className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent relative`}
            >
              <span
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 blur-sm rounded-full`}
              />
              <span className="relative">{project.category}</span>
            </span>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <GithubIcon />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:-rotate-12"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        {/* Title with Gradient on Hover */}
        <h3
          className={`text-3xl font-black text-white mb-4 tracking-tight transition-all duration-500 group-hover:bg-gradient-to-r group-hover:${project.color} group-hover:bg-clip-text group-hover:text-transparent`}
        >
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features with Animated Checkmarks */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start text-sm text-gray-300 group/item opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div
                  className={`w-5 h-5 mr-3 mt-0.5 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="leading-snug group-hover/item:text-white transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack with Hover Effects */}
        <div className="pt-6 border-t border-white/10 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
});

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">
              Featured Work
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="inline-block animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Architecting{" "}
            <span className="text-cyan-400 font-semibold">
              scalable backends
            </span>
            , training{" "}
            <span className="text-purple-400 font-semibold">
              intelligent models
            </span>
            , and building{" "}
            <span className="text-pink-400 font-semibold">
              seamless applications
            </span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <SpotlightCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -30px) scale(1.1); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(0.95); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-scan { animation: scan 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </section>
  );
}
