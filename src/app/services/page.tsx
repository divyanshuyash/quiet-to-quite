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
    number: "01",
    tag: "Path One",
    title: "Quiet Authority Reset",
    subtitle: "30-Day Leadership Perception Reset",
    description:
      "For quiet mid-career women tired of being 'reliable' but overlooked for the next level. Reset how you see yourself, how others see you, and leave with an implementable visibility plan.",
    features: [
      "3 focused digital learning days",
      "Weekly live group coaching calls",
      "Targeted visibility-building tools",
      "Private peer community access",
      "Personal Visibility Gap Assessment",
    ],
    price: "₹5,999",
    cta: "Take the Assessment",
    href: "/assessment",
    side: "left",
    image: "/images/service_reset.png",
  },
  {
    number: "02",
    tag: "Path Two",
    title: "Quiet Authority Accelerator",
    subtitle: "High-Touch 1:1 Advisory",
    description:
      "An intimate advisory container for women ready to fast-track their next role, promotion, or board-level opportunity. Entirely bespoke. Entirely on your terms.",
    features: [
      "Bespoke promotion strategy development",
      "Stakeholder perception reshaping",
      "Executive presence calibration",
      "Monthly deep-dive strategy sessions",
      "Direct access between sessions",
    ],
    price: "Custom Investment",
    cta: "Apply for Advisory",
    href: "mailto:quiettoquite@gmail.com",
    side: "right",
    image: "/images/service_advisory.png",
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

        <div className="relative z-10 max-w-[1400px] mx-auto section-px pt-32 lg:pt-40 pb-12 text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto md:mx-0">
            <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <span className="w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">Work With Jayita</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-[6rem] text-black leading-[1.05] tracking-tight mb-6"
            >
              The Path to Visibility.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-xl md:text-2xl text-black max-w-xl font-light leading-relaxed"
            >
              Become impossible to overlook, on your own terms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-8 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-12 lg:space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}
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
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-px bg-purple/40" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple">{s.tag}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-black mb-4 leading-[1.05]">
                  {s.title}
                </h2>
                <p className="text-base font-sans text-purple/80 mb-6 tracking-widest uppercase font-medium">{s.subtitle}</p>

                <p className="font-sans text-black text-lg leading-[1.85] font-light max-w-xl mb-6">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 text-sm text-black font-light">
                      <span className="text-purple mt-1 text-[10px]">◆</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                  >
                    {s.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-500 group-hover:translate-x-1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="font-serif text-xl font-medium text-purple/70">{s.price}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ / COMMITMENT ── */}
      <section className="py-6 px-6 bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Not Sure Where to Start?</span>
              <span className="w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-black mb-8 leading-[1.05]">
              Get your assessment first.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black text-lg font-light leading-[1.9] mb-6">
              Our 7-question diagnostic will identify your unique visibility gap and point
              you toward the right path, in under 2 minutes.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/assessment"
                className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
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
