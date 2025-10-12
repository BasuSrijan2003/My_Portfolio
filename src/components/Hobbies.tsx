// import React from "react";

// Advanced Hobby Card Component (same as before)
function HobbyCardAdvanced({
  title,
  description,
  icon,
  isFeatured = false,
  animationDelay = "0s",
}: {
  title: string;
  description: string;
  icon: string;
  isFeatured?: boolean;
  animationDelay?: string;
}) {
  const cardBaseStyle = `relative group w-full h-full p-1 rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-lg`;
  const cardInnerStyle = `relative z-10 w-full h-full bg-gray-900/70 backdrop-blur-xl rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ease-out`;

  return (
    <div
      className={`${cardBaseStyle} ${
        isFeatured
          ? "bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 animate-featuredShine"
          : "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700"
      } hover:scale-105 transform-gpu card-enter`}
      style={{ animationDelay }}
    >
      {/* Glossy overlay effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-2xl"></div>

      <div className={cardInnerStyle}>
        <div
          className={`text-5xl mb-5 transition-all duration-300 group-hover:scale-110 ${
            isFeatured ? "text-sky-300" : "text-blue-400"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            isFeatured ? "text-white" : "text-gray-100 group-hover:text-sky-300"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Subtle corner accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-gray-600/50 group-hover:border-sky-400/70 transition-colors duration-300 rounded-tl-lg"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-gray-600/50 group-hover:border-sky-400/70 transition-colors duration-300 rounded-br-lg"></div>
      </div>
    </div>
  );
}

export default function HobbiesSectionComplex() {
  const hobbies = [
    {
      title: "Bike Rider",
      description:
        "Conquering terrains and embracing the thrill of the open road.",
      icon: "🏍️",
      isFeatured: true,
    },
    {
      title: "Travelling",
      description:
        "Exploring new destinations and experiencing diverse cultures worldwide.",
      icon: "✈️",
    },
    {
      title: "Exploring",
      description:
        "Discovering hidden gems and uncharted territories in every journey.",
      icon: "🗺️",
    },
    {
      title: "Vlogger",
      description:
        "Creating engaging video content and sharing experiences with the world.",
      icon: "📹",
    },
    {
      title: "Painting",
      description:
        "Expressing creativity through colors and bringing imagination to life.",
      icon: "🎨",
    },
    {
      title: "Business Ideas",
      description:
        "Developing innovative business concepts and entrepreneurial ventures.",
      icon: "💡",
    },
    {
      title: "Innovation",
      description:
        "Creating cutting-edge solutions and thinking outside the box.",
      icon: "🚀",
    },
    {
      title: "Cricket",
      description:
        "Playing and following the gentleman's game with passion and strategy.",
      icon: "🏏",
    },
    {
      title: "Football",
      description:
        "Enjoying the beautiful game both as a player and enthusiastic fan.",
      icon: "⚽",
    },
    {
      title: "Adobe Premiere Pro",
      description:
        "Professional video editing and creating compelling visual content.",
      icon: "🎬",
    },
    {
      title: "Canva",
      description:
        "Designing stunning graphics and visual content for various projects.",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="hobbies-complex"
      className="min-h-screen relative overflow-hidden py-24 sm:py-32"
      style={{
        backgroundImage: "url('/images/bike-riding-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Multi-layered overlays for depth and complexity */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/50 opacity-70"></div>
      <div
        className="absolute inset-0 mix-blend-overlay animate-aurora"
        style={{
          backgroundImage: `
               radial-gradient(at 20% 30%, hsla(210, 80%, 50%, 0.2) 0px, transparent 50%),
               radial-gradient(at 80% 70%, hsla(280, 70%, 60%, 0.2) 0px, transparent 50%),
               radial-gradient(at 50% 50%, hsla(320, 60%, 50%, 0.15) 0px, transparent 50%)
             `,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elaborate Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Beyond The Code
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            My World of{" "}
            <span className="relative inline-block">
              Interests
              <svg
                className="absolute -bottom-2 left-0 w-full h-auto text-purple-500 opacity-70"
                width="300"
                height="20"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 C50 20, 100 0, 150 10 S250 0, 300 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the diverse interests that shape my perspective, fuel my
            creativity, and drive my passion—from adrenaline-fueled adventures
            to creative digital expression.
          </p>
        </div>

        {/* Perspective wrapper for 3D effect on grid */}
        <div className="[perspective:2000px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <HobbyCardAdvanced
                key={hobby.title}
                title={hobby.title}
                description={hobby.description}
                icon={hobby.icon}
                isFeatured={hobby.isFeatured}
                animationDelay={`${index * 100}ms`}
              />
            ))}
          </div>
        </div>

        {/* Updated Call to Action Section with YouTube and Facebook Channels */}
        <div className="mt-24 text-center">
          <div className="relative inline-block p-1 bg-gradient-to-r from-red-600 via-blue-600 to-blue-800 rounded-2xl shadow-2xl hover:shadow-blue-700/50 transition-shadow duration-500">
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl px-8 py-10 sm:px-12 sm:py-14">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Connect with Me
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                <a
                  href="https://youtube.com/@thewanderlust_duo_2023?si=XAIFSDIeysC7-Jkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-600/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="font-semibold">YouTube Channel</span>
                </a>
                <a
                  href="https://www.facebook.com/share/163sknfged/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-600/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="font-semibold">Facebook Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none opacity-20 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow fill-blue-600/30"
        >
          <path d="M 300,50 Q 350,150 300,250 Q 250,350 150,350 Q 50,350 50,250 Q 50,150 150,50 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none opacity-20 translate-x-1/2 translate-y-1/2">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow-reverse fill-purple-600/30"
        >
          <path d="M 350,150 Q 370,250 250,350 Q 130,370 50,250 Q 30,130 150,50 Q 270,30 350,150 Z" />
        </svg>
      </div>
    </section>
  );
}
