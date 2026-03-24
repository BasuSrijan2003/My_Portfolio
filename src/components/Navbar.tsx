import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";
import handshakeImg from "../assets/handshake.jpg";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Hobbies", href: "#hobbies-complex" },
];

const contacts = [
  {
    href: "tel:+919088801139",
    icon: Phone,
    accent: "#3b82f6",
    label: "Phone",
    sub: "+91 90888 01139",
    tag: "CALL",
  },
  {
    href: "mailto:2003srijanbasu@gmail.com",
    icon: Mail,
    accent: "#ef4444",
    label: "Email",
    sub: "2003srijanbasu@gmail.com",
    tag: "MAIL",
  },
  {
    isWhatsApp: true,
    icon: MessageCircle,
    accent: "#22c55e",
    label: "WhatsApp",
    sub: "Send a message",
    tag: "MSG",
  },
  {
    href: "https://www.linkedin.com/in/srijanbasu/",
    icon: Linkedin,
    accent: "#0ea5e9",
    label: "LinkedIn",
    sub: "Connect with me",
    tag: "LINK",
    external: true,
  },
  {
    href: "https://youtube.com/channel/UCXuhNyqRiQoeNVIh7ZsT3Yw?si=t_mWtOBvMoFl9SXA",
    icon: Youtube,
    accent: "#ff2d2d",
    label: "YouTube",
    sub: "Subscribe",
    tag: "YT",
    external: true,
  },
  {
    href: "https://www.facebook.com/chocolaty.srijan/",
    icon: Facebook,
    accent: "#1877f2",
    label: "Facebook",
    sub: "Follow me",
    tag: "FB",
    external: true,
  },
  {
    href: "https://github.com/BasuSrijan2003",
    customIcon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    accent: "#94a3b8",
    label: "GitHub",
    sub: "Follow me",
    tag: "GIT",
    external: true,
  },
];

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen) {
      el.showModal();
      document.body.style.overflow = "hidden";
    } else {
      el.close();
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/+919088801139?text=${encodeURIComponent("Hello! I'd like to get in touch.")}`,
      "_blank",
    );
    handleClose();
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 group"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)",
          boxShadow: "0 0 20px rgba(124,58,237,0.35)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 32px rgba(14,165,233,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 20px rgba(124,58,237,0.35)";
        }}
      >
        <span className="relative z-10 tracking-wide">Let's Connect</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </button>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        className="rounded-2xl w-[95vw] max-w-5xl mx-auto p-0"
        style={{
          background: "#05070d",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
          maxHeight: "95vh",
        }}
        onClose={handleClose}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(124,58,237,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(14,165,233,0.06) 0%, transparent 55%)",
          }}
        />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 p-1.5 rounded-full transition-all group"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background =
              "rgba(255,255,255,0.1)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background =
              "rgba(255,255,255,0.05)")
          }
        >
          <X
            size={16}
            className="text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
          />
        </button>

        <div
          className="flex flex-col lg:flex-row"
          style={{ minHeight: "520px" }}
        >
          {/* ── Left — image panel ── */}
          <div className="lg:w-[42%] relative overflow-hidden rounded-l-2xl flex-shrink-0">
            <img
              src={handshakeImg}
              alt="Let's Connect"
              className="w-full h-full object-cover"
              style={{ minHeight: "260px", maxHeight: "100%" }}
            />
            {/* Overlay gradients */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 50%, #05070d 100%), linear-gradient(to top, #05070d 0%, transparent 35%)",
              }}
            />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p
                className="font-mono text-[10px] tracking-widest uppercase mb-2"
                style={{ color: "rgba(14,165,233,0.7)" }}
              >
                &gt;_ ready to collaborate
              </p>
              <h3 className="text-white font-black text-2xl leading-tight tracking-tight">
                Let's build
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #00d4ff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  something great.
                </span>
              </h3>
            </div>
          </div>

          {/* ── Right — contact grid ── */}
          <div className="flex-1 p-7 lg:p-9 flex flex-col justify-center overflow-y-auto relative z-10">
            <h2 className="text-xl font-black text-white tracking-tight mb-1">
              Contact Me
            </h2>
            <p
              className="font-mono text-xs mb-7"
              style={{ color: "rgba(14,165,233,0.55)" }}
            >
              &gt; Choose your channel _
            </p>

            {/* Grid of contact cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
              {contacts.map((item, i) => {
                const Icon = item.icon as React.ElementType;
                const cardInner = (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-xl cursor-pointer transition-all duration-200 group text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = item.accent + "55";
                      el.style.background = item.accent + "0e";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.background = "rgba(255,255,255,0.03)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background: item.accent + "1a",
                        color: item.accent,
                      }}
                    >
                      {item.customIcon ? (
                        <span style={{ color: item.accent }}>
                          {item.customIcon}
                        </span>
                      ) : (
                        <Icon size={16} />
                      )}
                    </div>
                    <p className="text-[11px] font-bold text-white/80">
                      {item.label}
                    </p>
                    <span
                      className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded tracking-widest"
                      style={{
                        background: item.accent + "22",
                        color: item.accent,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                );

                if (item.isWhatsApp) {
                  return (
                    <div key={i} onClick={openWhatsApp}>
                      {cardInner}
                    </div>
                  );
                }
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={handleClose}
                  >
                    {cardInner}
                  </a>
                );
              })}
            </div>

            {/* Footer note */}
            <div
              className="rounded-xl px-5 py-4 text-center"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-sm text-gray-400">
                Let's discuss your project and bring your ideas to{" "}
                <span className="font-semibold" style={{ color: "#00d4ff" }}>
                  life!
                </span>
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id], div[id]");
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        const id = section.getAttribute("id") || "";
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) setActiveSection(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(5,7,13,0.85)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-black text-xl text-white tracking-tight hover:opacity-80 transition-opacity"
            style={{
              background: "linear-gradient(90deg, #fff 40%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Portfolio
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                    background: isActive
                      ? "rgba(255,255,255,0.09)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="ml-4">
              <ContactModal />
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <ContactModal />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all"
              style={{
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="backdrop-blur-xl px-6 py-4 space-y-1"
          style={{
            background: "rgba(5,7,13,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                  background: isActive
                    ? "rgba(255,255,255,0.07)"
                    : "transparent",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
