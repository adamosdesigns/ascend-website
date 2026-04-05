import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Quiz from './Quiz';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] overflow-y-auto">
      <div className="relative w-full min-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[rgba(255,255,255,0.09)] bg-[#020617] shrink-0 sticky top-0 z-10">
          <div className="flex items-center">
            <img 
              src="/ascend-logo-horizontal-v1.png" 
              alt="Ascend" 
              className="h-6 md:h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#6b7f99] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)] cursor-pointer flex items-center gap-2"
          >
            <span className="text-sm font-medium hidden sm:block">Close Quiz</span>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow w-full relative bg-[#020617] pt-8 pb-12 flex flex-col">
          <Quiz />
        </div>
      </div>
    </div>,
    document.body
  );
}