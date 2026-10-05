import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { GetStartedModal, MoreInfoModal, BadgeDetailModal } from './components/Modals';
import { Maximize2, Minimize2, Image, Sparkles, Eye, Info } from 'lucide-react';

export default function App() {
  // Mode state: 'mockup' (looks exactly like the uploaded image) or 'fullscreen' (full website view)
  const [viewMode, setViewMode] = useState('mockup');
  
  // Illustration type: false = Interactive Vector SVG, true = Extracted Art Asset
  const [useGraphicAsset, setUseGraphicAsset] = useState(false);

  // Modals state
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Navigation handlers
  const handleNavigate = (sectionId) => {
    if (sectionId === 'about' || sectionId === 'more-info') {
      setMoreInfoOpen(true);
    } else if (sectionId === 'course') {
      const el = document.getElementById('course-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'pricing') {
      const el = document.getElementById('pricing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'contact') {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-indigo-500 selection:text-white relative">
      
      {/* Top Floating Control Bar (Chuyển đổi giao diện & chế độ xem) */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/80 shadow-2xl flex items-center gap-2 sm:gap-4 text-xs text-white transition-all">
        
        {/* Toggle Mockup / Fullscreen */}
        <button
          onClick={() => setViewMode(viewMode === 'mockup' ? 'fullscreen' : 'mockup')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-semibold cursor-pointer"
          title="Chuyển đổi giữa chế độ Mockup (như trong ảnh mẫu) và Toàn màn hình"
        >
          {viewMode === 'mockup' ? (
            <>
              <Maximize2 size={13} className="text-indigo-400" />
              <span className="hidden sm:inline">Chế độ</span> Toàn màn hình
            </>
          ) : (
            <>
              <Minimize2 size={13} className="text-indigo-400" />
              <span className="hidden sm:inline">Chế độ</span> Khung Mockup
            </>
          )}
        </button>

        {/* Toggle Vector SVG / Art Asset */}
        <button
          onClick={() => setUseGraphicAsset(!useGraphicAsset)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors font-semibold cursor-pointer ${
            useGraphicAsset 
              ? 'bg-indigo-600 text-white' 
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }`}
          title="Đổi giữa Vector SVG tùy biến và Đồ họa gốc trích xuất từ ảnh"
        >
          <Sparkles size={13} className="text-amber-400" />
          <span>{useGraphicAsset ? 'Đồ họa Gốc' : 'Vector SVG'}</span>
        </button>

        {/* View Original Comparison */}
        <button
          onClick={() => setShowCompareModal(true)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
          title="So sánh với ảnh mẫu đã tải lên"
        >
          <Eye size={13} className="text-emerald-400" />
          <span className="hidden md:inline">Xem ảnh gốc</span>
        </button>
      </div>

      {/* RENDER VIEW */}
      {viewMode === 'mockup' ? (
        /* MOCKUP VIEW: Floating White Card in Purple/Blue Gradient Backdrop (Exact like photo) */
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#6A7BF7] via-[#5462EE] to-[#404DE2] overflow-hidden pt-16">
          
          {/* Abstract background curved waves outside the card (matching photo backdrop) */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#313ABF]/40 to-transparent blur-3xl pointer-events-none" />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,300 C 300,100 800,500 1200,200 L 1200,800 L 0,800 Z" fill="#3D48D9" />
          </svg>

          {/* THE MAIN WHITE LANDING PAGE CARD (Exact Card Container from Photo) */}
          <div className="relative z-10 w-full max-w-[1140px] bg-white rounded-[26px] sm:rounded-[34px] md:rounded-[40px] shadow-2xl shadow-indigo-950/35 border border-white/50 overflow-hidden flex flex-col transition-all duration-300">
            
            {/* Top Navigation */}
            <Navbar
              onGetStarted={() => setGetStartedOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* Hero Section */}
            <HeroSection
              onMoreInfo={() => setMoreInfoOpen(true)}
              onBadgeClick={(badge) => setSelectedBadge(badge)}
              useGraphicAsset={useGraphicAsset}
            />

            {/* Optional Additional Sections inside mockup scroll */}
            <div className="border-t border-slate-100">
              <FeaturesSection onSelectCourse={() => setGetStartedOpen(true)} />
              <PricingSection onSelectPlan={() => setGetStartedOpen(true)} />
              <Footer onGetStarted={() => setGetStartedOpen(true)} />
            </div>
          </div>
        </div>
      ) : (
        /* FULLSCREEN VIEW: Expanded Full Page Web App */
        <div className="min-h-screen w-full bg-white flex flex-col pt-12">
          
          {/* Sticky Fullscreen Header */}
          <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <Navbar
              onGetStarted={() => setGetStartedOpen(true)}
              onNavigate={handleNavigate}
            />
          </div>

          {/* Full-width Hero Container */}
          <main className="flex-1 flex flex-col">
            <div className="max-w-[1340px] mx-auto w-full flex-1 flex flex-col">
              <HeroSection
                onMoreInfo={() => setMoreInfoOpen(true)}
                onBadgeClick={(badge) => setSelectedBadge(badge)}
                useGraphicAsset={useGraphicAsset}
              />
            </div>

            {/* Features & Courses */}
            <FeaturesSection onSelectCourse={() => setGetStartedOpen(true)} />

            {/* Pricing Tiers */}
            <PricingSection onSelectPlan={() => setGetStartedOpen(true)} />

            {/* Footer */}
            <Footer onGetStarted={() => setGetStartedOpen(true)} />
          </main>
        </div>
      )}

      {/* Interactive Modals */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
      />

      <MoreInfoModal
        isOpen={moreInfoOpen}
        onClose={() => setMoreInfoOpen(false)}
      />

      <BadgeDetailModal
        badgeType={selectedBadge}
        onClose={() => setSelectedBadge(null)}
      />

      {/* Image Reference Compare Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Ảnh mẫu đối chiếu gốc</h3>
                <p className="text-xs text-slate-500">So sánh thiết kế React vừa tạo với ảnh bạn đã gửi</p>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
              >
                Đóng
              </button>
            </div>
            <div className="py-4 flex justify-center">
              <img
                src="/reference.png"
                alt="Original Reference"
                className="w-full max-h-[600px] object-contain rounded-2xl shadow-lg border border-slate-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
