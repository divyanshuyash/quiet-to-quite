"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const isDarkHeroPage = false;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasCompletedAssessment(!!localStorage.getItem("assessmentCompleted"));
    }
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-5 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm"
            : isDarkHeroPage
            ? "py-8 bg-transparent"
            : "py-8 bg-white/95 backdrop-blur-sm border-b border-black/5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-500 ${
              !scrolled && isDarkHeroPage ? "text-white" : "text-black"
            }`}
          >
            Quiet <span className="font-serif italic text-purple">to</span> Quite
            <span className="text-[0.6em] align-super ml-1 text-purple opacity-80">™</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative eyebrow transition-all duration-400 group ${
                  pathname === link.path
                    ? "text-purple"
                    : !scrolled && isDarkHeroPage
                    ? "text-white/70 hover:text-white"
                    : "text-black hover:text-black"
                }`}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-purple transition-all duration-500 ${
                    pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href={hasCompletedAssessment ? "/assessment/result" : "/assessment"}
              className={`ml-4 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm hover:shadow-md ${
                !scrolled && isDarkHeroPage
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-purple text-white hover:bg-purple/90"
              }`}
            >
              {hasCompletedAssessment ? "Your Results" : "Assessment"}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className={`md:hidden hover:text-purple transition-colors duration-300 p-1 ${
              !scrolled && isDarkHeroPage ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-12"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={link.path}
                  className={`font-serif text-4xl tracking-wide ${
                    pathname === link.path ? "text-purple" : "text-black hover:text-purple"
                  } transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={hasCompletedAssessment ? "/assessment/result" : "/assessment"}
                className="mt-4 px-10 py-4 bg-purple text-white text-xs font-bold uppercase tracking-[0.2em]"
              >
                {hasCompletedAssessment ? "Your Results" : "Assessment"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
