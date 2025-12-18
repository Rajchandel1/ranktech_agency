import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import CaseStudy1 from '../pages/CaseStudy1';
import CaseStudy2 from '../pages/CaseStudy2';
import CaseStudy3 from '../pages/CaseStudy3';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <Home onNavigate={setCurrentPage} />
      ) : currentPage === 'about' ? (
        <About onNavigate={setCurrentPage} />
      ) : currentPage === 'casestudy1' ? (
        <CaseStudy1 onNavigate={setCurrentPage} />
      ) : currentPage === 'casestudy2' ? (
        <CaseStudy2 onNavigate={setCurrentPage} />
      ) : currentPage === 'casestudy3' ? (
        <CaseStudy3 onNavigate={setCurrentPage} />
      ) : (
        <Services />
      )}
      <Footer />
    </div>
  );
};

export default App;