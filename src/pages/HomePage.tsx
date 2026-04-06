import React, { useState, useEffect, useRef } from 'react';
import PricingModal from '../components/PricingModal';
import BlobVideo from '../components/BlobVideo';
import {
  ArrowUpRight,
  PlayCircle,
  Linkedin,
  Instagram,
  ChevronDown,
  ChevronUp,
  Gauge,
  Share2,
  BarChart3,
  ShoppingCart,
  Megaphone,
  Link as LinkIcon,
  PhoneCall,
  Home,
  TrendingUp,
  PenTool,
  Wrench,
  Settings,
  Sparkles,
  Map,
  Star,
  Eye
} from 'lucide-react';

const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[rgba(255,255,255,0.09)] rounded-[16px] mb-3 overflow-hidden bg-[#0b1220]">
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[rgba(255,255,255,0.02)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-display text-[20px] md:text-[22px] text-[#f8fafc] pr-6">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#3b82f6] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#6b7f99] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-[#b8c4d4] text-[15px] md:text-[16px] leading-[1.4]">
          {answer}
        </div>
      )}
    </div>
  );
};

const testimonials = [
  {
    quote: "I kept researching different careers and never committing to anything. The quiz matched me with Social Media Marketing and the roadmap showed me what to focus on first. Now I'm managing content for two small businesses and building a portfolio I can keep growing.",
    author: "Daniel R., 22",
    highlight: "Now I'm managing content for two small businesses and building a portfolio I can keep growing."
  },
  {
    quote: "Before Ascend I was just watching videos about dropshipping and never starting. The roadmap helped me focus on product research and store setup first. I launched my first Shopify store and started testing products instead of just learning about it.",
    author: "Maya L., 20",
    highlight: "I launched my first Shopify store and started testing products instead of just learning about it."
  },
  {
    quote: "I had been comparing different online careers for months and couldn't decide where to start. The quiz matched me with High-Ticket Sales and the roadmap gave me a clear path. I'm already practicing sales calls and connecting with companies that hire remote closers.",
    author: "Jordan K., 24",
    highlight: "I'm already practicing sales calls and connecting with companies that hire remote closers."
  }
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedPath, setSelectedPath] = useState<any>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden z-10 animate-fade-in-up">
        {/* Video Background */}
        <div className="absolute top-20 inset-x-0 bottom-0 z-0 opacity-90">
          <BlobVideo
            videoSrc="/270940_medium.mp4"
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-[#020617]/10"></div>
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.13)_0%,transparent_70%)] blur-[48px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.13)_0%,transparent_70%)] blur-[48px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-10">
          <h1 className="text-display text-[clamp(40px,6vw,80px)] leading-[1.05] mb-4 text-[#f8fafc]">
            Discover the Career Path That <span className="text-[#3b82f6] whitespace-nowrap">Fits You Best</span>
          </h1>
          <p className="text-[17px] text-[#b8c4d4] mb-6 max-w-2xl mx-auto leading-[1.4]">
            Ascend helps you <strong className="text-[#f8fafc] font-semibold">discover modern, high-income career paths</strong> that align with your strengths and goals. <strong className="text-[#f8fafc] font-semibold">Start by taking our 15-question career quiz</strong> to see which path <strong className="text-[#f8fafc] font-semibold">fits you best.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-[2px] transition-transform font-bold text-[16px] tracking-[0.03em] shadow-[0_8px_24px_rgba(59,130,246,0.25)] group cursor-pointer">
              Take The Career Quiz
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#process" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-[15px] text-[#f8fafc] font-medium cursor-pointer">
              How It Works
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-[#6b7f99] mb-12">
            <a href="https://www.linkedin.com/in/joseph-pink-b5034a3b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/ascendcareerguidance?igsh=MW50YXRvOTkzMWdzdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@ascendcareerguidance" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>

          <div className="animate-bounce flex justify-center">
            <ChevronDown className="w-6 h-6 text-[#6b7f99]" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="relative pt-12 pb-16 z-20 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-display text-[clamp(28px,4.5vw,44px)] mb-4 text-[#f8fafc] max-w-3xl mx-auto">
            Success isn't built on chance. <span className="text-[#b8c4d4]">It's built on aligned strengths, informed decisions, and <span className="text-[#3b82f6]">the right starting steps</span>.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-[#b8c4d4] leading-[1.4]">
            Ascend analyzes your patterns, identifies your strongest career fit, and gives you a practical roadmap to move with <span className="text-[#f8fafc] font-semibold">purpose</span> from day one.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 border-t border-[rgba(255,255,255,0.09)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] block mb-2">The Ascend Advantage</span>
            <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-2 text-[#f8fafc]">
              Why Choose Ascend?
            </h2>
            <p className="text-[#b8c4d4] text-[17px] leading-[1.4]">Where clarity, direction, and confidence meet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-[#0b1220] border border-[rgba(255,255,255,0.09)] p-6 rounded-[16px] flex flex-col items-center text-center group hover:border-[rgba(255,255,255,0.18)] transition-colors animate-card-fade-in" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <Gauge className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-display text-[26px] mb-2">Personalized Career Matching</h3>
              <p className="text-[#b8c4d4] text-[15px] leading-[1.4]">
                Your answers aren't graded. They're decoded. Our quiz analyzes your strengths, patterns, and preferences to identify the paths where you're statistically more likely to thrive — not just survive.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b1220] border border-[rgba(255,255,255,0.09)] p-6 rounded-[16px] flex flex-col items-center text-center group hover:border-[rgba(255,255,255,0.18)] transition-colors animate-card-fade-in" style={{ animationDelay: '0.07s' }}>
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <Share2 className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-display text-[26px] mb-2">Beginner-Proof Roadmaps</h3>
              <p className="text-[#b8c4d4] text-[15px] leading-[1.4]">
                No jargon. No overwhelm. Each roadmap shows you the first 30, 60, and 90 days in your new path — how to start, what to avoid, what matters most.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b1220] border border-[rgba(255,255,255,0.09)] p-6 rounded-[16px] flex flex-col items-center text-center group hover:border-[rgba(255,255,255,0.18)] transition-colors animate-card-fade-in" style={{ animationDelay: '0.13s' }}>
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <BarChart3 className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-display text-[26px] mb-2">Insights You Can Use Today</h3>
              <p className="text-[#b8c4d4] text-[15px] leading-[1.4]">
                We don't teach theory. We teach the habits, workflows, and mindset shifts that help real beginners break in faster — in tech, business, marketing, trading, and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-12">
            <div className="flex items-center gap-3 text-[#6b7f99] bg-[rgba(255,255,255,0.03)] px-6 py-4 rounded-xl border border-[rgba(255,255,255,0.05)] max-w-3xl">
              <svg className="w-6 h-6 flex-shrink-0 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-[13px] leading-[1.5] text-left">
                <strong className="text-[#f8fafc]">Expert-Backed Guidance:</strong> Our curriculum and career assessments were developed with the assistance of qualified experts in the offered fields to ensure accurate and actionable guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="paths" className="py-16 border-t border-[rgba(255,255,255,0.09)] relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] block mb-2">Career Paths</span>
            <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-2 text-[#f8fafc]">
              Explore Your Career Matches
            </h2>
            <p className="text-[#b8c4d4] text-[17px] max-w-2xl mx-auto leading-[1.4]">
              Eight modern career paths designed for real skill development and long-term income potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {/* Match Cards */}
            {[
              { icon: ShoppingCart, title: "Shopify Dropshipping", desc: "Build and scale online stores using product testing systems, supplier networks, and data-driven marketing strategies.", color: "#f97316", coreLink: "https://whop.com/ascend-career-guidance/shopify-dropshipping-standard", proLink: "https://whop.com/ascend-career-guidance/shopify-dropshipping-premium" },
              { icon: Megaphone, title: "Social Media Marketing", desc: "Help brands grow through strategic content, audience engagement, and marketing systems that convert attention.", color: "#ec4899", coreLink: "https://whop.com/ascend-career-guidance/social-media-marketing-standard", proLink: "https://whop.com/ascend-career-guidance/social-media-marketing-premium" },
              { icon: LinkIcon, title: "Affiliate Marketing", desc: "Create valuable digital resources that guide purchase decisions and generate commission income through targeted traffic.", color: "#8b5cf6", coreLink: "https://whop.com/ascend-career-guidance/affiliate-marketing-standard", proLink: "https://whop.com/ascend-career-guidance/affiliate-marketing-premium" },
              { icon: PhoneCall, title: "High-Ticket Sales", desc: "Close premium deals remotely by guiding prospects through thoughtful buying decisions using structured sales systems.", color: "#f59e0b", coreLink: "https://whop.com/ascend-career-guidance/high-ticket-sales-standard", proLink: "https://whop.com/ascend-career-guidance/high-ticket-sales-premium-c7" },
              { icon: Home, title: "Real Estate", desc: "Build deal pipelines through property sourcing, negotiation strategy, and licensed or wholesale real estate transactions.", color: "#ef4444", coreLink: "https://whop.com/ascend-career-guidance/real-estate-standard", proLink: "https://whop.com/ascend-career-guidance/real-estate-premium" },
              { icon: TrendingUp, title: "Day Trading Stocks", desc: "Operate in financial markets using disciplined strategies built around volatility, probability, timing, and risk control.", color: "#22c55e", coreLink: "https://whop.com/ascend-career-guidance/day-trading-stocks-standard", proLink: "https://whop.com/ascend-career-guidance/day-trading-stocks-premium" },
              { icon: PenTool, title: "Creative Freelancing", desc: "Turn creative or technical skills into client services by solving real business problems and delivering valuable outcomes.", color: "#a78bfa", coreLink: "https://whop.com/ascend-career-guidance/creative-freelancing-standard", proLink: "https://whop.com/ascend-career-guidance/creative-freelancing-premium" },
              { icon: Wrench, title: "Home Services", desc: "Start and grow local service businesses solving everyday problems through strong operations and reliable systems.", color: "#06b6d4", coreLink: "https://whop.com/ascend-career-guidance/home-services-standard", proLink: "https://whop.com/ascend-career-guidance/home-services-premium" }
            ].map((match, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedPath(match)}
                className="bg-[#0b1220] border border-[rgba(255,255,255,0.09)] rounded-[16px] p-6 flex flex-col items-center text-center hover:border-[rgba(255,255,255,0.18)] transition-all duration-300 group relative overflow-hidden animate-card-fade-in cursor-pointer w-full text-left" 
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${match.color}, transparent)` }}></div>
                
                <div 
                  className="absolute top-4 right-4 p-2 rounded-full bg-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[rgba(255,255,255,0.1)]"
                  style={{ color: match.color }}
                  aria-label={`View pricing for ${match.title}`}
                >
                  <Eye className="w-5 h-5" />
                </div>

                <match.icon className="w-8 h-8 text-[#6b7f99] mb-4 group-hover:scale-110 transition-transform" style={{ color: match.color }} strokeWidth={1.5} />
                <h3 className="text-display text-[26px] mb-2">{match.title}</h3>
                <p className="text-[#b8c4d4] text-[15px] leading-[1.4]">{match.desc}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-[2px] transition-transform font-bold text-[16px] tracking-[0.03em] shadow-[0_8px_24px_rgba(59,130,246,0.25)] group cursor-pointer">
              Take The Career Quiz
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 border-t border-[rgba(255,255,255,0.09)] relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] block mb-2">How It Works</span>
            <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-2 text-[#f8fafc]">
              Our Simple & Fast Process
            </h2>
            <p className="text-[#b8c4d4] text-[17px] leading-[1.4]">Everything you need to get started, all in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Settings, title: "Take the Quiz", desc: "Answer 15 guided questions designed to reveal your strengths, preferences, and how you naturally work best." },
              { icon: Sparkles, title: "Get Your Match", desc: "See your top career path instantly along with insights explaining why it aligns with your strengths." },
              { icon: Map, title: "Start Your Roadmap", desc: "Access a structured beginner-friendly roadmap detailing key skills, early wins, common pitfalls, and next steps." }
            ].map((step, i) => (
              <div key={i} className="bg-[#0b1220] border border-[rgba(255,255,255,0.09)] p-6 rounded-[16px] flex flex-col items-center text-center group hover:border-[rgba(255,255,255,0.18)] transition-colors animate-card-fade-in" style={{ animationDelay: `${i * 0.07}s` }}>
                <step.icon className="w-8 h-8 text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-display text-[26px] mb-2">{step.title}</h3>
                <p className="text-[#b8c4d4] text-[15px] leading-[1.4]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.09)] shadow-2xl bg-black aspect-video">
            <BlobVideo
              videoSrc="/Ascend__Find_Your_Direction.mp4"
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-[2px] transition-transform font-bold text-[16px] tracking-[0.03em] shadow-[0_8px_24px_rgba(59,130,246,0.25)] group cursor-pointer">
              Take The Career Quiz
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="stories" className="py-16 border-t border-[rgba(255,255,255,0.09)] relative z-10 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] block mb-2">Success Stories</span>
          <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-4 text-[#f8fafc]">
            People Aren't Just<br />
            Learning— They're Building
          </h2>
          <p className="text-[#b8c4d4] text-[17px] mb-8 max-w-2xl mx-auto leading-[1.4]">
            Thousands of people spend years jumping between ideas, courses, and side hustles without clear direction. Ascend helps you start with clarity.
          </p>

          <div className="relative overflow-hidden bg-[#0b1220] border border-[rgba(255,255,255,0.09)] rounded-[16px] p-6 md:p-8 grid" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEndHandler}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
                  index === currentTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#3b82f6] text-[#3b82f6]" />
                  ))}
                </div>

                <blockquote className="text-[20px] md:text-[22px] text-[#f8fafc] font-medium leading-[1.4] mb-5">
                  "{testimonial.quote.split(testimonial.highlight)[0]}
                  <strong className="text-[#3b82f6]">{testimonial.highlight}</strong>
                  {testimonial.quote.split(testimonial.highlight)[1]}"
                </blockquote>

                <p className="text-[#6b7f99] font-semibold text-[15px] uppercase tracking-[0.08em]">{testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.7)] w-6' 
                    : 'bg-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.3)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-[2px] transition-transform font-bold text-[16px] tracking-[0.03em] shadow-[0_8px_24px_rgba(59,130,246,0.25)] group cursor-pointer">
              Take The Career Quiz
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 border-t border-[rgba(255,255,255,0.09)] relative z-10 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] block mb-2">Support</span>
            <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-2 text-[#f8fafc]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#b8c4d4] text-[17px] leading-[1.4]">
              Find quick answers to the most common questions.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How accurate is the career diagnostic?",
                a: "The Ascend diagnostic analyzes how you approach work, structure, communication, risk, and long-term progress. Instead of asking what career you think you want, it looks at how you naturally operate. Your result reflects the career path where people with similar traits and working styles tend to perform best."
              },
              {
                q: "How long does the diagnostic take?",
                a: "Most people finish the diagnostic in about five minutes. There are fifteen short questions designed to understand how you think, learn, and handle different types of work environments."
              },
              {
                q: "What happens after I get my result?",
                a: "After completing the diagnostic, you'll see the career path that best aligns with how you work and think. You'll also receive a short explanation of why that path fits you and the option to unlock the full Ascend roadmap for that career."
              },
              {
                q: "What is included in the Ascend roadmap?",
                a: "Each career path includes a structured package designed to guide you through the first ninety days. Inside you'll find a detailed roadmap explaining what to focus on each step of the way, a visual presentation that breaks down the process clearly, an audio guide that walks you through the strategy, and a terminology guide explaining the most important industry terms."
              },
              {
                q: "Do I need experience to start one of these careers?",
                a: "No experience is required. The purpose of Ascend is to help people start from the beginning with clarity. Each roadmap is designed to show you the first practical steps so you can begin building real skills and momentum."
              },
              {
                q: "What careers can the diagnostic recommend?",
                a: "The Ascend diagnostic identifies the strongest match across eight modern career paths including e-commerce, social media marketing, affiliate marketing, high-ticket sales, real estate, day trading, creative freelancing, and home services businesses."
              },
              {
                q: "What if I'm interested in more than one path?",
                a: "That's completely normal. Many people are curious about several different directions when they're starting out. The diagnostic simply identifies the path that best aligns with your current strengths and tendencies so you can begin somewhere with clarity."
              },
              {
                q: "Is the diagnostic free?",
                a: "Yes. The career diagnostic is completely free to take. It's designed to give you clarity about where you might thrive before deciding whether to move forward with the full roadmap."
              },
              {
                q: "Do I need a college degree for these careers?",
                a: "Most of the careers included in Ascend are skill-based fields where progress is driven by learning, practice, and results rather than formal credentials. Many people enter these industries without traditional degrees."
              },
              {
                q: "Why was Ascend created?",
                a: "Many people feel stuck because they are overwhelmed by choices and conflicting advice online. Ascend was built to provide clarity first, then a clear path forward, so people can stop guessing and start building real progress."
              },
              {
                q: "Why does the price look higher on the Whop iOS app?",
                a: "Apple charges a 30% fee for in-app purchases. To offset this, Whop automatically marks up prices in their iOS app. To avoid this extra fee and get the standard price, simply complete your purchase using your mobile or desktop web browser instead of the Whop app."
              }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-16 overflow-hidden border-t border-[rgba(255,255,255,0.09)] z-10">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[48px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-10">
          <h2 className="text-display text-[clamp(32px,5vw,44px)] mb-4 text-[#f8fafc]">
            Your career path <span className="text-[#3b82f6]">starts with clarity.</span>
          </h2>
          <p className="text-[#b8c4d4] text-[17px] mb-8 max-w-2xl mx-auto leading-[1.4]">
            Take the Ascend career diagnostic and discover which modern career path aligns with your strengths, goals, and working style.
          </p>
          
          <div className="flex justify-center mb-10">
            <a href="https://ascend-quiz.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-[2px] transition-transform font-bold text-[16px] tracking-[0.03em] shadow-[0_8px_24px_rgba(59,130,246,0.25)] group cursor-pointer">
              Take The Career Quiz
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-[#6b7f99] mb-8">
            <a href="https://www.linkedin.com/in/joseph-pink-b5034a3b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/ascendcareerguidance?igsh=MW50YXRvOTkzMWdzdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@ascendcareerguidance" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-8 border-t border-[rgba(255,255,255,0.09)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6b7f99] text-[13px]">© 2026 Ascend Modern Careers. All rights reserved.</p>
            <div className="flex items-center gap-2 text-[#6b7f99] text-[13px] font-semibold tracking-wider">
              <a href="https://www.dabr.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#f8fafc] transition-colors">BUILT WITH DABR</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={!!selectedPath} 
        onClose={() => setSelectedPath(null)} 
        path={selectedPath} 
      />


    </>
  );
}
