import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black mt-auto relative overflow-hidden border-t border-black/5">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            
            {/* Brand Column */}
            <div className="md:col-span-5">
              <Link
                href="/"
                aria-label="Quiet to Quite"
                className="inline-flex items-center mb-6 transition-opacity duration-500 hover:opacity-80"
              >
                <span className="relative h-5 w-28 md:h-7 md:w-36">
                  <Image
                    src="/images/quiet-to-quite-logo-cropped.png"
                    alt="Quiet to Quite"
                    fill
                    className="object-contain"
                  />
                </span>
              </Link>
              <p className="text-black text-sm md:text-base max-w-sm font-light leading-relaxed mb-6">
                For high-performing, introverted women who deliver exceptional results
                but get passed over. Become impossible to overlook.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 grid grid-cols-2 gap-12 md:gap-24">
              <div className="flex flex-col gap-1">
                <h4 className="eyebrow text-purple/80 mb-5">Explore</h4>
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Assessment", href: "/assessment" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="py-2 text-black hover:text-purple transition-colors text-sm font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-purple group-hover:w-4 transition-all duration-300" />
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="eyebrow text-purple/80 mb-5">Connect</h4>
                <a
                  href="mailto:quiettoquite@gmail.com"
                  className="py-2 text-black hover:text-purple transition-colors text-sm font-light tracking-wide group flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-purple group-hover:w-4 transition-all duration-300" />
                  Contact
                </a>
                <a
                  href="https://www.linkedin.com/in/jayita-roy-4562a311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-black hover:text-purple transition-colors text-sm font-light tracking-wide group flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-purple group-hover:w-4 transition-all duration-300" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/jayitaroy.quiettoquite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-black hover:text-purple transition-colors text-sm font-light tracking-wide group flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-purple group-hover:w-4 transition-all duration-300" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black tracking-wider">
          <p>© {new Date().getFullYear()} Quiet to Quite™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
