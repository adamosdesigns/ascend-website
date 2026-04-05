import React from 'react';
import { createPortal } from 'react-dom';
import { X, Check, X as XIcon } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  path: {
    title: string;
    icon: React.ElementType;
    color: string;
    coreLink: string;
    proLink: string;
  } | null;
}

export default function PricingModal({ isOpen, onClose, path }: PricingModalProps) {
  if (!isOpen || !path) return null;

  return createPortal(
    <div className="fixed inset-x-0 bottom-0 top-24 z-40 flex items-center justify-center p-4 pt-4 bg-[#020617]/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-[#0b1220] rounded-2xl border border-[rgba(255,255,255,0.09)] shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.09)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)]" style={{ color: path.color }}>
              <path.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              GET YOUR {path.title.toUpperCase()} ROADMAP
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#6b7f99] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)] cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Core Plan */}
            <div className="relative flex flex-col p-6 rounded-2xl border border-[rgba(255,255,255,0.09)] bg-[#0f172a]/50">
              <div className="mb-6">
                <p className="text-sm font-semibold tracking-widest text-[#6b7f99] uppercase mb-2">GET MOVING</p>
                <h4 className="text-3xl font-black text-white mb-2">
                  ASCEND <span style={{ color: path.color }}>CORE</span>
                </h4>
                <p className="text-[#6b7f99]">Time to stop guessing and start moving.</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$34.99</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <FeatureItem included={true} title="90-Day Roadmap" desc="Your exact plan from day one to first win" color={path.color} />
                <FeatureItem included={true} title="Audio Industry Deep Dive" desc="How the industry actually works, in plain English" color={path.color} />
                <FeatureItem included={false} title="Quick Start Plan" desc="Your first moves, decided. No overthinking" />
                <FeatureItem included={false} title="Visual Execution Map" desc="The full picture, so you always know what's next" />
                <FeatureItem included={false} title="Industry Language Guide" desc="Sound like you've been in it for years" />
              </div>

              <a 
                href={path.coreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-center transition-all hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] text-white bg-[rgba(255,255,255,0.03)]"
              >
                GET ASCEND CORE &rarr;
              </a>
            </div>

            {/* Pro Plan */}
            <div 
              className="relative flex flex-col p-6 rounded-2xl border-2 bg-[#0f172a]/80 shadow-2xl"
              style={{ borderColor: path.color }}
            >
              <div 
                className="absolute -top-4 right-6 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: path.color }}
              >
                Most Popular
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: path.color }}>GET THERE FASTER</p>
                <h4 className="text-3xl font-black text-white mb-2">
                  ASCEND <span style={{ color: path.color }}>PRO</span>
                </h4>
                <p className="text-[#b8c4d4]">Built to boost your speed and productivity.</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$47.99</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <FeatureItem included={true} title="90-Day Roadmap" desc="Your exact plan from day one to first win" color={path.color} />
                <FeatureItem included={true} title="Audio Industry Deep Dive" desc="How the industry actually works, in plain English" color={path.color} />
                <FeatureItem included={true} title="Quick Start Plan" desc="Your first moves, decided. No overthinking" color={path.color} />
                <FeatureItem included={true} title="Visual Execution Map" desc="The full picture, so you always know what's next" color={path.color} />
                <FeatureItem included={true} title="Industry Language Guide" desc="Sound like you've been in it for years" color={path.color} />
              </div>

              <a 
                href={path.proLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-center transition-all text-white shadow-lg hover:brightness-110"
                style={{ backgroundColor: path.color }}
              >
                GET ASCEND PRO &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function FeatureItem({ included, title, desc, color = '#3b82f6' }: { included: boolean, title: string, desc: string, color?: string }) {
  return (
    <div className={`flex gap-3 ${included ? 'opacity-100' : 'opacity-40'}`}>
      <div className="mt-1 flex-shrink-0">
        {included ? (
          <Check className="w-5 h-5" style={{ color }} />
        ) : (
          <XIcon className="w-5 h-5 text-[#6b7f99]" />
        )}
      </div>
      <div>
        <h5 className="font-bold text-white text-sm">{title}</h5>
        <p className="text-sm text-[#6b7f99] mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
