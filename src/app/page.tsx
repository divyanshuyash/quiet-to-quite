"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 60, rotateX: -20, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
};

const heroLineOne = ["From", "reliable", "executor"];
const heroLineTwo = ["to", "trusted", "leader."];

const stats = [
  { value: "22", label: "Years Total Experience" },
  { value: "100s", label: "Perception Gaps Closed" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple/40 to-purple origin-left z-50" 
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-24 lg:pt-28 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Fluid Ambient Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: [0, 90, 0],
              x: [0, 100, -50, 0],
              y: [0, -50, 50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-purple/[0.06] blur-[120px] rounded-[40%_60%_70%_30%]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1], 
              rotate: [0, -90, 0],
              x: [0, -80, 80, 0],
              y: [0, 80, -80, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple/[0.04] blur-[100px] rounded-[60%_40%_30%_70%]" 
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/10 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto section-px text-center pb-8 px-4"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4">
            <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px bg-purple/30 origin-left" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">
              For Quiet Mid-Career Women
            </span>
            <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px bg-purple/30 origin-right" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] leading-[1.05] tracking-tight text-black mb-6 perspective-[1000px]"
          >
            {heroLineOne.map((word, index) => (
              <motion.span
                variants={wordReveal}
                key={`hero-line-1-${word}-${index}`}
                className={`hero-word inline-block mr-2 md:mr-4 ${word === "executor" ? "font-medium" : ""}`}
                style={{ animationDelay: `${index * 0.65}s` }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {heroLineTwo.map((word, index) => (
              <motion.span
                variants={wordReveal}
                key={`hero-line-2-${word}-${index}`}
                className={`hero-word inline-block mr-2 md:mr-4 ${word === "leader." ? "italic font-medium" : ""}`}
                style={{ animationDelay: `${(heroLineOne.length + index) * 0.65}s` }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-black/80 max-w-2xl mx-auto mb-10 leading-[1.8] font-light"
          >
            Become the go-to choice for leadership, all while being unapologetically yourself.
            Be recognized as leadership-ready and not just the reliable executor.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full">
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get Started
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services#high-touch-1-1"
              className="group inline-flex items-center justify-center gap-3 text-black hover:text-purple text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-400 border-b border-black/20 hover:border-purple pb-1"
            >
              Book a Discovery Call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-10 md:py-16 px-4 md:px-12 lg:px-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Portrait/Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative w-full aspect-[4/5] bg-[#FAF9F6] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="absolute inset-0"
              >
                <Image
                  src="/images/jayita-portrait.png"
                  alt="Executive Coaching"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="flex flex-col justify-center"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-5">
                <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-12 h-px bg-purple/30 origin-left" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Real Issue</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-black mb-6 leading-[1.1]"
              >
                Feeling overlooked despite your capabilities?
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-6 text-black/80 text-lg leading-[1.85] font-light max-w-xl"
              >
                <p>
                  <strong>The Reality:</strong>{" "}You need to manage perception in your career effectively. Your hard work alone isn&apos;t enough if the right people aren&apos;t seeing your leadership potential.
                </p>
                <p>
                  <strong>The Struggle:</strong>{" "}It is deeply frustrating to feel consistently overlooked and undervalued when you know you are delivering exceptional results day in and day out.
                </p>
                <div className="pl-6 border-l-2 border-purple mt-6 py-1">
                  <p className="font-serif text-2xl md:text-3xl text-black italic leading-snug">
                    You deserve to be recognized for your true potential without having to change your core.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE FAILURE / STAKES ── */}
      <section className="py-10 md:py-16 px-4 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
             <motion.h3
                variants={fadeUp}
                className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-red-800/60 mb-4"
              >
                What Happens If Nothing Changes?
              </motion.h3>
              <motion.div
                variants={fadeUp}
                className="font-serif text-2xl md:text-4xl text-black leading-[1.4] max-w-3xl mx-auto"
              >
                If you do nothing, you will keep doing the heavy lifting while others get the promotions and recognition that you deserve.
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THE GUIDE ── */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-5">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-left" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Meet Your Guide</span>
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-right" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-black leading-[1.1] mb-6"
            >
              We understand how frustrating it feels to be overlooked.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-10 leading-[1.8] font-light"
            >
              With 22 years of total experience, including extensive HR leadership, I&apos;ve helped quiet mid-career women to close perception gaps and earn the recognition they truly deserve.
            </motion.p>
            
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-6 max-w-md mx-auto border-t border-black/10 pt-8"
            >
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <span className="block font-sans font-semibold tracking-tighter text-3xl sm:text-4xl text-black leading-none mb-2"
                  >
                    {s.value}
                  </span>
                  <span className="block text-[10px] uppercase font-sans tracking-[0.25em] text-black font-bold leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── THE PLAN ── */}
      <section className="py-10 md:py-16 px-4 md:px-12 lg:px-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-left" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Plan</span>
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-right" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-black leading-[1.05]"
            >
              A clear path to leadership readiness.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Schedule a Discovery Call",
                desc: "Book a complimentary call today to discuss your specific needs and career aspirations.",
              },
              {
                number: "02",
                title: "Take the Gap Audit",
                desc: "Complete the Promotion-Perception Gap Audit for tailored insights into how your leadership is perceived.",
              },
              {
                number: "03",
                title: "Join Coaching Sessions",
                desc: "Engage in 1-1 or group coaching sessions to bridge your gap and transition to a trusted leader.",
              },
            ].map((path, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative bg-white border border-black/5 p-6 md:p-10 hover:border-purple/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <span className="block font-serif text-3xl md:text-4xl text-purple/20 font-light leading-none mb-4 group-hover:text-purple/50 group-hover:-translate-y-1 group-hover:scale-110 origin-left transition-all duration-700">
                    {path.number}
                  </span>
                  <h3 className="font-serif text-2xl text-black mb-3 leading-[1.2]">
                    {path.title}
                  </h3>
                  <p className="text-black/80 font-sans text-sm md:text-base leading-[1.8] font-light">
                    {path.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES / PATHS PREVIEW ── */}
      <section className="py-10 md:py-16 px-4 md:px-12 lg:px-24 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-left" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Your Paths Forward</span>
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-right" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-black leading-[1.05]"
            >
              Three paths. One destination.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "1:1 Coaching",
                tag: "High-Touch Advisory",
                desc: "Begin with a complimentary 45-minute leadership coaching call to clarify your goals and next steps.",
                href: "/services#high-touch-1-1",
              },
              {
                number: "02",
                title: "Self-Learning",
                tag: "Quiet Authority",
                desc: "A focused reset to align how you see yourself and how others see you, so visibility matches performance.",
                href: "/services#quiet-authority-reset",
              },
              {
                number: "03",
                title: "Group Coaching",
                tag: "Perception Reset",
                desc: "See your career through a new lens and decode the system that shapes leadership perception.",
                href: "/services#perception-reset",
              },
            ].map((path, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative bg-white border border-black/5 p-8 md:p-10 hover:border-purple/40 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <span className="block font-serif text-4xl md:text-5xl text-purple/20 font-light leading-none mb-8 group-hover:text-purple/50 group-hover:-translate-y-1 group-hover:scale-110 origin-left transition-all duration-700">
                    {path.number}
                  </span>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple mb-4">{path.tag}</div>
                  <h3 className="font-serif text-2xl md:text-3xl text-black mb-6 leading-[1.1]">
                    {path.title}
                  </h3>
                  <p className="text-black/80 font-sans text-sm md:text-base leading-[1.8] font-light mb-6">
                    {path.desc}
                  </p>
                </div>
                <div className="flex items-center justify-start border-t border-black/5 pt-8 mt-auto">
                  <Link
                    href={path.href}
                    className="group/link inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-purple transition-colors duration-400"
                  >
                    <span className="border-b border-black/20 group-hover/link:border-purple pb-1 transition-colors duration-400">
                      Learn More
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform duration-400 group-hover/link:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SUCCESS ── */}
      <section className="py-10 md:py-16 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-5">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-left" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Results</span>
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 md:w-12 h-px bg-purple/40 origin-right" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-black leading-[1.1] mb-10"
            >
              Step into the role you deserve.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
               <motion.div variants={fadeUp} className="bg-[#FAF9F6] p-6 sm:p-10 border border-black/5 hover:border-purple/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                 <h3 className="font-serif text-2xl text-black mb-4">Increased Recognition</h3>
                 <p className="text-black/80 text-base md:text-lg leading-[1.8] font-light">
                   Experience increased recognition and undeniable confidence in your capabilities when you speak and lead.
                 </p>
               </motion.div>
               <motion.div variants={fadeUp} className="bg-[#FAF9F6] p-6 sm:p-10 border border-black/5 hover:border-purple/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                 <h3 className="font-serif text-2xl text-black mb-4">Empowered Leadership</h3>
                 <p className="text-black/80 text-base md:text-lg leading-[1.8] font-light">
                   Feel entirely empowered to lead effectively and authentically, achieving your career goals without changing who you are.
                 </p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER (Assessment) ── */}
      <section className="py-12 md:py-20 px-6 bg-[#FAF9F6] border-t border-black/5">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
            <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-12 h-px bg-purple/40 origin-left" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Take The First Step</span>
            <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-12 h-px bg-purple/40 origin-right" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-black leading-[1.05] mb-6"
          >
            Find your perception gap in 2 minutes.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/80 text-base md:text-lg font-light leading-[1.9] mb-10 max-w-2xl mx-auto"
          >
            Take our free diagnostic to understand exactly why your work isn&apos;t
            translating into the recognition and advancement you deserve.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/assessment"
              id="final-cta"
              className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Take the Perception Audit
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
