import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, className = '', onClick, type = 'button', icon = true }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight 
          size={20} 
          className="group-hover:translate-x-1 transition-transform" 
        />
      )}
    </button>
  );
};

export default Button;
