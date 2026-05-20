"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

const services = [
  {
    id: "high-touch-1-1",
    number: "01",
    tag: "Start Here",
    title: "High-Touch 1:1",
    subtitle: "Complimentary Leadership Coaching Call",
    description:
      "Always begin with a complimentary 45-minute call with Jayita to clarify your leadership goals and the support you need next.",
    features: [
      "Book a complimentary Leadership Coaching Call",
      "45-minute private session with Jayita Roy",
      "Web conferencing details provided upon completion",
    ],
    cta: "Book the Complimentary Call",
    href: "https://elevate.quiettoquite.com/web/lite/events/69ce103a8a93be6046808486",
    side: "left",
    image: "/images/service_advisory.png",
  },
  {
    id: "quiet-authority-reset",
    number: "02",
    tag: "Core Program",
    title: "Quiet Authority Reset",
    subtitle: "Leadership Perception Reset",
    description:
      "A focused reset to align how you see yourself and how others see you, so visibility matches performance.",
    features: [
      "Reframe perception and visibility gaps",
      "Clarify leadership narrative and positioning",
      "Create a practical next-step visibility plan",
    ],
    cta: "Explore Quiet Authority Reset",
    href: "https://elevate.quiettoquite.com/web/courses",
    side: "right",
    image: "/images/service_reset.png",
  },
  {
    id: "perception-reset",
    number: "03",
    tag: "Focused Session",
    title: "Perception Reset",
    subtitle: "See Your Career Clearly",
    description:
      "Step back and see your career through a new lens, understand why performance alone does not drive growth, and decode the system.",
    features: [
      "See your career through a new lens",
      "Decode the reliable but not promotable trap",
      "Leave with clarity on where you stand and why",
    ],
    cta: "Start Perception Reset",
    href: "https://elevate.quiettoquite.com/l/5246e16263",
    side: "left",
    image: "/images/editorial_portrait.png",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto section-px pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-12 text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto md:mx-0">
            <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-8">
              <span className="w-8 md:w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">Work With Jayita</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl lg:text-[6rem] text-black leading-[1.05] tracking-tight mb-4 md:mb-6"
            >
              The Path to Visibility.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-base md:text-xl lg:text-2xl text-black max-w-xl font-light leading-relaxed">
              Become impossible to overlook, on your own terms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-8 md:py-6 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-8 lg:space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              id={s.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center scroll-mt-28`}
            >
              {/* Visual Frame */}
              <motion.div
                variants={fadeUp}
                className={`relative w-full aspect-[4/5] bg-white overflow-hidden shadow-2xl ${s.side === "right" ? "lg:order-2" : ""}`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                <div className="absolute top-6 left-6 font-serif text-8xl font-light text-white/50 mix-blend-overlay select-none">
                  {s.number}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUp}
                className={`flex flex-col justify-center ${s.side === "right" ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="w-6 md:w-8 h-px bg-purple/40" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple">{s.tag}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-5xl lg:text-[3.5rem] text-black mb-2 md:mb-4 leading-[1.05]">
                  {s.title}
                </h2>
                <p className="text-xs md:text-base font-sans text-purple/80 mb-4 md:mb-6 tracking-widest uppercase font-medium">{s.subtitle}</p>

                <p className="font-sans text-black text-sm md:text-lg leading-[1.8] md:leading-[1.85] font-light max-w-xl mb-6">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 md:gap-4 text-xs md:text-sm text-black font-light">
                      <span className="text-purple mt-0.5 md:mt-1 text-[10px]">◆</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-6 md:px-10 py-3 md:py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                  >
                    {s.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-500 group-hover:translate-x-1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ / COMMITMENT ── */}
      <section className="py-6 md:py-8 px-4 md:px-6 bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-4 md:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4 md:mb-8">
              <span className="w-8 md:w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Not Sure Where to Start?</span>
              <span className="w-8 md:w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-2xl md:text-5xl lg:text-[4rem] text-black mb-4 md:mb-8 leading-[1.05]">
              Get your assessment first.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black text-sm md:text-lg font-light leading-[1.8] md:leading-[1.9] mb-4 md:mb-6 px-2">
              Our 7-question diagnostic will identify your unique visibility gap and point
              you toward the right path, in under 2 minutes.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/assessment"
                className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-6 md:px-12 py-3 md:py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
              >
                Start the Free Assessment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-500 group-hover:translate-x-1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
