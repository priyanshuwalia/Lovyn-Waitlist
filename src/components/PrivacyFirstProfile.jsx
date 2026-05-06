import React from 'react';

const PrivacyFeature = () => {
  return (
    <section className="
      group flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-8 py-16 lg:px-24 gap-16 overflow-hidden
      /* Increase perspective to make 3D effects more dramatic */
      perspective-[1500px]
    ">
      
      {/* Left Side: Marketing Content */}
      {/* Animation: Slides up and fades in gently on page load */}
      <div className="w-full lg:w-1/2 max-w-xl space-y-6 z-10 animate-fadeSlideUp opacity-0" style={{ animationDelay: '200ms' }}>
        {/* Security Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#EBEAF5] text-[#1D1D1F] text-sm font-semibold">
          Security
        </span>
        
        {/* Heading */}
        <h1 className="text-5xl lg:text-[64px] font-extrabold text-black tracking-tight leading-tight">
          Privacy-first Profiles
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl lg:text-[28px] text-[#A3A3A3] font-semibold leading-snug">
          Your information stays confidential and secure throughout your journey.
        </p>
      </div>

      {/* Right Side: Animated Mobile Phone SVG */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1500px]">
        <img 
          src="/Rectangle.png" 
          alt="Privacy-first Profiles" 
          className="
            w-full max-w-[450px] object-contain 
            /* THE POP: Entry Animation - starts small, large rotate, springs to normal */
            animate-popEntry
            
            /* Initial 3D Tilt Position */
            transform-3d rotate-y-[-28deg] rotate-x-[8deg] skew-y-2
            
            /* SLICK INTERACTION: Parallax and Scaling on Section Hover */
            /* We use group-hover to activate movement from anywhere in the section */
            
            /* Straighten completely on hover with powerful scaling */
            group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:skew-y-0 group-hover:scale-[1.1]
            
            /* Apply dynamic shadow on hover to enhance depth */
            group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]
            
            /* Continuous breathing motion when idle, but slightly faster */
            animate-float3D
            
            /* The 'Slick' Transition: Uses cubic-bezier for spring-like bounce */
            transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)
          "
        />
      </div>

      {/* Global CSS for custom, high-energy animations */}
      <style jsx global>{`
        /* ENTRY ANIMATION (THE POP): Fast start, slight overshoot and settle */
        @keyframes popEntry {
          0% { opacity: 0; transform: scale(0.6) rotateY(-45deg) rotateX(20deg) translateY(50px); }
          100% { opacity: 1; transform: scale(1) rotateY(-28deg) rotateX(8deg) translateY(0); }
        }
        .animate-popEntry {
          animation: popEntry 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Continuous Dynamic Float: Moves in multiple axes */
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateY(-28deg) rotateX(8deg); }
          50% { transform: translateY(-25px) rotateY(-22deg) rotateX(5deg); }
        }
        .animate-float3D {
          animation: float3D 5s ease-in-out infinite;
          /* Ensure rotation doesn't reset when we straighten on hover */
          animation-play-state: running; 
        }
        .group:hover .animate-float3D {
          animation-play-state: paused; /* Pause floating when user is interacting */
        }

        /* Gentle fade-in for the text content */
        @keyframes fadeSlideUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          transform: translateY(20px);
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PrivacyFeature;