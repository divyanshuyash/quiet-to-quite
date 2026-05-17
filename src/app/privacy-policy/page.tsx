export default function PrivacyPolicy() {
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
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">Privacy Policy</span>
            <span className="w-10 h-px bg-purple/40" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-black leading-[1.05] tracking-tight">
            Your privacy, respected.
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] font-medium text-black/70">
            Last updated: May 17, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-10 text-black text-base leading-[1.9] font-light">
          <p>
            This Privacy Policy explains how Quiet to Quite collects, uses, and protects
            information when you visit this site or contact us.
          </p>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Information we collect</h2>
            <p>
              We may collect information you provide directly, such as when you email us,
              submit a form, or request a service. We also receive basic technical data
              such as browser type, device information, and pages visited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">How we use information</h2>
            <p>
              We use information to respond to inquiries, provide services, improve the
              site experience, and maintain site security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Sharing</h2>
            <p>
              We may share information with trusted service providers who help operate the
              site or deliver services. These providers are expected to protect your data
              and use it only for the intended purpose.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Your choices</h2>
            <p>
              You can request access, updates, or deletion of your information by contacting
              us. You may also choose not to provide certain information, though that may
              limit services we can offer.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-black">Contact</h2>
            <p>
              For privacy questions, email quiettoquite@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
