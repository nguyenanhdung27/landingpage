import React from 'react';
import HeroIllustration from './HeroIllustration';

export default function HeroSection({ onMoreInfo, onBadgeClick, useGraphicAsset }) {
  return (
    <section className="relative w-full flex-1 flex flex-col justify-between overflow-hidden">
      {/* Main Grid: Left Content & Right Illustration */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-4 md:pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* Left Column (Headline, Subtext, CTA) */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left max-w-xl z-20">
          
          {/* Main Headline (Exact words & styling from photo) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-black uppercase tracking-wider text-[#18184C] leading-[1.12]">
            <span>BUSINESS</span>
            <span className="block mt-1">LANDING PAGE</span>
          </h1>

          {/* Subtext description from photo */}
          <p className="mt-5 md:mt-7 text-sm sm:text-[15px] md:text-base text-[#4f5573] leading-relaxed max-w-[420px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
          </p>

          {/* Call to Action Button ("More Info") */}
          <div className="mt-7 md:mt-9">
            <button
              onClick={onMoreInfo}
              className="px-8 py-3.5 rounded-full text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#4E54C8] to-[#5E6AF5] hover:from-[#4349BF] hover:to-[#505DEB] shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              More Info
            </button>
          </div>
        </div>

        {/* Right Column (Illustration Scene) */}
        <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end w-full min-h-[340px] md:min-h-[420px] lg:min-h-[460px]">
          <HeroIllustration 
            onBadgeClick={onBadgeClick} 
            useGraphicAsset={useGraphicAsset} 
          />
        </div>
      </div>

      {/* Decorative Bottom-Left Wave Accent (Matching image's bottom left curved shape) */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-28 sm:h-36 pointer-events-none z-0">
        <svg viewBox="0 0 320 150" fill="none" className="w-full h-full">
          <path
            d="M 0 150 L 0 80 C 40 40, 110 30, 160 85 C 200 130, 260 145, 320 140 L 320 150 Z"
            fill="#5E6BF5"
            fillOpacity="0.85"
          />
        </svg>
      </div>
    </section>
  );
}
