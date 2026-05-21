"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const insights = [
  {
    icon: "◆",
    title: "The Execution Trap",
    body: "You've been taught that results speak for themselves. They don't—not alone. Strategic narrative is the missing layer.",
  },
  {
    icon: "◆",
    title: "Visibility vs. Performance",
    body: "Visibility is not self-promotion or bragging. It is signal clarity—helping decision-makers perceive you accurately.",
  },
  {
    icon: "◆",
    title: "The Quiet Advantage",
    body: "Your depth, precision, and ability to synthesize are strategic assets—when positioned correctly.",
  },
];

export default function AssessmentResult() {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem("assessmentScore");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">

      {/* ── RESULT BANNER ── */}
      <section className="relative bg-white overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto section-px pt-32 lg:pt-40 pb-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-10">
              <span className="w-10 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">Assessment Results</span>
              <span className="w-10 h-px bg-purple/40" />
            </motion.div>

            {score !== null && (
              <motion.div variants={fadeUp} className="mb-14 flex flex-col items-center gap-4">
                <span className="inline-block border border-black/10 rounded-full px-8 py-3 text-base font-semibold text-black tracking-wide shadow-sm hover:shadow-md transition-shadow">
                  Visibility Score: {score} / 21
                </span>
                <Link
                  href="/assessment"
                  onClick={() => {
                    localStorage.removeItem("assessmentCompleted");
                    localStorage.removeItem("assessmentScore");
                  }}
                  className="mt-2 text-purple/90 hover:text-black text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-400 border-b border-purple/20 hover:border-black pb-1"
                >
                  ↺ Retake Assessment
                </Link>
              </motion.div>
            )}

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-[6rem] text-black leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6"
            >
              You are not{" "}
              <span className="font-serif italic font-medium text-purple">&quot;too quiet&quot;</span>{" "}
              for leadership.
              <br />
              <span className="text-black">You are simply misread.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-black leading-[1.85] font-light max-w-2xl mx-auto"
            >
              The feedback reveals that you&apos;ve been relying heavily on the &quot;execution
              trap&quot;, believing that your results alone will speak for you. It&apos;s time to build
              a visibility strategy that honors your natural disposition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── KEY INSIGHTS ── */}
      <section className="py-12 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">What The Data Reveals</span>
              <span className="w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-black leading-[1.05]">
              Three insights about your perception gap.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative p-10 bg-white border border-black/5 rounded-3xl hover:border-purple/30 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden"
              >
                {/* Decorative hover gradient in corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-purple/15" />
                
                <h3 className="text-6xl font-serif text-purple/10 mb-4 font-light transition-colors duration-700 group-hover:text-purple/20">
                  0{i + 1}
                </h3>
                <h4 className="font-serif text-2xl md:text-3xl text-black mb-4 leading-[1.2]">{insight.title}</h4>
                <p className="text-black/80 font-sans text-base leading-[1.8] font-light">{insight.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-6 px-6 max-w-[1400px] mx-auto w-full">
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-purple/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">A Message From Jayita</span>
            <span className="w-12 h-px bg-purple/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[3.5rem] text-black leading-[1.05]">
            Watch this before you take the next step.
          </h2>
        </motion.div>

        <motion.div
          className="relative aspect-video w-full max-w-5xl mx-auto bg-white group cursor-pointer overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image */}
          <Image
            src="/images/video_thumbnail.png"
            alt="Masterclass Overview"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 mix-blend-overlay" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/90 flex items-center justify-center rounded-full shadow-xl group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
              <Play className="w-8 h-8 text-black ml-2" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── NEXT STEP CTA ── */}
      <section className="py-12 md:py-6 px-6 bg-white relative overflow-hidden text-black mt-8 border-t border-black/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple/[0.1] blur-[120px] rounded-full" />
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-purple/30" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Next Step</span>
            <span className="w-12 h-px bg-purple/30" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-black mb-6 leading-[1.05]"
          >
            You&apos;re ready for the reset.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-black leading-[1.85] font-light mb-6 max-w-xl mx-auto"
          >
            A 30-day leadership perception reset plan. Stop being the reliable executor
            and start being seen as the strategic visionary you already are.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/services#quiet-authority-reset"
              id="assessment-result-cta"
              className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
            >
              Begin Path One
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-500 group-hover:translate-x-1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services#high-touch-1-1"
              className="group inline-flex items-center gap-3 text-black hover:text-purple text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-400 border-b border-black/20 hover:border-purple pb-1"
            >
              Explore 1:1 Advisory
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
