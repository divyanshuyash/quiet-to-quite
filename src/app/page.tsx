"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
};

const heroLineOne = ["Confidence", "is", "overrated."];
const heroLineTwo = ["Signal", "clarity", "is", "everything."];

const stats = [
  { value: "22+", label: "Years in Global HR" },
  { value: "12", label: "Countries Led" },
  { value: "100s", label: "Leaders Elevated" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 lg:pt-28 overflow-hidden bg-white">
        {/* Ambient aesthetic background for now until video is added */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-purple/[0.04] blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/10 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto section-px text-center pb-8"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-purple/30" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">
              Leadership Visibility Coaching
            </span>
            <span className="w-10 h-px bg-purple/30" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] tracking-tight text-black mb-4"
          >
            {heroLineOne.map((word, index) => (
              <span
                key={`hero-line-1-${word}-${index}`}
                className={`hero-word ${word === "overrated." ? "font-medium" : ""}`}
                style={{ animationDelay: `${index * 0.65}s` }}
              >
                {word}{index < heroLineOne.length - 1 ? " " : ""}
              </span>
            ))}
            <br />
            {heroLineTwo.map((word, index) => (
              <span
                key={`hero-line-2-${word}-${index}`}
                className={`hero-word ${word === "everything." ? "italic font-medium" : ""}`}
                style={{ animationDelay: `${(heroLineOne.length + index) * 0.65}s` }}
              >
                {word}{index < heroLineTwo.length - 1 ? " " : ""}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-black max-w-2xl mx-auto mb-6 leading-[1.8] font-light"
          >
            For high-performing, introverted women who deliver exceptional results
            but get passed over. Become impossible to overlook, without performing extroversion.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/assessment"
              id="hero-primary-cta"
              className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg"
            >
              Discover Your Visibility Gap
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
              href="/services"
              id="hero-secondary-cta"
              className="group inline-flex items-center gap-3 text-black hover:text-purple text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-400 border-b border-black/20 hover:border-purple pb-1"
            >
              Explore Paths
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-6 pt-6 border-t border-black/10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-black font-medium leading-none mb-3">
                  {s.value}
                </span>
                <span className="block text-[10px] uppercase font-sans tracking-[0.25em] text-black font-medium leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── THE ISSUE (Editorial Split) ── */}
      <section className="py-12 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center">

            {/* Left: Beautifully framed portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative w-full aspect-[4/5] bg-sand overflow-hidden"
            >
              <Image
                src="/images/jayita-portrait.png"
                alt="Jayita - Executive Coach"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="flex flex-col justify-center"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-taupe" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Real Problem</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-black mb-6 leading-[1.05]"
              >
                The issue is never your capability.
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-6 text-black text-lg leading-[1.9] font-light max-w-xl"
              >
                <p>
                  You&apos;re told to &quot;speak up more,&quot; &quot;be more visible,&quot; and &quot;be more
                  collaborative&quot;, while watching louder, less capable peers advance.
                </p>
                <p>
                  Your stillness is misread as hesitation. Your silence is mistaken for
                  uncertainty. You sit in rooms where decisions are made not on merit alone,
                  but on perception, narrative, and who the room believes is ready.
                </p>
                <p className="font-medium text-black text-lg">
                  You don&apos;t have to become someone you&apos;re not to get the role you deserve.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-14">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-black hover:text-purple text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-400"
                >
                  <span className="border-b border-black/30 group-hover:border-purple pb-1 transition-colors duration-400">
                    Learn My Story
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-400 group-hover:translate-x-1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED IN ── */}
      <section className="py-6 px-6 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-center text-[10px] uppercase text-black tracking-[0.3em] font-medium mb-6">
            22 Years Elevating Leaders Across
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
            {["Global Technology", "Investment Banking", "Management Consulting", "Healthcare"].map(
              (sector) => (
                <span
                  key={sector}
                  className="font-serif text-xl text-black hover:text-purple transition-colors duration-500"
                >
                  {sector}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── PATHS PREVIEW ── */}
      <section className="py-12 md:py-6 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Your Paths Forward</span>
              <span className="w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-black leading-[1.05]"
            >
              Three paths. One destination.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "High-Touch 1:1",
                tag: "Start Here",
                desc: "Begin with a complimentary 45-minute leadership coaching call to clarify your goals and next steps.",
                href: "https://elevate.quiettoquite.com/web/lite/events/69ce103a8a93be6046808486",
              },
              {
                number: "02",
                title: "Quiet Authority Reset",
                tag: "Core Program",
                desc: "A focused reset to align how you see yourself and how others see you, so visibility matches performance.",
                href: "https://elevate.quiettoquite.com/web/courses",
              },
              {
                number: "03",
                title: "Perception Reset",
                tag: "Focused Session",
                desc: "See your career through a new lens and decode the system that shapes leadership perception.",
                href: "https://elevate.quiettoquite.com/l/5246e16263",
              },
            ].map((path, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative bg-white border border-black/5 p-10 hover:border-purple/40 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <span className="block font-serif text-5xl text-purple/20 font-light leading-none mb-8 group-hover:text-purple/50 transition-colors duration-700">
                    {path.number}
                  </span>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple mb-4">{path.tag}</div>
                  <h3 className="font-serif text-3xl md:text-4xl text-black mb-6 leading-[1.1]">
                    {path.title}
                  </h3>
                  <p className="text-black font-sans text-base leading-[1.8] font-light mb-6">
                    {path.desc}
                  </p>
                </div>
                <div className="flex items-center justify-start border-t border-black/5 pt-8 mt-auto">
                  <Link
                    href={path.href}
                    className="group/link inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:text-purple transition-colors duration-400"
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

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-6 px-6 bg-white border-t border-black/5">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-purple/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Take The First Step</span>
            <span className="w-12 h-px bg-purple/40" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-[1.05] mb-8"
          >
            Find your visibility gap in 2 minutes.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black text-lg font-light leading-[1.9] mb-8 max-w-2xl mx-auto"
          >
            Take our free diagnostic to understand exactly why your work isn&apos;t
            translating into the recognition and advancement you deserve.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/assessment"
              id="final-cta"
              className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
            >
              Take the Assessment
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
