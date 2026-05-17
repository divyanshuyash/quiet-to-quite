export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">
      <section className="relative bg-white overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto section-px pt-28 lg:pt-36 pb-10 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-purple/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">Terms & Conditions</span>
            <span className="w-10 h-px bg-purple/40" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-black leading-[1.05] tracking-tight">
            Clear, simple terms.
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] font-medium text-black/70">
            Last updated: May 17, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-10 text-black text-base leading-[1.9] font-light">
          <p>
            These Terms & Conditions govern your use of this site and any services offered
            by Quiet to Quite. By accessing the site, you agree to these terms.
          </p>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Use of the site</h2>
            <p>
              You agree to use the site for lawful purposes and not to disrupt or attempt
              to gain unauthorized access to the site or its systems.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Intellectual property</h2>
            <p>
              All content on this site, including text, graphics, and branding, is owned by
              Quiet to Quite or its licensors and is protected by applicable laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">No guarantees</h2>
            <p>
              Content is provided for informational purposes. We do not guarantee specific
              outcomes from the use of the site or services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Third-party links</h2>
            <p>
              The site may include links to third-party sites. We are not responsible for
              their content or practices.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the site means
              you accept the updated terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Contact</h2>
            <p>
              For questions about these terms, email quiettoquite@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
