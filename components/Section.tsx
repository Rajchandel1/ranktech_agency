import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, light = false }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${light ? 'bg-white' : 'bg-slate-50'} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;