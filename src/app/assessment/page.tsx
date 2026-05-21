"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

const questions = [
  {
    id: "q1",
    question: "Do you often feel that your work speaks for itself, but leadership still overlooks you for promotions?",
    options: ["Yes, constantly.", "Sometimes, depending on the room.", "Rarely, I make sure I am seen."],
  },
  {
    id: "q2",
    question: "When told to 'speak up more', do you feel pressured to perform a version of extroversion that drains you?",
    options: ["Yes, it feels completely inauthentic.", "A bit, but I push through it.", "No, I am comfortable adapting."],
  },
  {
    id: "q3",
    question: "In high-stakes meetings, do you prefer to observe and synthesize before speaking?",
    options: ["Always. I need to process first.", "Usually, unless I am the expert.", "No, I prefer to think out loud."],
  },
  {
    id: "q4",
    question: "Has your stillness ever been mischaracterized as hesitation or lack of confidence?",
    options: ["Yes, I've received this exact feedback.", "I suspect it has been.", "No, I am usually read clearly."],
  },
  {
    id: "q5",
    question: "Do you worry that refusing to 'play the political game' will ultimately stall your career?",
    options: ["Yes, it's my biggest career fear.", "Sometimes, but I try not to focus on it.", "No, I believe my results will win out."],
  },
  {
    id: "q6",
    question: "Are you tired of being the 'reliable executor' instead of the strategic visionary?",
    options: ["Exhausted by it.", "I enjoy execution, but want more strategy.", "I already feel seen as a visionary."],
  },
  {
    id: "q7",
    question: "Are you ready to build visibility on your own terms, without compromising your natural disposition?",
    options: ["Absolutely ready.", "I want to, but I'm not sure how.", "I think I'm doing okay right now."],
  },
];

const fadeSlide = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function Assessment() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (localStorage.getItem("assessmentCompleted")) {
      router.replace("/assessment/result");
    }
  }, [router]);

  if (!isClient) return null;

  const handleOptionSelect = (option: string, optionIndex: number) => {
    if (selected !== null) return;
    
    setSelected(option);
    
    // Add points: Option 1 = 3pts, Option 2 = 2pts, Option 3 = 1pt
    const points = 3 - optionIndex;
    setScore((prev) => prev + points);

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setSelected(null);
        setCurrentStep((prev) => prev + 1);
      }, 650);
    } else {
      setTimeout(() => {
        setIsAnalyzing(true);
        setTimeout(() => {
          localStorage.setItem("assessmentCompleted", "true");
          localStorage.setItem("assessmentScore", String(score + points));
          router.push("/assessment/result");
        }, 3200);
      }, 650);
    }
  };

  const progress =
    currentStep < questions.length ? ((currentStep) / questions.length) * 100 : 100;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-purple/20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-40">
        <motion.div
          className="h-full bg-purple"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-2xl">

          {/* Header label */}
          <AnimatePresence mode="wait">
            {currentStep < questions.length && !isAnalyzing && (
              <motion.div
                key="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-between mb-6"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-purple/40" />
                  <span className="text-xs uppercase tracking-[0.25em] font-medium text-purple">Visibility Assessment</span>
                </div>
                <span className="text-xs tracking-[0.15em] font-medium text-black">
                  {currentStep + 1} / {questions.length}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dot progress */}
          {currentStep < questions.length && !isAnalyzing && (
            <div className="flex gap-3 justify-center mb-8">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 rounded-full ${idx < currentStep
                      ? "w-8 h-1 bg-purple"
                      : idx === currentStep
                        ? "w-8 h-1 bg-black"
                        : "w-2 h-1 bg-black/10"
                    }`}
                />
              ))}
            </div>
          )}

          {/* Main content area */}
          <div className="relative min-h-[480px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  {/* Animated ring */}
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-2 border-black/5 rounded-full" />
                    <div className="absolute inset-0 border-t-2 border-purple rounded-full animate-spin" style={{ animationDuration: "1.5s" }} />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Synthesizing your responses…</h2>
                  <p className="text-xs uppercase tracking-[0.25em] font-medium text-black">Identifying your unique perception gaps</p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  variants={fadeSlide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="w-full flex flex-col"
                >
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-black leading-[1.35] mb-8 text-center">
                    {questions[currentStep].question}
                  </h2>

                  <div className="space-y-4 max-w-xl mx-auto w-full">
                    {questions[currentStep].options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        onClick={() => handleOptionSelect(option, idx)}
                        id={`option-${currentStep}-${idx}`}
                        className={`w-full text-left p-6 border transition-all duration-400 group ${selected === option
                            ? "border-black bg-black/5 text-black"
                            : "border-black/10 text-black hover:border-black/40 hover:text-black hover:bg-black/[0.02]"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-lg font-light leading-snug pr-4">{option}</span>
                          <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full border flex-shrink-0 transition-all duration-300 ${selected === option
                                ? "border-black bg-black text-white"
                                : "border-black/20 group-hover:border-black/40 text-transparent"
                              }`}
                          >
                            <Check className="w-4 h-4" strokeWidth={3} />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
