"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 160;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-background/70 backdrop-blur-md border-b border-card-border py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 group font-bold text-xl text-foreground"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-card-bg border border-card-border group-hover:border-emerald-accent/50 shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300">
            <span className="text-emerald-accent font-bold tracking-wider text-glow text-sm">SM</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground/80 hidden sm:inline transition-colors duration-300 group-hover:text-emerald-accent">
            Sharad Mourya
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                    activeSection === item.id 
                      ? "text-emerald-accent font-semibold" 
                      : "text-foreground/60 hover:text-foreground/90 hover:bg-card-bg/30"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-[2px] left-4 right-4 h-[1.5px] bg-emerald-accent shadow-[0_0_8px_#10b981] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-card-border" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-card-border bg-card-bg/20 backdrop-blur-sm text-foreground hover:border-emerald-accent/50 hover:bg-emerald-accent/5 hover:text-emerald-accent transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-card-border bg-card-bg/25 text-foreground transition-all duration-300 hover:border-emerald-accent/40"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-card-border bg-card-bg/25 text-foreground transition-all duration-300 hover:border-emerald-accent/40"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bg-background/90 backdrop-blur-lg border-b border-card-border py-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col items-center gap-3 text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block py-2.5 w-full transition-colors ${
                    activeSection === item.id 
                      ? "text-emerald-accent bg-emerald-accent/5 font-semibold" 
                      : "text-foreground/70 hover:text-foreground hover:bg-card-bg/30"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
