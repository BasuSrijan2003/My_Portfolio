import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

const navLinks = [{ name: "About", href: "#about" }];

// Contact Modal Component
function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = dialogRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      modalElement.close();
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919088801139"; // Fixed formatting
    const message = "Hello! I'd like to get in touch.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    handleCloseModal(); // Close modal after action
  };

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-600 text-white font-medium rounded-lg sm:rounded-full hover:from-purple-600 hover:via-blue-600 hover:to-cyan-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base touch-manipulation group overflow-hidden"
        aria-label="Open contact modal"
      >
        <span className="relative z-10 font-semibold tracking-wide">
          Let's Connect
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-500 rounded-lg sm:rounded-full blur opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </button>

      {/* Modal Dialog */}
      <dialog
        ref={dialogRef}
        className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 rounded-2xl shadow-2xl w-[95vw] max-w-5xl mx-auto backdrop:bg-black backdrop:bg-opacity-75 p-0 border border-gray-700/50"
        onClose={handleCloseModal}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 hover:bg-gray-700/50 rounded-full transition-all duration-300 z-20 text-gray-400 hover:text-white group touch-manipulation"
          aria-label="Close modal"
        >
          <X
            size={20}
            className="sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[500px]">
          {/* Left Side - Image Space */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-900/20 to-gray-900/20 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-500/10"></div>
            <div className="w-full h-48 sm:h-64 lg:h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden relative z-10 border border-gray-600/30">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.careersingovernment.com/tools/wp-content/uploads/2015/09/handshake.jpg"
                  alt="Contact"
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Details */}
          <div className="lg:w-1/2 p-4 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Me
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Phone Number */}
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-blue-500/30 touch-manipulation">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 flex-shrink-0">
                  <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">
                    Phone
                  </p>
                  <a
                    href="tel:+919088801139"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-base sm:text-lg font-medium break-all"
                  >
                    +91 90888 01139
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-red-500/30 touch-manipulation">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-red-500/25 transition-all duration-300 flex-shrink-0">
                  <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">
                    Email
                  </p>
                  <a
                    href="mailto:2003srijanbasu@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors text-base sm:text-lg font-medium break-all"
                  >
                    2003srijanbasu@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-green-500/30 touch-manipulation"
                onClick={openWhatsApp}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 flex-shrink-0">
                  <MessageCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">
                    WhatsApp
                  </p>
                  <span className="text-green-400 hover:text-green-300 transition-colors text-base sm:text-lg font-medium">
                    Send Message
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-blue-600/30 touch-manipulation">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-blue-600/25 transition-all duration-300 flex-shrink-0">
                  <Linkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/srijanbasu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-base sm:text-lg font-medium"
                    onClick={handleCloseModal}
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 rounded-xl border border-gray-700/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 animate-pulse"></div>
              <p className="text-gray-300 text-center text-sm sm:text-lg relative z-10">
                Ready to create something amazing together? 🚀
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.getElementById("mobile-navbar");
      if (isMenuOpen && navbar && !navbar.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {/* Enhanced Background with animated gradient and floating particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-950 opacity-95">
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse shadow-lg shadow-blue-400/20"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-400/20"></div>
          <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-cyan-400/30 rounded-full animate-pulse delay-500 shadow-lg shadow-cyan-400/15"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent animate-pulse duration-3000"></div>
      </div>

      <nav
        className="relative z-10 bg-black/30 backdrop-blur-xl border-b border-gradient-to-r from-gray-700/30 via-blue-500/20 to-gray-700/30"
        id="mobile-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-gray-200 transition-all duration-300 touch-manipulation relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 tracking-wide font-semibold">
                  Portfolio
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            </div>

            {/* Desktop Navigation - Simplified but More Elegant */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 relative overflow-hidden touch-manipulation transform hover:scale-105 ${
                        activeSection === link.href.slice(1)
                          ? "text-white bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-blue-400/40 shadow-lg shadow-blue-500/20"
                          : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-600/30 hover:shadow-lg"
                      }`}
                    >
                      <span className="relative z-10 font-semibold tracking-wide">
                        {link.name}
                      </span>
                      {activeSection === link.href.slice(1) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full animate-pulse"></div>
                      )}
                    </a>

                    {/* Enhanced hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm"></div>

                    {/* Floating dot indicator */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 opacity-100 animate-pulse"
                          : "bg-gray-600 opacity-0 group-hover:opacity-50"
                      }`}
                    ></div>
                  </div>
                ))}

                {/* Enhanced Contact Modal Button */}
                <div className="ml-6">
                  <ContactModal />
                </div>
              </div>
            </div>

            {/* Mobile menu button and contact */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Contact Button */}
              <div className="sm:block">
                <ContactModal />
              </div>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/40 hover:to-gray-600/40 transition-all duration-500 border border-gray-700/40 hover:border-blue-500/50 touch-manipulation relative group overflow-hidden"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                {isMenuOpen ? (
                  <X
                    size={20}
                    className="sm:w-6 sm:h-6 transform rotate-180 transition-transform duration-500 relative z-10"
                  />
                ) : (
                  <Menu
                    size={20}
                    className="sm:w-6 sm:h-6 transition-transform duration-500 relative z-10"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-4 sm:pb-6 space-y-2 sm:space-y-3 bg-gradient-to-r from-black/50 via-black/40 to-black/50 backdrop-blur-xl border-t border-gradient-to-r from-gray-700/30 via-blue-500/20 to-gray-700/30">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-6 py-4 rounded-xl text-base font-medium transition-all duration-500 touch-manipulation relative overflow-hidden group ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-blue-400/40 shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-600/30"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen
                    ? "slideInFromTop 0.5s ease-out forwards"
                    : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <span className="relative z-10 font-semibold tracking-wide">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Improve touch targets for mobile */
        @media (max-width: 1023px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Ensure modal is accessible on mobile */
        dialog {
          max-height: 95vh;
          max-height: 95dvh;
        }

        /* Prevent zoom on input focus for iOS */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          select, textarea, input[type="text"], input[type="password"], 
          input[type="datetime"], input[type="datetime-local"], 
          input[type="date"], input[type="month"], input[type="time"], 
          input[type="week"], input[type="number"], input[type="email"], 
          input[type="url"] {
            font-size: 16px !important;
          }
        }

        /* Enhanced animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
