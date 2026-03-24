import { useState, useEffect, useRef, memo, useCallback } from "react";
import {
  X,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Send,
} from "lucide-react";

import heroImage from "../assets/hero.JPG";

// Memoized icons for performance
const SocialIcons = {
  LinkedIn: memo(() => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )),
  GitHub: memo(() => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )),
  Email: memo(() => (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )),
};

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ContactModal = memo(({ isOpen, setIsOpen }: ContactModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = dialogRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
      document.body.style.overflow = "hidden";
    } else {
      modalElement.close();
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const openWhatsApp = useCallback(() => {
    window.open(
      `https://wa.me/+919088801139?text=${encodeURIComponent("Hello! I'd like to get in touch.")}`,
      "_blank",
    );
    handleClose();
  }, [handleClose]);

  return (
    <dialog
      ref={dialogRef}
      className="relative bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl w-[95vw] max-w-5xl mx-auto backdrop:bg-black/80 p-0 border border-white/10"
      onClose={handleClose}
      style={{ maxHeight: "90vh" }}
    >
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />

      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-all duration-300 z-20 text-gray-400 hover:text-white group"
      >
        <X
          size={20}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
      </button>

      <div className="flex flex-col lg:flex-row h-full max-h-[85vh] relative z-10">
        {/* Left Panel */}
        <div className="lg:w-1/2 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

          <div className="relative z-10 text-center">
            <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
              <Send size={48} className="text-cyan-400" />
            </div>
            <h3 className="text-4xl font-black text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Ready to collaborate on your next project? Reach out through any
              of these channels.
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Right Panel - Contact Options */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="space-y-3">
            <a
              href="tel:+919088801139"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Phone
                </p>
                <span className="text-cyan-400 font-semibold">
                  +91 90888 01139
                </span>
              </div>
            </a>

            <a
              href="mailto:2003srijanbasu@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <span className="text-pink-400 font-semibold">
                  2003srijanbasu@gmail.com
                </span>
              </div>
            </a>

            <div
              onClick={openWhatsApp}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  WhatsApp
                </p>
                <span className="text-green-400 font-semibold">
                  Send Message
                </span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/srijanbasu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  LinkedIn
                </p>
                <span className="text-blue-400 font-semibold">
                  Connect with me
                </span>
              </div>
            </a>

            <a
              href="https://github.com/BasuSrijan2003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Github className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  GitHub
                </p>
                <span className="text-gray-300 font-semibold">Follow me</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
});

const techArsenal = [
  {
    category: "LANGUAGES",
    items: ["Python", "C++", "JavaScript", "TypeScript"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    category: "FRONTEND",
    items: ["React", "Next.js", "Tailwind CSS", "Vite"],
    color: "from-purple-400 to-pink-500",
  },
  {
    category: "BACKEND",
    items: ["Node.js", "FastAPI", "Express", "Django"],
    color: "from-green-400 to-emerald-500",
  },
  {
    category: "DATABASE",
    items: ["PostgreSQL", "MongoDB", "DynamoDB"],
    color: "from-orange-400 to-red-500",
  },
];

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Developer", "Backend Engineer", "ML Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentRole = roles[roleIndex];

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex];
        setTypedText(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            currentText = currentText.slice(0, -1);
            setTypedText(currentText);
            if (currentText === "") {
              clearInterval(deleteInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-400">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                Hi, I'm{" "}
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                  Srijan Basu
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-gray-400 h-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-blink">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              {/* Crafting{" "} */}
              <span className="text-cyan-400 font-semibold">
                Full Stack Developer{" "}
              </span>
              with Experienced in building REST_APIs, Multi-tenant systems, and
              AI-powered applications.
            </p>

            {/* Tech Stack Preview */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Tech Arsenal
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techArsenal.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                      />
                      <span className="text-xs font-bold text-gray-400">
                        {tech.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tech.items.map((item, j) => (
                        <span key={j} className="text-xs text-gray-300">
                          {item}
                          {j < tech.items.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Let's Connect
              </button>
              <a
                href="https://drive.google.com/file/d/1_it3aPXTjyG0Xk1lbLLuRTLKaygleBlu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 rounded-xl font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  Icon: SocialIcons.LinkedIn,
                  href: "https://www.linkedin.com/in/srijanbasu/",
                  label: "LinkedIn",
                },
                {
                  Icon: SocialIcons.GitHub,
                  href: "https://github.com/BasuSrijan2003",
                  label: "GitHub",
                },
                {
                  Icon: SocialIcons.Email,
                  href: "mailto:2003srijanbasu@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="lg:w-[420px] flex-shrink-0 relative">
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-64 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl rotate-6 blur-2xl" />
              <div className="absolute top-10 right-10 w-56 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl rotate-3 blur-2xl" />

              {/* Main photo card */}
              <div className="relative z-10 w-80 bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={heroImage}
                  alt="Srijan Basu"
                  className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23111827'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='sans-serif' font-size='24'%3EProfile%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-lg">
                        Full Stack Developer
                      </p>
                      <p className="text-cyan-400 font-mono text-xs">
                        &gt; Building_the_future_
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative icons */}
              <div className="absolute -top-4 -left-4 p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-xl">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-cyan-400"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="absolute top-1/3 -left-6 p-4 bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-xl">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        setIsOpen={setIsContactModalOpen}
      />

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
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
