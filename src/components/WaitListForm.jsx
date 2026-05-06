import React from "react";
import Button from "./Button";

const WaitListForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 font-inter bg-white">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black tracking-tight text-balance">
          Join the Waitlist
        </h1>

        {/* Subtext */}
        <p className="text-center text-[#A3A3A3] mt-4 text-lg font-medium text-pretty">
          Be the first to experience a more intentional approach to connection.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
            />
          </div>

          {/* Why Lovyn */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5">
              Why Lovyn? <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows="3"
              placeholder="Tell us what you're looking for..."
              className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F5] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button type="submit" className="w-full py-4 text-lg" icon={false}>
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitListForm;