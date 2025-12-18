import React from 'react';

interface DecorationProps {
  className?: string;
  color?: string;
  delay?: string;
}

export const HandUnderline: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible`} viewBox="0 0 200 15" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M5 10 Q 50 15, 100 5 T 195 10" 
      strokeDasharray="300" 
      strokeDashoffset="300" 
      className="animate-draw" 
      style={{ animationDelay: delay }}
    />
  </svg>
);

export const HandArrowCurved: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible`} viewBox="0 0 100 80" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M10 10 C 30 50, 70 50, 90 70" 
      strokeDasharray="200" 
      strokeDashoffset="200" 
      className="animate-draw"
      style={{ animationDelay: delay }}
    />
    <path 
      d="M75 65 L 90 70 L 85 55" 
      strokeDasharray="50" 
      strokeDashoffset="50" 
      className="animate-draw"
      style={{ animationDelay: `calc(${delay} + 0.5s)` }}
    />
  </svg>
);

export const HandCircle: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible`} viewBox="0 0 150 100" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M20 30 Q 80 10, 130 40 Q 150 70, 120 90 Q 60 110, 20 80 Q -10 50, 20 30 M 20 30 L 25 35" 
      strokeDasharray="500" 
      strokeDashoffset="500" 
      className="animate-draw"
      style={{ animationDelay: delay }}
    />
  </svg>
);

export const HandSparkle: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible animate-wiggle`} viewBox="0 0 50 50" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M25 10 L 30 20 L 40 25 L 30 30 L 25 40 L 20 30 L 10 25 L 20 20 Z" 
      strokeDasharray="150" 
      strokeDashoffset="150" 
      className="animate-draw"
      style={{ animationDelay: delay }}
    />
  </svg>
);

export const HandSquiggle: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible`} viewBox="0 0 50 200" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M25 10 Q 40 30, 25 50 T 25 90 T 25 130 T 25 170" 
      strokeDasharray="400" 
      strokeDashoffset="400" 
      className="animate-draw"
      style={{ animationDelay: delay }}
    />
  </svg>
);

export const HandArrowLoop: React.FC<DecorationProps> = ({ className = "", color = "currentColor", delay = "0s" }) => (
  <svg className={`${className} overflow-visible`} viewBox="0 0 100 60" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path 
      d="M10 40 C 30 10, 80 10, 90 40" 
      strokeDasharray="200" 
      strokeDashoffset="200" 
      className="animate-draw"
      style={{ animationDelay: delay }}
    />
    <path 
      d="M80 35 L 90 40 L 85 50" 
      strokeDasharray="50" 
      strokeDashoffset="50" 
      className="animate-draw"
      style={{ animationDelay: `calc(${delay} + 0.5s)` }}
    />
  </svg>
);
