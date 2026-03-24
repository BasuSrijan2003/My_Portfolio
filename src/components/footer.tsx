import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Srijan Basu
              </h3>
              <p className="text-gray-300 mb-4">
                Full-stack developer passionate about creating innovative
                solutions and beautiful user experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/srijanbasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/srijanbasu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://youtube.com/@thewanderlust_duo_2023?si=XAIFSDIeysC7-Jkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://www.facebook.com/share/163sknfged/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#hobbies-complex"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Hobbies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="mailto:2003srijanbasu@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    2003srijanbasu@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919088801139"
                    className="hover:text-white transition-colors"
                  >
                    +91 90888 01139
                  </a>
                </li>
                <li>Kolkata, West Bengal — 700125</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Srijan Basu. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
