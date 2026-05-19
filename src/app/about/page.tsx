"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.15 } },
};

const credentials = [
  { value: "22+", label: "Years in Senior Global HR" },
  { value: "12", label: "Countries Led as APAC HR Head" },
  { value: "500+", label: "Succession Discussions Witnessed" },
];

const values = [
  {
    icon: "◈",
    title: "Insider Knowledge",
    body: "I sat in the rooms where decisions were made. I know exactly how promotions are really decided.",
  },
  {
    icon: "◈",
    title: "Zero Performance Required",
    body: "Your introversion is a strategic asset, not a liability. We never ask you to fake extroversion.",
  },
  {
    icon: "◈",
    title: "Systemic, Not Superficial",
    body: "We build real signal clarity—not personal brand theater. Lasting change, not quick hacks.",
  },
];

const recognition = [
  {
    publication: "Mid-Day",
    title: "Next Big Brands of India – March 2026",
    href: "https://www.mid-day.com/buzz/article/next-big-brands-of-india-march-2026-9210",
  },
  {
    publication: "HR Today",
    title: "The Role of Leadership in Building Organisations (Authored by Jayita Roy)",
    href: "https://hrtoday.in/insights/the-role-of-leadership-in-building-organisations/",
  },
  {
    publication: "Indiaspark",
    title: "Quiet to Quite™ Founder Feature",
    href: "https://www.linkedin.com/posts/indiaspark_quiettoquite-womenintech-introvertpower-activity-7445793095637692416-OgYH?",
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans selection:bg-purple/20">

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden pb-4 lg:pb-8">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto section-px w-full pb-4 pt-32 lg:pt-40">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-purple">The Founder</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-[6rem] xl:text-[7rem] text-black leading-[1.05] tracking-tight max-w-5xl"
            >
              I sat in the rooms where{" "}
              <span className="font-serif italic font-medium text-purple">decisions were made.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="pt-4 pb-8 md:pb-12 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">

            {/* Portrait Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="relative aspect-[4/5] bg-white overflow-hidden shadow-2xl">
                <Image
                  src="/images/jayita-portrait-about.png"
                  alt="Jayita Roy - Executive Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                />
              </div>

            </motion.div>

            {/* Story text */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-8 md:w-12 h-px bg-purple/40" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Jayita Roy&apos;s Story</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="space-y-4 md:space-y-6 font-sans text-black text-base md:text-lg lg:text-xl leading-[1.8] md:leading-[1.9] font-light"
              >
                <p>
                  For 22 years, I served in senior global HR roles, culminating as APAC Head
                  of HR, leading 12 countries across the Asia-Pacific region. During that
                  time, I sat in hundreds of succession and promotion discussions.
                </p>
                <p>
                  I saw exactly how decisions were really made: not on merit alone, but on
                  perception, narrative, and who the room believed was ready. I watched
                  brilliant, capable women be passed over, not because they weren&apos;t ready,
                  but because they were <span className="font-medium text-purple underline decoration-purple/20 underline-offset-4">unreadable.</span>
                </p>
                <p className="text-black font-medium text-lg md:text-xl lg:text-2xl leading-[1.5]">
                  Their stillness was misread as hesitation. Their precision was mistaken
                  for inflexibility. Their refusal to &quot;play the game&quot; was interpreted as
                  lack of ambition.
                </p>
                <p>
                  I left corporate to fix this. Not by teaching women to perform
                  extroversion, but by helping them build strategic signal clarity that
                  honors exactly who they are.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 md:mt-8">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-4 bg-purple hover:bg-black text-white px-6 md:px-10 py-4 md:py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                >
                  Explore the Paths
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-500 group-hover:translate-x-1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-black/5 grid grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start"
              >
                {credentials.map((c, i) => (
                  <div key={i} className="group flex flex-col gap-2 md:gap-3 cursor-default">
                    <span className="font-serif text-2xl md:text-4xl lg:text-5xl text-black group-hover:text-purple group-hover:-translate-y-1 transition-all duration-500">
                      {c.value}
                    </span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium text-black leading-tight md:leading-relaxed group-hover:text-purple/80 transition-colors duration-500">
                      {c.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section className="py-6 md:py-8 px-4 md:px-6 bg-white relative overflow-hidden text-black border-y border-black/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          variants={fadeUp}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="font-serif text-6xl md:text-8xl text-purple/20 leading-none mb-4 md:mb-8 select-none inline-block origin-center"
          >
            &quot;
          </motion.div>
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.5] text-black mb-8 md:mb-12 font-medium flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 px-2">
            {"We exist so that no woman has to spend years wondering why her work isn't enough, when the real issue was never her capability, it was how she was being perceived.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="hover:text-purple transition-colors duration-300 cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <div className="inline-flex flex-col items-center gap-4">
            <span className="w-px h-8 md:h-10 bg-purple/30" />
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-purple">The Quiet to Quite Mission</p>
          </div>
        </motion.div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section className="py-8 md:py-6 px-4 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-4 md:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">The Difference</span>
              <span className="w-8 md:w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-black leading-[1.05] mb-8 md:mb-12">
              Why Quiet to Quite is different.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className="group p-6 md:p-8 lg:p-10 bg-white border border-black/5 hover:border-purple/40 hover:shadow-2xl transition-all duration-700"
              >
                <div className="text-purple/50 mb-6 md:mb-8 text-[12px] group-hover:text-purple transition-colors duration-700">
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-black mb-4 md:mb-6 leading-[1.2]">{v.title}</h3>
                <p className="text-black font-sans text-sm md:text-base leading-[1.8] font-light">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY RECOGNITION ── */}
      <section className="py-8 md:py-6 px-4 md:px-12 lg:px-24 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-px bg-purple/40" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Press & Features</span>
              <span className="w-8 md:w-12 h-px bg-purple/40" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-black leading-[1.05]"
            >
              Industry Recognition
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {recognition.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className="group p-6 md:p-8 lg:p-10 bg-white border border-black/5 hover:border-purple/40 hover:shadow-2xl transition-all duration-700 flex flex-col"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-purple mb-3 md:mb-4">Publication</span>
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-black mb-3 md:mb-4 leading-[1.2]">{item.publication}</h3>
                <p className="text-black/80 font-sans text-sm md:text-base leading-[1.8] font-light mb-6 md:mb-8">{item.title}</p>
                <span className="mt-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-black group-hover:text-purple transition-colors duration-400">
                  Read Article
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-400 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (Moved from Stories) ── */}
      <section className="py-8 bg-white relative border-t border-black/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple/[0.04] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-[1400px] mx-auto section-px relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-px bg-purple/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Client Stories</span>
            <span className="w-8 md:w-12 h-px bg-purple/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-black leading-[1.05] text-center mb-4 md:mb-6">
            The Quiet Shift.
          </h2>
          <div className="w-full max-w-6xl mx-auto">
            <StaggerTestimonials />
          </div>
        </div>
      </section>
    </div>
  );
}
