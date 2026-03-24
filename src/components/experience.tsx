import React, { memo, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

interface ExperienceItem {
  id: number;
  type: string;
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  period: string;
  location?: string;
  icon: React.ReactNode;
  highlights?: string;
  description: string[];
  color: string;
  accentColor: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    company: "CALLSURE.ai",
    role: "Full-Stack Developer Intern",
    period: "Sep 2025 - Present",
    location: "Remote",
    icon: <Briefcase className="text-cyan-400" size={24} />,
    highlights: "AI Development, Healthcare Tech",
    description: [
      "Architected multi-tenant healthcare SaaS backend with PostgreSQL relational models",
      "Engineered automated user onboarding pipeline with JWT authentication",
      "Built hybrid authentication system with bcrypt and DynamoDB TTL-based OTP",
      "Developed React 19 admin/staff dashboard with custom hooks and responsive design",
    ],
    color: "from-cyan-400 to-blue-500",
    accentColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: 2,
    type: "work",
    company: "LTIMindtree",
    role: "Cloud Infrastructure Service Engineer",
    period: "Jun 2025 - Aug 2025",
    location: "Kolkata, India",
    icon: <Briefcase className="text-yellow-400" size={24} />,
    highlights: "Enterprise IT Operations",
    description: [
      "Managed enterprise IT operations using WSUS, MECM, and Active Directory",
      "Supported cloud infrastructure workflows and ITSM processes",
      "Gained exposure to enterprise-grade tooling including OKTA and Microsoft 365",
    ],
    color: "from-yellow-400 to-orange-500",
    accentColor: "rgba(251, 191, 36, 0.15)",
  },
  {
    id: 3,
    type: "education",
    institution: "Brainware University",
    degree: "Master of Computer Applications (MCA)",
    period: "Sep 2025 - 2027",
    location: "Kolkata, India",
    icon: <GraduationCap className="text-purple-400" size={24} />,
    highlights: "CGPA: 8.38",
    description: [
      "Advanced programming and software engineering",
      "Machine learning and AI fundamentals",
      "Database management and system design",
    ],
    color: "from-purple-400 to-pink-500",
    accentColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: 4,
    type: "education",
    institution: "Techno India University",
    degree: "Bachelor of Computer Applications (BCA Honors)",
    period: "Sep 2022 - May 2025",
    location: "Kolkata, India",
    icon: <GraduationCap className="text-blue-400" size={24} />,
    highlights: "CGPA: 7.47",
    description: [
      "Collaborated on multiple team-based projects",
      "Founded and developed my own startup venture",
      "Mastered various programming languages and frameworks",
      "Successfully navigated numerous competitive examinations",
    ],
    color: "from-blue-400 to-indigo-500",
    accentColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 5,
    type: "certification",
    institution: "Oracle",
    degree: "OCI 2025 Certified AI Foundations Associate",
    period: "Oct 2025 - Oct 2027",
    icon: <Award className="text-emerald-400" size={24} />,
    highlights: "AI & Cloud Computing",
    description: [
      "Certified in Oracle Cloud Infrastructure AI fundamentals",
      "Understanding of AI/ML deployment on cloud platforms",
    ],
    color: "from-emerald-400 to-green-500",
    accentColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: 6,
    type: "12th-grade",
    institution: "Kalyani Public School",
    degree: "12th Grade",
    period: "2020 - 2021",
    location: "Kolkata, India",
    icon: <BookOpen className="text-green-400" size={24} />,
    highlights: "Academic Excellence, Leadership",
    description: [
      "Scored 71.5% in board exams",
      "Interested in video-editing, gaming and graphic designing",
    ],
    color: "from-green-400 to-teal-500",
    accentColor: "rgba(34, 197, 94, 0.15)",
  },
];

const ExperienceCard = memo(
  ({ item, index }: { item: ExperienceItem; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        className="relative mb-12 group"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Timeline Dot */}
        <div className="absolute left-0 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-zinc-900 to-black border-2 border-white/20 shadow-lg group-hover:scale-110 group-hover:border-white/40 transition-all duration-300 z-10">
          <div className="scale-90">{item.icon}</div>
        </div>

        {/* Connecting Line Extension */}
        <div
          className={`absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
        />

        {/* Content Card */}
        <div className="ml-20">
          <div
            className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden group/card"
            style={{
              boxShadow: `0 8px 30px ${item.accentColor}`,
            }}
          >
            {/* Animated Spotlight Effect */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5`}
              />
            </div>

            {/* Top Accent Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover/card:opacity-100 transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-gray-400 group-hover/card:bg-clip-text group-hover/card:text-transparent transition-all duration-300">
                    {item.role || item.degree}
                  </h3>
                  <h4 className="text-lg text-gray-300 font-semibold flex items-center gap-2">
                    {item.company || item.institution}
                    {item.location && (
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    )}
                  </h4>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Calendar
                    size={14}
                    className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  />
                  <span className="text-sm font-semibold text-gray-300">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Highlights Badge */}
              {item.highlights && (
                <div className="mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/10`}
                  >
                    <span className="text-sm font-bold text-white">
                      {item.highlights}
                    </span>
                  </div>
                </div>
              )}

              {/* Description */}
              {item.description.length > 0 && (
                <div
                  className={`space-y-2 ${!isExpanded && item.description.length > 3 ? "max-h-32 overflow-hidden" : ""}`}
                >
                  {item.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}
                      />
                      <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Expand Button */}
              {item.description.length > 3 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`mt-4 text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent hover:underline`}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
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
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">
              My Journey
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From{" "}
            <span className="text-cyan-400 font-semibold">
              academic excellence
            </span>{" "}
            to{" "}
            <span className="text-purple-400 font-semibold">
              professional growth
            </span>{" "}
            — building the foundation for innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20" />

          {/* Experience Cards */}
          {experienceData.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
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
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
      `}</style>
    </section>
  );
};

export default Experience;
