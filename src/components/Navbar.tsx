import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.09)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src="/ascend-logo-horizontal-v1.png" 
                alt="Ascend" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#b8c4d4]">
            <a href="/#about" className="hover:text-[#f8fafc] transition-colors">About</a>
            <a href="/#paths" className="hover:text-[#f8fafc] transition-colors">Paths</a>
            <a href="/#process" className="hover:text-[#f8fafc] transition-colors">Process</a>
            <a href="/#stories" className="hover:text-[#f8fafc] transition-colors">Stories</a>
            <a href="/#faq" className="hover:text-[#f8fafc] transition-colors">FAQ</a>
          </div>

          <div className="hidden lg:flex items-center">
              <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-[13px] text-[#f8fafc] font-medium group cursor-pointer uppercase">
                Take The Quiz
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#f8fafc] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#020617] border-t border-[rgba(255,255,255,0.09)] shadow-2xl overflow-y-auto animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          <div className="flex flex-col px-6 py-8 space-y-6">
            <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-medium text-[#b8c4d4] hover:text-[#f8fafc] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]">About</a>
            <a href="/#paths" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-medium text-[#b8c4d4] hover:text-[#f8fafc] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]">Paths</a>
            <a href="/#process" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-medium text-[#b8c4d4] hover:text-[#f8fafc] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]">Process</a>
            <a href="/#stories" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-medium text-[#b8c4d4] hover:text-[#f8fafc] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]">Stories</a>
            <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-medium text-[#b8c4d4] hover:text-[#f8fafc] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]">FAQ</a>
            
              <div className="pt-6 pb-4">
                <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] transition-colors text-[16px] text-white font-semibold group cursor-pointer uppercase">
                  Take The Quiz
                </a>
              </div>
          </div>
        </div>
      )}
    </nav>
  );
}
