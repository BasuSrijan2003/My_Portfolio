import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  // Database,
  Palette,
  Settings,
  Zap,
  ChevronRight,
  Trophy,
  Target,
  Cpu,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

// Modern Skill Card Component with tech theme
interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    category: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    description: string;
    projects?: number;
  };
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    Beginner: "from-gray-600 to-gray-700",
    Intermediate: "from-yellow-500 to-orange-500",
    Advanced: "from-blue-500 to-purple-500",
    Expert: "from-green-500 to-emerald-500",
  };

  const levelWidths = {
    Beginner: "w-1/4",
    Intermediate: "w-2/4",
    Advanced: "w-3/4",
    Expert: "w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />

      {/* Main card */}
      <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 group-hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${
                  levelColors[skill.level]
                } text-white`}
              >
                {skill.level}
              </span>
            </div>
          </div>

          {/* Project count */}
          {skill.projects && (
            <div className="text-right">
              <div className="text-sm text-gray-400">Projects</div>
              <div className="text-xl font-bold text-white">
                {skill.projects}
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
          {skill.description}
        </p>

        {/* Skill level bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Proficiency</span>
            <span className="text-gray-400">{skill.level}</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <motion.div
              className={`h-2 bg-gradient-to-r ${
                levelColors[skill.level]
              } rounded-full ${levelWidths[skill.level]}`}
              initial={{ width: 0 }}
              animate={{
                width:
                  levelWidths[skill.level]
                    .replace("w-", "")
                    .replace("/4", "") === "1"
                    ? "25%"
                    : levelWidths[skill.level]
                        .replace("w-", "")
                        .replace("/4", "") === "2"
                    ? "50%"
                    : levelWidths[skill.level]
                        .replace("w-", "")
                        .replace("/4", "") === "3"
                    ? "75%"
                    : "100%",
              }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>

        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute top-6 right-6"
        >
          <ChevronRight className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Enhanced Category Filter Component
const CategoryFilter = ({ categories, activeFilter, setActiveFilter }: any) => {
  const categoryIcons = {
    all: Globe,
    frontend: Palette,
    backend: Server,
    mobile: Smartphone,
    tools: Settings,
    ai: Cpu,
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category: any) => {
        const Icon =
          categoryIcons[category.key as keyof typeof categoryIcons] || Settings;
        return (
          <motion.button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
              activeFilter === category.key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-700"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.label}</span>
            <span className="text-xs opacity-75">({category.count})</span>

            {activeFilter === category.key && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default function TechSkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enhanced skills data with tech focus
  const skills = [
    // Frontend
    {
      name: "React",
      icon: "⚛️",
      category: "frontend",
      level: "Expert" as const,
      description:
        "Building complex UIs with hooks, context, and modern patterns",
      projects: 15,
    },
    {
      name: "Next.js",
      icon: "▲",
      category: "frontend",
      level: "Advanced" as const,
      description: "Full-stack React framework with SSR and API routes",
      projects: 8,
    },
    {
      name: "TypeScript",
      icon: "🔷",
      category: "frontend",
      level: "Advanced" as const,
      description: "Type-safe JavaScript development with advanced patterns",
      projects: 12,
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      category: "frontend",
      level: "Expert" as const,
      description: "Utility-first CSS framework for rapid UI development",
      projects: 20,
    },

    // Backend
    {
      name: "Node.js",
      icon: "🟢",
      category: "backend",
      level: "Advanced" as const,
      description: "Server-side JavaScript runtime for scalable applications",
      projects: 10,
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "backend",
      level: "Advanced" as const,
      description: "NoSQL database design and optimization",
      projects: 8,
    },
    {
      name: "Python",
      icon: "🐍",
      category: "backend",
      level: "Intermediate" as const,
      description: "Backend development and data processing",
      projects: 6,
    },
    {
      name: "Express.js",
      icon: "🚂",
      category: "backend",
      level: "Advanced" as const,
      description: "Fast, minimal web framework for Node.js",
      projects: 9,
    },

    // Mobile
    {
      name: "React Native",
      icon: "📱",
      category: "mobile",
      level: "Intermediate" as const,
      description: "Cross-platform mobile app development",
      projects: 3,
    },
    {
      name: "Flutter",
      icon: "🦋",
      category: "mobile",
      level: "Beginner" as const,
      description: "Google's UI toolkit for mobile development",
      projects: 2,
    },

    // Tools
    {
      name: "Git",
      icon: "🔄",
      category: "tools",
      level: "Expert" as const,
      description: "Version control and collaborative development",
      projects: 25,
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "tools",
      level: "Intermediate" as const,
      description: "Containerization and deployment automation",
      projects: 5,
    },
    {
      name: "AWS",
      icon: "☁️",
      category: "tools",
      level: "Intermediate" as const,
      description: "Cloud infrastructure and deployment services",
      projects: 4,
    },

    // AI/ML
    {
      name: "TensorFlow",
      icon: "🤖",
      category: "ai",
      level: "Beginner" as const,
      description: "Machine learning framework for AI applications",
      projects: 2,
    },
    {
      name: "OpenAI API",
      icon: "🧠",
      category: "ai",
      level: "Intermediate" as const,
      description: "Integrating AI capabilities into applications",
      projects: 3,
    },
  ];

  const categories = [
    { key: "all", label: "All Skills", count: skills.length },
    {
      key: "frontend",
      label: "Frontend",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      key: "backend",
      label: "Backend",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      key: "mobile",
      label: "Mobile",
      count: skills.filter((s) => s.category === "mobile").length,
    },
    {
      key: "tools",
      label: "DevOps",
      count: skills.filter((s) => s.category === "tools").length,
    },
    {
      key: "ai",
      label: "AI/ML",
      count: skills.filter((s) => s.category === "ai").length,
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const totalProjects = "10";

  const expertSkills = "Intermediate";

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Tech-themed background */}
      <div className="absolute inset-0">
        {/* Circuit board pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1f2937 1px, transparent 1px),
              linear-gradient(180deg, #1f2937 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 text-6xl opacity-5 animate-pulse">
          ⚛️
        </div>
        <div className="absolute top-40 right-32 text-4xl opacity-5 animate-bounce">
          🔧
        </div>
        <div className="absolute bottom-32 left-40 text-5xl opacity-5">💻</div>
        <div className="absolute bottom-20 right-20 text-4xl opacity-5 animate-pulse">
          🚀
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-400">Technical Arsenal</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
            <br />
            <span className="text-white">Mastery</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies and frameworks,
            refined through real-world projects and continuous learning.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">
              {expertSkills}
            </div>
            <div className="text-gray-400">Expert Level</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">
              {totalProjects}+
            </div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl">
            <Code className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">
              {skills.length}
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
            <Cpu className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's leverage these technologies to create innovative solutions
              that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
