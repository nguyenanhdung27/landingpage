import React, { useState } from 'react';

export default function HeroIllustration({ onBadgeClick, useGraphicAsset = false }) {
  const [hoveredPerson, setHoveredPerson] = useState(null);

  if (useGraphicAsset) {
    return (
      <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
        {/* Background Wave Graphic */}
        <img
          src="/hero-illustration-full.png"
          alt="Business Team Illustration"
          className="w-full h-auto object-contain object-bottom max-h-[480px] drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 680 480"
        className="w-full h-auto max-h-[490px] drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A55EE" />
            <stop offset="60%" stopColor="#5B64F5" />
            <stop offset="100%" stopColor="#3F48DE" />
          </linearGradient>

          <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DE8638" />
            <stop offset="100%" stopColor="#BD6824" />
          </linearGradient>

          <linearGradient id="womanTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E27339" />
            <stop offset="100%" stopColor="#C35622" />
          </linearGradient>

          <linearGradient id="shirtBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E8CF8" />
            <stop offset="100%" stopColor="#6271EE" />
          </linearGradient>

          <linearGradient id="shadowFloor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#343CB8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#2E35A5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#343CB8" stopOpacity="0.4" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3F48DE" floodOpacity="0.25" />
          </filter>
          
          <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* 1. Large Fluid Background Wave behind right scene */}
        <path
          d="M 120 480 
             C 170 410, 260 350, 370 365 
             C 470 380, 520 280, 610 230 
             C 650 210, 680 205, 680 215 
             L 680 480 Z"
          fill="url(#waveGrad)"
          className="transition-all duration-700"
        />

        {/* Floor Depth Shadow under furniture */}
        <ellipse cx="430" cy="460" rx="200" ry="14" fill="url(#shadowFloor)" />

        {/* 2. Office Desk */}
        <g id="office-desk">
          {/* Desk Top */}
          <rect x="310" y="278" width="220" height="11" rx="3" fill="#D3D7E3" />
          <rect x="310" y="286" width="220" height="3" fill="#B2B8CC" />
          {/* Desk Legs */}
          <rect x="316" y="289" width="7" height="170" rx="2" fill="#2C2E42" />
          <rect x="517" y="289" width="7" height="170" rx="2" fill="#2C2E42" />
          <rect x="316" y="456" width="14" height="4" rx="2" fill="#1C1D2B" />
          <rect x="510" y="456" width="14" height="4" rx="2" fill="#1C1D2B" />
        </g>

        {/* 3. Center Person's Office Chair (Behind desk) */}
        <g id="center-chair">
          {/* Backrest */}
          <rect x="375" y="315" width="60" height="42" rx="6" fill="#FFFFFF" />
          <rect x="377" y="317" width="56" height="38" rx="4" fill="#E8ECF5" />
          {/* Seat cushion */}
          <rect x="370" y="355" width="70" height="12" rx="4" fill="#D2D7E6" />
          {/* Stem & Wheels */}
          <rect x="402" y="367" width="6" height="45" fill="#2D3043" />
          <path d="M 380 445 L 405 412 L 430 445" stroke="#2D3043" strokeWidth="6" strokeLinecap="round" />
          <circle cx="380" cy="447" r="4" fill="#1C1D2B" />
          <circle cx="430" cy="447" r="4" fill="#1C1D2B" />
          <circle cx="405" cy="448" r="4" fill="#1C1D2B" />
        </g>

        {/* 4. Center Person (Sitting behind desk) */}
        <g 
          id="center-person"
          className="cursor-pointer group"
          onMouseEnter={() => setHoveredPerson('david')}
          onMouseLeave={() => setHoveredPerson(null)}
        >
          {/* Legs under table */}
          <path d="M 390 355 L 368 405 L 358 450" stroke="#171A40" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 420 355 L 442 405 L 452 450" stroke="#171A40" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
          {/* Shoes */}
          <ellipse cx="350" cy="455" rx="14" ry="7" fill="#11132B" />
          <ellipse cx="460" cy="455" rx="14" ry="7" fill="#11132B" />

          {/* Torso / Shirt */}
          <path d="M 378 270 Q 405 264 432 270 L 438 340 Q 405 348 372 340 Z" fill="url(#shirtBlueGrad)" />
          {/* Tie */}
          <path d="M 403 268 L 407 268 L 410 320 L 405 328 L 400 320 Z" fill="#171A40" />
          {/* Collar */}
          <path d="M 398 266 L 405 275 L 412 266 Z" fill="#FFFFFF" />

          {/* Head & Neck */}
          <rect x="400" y="254" width="10" height="15" rx="3" fill="#FED7AA" />
          {/* Face */}
          <ellipse cx="405" cy="242" rx="15" ry="17" fill="#FED7AA" />
          {/* Hair */}
          <path d="M 391 240 C 390 226, 400 222, 412 222 C 424 222, 423 234, 422 242 C 418 238, 410 236, 405 238 C 398 238, 394 241, 391 240 Z" fill="#5A321E" />

          {/* Center Laptop */}
          <g transform="translate(382, 252)">
            {/* Screen */}
            <rect x="0" y="0" width="46" height="28" rx="2" fill="#1C1D2B" />
            <rect x="2" y="2" width="42" height="24" rx="1" fill="#2E334D" />
            {/* Base / Keyboard */}
            <path d="M -4 28 L 50 28 L 46 32 L 0 32 Z" fill="#1C1D2B" />
          </g>
        </g>

        {/* 5. Standing Man (Left Presenter) */}
        <g 
          id="standing-man"
          className="cursor-pointer group"
          onMouseEnter={() => setHoveredPerson('alex')}
          onMouseLeave={() => setHoveredPerson(null)}
        >
          {/* Legs */}
          <path d="M 230 310 L 226 390 L 222 450" stroke="#161B48" strokeWidth="21" strokeLinecap="round" />
          <path d="M 248 310 L 244 385 L 240 445" stroke="#12163E" strokeWidth="21" strokeLinecap="round" />
          {/* Shoes */}
          <path d="M 207 452 C 215 448, 227 448, 236 454 C 230 460, 210 460, 207 452 Z" fill="#11132B" />
          <path d="M 228 448 C 236 444, 248 444, 256 450 C 250 456, 230 456, 228 448 Z" fill="#11132B" />

          {/* Blazer Body */}
          <path d="M 210 190 Q 238 184 266 190 L 260 315 Q 235 320 216 315 Z" fill="url(#blazerGrad)" />
          {/* Inner Shirt & Tie */}
          <polygon points="232,190 244,190 238,235" fill="#FFFFFF" />
          <polygon points="236,198 240,198 242,260 238,266 235,260" fill="#161B48" />

          {/* Left Arm Raised (Greeting / Explaining gesture) */}
          <path 
            d="M 264 195 C 285 200, 298 215, 292 235" 
            stroke="url(#blazerGrad)" 
            strokeWidth="17" 
            strokeLinecap="round" 
          />
          {/* Forearm & Raised Hand */}
          <path 
            d="M 292 235 L 294 175" 
            stroke="url(#blazerGrad)" 
            strokeWidth="15" 
            strokeLinecap="round" 
          />
          {/* Open Hand */}
          <path d="M 288 175 Q 295 152 301 170 Q 303 178 296 182 Z" fill="#FED7AA" />

          {/* Right Arm (Resting forward gesture) */}
          <path 
            d="M 215 195 C 205 235, 220 270, 260 280" 
            stroke="url(#blazerGrad)" 
            strokeWidth="16" 
            strokeLinecap="round" 
          />
          <circle cx="265" cy="282" r="7" fill="#FED7AA" />

          {/* Head & Neck */}
          <rect x="233" y="174" width="10" height="16" rx="2" fill="#FED7AA" />
          <ellipse cx="238" cy="162" rx="16" ry="18" fill="#FED7AA" />
          {/* Hair - Pompadour style */}
          <path d="M 221 160 C 220 142, 238 135, 252 142 C 258 146, 257 156, 256 164 C 250 156, 240 155, 233 158 C 227 158, 223 162, 221 160 Z" fill="#5A321E" />
        </g>

        {/* 6. Woman's Office Chair (Right) */}
        <g id="woman-chair">
          {/* Backrest angled */}
          <path d="M 585 305 L 595 365" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
          <path d="M 585 305 L 595 365" stroke="#E2E7F3" strokeWidth="8" strokeLinecap="round" />
          {/* Cushion */}
          <rect x="535" y="362" width="55" height="12" rx="4" fill="#D2D7E6" />
          {/* Pole & Base */}
          <rect x="560" y="374" width="6" height="42" fill="#2D3043" />
          <path d="M 540 445 L 563 412 L 585 445" stroke="#2D3043" strokeWidth="6" strokeLinecap="round" />
          <circle cx="540" cy="447" r="4" fill="#1C1D2B" />
          <circle cx="585" cy="447" r="4" fill="#1C1D2B" />
        </g>

        {/* 7. Woman Sitting (Right typing on laptop) */}
        <g 
          id="woman-sitting"
          className="cursor-pointer group"
          onMouseEnter={() => setHoveredPerson('sarah')}
          onMouseLeave={() => setHoveredPerson(null)}
        >
          {/* Legs */}
          <path d="M 548 370 L 536 415 L 546 462" stroke="#151A45" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
          {/* Feet & tan flat shoes */}
          <ellipse cx="548" cy="466" rx="12" ry="6" fill="#D98835" />

          {/* Torso - Terracotta sleeveless blouse */}
          <path d="M 560 295 C 572 298, 574 340, 568 368 L 542 368 C 542 345, 546 308, 560 295 Z" fill="url(#womanTopGrad)" />

          {/* Arms reaching to laptop */}
          <path d="M 562 305 C 555 330, 530 338, 505 335" stroke="#FED7AA" strokeWidth="11" strokeLinecap="round" />

          {/* Head & Neck */}
          <rect x="554" y="280" width="8" height="15" rx="2" fill="#FED7AA" />
          <ellipse cx="557" cy="268" rx="14" ry="16" fill="#FED7AA" />
          {/* Hair & Ponytail */}
          <path d="M 544 266 C 544 252, 558 248, 570 254 C 575 259, 575 272, 571 278 C 565 274, 558 274, 553 275 C 548 275, 545 270, 544 266 Z" fill="#5A321E" />
          {/* Ponytail strand flowing backwards */}
          <path d="M 568 266 C 585 275, 582 298, 576 312 C 570 300, 572 284, 566 274 Z" fill="#5A321E" />

          {/* Woman's Laptop on desk */}
          <g transform="translate(470, 256)">
            {/* Screen side view angled */}
            <path d="M 18 10 L 10 28 L 6 28 L 14 10 Z" fill="#1C1D2B" />
            <line x1="8" y1="28" x2="30" y2="28" stroke="#1C1D2B" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* 8. Floating Badges / Speech Bubbles (with CSS animation) */}
        
        {/* BADGE 1: Upward Stock Chart (Left, next to Alex) */}
        <g 
          id="chart-badge" 
          className="animate-float-slow cursor-pointer transition-transform hover:scale-110"
          filter="url(#badgeShadow)"
          onClick={() => onBadgeClick && onBadgeClick('growth')}
        >
          {/* Lavender/Light-blue badge rect */}
          <rect x="175" y="132" width="60" height="44" rx="8" fill="#8EA0F8" />
          {/* Pointer tail */}
          <polygon points="215,176 220,185 225,176" fill="#8EA0F8" />
          {/* Chart line in white */}
          <path 
            d="M 187 160 L 197 154 L 207 158 L 221 144" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Chart arrow */}
          <path 
            d="M 214 144 L 221 144 L 221 151" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </g>

        {/* BADGE 2: Cogs / Gears (Center, above David) */}
        <g 
          id="gear-badge" 
          className="animate-float-reverse cursor-pointer transition-transform hover:scale-110"
          filter="url(#badgeShadow)"
          onClick={() => onBadgeClick && onBadgeClick('efficiency')}
        >
          {/* Warm peach/cream circle */}
          <circle cx="456" cy="170" r="23" fill="#F4B886" />
          {/* Pointer tail */}
          <polygon points="445,190 440,199 452,192" fill="#F4B886" />
          {/* Gear 1 (Main) */}
          <circle cx="452" cy="168" r="6.5" fill="#FFFFFF" />
          <circle cx="452" cy="168" r="3" fill="#F4B886" />
          {/* Gear teeth */}
          <path d="M 452 158 L 452 178 M 442 168 L 462 168 M 445 161 L 459 175 M 445 175 L 459 161" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          {/* Gear 2 (Small overlapping) */}
          <circle cx="463" cy="161" r="4.5" fill="#FFFFFF" />
          <circle cx="463" cy="161" r="2" fill="#F4B886" />
        </g>

        {/* BADGE 3: Chat Message (Right, above Sarah) */}
        <g 
          id="chat-badge" 
          className="animate-float-slow cursor-pointer transition-transform hover:scale-110"
          filter="url(#badgeShadow)"
          onClick={() => onBadgeClick && onBadgeClick('collaboration')}
        >
          {/* Soft pink/coral bubble */}
          <rect x="520" y="174" width="45" height="34" rx="7" fill="#F6A4C2" />
          {/* Pointer tail */}
          <polygon points="530,208 526,216 536,208" fill="#F6A4C2" />
          {/* Chat lines in white */}
          <line x1="528" y1="184" x2="556" y2="184" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="528" y1="191" x2="550" y2="191" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="528" y1="198" x2="542" y2="198" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Interactive Tooltips on hover */}
      {hoveredPerson && (
        <div className="absolute bottom-4 right-8 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700 pointer-events-none transition-all animate-pulse-subtle">
          {hoveredPerson === 'alex' && 'Alex Vance • Business Strategy & Growth'}
          {hoveredPerson === 'david' && 'David Chen • Tech Lead & Systems Architect'}
          {hoveredPerson === 'sarah' && 'Sarah Miller • Product Design & UX'}
        </div>
      )}
    </div>
  );
}
