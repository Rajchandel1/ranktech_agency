import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo(0, 0);
  };

  const handleSectionClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    else {
      window.scrollTo(0, 0);
    }
    // Allow default anchor behavior to handle hash scrolling
    setMobileMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('about');
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      // Small timeout to allow Home to mount before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={handleLogoClick} className="flex-shrink-0 flex items-center cursor-pointer gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <TrendingUp size={18} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Rank<span className="text-blue-600">&</span>Tech</span>
          </a>
          
          <div className="hidden md:flex space-x-1 items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
           <button onClick={handleSectionClick} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all">Home</button>
            <button onClick={handleAboutClick} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all">About</button>
            <a href="#features" onClick={handleSectionClick} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all">Features</a>
            <a href="#work" onClick={handleSectionClick} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all">Work</a>
            <a href="#experience" onClick={handleSectionClick} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all">Experience</a>
          </div>

          <div className="hidden md:flex">
             <button onClick={handleGetStarted} className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full top-20 left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={handleAboutClick} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">About</button>
            <a href="#features" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={handleSectionClick}>Features</a>
            <a href="#work" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={handleSectionClick}>Work</a>
            <a href="#experience" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={handleSectionClick}>Experience</a>
            <button onClick={handleGetStarted} className="w-full text-left block px-3 py-3 text-base font-medium text-blue-600 font-bold bg-blue-50 rounded-lg">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;