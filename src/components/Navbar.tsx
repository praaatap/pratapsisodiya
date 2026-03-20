import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Blogs", href: "/blogs" },
    { name: "Experience", href: "/experience" },
    { name: "Certifications", href: "/certifications" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-2xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg hover:opacity-80 transition-opacity">
            Pratap.
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-fg-muted">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`hover:text-fg transition-colors ${location.pathname === link.href ? 'text-fg' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-fg-muted hover:text-fg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl sm:hidden flex flex-col pt-24 px-8"
          >
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={link.href} 
                    className="text-2xl font-semibold tracking-tight hover:text-fg-muted transition-colors flex items-center justify-between group py-2"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] font-mono text-fg-muted/60 group-hover:text-fg transition-colors">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-12 space-y-6"
            >
              <div className="flex items-center gap-6">
                <a href="https://github.com/praaatap" target="_blank" rel="noreferrer" className="text-fg-muted hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/singhpratap999/" target="_blank" rel="noreferrer" className="text-fg-muted hover:text-[#0A66C2] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/itspratap9" target="_blank" rel="noreferrer" className="text-fg-muted hover:text-[#1DA1F2] transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="mailto:hello@pratap.dev" className="text-fg-muted hover:text-[#EA4335] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-xs text-fg-muted tracking-wide uppercase">© 2026 Pratap Singh</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
