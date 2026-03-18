"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
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
          <Link href="/" className="font-semibold text-lg hover:opacity-80 transition-opacity">
            Pratap.
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-fg-muted">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`hover:text-fg transition-colors ${pathname === link.href ? 'text-fg' : ''}`}
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
                    href={link.href} 
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
              className="mt-auto pb-12 text-sm text-fg-muted"
            >
              <p>© 2026 Pratap Singh. Built with Next.js.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
