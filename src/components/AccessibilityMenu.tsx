import React, { useState, useEffect } from 'react';
import { PersonStanding, Eye, Type, Link as LinkIcon, RefreshCw, X, ZoomIn, BookOpen, Palette } from 'lucide-react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [biggerText, setBiggerText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    
    if (biggerText) {
      html.classList.add('ada-text-scaled');
      html.style.setProperty('--ada-text-scale', '120%');
    } else {
      html.classList.remove('ada-text-scaled');
      html.style.setProperty('--ada-text-scale', '100%');
    }

    if (highContrast) html.classList.add('ada-high-contrast');
    else html.classList.remove('ada-high-contrast');

    if (highlightLinks) html.classList.add('ada-highlight-links');
    else html.classList.remove('ada-highlight-links');

    if (dyslexiaFont) html.classList.add('ada-dyslexia');
    else html.classList.remove('ada-dyslexia');

    if (textSpacing) html.classList.add('ada-text-spacing');
    else html.classList.remove('ada-text-spacing');

    if (grayscale) html.classList.add('ada-grayscale');
    else html.classList.remove('ada-grayscale');

  }, [biggerText, highContrast, highlightLinks, dyslexiaFont, textSpacing, grayscale]);

  const resetAll = () => {
    setBiggerText(false);
    setHighContrast(false);
    setHighlightLinks(false);
    setDyslexiaFont(false);
    setTextSpacing(false);
    setGrayscale(false);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="accessibility-module fixed bottom-6 left-6 z-50 p-3.5 bg-[#3b82f6] text-white rounded-full shadow-[0_4px_16px_rgba(59,130,246,0.4)] hover:bg-[#2563eb] hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
      >
        <PersonStanding className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="accessibility-module fixed bottom-20 left-6 z-50 w-[calc(100vw-3rem)] sm:w-[600px] max-h-[calc(100vh-6rem)] flex flex-col bg-[#0b1220] border border-[rgba(255,255,255,0.09)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.09)] bg-[#020617] shrink-0">
            <h3 className="text-[#f8fafc] font-semibold flex items-center gap-2">
              <PersonStanding className="w-5 h-5 text-[#3b82f6]" />
              Accessibility Menu
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#6b7f99] hover:text-[#f8fafc] transition-colors"
              aria-label="Close Accessibility Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto flex-1">
            
            <button 
              onClick={() => setBiggerText(!biggerText)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${biggerText ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={biggerText}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${biggerText ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <ZoomIn className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${biggerText ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>Bigger Text</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Increase overall font size</div>
              </div>
            </button>

            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${highContrast ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={highContrast}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${highContrast ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${highContrast ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>High Contrast</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Enhance color contrast</div>
              </div>
            </button>

            <button 
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${highlightLinks ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={highlightLinks}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${highlightLinks ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <LinkIcon className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${highlightLinks ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>Highlight Links</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Make links more visible</div>
              </div>
            </button>

            <button 
              onClick={() => setDyslexiaFont(!dyslexiaFont)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${dyslexiaFont ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={dyslexiaFont}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${dyslexiaFont ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${dyslexiaFont ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>Dyslexia Friendly</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Switch to readable font</div>
              </div>
            </button>

            <button 
              onClick={() => setTextSpacing(!textSpacing)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${textSpacing ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={textSpacing}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${textSpacing ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <Type className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${textSpacing ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>Text Spacing</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Increase letter & word spacing</div>
              </div>
            </button>

            <button 
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full flex items-center p-3 rounded-xl border transition-colors text-left ${grayscale ? 'bg-[rgba(59,130,246,0.1)] border-[#3b82f6]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              aria-pressed={grayscale}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg mr-4 ${grayscale ? 'bg-[#3b82f6] text-white' : 'bg-[rgba(255,255,255,0.05)] text-[#b8c4d4]'}`}>
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[14px] font-semibold ${grayscale ? 'text-[#3b82f6]' : 'text-[#f8fafc]'}`}>Grayscale</div>
                <div className="text-[12px] text-[#8b9bb4] mt-0.5">Remove colors from the page</div>
              </div>
            </button>

          </div>

          <div className="p-4 border-t border-[rgba(255,255,255,0.09)] bg-[#020617] shrink-0">
            <button 
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#f8fafc] rounded-lg transition-colors text-[14px] font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Settings
            </button>
          </div>
        </div>
      )}
    </>
  );
}
