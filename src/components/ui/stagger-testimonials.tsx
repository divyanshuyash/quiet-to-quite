"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SQRT_5000 = Math.sqrt(5000);

export const testimonials = [
  {
    tempId: 0,
    testimonial: "Jayita helped me distinguish between self-promotion and self-bragging. What previously felt uncomfortable now comes across as authentic and professional.",
    by: "Priya P.",
    role: "Senior Manager, Payment & Neo-Banking Solutions",
    imgSrc: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    tempId: 1,
    testimonial: "My experience working with Jayita has been genuinely transformative. She guided me with clarity and patience. What stood out most was how she tailored my journey.",
    by: "Poornima Christopher",
    role: "HR Consultant",
    imgSrc: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    tempId: 2,
    testimonial: "I was at a crucial transition into senior leadership. Jayita helped me shift my mindset—organizational politics does not have to be perceived negatively.",
    by: "Kriti Rao",
    role: "Director OD",
    imgSrc: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    tempId: 3,
    testimonial: "Before Jayita, my stillness was misread as hesitation. Now, I use it as a strategic asset. I've finally secured the promotion I was passed over for twice.",
    by: "Sarah M.",
    role: "VP of Engineering",
    imgSrc: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    tempId: 4,
    testimonial: "She didn't ask me to be an extrovert. She showed me how to be powerfully, undeniably myself in rooms that used to intimidate me.",
    by: "Anita D.",
    role: "Managing Director",
    imgSrc: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardWidth: number;
  cardHeight: number;
  isMobile: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardWidth,
  cardHeight,
  isMobile
}) => {
  const isCenter = position === 0;
  
  // On mobile, we only display the center card and the immediate left/right adjacent cards
  const isVisible = !isMobile || Math.abs(position) <= 1;

  // Mobile layout metrics for overlapping stacked deck aesthetic
  const mobileScale = isCenter ? 1 : 0.85;
  const mobileOpacity = isCenter ? 1 : 0.25;
  const mobileTranslateX = position * 65; // snug overlapping width
  const mobileTranslateY = isCenter ? -30 : -10;
  const mobileRotate = isCenter ? 0 : position * 3.5;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-5 md:p-8 transition-all duration-500 ease-in-out font-sans flex flex-col",
        isCenter 
          ? "z-10 bg-purple text-white border-purple shadow-xl" 
          : "z-0 bg-white text-black border-black/10 hover:border-purple/50",
        !isVisible && "opacity-0 pointer-events-none scale-75"
      )}
      style={{
        width: cardWidth,
        height: cardHeight,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: isMobile 
          ? `translate(-50%, -50%) translateX(${mobileTranslateX}px) translateY(${mobileTranslateY}px) scale(${mobileScale}) rotate(${mobileRotate}deg)`
          : `
            translate(-50%, -50%) 
            translateX(${(cardWidth / 1.5) * position}px)
            translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
            rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          `,
        opacity: isMobile ? (isVisible ? mobileOpacity : 0) : undefined,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(112, 47, 138, 0.1)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45 transition-colors duration-500",
          isCenter ? "bg-purple-800" : "bg-black/10"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1
        }}
      />
      
      {/* Avatar Image */}
      <div className="relative mb-3 h-10 w-10 md:h-16 md:w-16 grayscale opacity-90 transition-all duration-500 hover:grayscale-0 flex-shrink-0">
        <Image
          src={testimonial.imgSrc}
          alt={testimonial.by}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 40px, 64px"
        />
        <div 
          className="absolute inset-0 z-[-1]" 
          style={{ boxShadow: isCenter ? "4px 4px 0px rgba(255,255,255,0.2)" : "4px 4px 0px rgba(0,0,0,0.05)" }} 
        />
      </div>

      {/* Testimonial Quote */}
      <h3 className={cn(
        "text-[12px] xs:text-[13.5px] md:text-lg lg:text-xl font-serif font-bold mb-auto leading-relaxed",
        isCenter ? "text-white" : "text-black"
      )}>
        {testimonial.testimonial}
      </h3>

      {/* Author Details */}
      <div className={cn(
        "mt-3 flex flex-col gap-0.5 border-t pt-2.5 md:pt-4 flex-shrink-0",
        isCenter ? "text-white/80 border-white/10" : "text-black/60 border-black/5"
      )}>
        <p className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">{testimonial.by}</p>
        <p className="text-[8px] md:text-[10px] uppercase tracking-widest leading-normal">{testimonial.role}</p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(280);
  const [cardHeight, setCardHeight] = useState(220);
  const [isMobile, setIsMobile] = useState(true);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      if (typeof window === 'undefined') return;
      
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      const isSm = window.matchMedia("(min-width: 640px)").matches;
      
      let width = 280;
      let height = 220;
      let mobile = true;

      if (isSm) {
        width = 300;
        height = 300;
        mobile = false;
      }
      if (isMd) {
        width = 340;
        height = 340;
        mobile = false;
      }
      if (isLg) {
        width = 380;
        height = 380;
        mobile = false;
      }
      
      setCardWidth(width);
      setCardHeight(height);
      setIsMobile(mobile);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent px-4 animate-in fade-in duration-700"
      style={{ height: isMobile ? 310 : 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            isMobile={isMobile}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:gap-4">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center transition-all duration-300",
            "bg-white border border-black/10 text-black hover:border-purple hover:text-purple shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center transition-all duration-300",
            "bg-white border border-black/10 text-black hover:border-purple hover:text-purple shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};