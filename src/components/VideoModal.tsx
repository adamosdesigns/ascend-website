import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import BlobVideo from './BlobVideo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-black rounded-2xl border border-[rgba(255,255,255,0.09)] shadow-2xl overflow-hidden flex flex-col aspect-video">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full bg-black/50 hover:bg-black/80 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
        <BlobVideo
          videoSrc={videoSrc}
          className="w-full h-full object-contain"
          controls
          playsInline
          autoPlay
        />
      </div>
    </div>,
    document.body
  );
}
