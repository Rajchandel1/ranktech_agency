import React from 'react';
import { TrendingUp } from 'lucide-react';
import { InstagramLogo, LinkedInLogo } from './BrandIcons';
import { useState } from 'react';
const Footer = () => {
    const [showForm, setShowForm] = useState(false);
    
  
  return (
    <>
      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Book Your Free Consultation</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-slate-600 mb-6">Let's discuss your SEO goals and how I can help you achieve measurable results.</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="c75a45aa-5064-4e9e-977c-4fc6c5f854f8" />
              <input type="hidden" name="subject" value="New Consultation Request - Rank&Tech" />
              <input type="hidden" name="from_name" value="Rank&Tech Consultation Form" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" name="first_name" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="shravan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" name="last_name" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="chauhan" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="abc@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input type="text" name="company" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                <input type="url" name="website" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://yourwebsite.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Challenges</label>
                <textarea name="challenges" rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Tell me about your current SEO challenges..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Goals</label>
                <textarea name="goals" rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="What are your main objectives?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      )}

    {/* Footer */}
      <footer className="bg-slate-900  text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">SHRAVAN CHAUHAN</h3>
              <p className="text-slate-400 mb-6">
                Data-Driven SEO, Measurable Growth, and High-Impact Digital Strategy. I help brands scale organically.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Technical Audits</a></li>
                <li><a href="#" className="hover:text-white">eCommerce SEO</a></li>
                <li><a href="#" className="hover:text-white">Content Strategy</a></li>
                <li><a href="#" className="hover:text-white">Local SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">SEO Blog</a></li>
                <li><a href="#" className="hover:text-white">Free SEO Tools</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold mb-2">Get in Touch</h4>
                <p className="text-slate-400">Ready to grow your traffic?</p>
                <a onClick = {()=>{
                  setShowForm(!showForm);
                }} className="text-blue-400 hover:text-blue-300 font-semibold">Book a Consultation</a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-slate-400 text-sm">© 2025 Shravan Chauhan. All rights reserved.</p>
                <h4 className="text-slate-500 text-xs mt-1" onClick = {
                  ()=>{
                    window.open("https://inoit.site/", "_blank");
                  }
                }>designed by inoit</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
   
  );
};

export default Footer;