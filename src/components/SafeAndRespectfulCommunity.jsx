import React from 'react';
import { Mic, Clock, CheckCheck } from 'lucide-react';

const CommunityComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-white p-6 lg:p-20 gap-16">
      
      {/* Left Side: Marketing Content */}
      <div className="max-w-md space-y-6">
        <span className="inline-block px-4 py-1 rounded-full bg-[#E9E9F0] text-[#1D1D1F] text-sm font-semibold">
          Culture
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-black leading-tight">
          Safe and respectful community
        </h1>
        <p className="text-2xl text-gray-400 font-medium leading-relaxed">
          Meet people who value trust, respect, and sincerity.
        </p>
      </div>

      {/* Right Side: Chat Interface */}
      <div className="w-full max-w-112.5 flex flex-col">
        
        {/* Date Separator */}
        <div className="flex items-center my-8">
          <div className="grow h-px bg-gray-200"></div>
          <span className="px-4 text-sm font-medium text-gray-500">Today</span>
          <div className="grow h-px bg-gray-200"></div>
        </div>

        {/* Chat Messages Container */}
        <div className="space-y-6">
          
          {/* Incoming Message 1 */}
          <div className="flex flex-col items-start space-y-1">
            <div className="bg-[#EDEDED] text-black p-5 rounded-3xl rounded-tl-none max-w-[85%] text-[17px] leading-snug">
              Hi Jai, how are you? I saw you on the app and realized that we've crossed paths before 😄
            </div>
            <span className="text-sm text-gray-400 ml-1">2:55 PM</span>
          </div>

          {/* Outgoing Message 1 */}
          <div className="flex flex-col items-end space-y-1">
            <div className="bg-[#6B3E63] text-white p-5 rounded-3xl rounded-tr-none max-w-[85%] text-[17px] leading-snug">
              OMG! You're Right. I think it's a sign. How about a cup of coffee today evening? ☕️
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span className="text-sm">3:02 PM</span>
              <CheckCheck size={16} className="text-gray-400" />
            </div>
          </div>

          {/* Incoming Message 2 */}
          <div className="flex flex-col items-start space-y-1">
            <div className="bg-[#EDEDED] text-black p-4 px-6 rounded-3xl rounded-tl-none text-[17px]">
              Sure, let's do it! 😊
            </div>
            <span className="text-sm text-gray-400 ml-1">3:10 PM</span>
          </div>

          {/* Outgoing Message 2 */}
          <div className="flex flex-col items-end space-y-1">
            <div className="bg-[#6B3E63] text-white p-5 rounded-3xl rounded-tr-none max-w-[85%] text-[17px] leading-snug">
              Great I will write later the exact time and place. See you soon!
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span className="text-sm">3:12 PM</span>
              <CheckCheck size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-12 flex items-center gap-3">
          <div className="grow flex items-center bg-white border border-gray-200 rounded-3xl px-6 py-4 shadow-sm">
            <input 
              type="text" 
              placeholder="Your message" 
              className="grow outline-none text-gray-600 placeholder-gray-400 text-lg"
            />
            <Clock className="text-gray-400 ml-2" size={24} />
          </div>
          <button className="flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <Mic className="text-black" size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CommunityComponent;