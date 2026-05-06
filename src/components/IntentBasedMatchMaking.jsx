import React from 'react';
import { motion } from 'framer-motion';

const IntentBasedMatchMaking = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen items-center justify-between bg-[#FDFDFD] px-6 py-20 lg:px-24 gap-16 overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 max-w-xl space-y-8 z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F0E6] text-[#2C4A28] text-sm font-semibold">
          Intentionality
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black tracking-tight leading-tight">
          Intent-based matchmaking.
        </h2>
        
        <p className="text-xl md:text-2xl lg:text-[28px] text-[#8A8A8A] font-medium leading-relaxed">
          Say goodbye to endless swiping. Lovyn connects you with people who share your relationship goals and values from day one.
        </p>
        
        {/* Features list */}
        <ul className="space-y-4 pt-4">
          {[
            'Value-aligned connections',
            'Relationship goal clarity',
            'Deep, meaningful prompts'
          ].map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-lg font-semibold text-gray-800">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Visual Element */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-[1200px]">
        {/* Abstract floating cards to represent matching */}
        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center mt-10 lg:mt-0">
          {/* Back Card */}
          <motion.div 
            initial={{ rotate: -5, x: -20, opacity: 0 }}
            whileInView={{ rotate: -15, x: -40, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute w-64 h-80 bg-[#F4F4F4] rounded-3xl border border-gray-200 shadow-xl z-0"
          />
          {/* Front Card */}
          <motion.div 
            initial={{ rotate: 10, x: 20, opacity: 0, scale: 0.9 }}
            whileInView={{ rotate: 5, x: 20, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute w-72 h-96 bg-white rounded-3xl border border-gray-100 shadow-2xl z-10 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E8F0E6] to-[#D0E2CE] mb-6 animate-pulse"></div>
            <div className="w-3/4 h-4 bg-gray-100 rounded-full mb-3"></div>
            <div className="w-1/2 h-4 bg-gray-100 rounded-full mb-8"></div>
            <div className="w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm">
              High Compatibility
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntentBasedMatchMaking;
