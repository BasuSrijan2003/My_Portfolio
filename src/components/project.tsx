import React, { useState, useEffect, useRef } from "react";

// Custom Sparkles Effect
type Sparkle = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

function Sparkles({ children }: React.PropsWithChildren<{}>) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      }));
    };
    setSparkles(generateSparkles());
  }, []);

  return (
    <div className="relative inline-block">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white opacity-70 animate-pulse"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        />
      ))}
      {children}
    </div>
  );
}

// Project Data Type
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  icon: string;
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  const getGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case "web application":
        return "from-purple-600 via-blue-600 to-cyan-500";
      case "mobile app":
        return "from-orange-500 via-red-500 to-pink-600";
      case "full-stack":
        return "from-green-500 via-teal-500 to-blue-500";
      case "frontend":
        return "from-yellow-500 via-orange-500 to-red-500";
      case "backend":
        return "from-indigo-500 via-purple-500 to-pink-500";
      default:
        return "from-blue-500 via-purple-500 to-pink-500";
    }
  };

  const getIcon = (iconName: string) => {
    const icons = {
      web: "🌐",
      mobile: "📱",
      code: "💻",
      rocket: "🚀",
      database: "🗄️",
      api: "⚡",
      ai: "🤖",
      game: "🎮",
    };
    return icons[iconName as keyof typeof icons] || "🚀";
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "in progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "planning":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div
      className={`relative flex-shrink-0 w-96 h-[500px] mx-6 cursor-pointer transition-all duration-700 transform ${
        isActive
          ? "scale-110 z-20"
          : "scale-95 opacity-70 hover:scale-100 hover:opacity-90"
      }`}
      onClick={onClick}
      style={{
        perspective: "1000px",
      }}
    >
      {/* 3D Card Container */}
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isActive ? "rotate-y-12" : "hover:rotate-y-6"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isActive
            ? "rotateY(12deg) rotateX(5deg)"
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* Card Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div
            className={`relative w-full h-full rounded-3xl bg-gradient-to-br ${getGradient(
              project.category
            )} p-1 shadow-2xl overflow-hidden`}
          >
            {/* Inner card */}
            <div className="relative w-full h-full bg-black/80 backdrop-blur-xl rounded-3xl p-8 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${getGradient(
                        project.category
                      )} shadow-lg`}
                    >
                      {getIcon(project.icon)}
                    </div>
                    <div className="text-right">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getGradient(
                          project.category
                        )} text-white`}
                      >
                        {project.category.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-medium mb-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div
                      className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-lg bg-white/10 text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-lg bg-white/10 text-gray-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 overflow-y-auto">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradient(
                            project.category
                          )} mt-2 mr-3 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 italic">
                        +{project.features.length - 3} more features...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Click to explore
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      )}
                      {project.demo && (
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      )}
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${getGradient(
                          project.category
                        )} animate-pulse`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        {isActive && (
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${getGradient(
              project.category
            )} opacity-20 blur-xl -z-10`}
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "IIT IIM RESUME Builder",
      description: "Full-stack resume building platform with AI assistance",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "TailwindCSS",
      ],
      category: "Full-Stack",
      status: "Completed",
      icon: "web",
      features: [
        "AI-powered resume optimization",
        "Real-time collaboration",
        "Multiple export formats",
        "Template customization",
        "Analytics dashboard",
        "User authentication system",
      ],
      github: "https://github.com/username/resume-builder",
      demo: "https://iitresume.com",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with payment integration",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "NextAuth"],
      category: "Web Application",
      status: "In Progress",
      icon: "web",
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Order tracking system",
        "Admin dashboard",
        "Inventory management",
        "Customer reviews",
      ],
      github: "https://github.com/username/ecommerce",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      category: "Mobile App",
      status: "Completed",
      icon: "mobile",
      features: [
        "Real-time synchronization",
        "Team collaboration",
        "Progress tracking",
        "Push notifications",
        "Offline functionality",
        "Custom workflows",
      ],
      demo: "https://taskapp-demo.com",
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker"],
      category: "Backend",
      status: "Planning",
      icon: "ai",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Integration APIs",
        "Learning capabilities",
        "Custom training",
      ],
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
              scrollPosition + scrollAmount
            );

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Sparkles>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </Sparkles>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio through this interactive 3D experience
            showcasing various projects and technologies
          </p>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-8 px-16"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Active Project Details */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">
                {projects[activeIndex]?.title}
              </h3>
              <div className="flex gap-4">
                {projects[activeIndex]?.github && (
                  <a
                    href={projects[activeIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {projects[activeIndex]?.demo && (
                  <a
                    href={projects[activeIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  All Features:
                </h4>
                <ul className="space-y-2">
                  {projects[activeIndex]?.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="text-purple-400 mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex]?.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
