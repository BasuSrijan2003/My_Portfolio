import { useState, useEffect, useRef } from "react";
import { X, Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

import heroImage from "../assets/hero.jpg";

// Contact Modal Component (same as in Navbar)
function ContactModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = dialogRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+91 90888 01139"; // Replace with your number
    const message = "Hello! I'd like to get in touch.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Modal Dialog */}
      <dialog
        ref={dialogRef}
        className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full mx-auto backdrop:bg-black backdrop:bg-opacity-75 p-0 border border-gray-700/50"
        onClose={handleCloseModal}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-6 right-6 p-3 hover:bg-gray-700/50 rounded-full transition-all duration-300 z-10 text-gray-400 hover:text-white group"
          aria-label="Close modal"
        >
          <X
            size={24}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Side - Image Space */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-900/20 to-gray-900/20 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-500/10"></div>
            <div className="w-full h-64 lg:h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden relative z-10 border border-gray-600/30">
              {/* Replace with your actual image */}
              <img
                src="/path-to-your-image.jpg"
                alt="Contact"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display =
                      "flex";
                  }
                }}
              />
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
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Me
            </h2>

            <div className="space-y-6">
              {/* Phone Number */}
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Phone</p>
                  <a
                    href="tel:+91 90888 01139"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                  >
                    +91 90888 01139
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-red-500/30">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-full shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Email</p>
                  <a
                    href="mailto:2003srijanbasu@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors text-lg font-medium"
                  >
                    2003srijanbasu@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                className="flex items-center space-x-4 p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-green-500/30"
                onClick={openWhatsApp}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">WhatsApp</p>
                  <span className="text-green-400 hover:text-green-300 transition-colors text-lg font-medium">
                    Send Message
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-700/30 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-blue-600/30">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-full shadow-lg group-hover:shadow-blue-600/25 transition-all duration-300">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/srijanbasu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-gray-900/30 rounded-xl border border-gray-700/30">
              <p className="text-gray-300 text-center text-lg">
                Let's discuss your project and bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Python",
    "Next.js",
    "Management",
  ];

  const handleGetInTouch = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(400%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 2s infinite linear;
        }
      `}</style>

      <section className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            {/* Content Section */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Professional Label */}
              <div className="text-sky-400 text-bg font-large uppercase tracking-wide border-l-2 pl-4 relative overflow-hidden">
                <span className="relative z-10">
                  Full Stack Developer | Software Engineer
                </span>

                {/* Shining effect overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shine"
                  style={{
                    width: "30%",
                  }}
                ></div>
              </div>

              {/* Name */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
                  <span className="text-white block">SRIJAN</span>
                  <span className="text-gray-400 block">BASU</span>
                </h1>

                <div className="w-16 sm:w-20 h-px bg-white"></div>

                <p className="text-lg sm:text-xl text-gray-300 font-light max-w-lg">
                  Software Developer specializing in modern web technologies and
                  scalable solutions
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Experienced in building robust web applications using React,
                TypeScript, and Node.js. Passionate about creating efficient,
                maintainable code and delivering exceptional user experiences.
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium text-center hover:border-gray-500 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleGetInTouch}
                  className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Get In Touch
                </button>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/images/SRIJAN's_RESUME.pdf"; // ✅ Removed "public/" and added leading "/"
                    link.download = "SRIJAN's_RESUME.pdf";
                    document.body.appendChild(link); // ✅ Add to DOM first
                    link.click();
                    document.body.removeChild(link); // ✅ Clean up
                  }}
                  className="bg-transparent border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Download PDF
                </button>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                <a
                  href="#linkedin"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-gray-600 pb-1 w-fit"
                >
                  LinkedIn
                </a>
                <a
                  href="#github"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-gray-600 pb-1 w-fit"
                >
                  GitHub
                </a>
                <a
                  href="#email"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-gray-600 pb-1 w-fit"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Container */}
                <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-72 lg:h-[400px] xl:w-80 xl:h-96 relative overflow-hidden bg-gray-800">
                  {/* Loading state */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Loading...</span>
                    </div>
                  )}

                  {/* Error state */}
                  {imageError && (
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Image not found
                      </span>
                    </div>
                  )}

                  {/* Actual Image - Using imported image */}
                  <img
                    src={heroImage} // ✅ Now using imported image
                    alt="Srijan Basu - Full Stack Developer"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gray-700"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-gray-700"></div>

                {/* Info Card */}
                <div className="absolute -bottom-6 -right-6 bg-black border border-gray-700 p-4 sm:p-6 max-w-xs">
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      MCA Student
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Brainware University
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-500 text-xs">
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden sm:flex justify-center pt-12 lg:pt-16">
            <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          setIsOpen={setIsContactModalOpen}
        />
      </section>
    </>
  );
};

export default HeroSection;
