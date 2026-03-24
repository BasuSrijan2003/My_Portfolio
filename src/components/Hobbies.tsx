import React, { memo, useState, useCallback } from "react";

interface HobbyItem {
  title: string;
  description: string;
  icon: string;
  isFeatured?: boolean;
  color: string;
  accentColor: string;
}

const HOBBIES_DATA: HobbyItem[] = [
  {
    title: "Bike Rider",
    description:
      "Conquering terrains and embracing the thrill of the open road.",
    icon: "🏍️",
    isFeatured: true,
    color: "from-red-400 to-orange-500",
    accentColor: "rgba(248, 113, 113, 0.15)",
  },
  {
    title: "Travelling",
    description:
      "Exploring new destinations and experiencing diverse cultures worldwide.",
    icon: "✈️",
    color: "from-blue-400 to-cyan-500",
    accentColor: "rgba(96, 165, 250, 0.15)",
  },
  {
    title: "Exploring",
    description:
      "Discovering hidden gems and uncharted territories in every journey.",
    icon: "🗺️",
    color: "from-green-400 to-emerald-500",
    accentColor: "rgba(74, 222, 128, 0.15)",
  },
  {
    title: "Vlogger",
    description:
      "Creating engaging video content and sharing experiences with the world.",
    icon: "📹",
    color: "from-purple-400 to-pink-500",
    accentColor: "rgba(192, 132, 252, 0.15)",
  },
  {
    title: "Painting",
    description:
      "Expressing creativity through colors and bringing imagination to life.",
    icon: "🎨",
    color: "from-pink-400 to-rose-500",
    accentColor: "rgba(244, 114, 182, 0.15)",
  },
  {
    title: "Business Ideas",
    description:
      "Developing innovative business concepts and entrepreneurial ventures.",
    icon: "💡",
    color: "from-yellow-400 to-orange-500",
    accentColor: "rgba(250, 204, 21, 0.15)",
  },
  {
    title: "Innovation",
    description:
      "Creating cutting-edge solutions and thinking outside the box.",
    icon: "🚀",
    color: "from-cyan-400 to-blue-500",
    accentColor: "rgba(34, 211, 238, 0.15)",
  },
  {
    title: "Cricket",
    description:
      "Playing and following the gentleman's game with passion and strategy.",
    icon: "🏏",
    color: "from-indigo-400 to-purple-500",
    accentColor: "rgba(129, 140, 248, 0.15)",
  },
  {
    title: "Football",
    description:
      "Enjoying the beautiful game both as a player and enthusiastic fan.",
    icon: "⚽",
    color: "from-green-400 to-teal-500",
    accentColor: "rgba(52, 211, 153, 0.15)",
  },
  {
    title: "Adobe Premiere Pro",
    description:
      "Professional video editing and creating compelling visual content.",
    icon: "🎬",
    color: "from-violet-400 to-purple-500",
    accentColor: "rgba(167, 139, 250, 0.15)",
  },
  {
    title: "Canva",
    description:
      "Designing stunning graphics and visual content for various projects.",
    icon: "🎯",
    color: "from-teal-400 to-cyan-500",
    accentColor: "rgba(45, 212, 191, 0.15)",
  },
];

interface HobbyCardProps {
  hobby: HobbyItem;
  index: number;
}

const HobbyCard = memo(({ hobby, index }: HobbyCardProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div
        className={`relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/20`}
        style={{
          boxShadow: isHovered
            ? `0 20px 60px -15px ${hobby.accentColor}, 0 0 0 1px rgba(255,255,255,0.1)`
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Animated Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
          }}
        />

        {/* Top Gradient Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            boxShadow: `0 0 20px ${hobby.accentColor}`,
          }}
        />

        {/* Corner Accents */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hobby.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
        />

        {/* Content */}
        <div className="relative z-10 h-full p-6 flex flex-col items-center text-center">
          {/* Icon */}
          <div
            className={`text-6xl mb-5 transform transition-transform duration-300 group-hover:scale-110 ${hobby.isFeatured ? "animate-bounce-slow" : ""}`}
          >
            {hobby.icon}
          </div>

          {/* Title */}
          <h3
            className={`text-xl font-black mb-3 transition-all duration-500 ${hobby.isFeatured ? "text-white" : "text-gray-100 group-hover:bg-gradient-to-r group-hover:" + hobby.color + " group-hover:bg-clip-text group-hover:text-transparent"}`}
          >
            {hobby.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
            {hobby.description}
          </p>

          {/* Featured Badge */}
          {hobby.isFeatured && (
            <div
              className={`mt-4 px-3 py-1 rounded-full bg-gradient-to-r ${hobby.color} text-white text-xs font-bold uppercase tracking-wider`}
            >
              Featured
            </div>
          )}

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 group-hover:border-white/40 transition-colors duration-300 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 group-hover:border-white/40 transition-colors duration-300 rounded-br-lg" />
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
});

export default function HobbiesSection() {
  return (
    <section
      id="hobbies-complex"
      className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">
              Beyond The Code
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            My World of{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Interests
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the diverse interests that fuel my{" "}
            <span className="text-cyan-400 font-semibold">creativity</span>,
            shape my{" "}
            <span className="text-purple-400 font-semibold">perspective</span>,
            and drive my{" "}
            <span className="text-pink-400 font-semibold">passion</span>
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {HOBBIES_DATA.map((hobby, index) => (
            <HobbyCard key={hobby.title} hobby={hobby} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-12 border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Gradient Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Follow my adventures and creative journey on social media
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://youtube.com/channel/UCXuhNyqRiQoeNVIh7ZsT3Yw?si=t_mWtOBvMoFl9SXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube Channel
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61557720336066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -40px) scale(0.95); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-scan { animation: scan 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
