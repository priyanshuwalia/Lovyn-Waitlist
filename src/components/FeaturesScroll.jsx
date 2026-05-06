import  { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mic,  CheckCheck, User, MessageCircle, Heart, Star, Home,  } from 'lucide-react';

const FeaturesScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring to the scroll progress for buttery smooth transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate active section based on scroll progress
  const opacity0 = useTransform(smoothProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const opacity1 = useTransform(smoothProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const opacity2 = useTransform(smoothProgress, [0.58, 0.66, 1], [0, 1, 1]);

  const translateY0 = useTransform(smoothProgress, [0, 0.33], [0, -50]);
  const translateY1 = useTransform(smoothProgress, [0.25, 0.33, 0.66], [50, 0, -50]);
  const translateY2 = useTransform(smoothProgress, [0.58, 0.66, 1], [50, 0, 0]);

  const features = [
    {
      badge: "Intentionality",
      title: "Intent-based matchmaking.",
      desc: "Say goodbye to endless swiping. Lovyn connects you with people who share your relationship goals and values from day one.",
      opacity: opacity0,
      y: translateY0,
      badgeColor: "bg-[#E8F0E6] text-[#2C4A28]"
    },
    {
      badge: "Security",
      title: "Privacy-first Profiles",
      desc: "Your information stays confidential and secure throughout your journey.",
      opacity: opacity1,
      y: translateY1,
      badgeColor: "bg-[#EBEAF5] text-[#1D1D1F]"
    },
    {
      badge: "Culture",
      title: "Safe and respectful community",
      desc: "Meet people who value trust, respect, and sincerity.",
      opacity: opacity2,
      y: translateY2,
      badgeColor: "bg-[#E9E9F0] text-[#1D1D1F]"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#FDFDFD]">
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: Text Content */}
        <div className="relative w-full h-[35vh] lg:h-full lg:w-1/2 grid items-center lg:items-center px-6 lg:pl-24 lg:pr-16 z-20 pointer-events-none">
          <div className="grid w-full">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                style={{ opacity: feature.opacity, y: feature.y }}
                className="col-start-1 row-start-1 w-full lg:pl-24 space-y-2 sm:space-y-3 lg:space-y-6 text-center lg:text-left"
              >
                <span className={`inline-block px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black tracking-tight leading-tight text-balance">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base md:text-xl lg:text-[28px] text-[#8A8A8A] font-medium leading-relaxed text-pretty">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Phone Mockup */}
        <div className="relative w-full flex-1 lg:h-full lg:w-1/2 flex justify-center lg:justify-end items-start lg:items-center z-10 pointer-events-auto perspective-[1200px] lg:pr-24">
          
          {/* Mobile Scale Constraints Wrapper (Fixes the cut-off boundary issue) */}
          <div className="w-[300px] h-[390px] sm:h-[450px] md:h-[540px] lg:h-auto lg:w-auto flex justify-center items-start lg:items-center">
            
            {/* Phone Frame */}
            <div className="relative w-[300px] lg:w-[320px] h-[600px] lg:h-[650px] bg-black rounded-[40px] lg:rounded-[45px] border-[8px] lg:border-[10px] border-gray-900 shadow-2xl overflow-hidden flex flex-col shrink-0 transform origin-top lg:origin-center scale-[0.65] sm:scale-[0.75] md:scale-90 lg:scale-100">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
              </div>

              {/* SCREEN 1: Intent Matchmaking (Prompt Card) */}
              <motion.div style={{ opacity: opacity0 }} className="absolute inset-0 bg-[#FAFAFA] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 shadow-xl w-full border border-gray-100 shrink-0">
                  <p className="text-sm text-gray-500 mb-4">My ideal partnership looks like...</p>
                  <p className="text-lg font-bold text-black leading-tight mb-6">
                    Someone I can be completely comfortable with—where things feel easy, respectful, and understood without overexplaining everything.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-sm text-gray-400 border border-gray-100">
                      Send a reply to this
                    </div>
                    <Heart className="text-black fill-black" size={24} />
                  </div>
                </div>
              </motion.div>

              {/* SCREEN 2: Privacy Profile (Blurred Background) */}
              <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 bg-gray-900 overflow-hidden">
                {/* Blurred Mesh Gradient Background simulating a photo */}
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#5A6F4E] rounded-full mix-blend-multiply filter blur-[60px] animate-pulse" style={{ animationDuration: '6s'}}></div>
                  <div className="absolute top-[20%] right-[-10%] w-[80%] h-[80%] bg-[#E6D5B8] rounded-full mix-blend-multiply filter blur-[60px] animate-pulse" style={{ animationDuration: '8s'}}></div>
                  <div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[80%] bg-[#A8BCA1] rounded-full mix-blend-multiply filter blur-[60px] animate-pulse" style={{ animationDuration: '7s'}}></div>
                </div>

                {/* Glassmorphism UI Overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 pt-12 pb-[96px] flex flex-col backdrop-blur-md bg-black/10 z-10">
                  
                  {/* Profile Header: Initials & Age */}
                  <div className="flex items-center gap-4 mb-2 z-10 bg-white/10 p-3 rounded-2xl backdrop-blur-lg border border-white/20 shadow-lg shrink-0">
                    <div className="flex flex-col">
                      <h2 className=" font-bold text-white flex items-center gap-2 drop-shadow-md">
                        J. M, 28
                      </h2>
                    </div>
                  </div>

                  {/* Prompt Card (Smaller) */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl w-full mt-2 z-10 shrink-0">
                    <p className="text-xs text-gray-500 mb-2">My ideal partnership looks like...</p>
                    <p className="text-sm sm:text-base font-bold text-black leading-tight mb-4">
                      Someone I can be completely comfortable with—where things feel easy...
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-50 rounded-full px-3 py-2 text-xs text-gray-400 border border-gray-100">
                        Send a reply to this
                      </div>
                      <Heart className="text-black fill-black shrink-0" size={20} />
                    </div>
                  </div>

                  {/* Interests Section */}
                  <div className="mt-auto mb-5 w-full z-10 shrink-0">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-3 drop-shadow-md">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1.5 bg-white text-black text-xs sm:text-sm font-semibold rounded-md flex items-center gap-1 shadow-sm">
                        <CheckCheck size={14}/> Travelling
                      </div>
                      <div className="px-3 py-1.5 bg-white text-black text-xs sm:text-sm font-semibold rounded-md flex items-center gap-1 shadow-sm">
                        <CheckCheck size={14}/> Books
                      </div>
                      <div className="px-3 py-1.5 bg-white text-black text-xs sm:text-sm rounded-md shadow-sm">Music</div>
                      <div className="px-3 py-1.5 bg-white text-black text-xs sm:text-sm rounded-md shadow-sm">Dancing</div>
                      <div className="px-3 py-1.5 bg-white text-black text-xs sm:text-sm rounded-md shadow-sm">Modeling</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center items-center gap-4 w-full z-10 shrink-0">
                    <button className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-orange-500 text-3xl sm:text-4xl font-bold pb-1">
                      ×
                    </button>
                    <button className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
                    </button>
                    <button className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-purple-600">
                      <Star className="fill-current w-6 h-6 sm:w-7 sm:h-7" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* SCREEN 3: Community (Chat UI) */}
              <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 bg-white flex flex-col pt-12 pb-20 ">
                
                {/* Chat Header */}
                <div className="flex items-center px-4 py-2 border-b border-gray-100 bg-white z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-purple-600 p-0.5 relative">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-800 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="font-bold text-black text-sm leading-tight">P C</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#03b012]"></span> Online
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-xl">
                    <div className="flex flex-col gap-0.5">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  <div className="flex items-center justify-center my-2 gap-2">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Today</span>
                    <div className="h-px bg-gray-100 flex-1"></div>
                  </div>
                  
                  <div className="flex flex-col items-start space-y-1">
                    <div className="bg-[#EDEDED] text-black p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-snug">
                      Hi Jai, how are you? I saw you on the app and realized that we've crossed paths before 😄
                    </div>
                    <span className="text-[10px] text-gray-400 ml-1">2:55 PM</span>
                  </div>

                  <div className="flex flex-col items-end space-y-1">
                    <div className="bg-[#6B3E63] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm leading-snug">
                      Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <span className="text-[10px]">3:02 PM</span>
                      <CheckCheck size={12} className="text-gray-400" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="bg-[#EDEDED] text-black px-4 py-3 rounded-2xl rounded-tl-none text-sm">
                      Sure, let's do it! 😊
                    </div>
                    <span className="text-[10px] text-gray-400 ml-1">3:10 PM</span>
                  </div>
                  
                </div>

                {/* Chat Input */}
                <div className="absolute bottom-20 inset-x-0 px-4 py-3 bg-white flex gap-2 border-t border-gray-50 z-10 shrink-0">
                  <div className="flex-1 border border-gray-200 rounded-2xl flex items-center px-4 py-2.5">
                    <input type="text" placeholder="Your message" className="w-full text-sm outline-none bg-transparent placeholder-gray-400"/>
                    <span className="text-gray-400 ml-2 font-bold text-xl leading-none">○</span>
                  </div>
                  <button className="w-11 h-11 border border-gray-200 rounded-2xl flex items-center justify-center shrink-0">
                    <Mic size={18}/>
                  </button>
                </div>
              </motion.div>

              {/* Global Bottom App Nav Bar */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-[#F9F9F9] border-t border-gray-200 flex items-center justify-around px-6 z-50">
                <div className="flex flex-col items-center justify-center w-full pb-4">
                  <div className="flex justify-between w-full mb-3">
                    <Home size={24} className="text-gray-400" />
                    <Heart size={24} className="text-gray-400" />
                    <MessageCircle size={24} className="text-gray-400" />
                    <User size={24} className="text-gray-400" />
                  </div>
                  {/* Home Indicator */}
                  <div className="w-32 h-1 bg-black rounded-full opacity-30 mt-1"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesScroll;