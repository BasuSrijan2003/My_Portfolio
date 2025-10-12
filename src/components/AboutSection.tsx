import React from "react";

// Badge component (since we don't have shadcn/ui in React)
function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition-all duration-200 ${className}`}
    >
      {children}
    </span>
  );
}

function SkillBadge({ name }: { name: string }) {
  return (
    <Badge className="hover:scale-105 transition-transform cursor-pointer hover:border-blue-500 hover:text-blue-400">
      {name}
    </Badge>
  );
}

export default function AboutSection() {
  const skills = [
    "UI/UX",
    "Python Programming",
    "MERN Stack",
    "Full-Stack",
    "Web Development",
    "DBMS",
    "AI/ML Tools",
    "Data Structures",
    "Algorithms",
    "Responsive Design",
    "DevOps",
    "API Development",
    "Git",
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden w-80 h-80 lg:w-96 lg:h-96 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/20"></div>
                <img
                  src="/images/heroBW.JPG" // ✅ Changed to public folder path
                  alt="Professional Profile"
                  className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23111827'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='sans-serif' font-size='24'%3EProfile Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Who I Am Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-3xl font-bold mb-6 text-blue-400">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Full Stack Developer and MCA student at Brainware University
                with a passion for building cutting-edge web solutions. I
                specialize in modern technologies including ReactJS, NextJS,
                Node.js, and MongoDB, creating seamless applications deployed on
                industry-standard platforms like Netlify and Vercel.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                My approach combines technical expertise with creative
                problem-solving, constantly exploring emerging technologies to
                deliver innovative digital experiences. With a foundation built
                at Kalyani Public School in Kolkata and diverse skills spanning
                DBMS, multimedia tools, and modern development practices, I'm
                committed to transforming ideas into impactful, real-world
                solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="transform transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <SkillBadge name={skill} />
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
                Download Resume
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
