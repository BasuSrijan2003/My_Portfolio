import React from "react";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

// Experience data array (unchanged)
const experienceData = [
  {
    id: 6,
    type: "education",
    institution: "BRAINWARE UNIVERSITY",
    degree: "Masters of Computer Applications",
    period: "2025 - 2027",
    icon: <GraduationCap className="text-blue-400" size={32} />,
    highlights: "Programming, Team Projects, Tutoring",
    description: [
      "Collaborated on multiple team-based projects",
      // "Founded and developed my own startup venture",
      "Mastered various programming languages and frameworks",
      //   "Successfully navigated numerous competitive examinations",
      //   "Overcame significant challenges throughout my academic journey",
    ],
  },
  {
    id: 5,
    type: "work",
    company: "LTImindtree",
    role: "Associate Software Engineer",
    period: "2025",
    icon: <Briefcase className="text-yellow-400" size={32} />,
    // highlights: "Team Leadership, Performance Optimization",
    description: [
      // Add your description strings here, for example:
      // "Worked on enterprise-level web applications using React and Node.js",
      // "Collaborated with cross-functional teams to deliver high-quality software",
      // "Optimized application performance and ensured code quality through reviews",
    ],
  },
  {
    id: 3,
    type: "work",
    company: "IIT IIM RESUME",
    role: "Full-Stack Developer | Co-FOUNDER",
    period: "2024 - 2025",
    icon: <Briefcase className="text-yellow-400" size={32} />,
    highlights: "Team Leadership, Performance Optimization",
    description: [
      "Designed and implemented responsive UI/UX interfaces",
      "Developed robust backend systems using Node.js",
      "Engineered and integrated complex API solutions",
      "Orchestrated critical product improvements and enhancements",
      "Executed server deployment and maintenance operations",
    ],
  },
  {
    id: 2,
    type: "education",
    institution: "TECHNO INDIA UNIVERSITY",
    degree: "Bachelor of Computer Applications [HONOURS]",
    period: "2022 - 2025",
    icon: <GraduationCap className="text-blue-400" size={32} />,
    highlights: "Programming, Team Projects, Tutoring",
    description: [
      "Collaborated on multiple team-based projects",
      "Founded and developed my own startup venture",
      "Mastered various programming languages and frameworks",
      "Successfully navigated numerous competitive examinations",
      "Overcame significant challenges throughout my academic journey",
    ],
  },
  {
    id: 4,
    type: "12th-grade",
    institution: "Kalyani Public School",
    degree: "12th Grade",
    period: "2020 - 2021",
    icon: <BookOpen className="text-green-400" size={32} />,
    highlights: "Academic Excellence, Leadership",
    description: [
      "Scored 71.5% in board exams",
      "Interested in video-editing, gaming and graphic designing",
    ],
  },
  {
    id: 5,
    type: "10th-grade",
    institution: "Kalyani Public School",
    degree: "10th Grade",
    period: "2018 - 2019",
    icon: <BookOpen className="text-green-400" size={32} />,
    highlights: "Academic Excellence, Leadership",
    description: [
      "Scored 72.8% in board exams",
      "Participated in school science fair and won 2nd prize",
      "Served as class representative for 2 years",
      "Interested in sports, e-sports and drawing",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Experience & Education
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>

            {experienceData.map((item) => (
              <div
                key={item.id}
                className="relative mb-8 sm:mb-12 last:mb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 top-6 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 shadow-lg group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-blue-400/20">
                  <div className="scale-75 sm:scale-100">{item.icon}</div>
                </div>

                {/* Content card */}
                <div className="ml-12 sm:ml-20 lg:ml-24">
                  <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                          {item.role || item.degree}
                        </h3>
                        <h4 className="text-base sm:text-lg text-gray-300 font-medium mb-1">
                          {item.company || item.institution}
                        </h4>
                      </div>
                      <span className="text-sm sm:text-base text-blue-400 font-semibold bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-semibold text-purple-400">
                          Highlights:
                        </span>
                        <span className="text-sm text-gray-300 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                          {item.highlights}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      {item.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
