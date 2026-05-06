import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';

// Constants
const SCROLL_RANGE = [0, 300];
const COLOR_RANGE = ['#A3A3A3', '#000000'];

// Sub-component to handle the individual letter's scroll transformation
const AnimatedLetter = ({ char, index, totalLetters, scrollY }) => {
  // Calculate scroll start and end points for this specific letter
  const rangeStart = SCROLL_RANGE[0];
  const rangeEnd = SCROLL_RANGE[1];
  const step = (rangeEnd - rangeStart) / totalLetters;
  
  const start = rangeStart + (step * index);
  // Adding a multiplier to 'end' creates an overlap, resulting in a smooth gradient wipe 
  // instead of a harsh, single-letter snap.
  const end = start + (step * 3); 

  const color = useTransform(scrollY, [start, end], COLOR_RANGE);

  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  );
};

const HeroContent = ({ scrollY }) => {
  const animatedText = "A thoughtful platform for companionship, serious relationships, marriage-minded matches, and intentional partnerships.";
  const letters = animatedText.split('');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-4xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.1] text-balance">
        Find the connection that truly fits your life.
      </h1>

      <p className="text-xl md:text-3xl lg:text-[40px] font-bold leading-tight tracking-tight max-w-4xl mx-auto text-pretty">
        {letters.map((char, index) => (
          <AnimatedLetter
            key={index}
            char={char}
            index={index}
            totalLetters={letters.length}
            scrollY={scrollY}
          />
        ))}
      </p>
    </div>
  );
};

const HeroSection = () => {
  // Get global scroll position here and pass it down to avoid calling useScroll repeatedly
  const { scrollY } = useScroll();

  return (
    <section className="flex flex-col items-center justify-center bg-white pt-32 pb-20 px-6 text-center min-h-[70vh]">
      <HeroContent scrollY={scrollY} />

      <div className="mt-16">
        <Button>Join the Waitlist</Button>
      </div>
    </section>
  );
};

export default HeroSection;