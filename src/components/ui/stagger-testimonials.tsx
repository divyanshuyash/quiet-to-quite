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
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out font-sans flex flex-col",
        isCenter 
          ? "z-10 bg-purple text-white border-purple" 
          : "z-0 bg-white text-black border-black/10 hover:border-purple/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
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
      <div className="relative mb-6 h-16 w-16 grayscale opacity-90 transition-all duration-500 hover:grayscale-0">
        <Image
          src={testimonial.imgSrc}
          alt={testimonial.by}
          fill
          className="object-cover object-center"
          sizes="64px"
        />
        <div 
          className="absolute inset-0 z-[-1]" 
          style={{ boxShadow: isCenter ? "4px 4px 0px rgba(255,255,255,0.2)" : "4px 4px 0px rgba(0,0,0,0.05)" }} 
        />
      </div>
      <h3 className={cn(
        "text-lg lg:text-xl font-serif font-bold mb-auto leading-relaxed",
        isCenter ? "text-white" : "text-black"
      )}>
        {testimonial.testimonial}
      </h3>
      <div className={cn(
        "mt-6 flex flex-col gap-1",
        isCenter ? "text-white/80" : "text-black/60"
      )}>
        <p className="font-bold text-xs uppercase tracking-[0.2em]">{testimonial.by}</p>
        <p className="text-[10px] uppercase tracking-widest">{testimonial.role}</p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
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
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 300);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 600 }}
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
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300",
            "bg-white border border-black/10 text-black hover:border-purple hover:text-purple shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300",
            "bg-white border border-black/10 text-black hover:border-purple hover:text-purple shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};