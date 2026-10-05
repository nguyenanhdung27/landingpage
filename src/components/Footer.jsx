import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer({ onGetStarted }) {
  return (
    <footer id="contact-section" className="w-full bg-[#141642] text-white pt-14 pb-8 px-6 md:px-12 lg:px-16 border-t border-indigo-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-6 h-6 rounded-sm overflow-hidden flex">
                <div className="w-[38%] h-full bg-[#7584FA]" />
                <div className="w-[62%] h-full bg-[#4143D6]" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">LOGO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Giải pháp landing page và đào tạo tăng trưởng kinh doanh tối ưu cho doanh nghiệp hiện đại.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <Globe size={14} /> Global Enterprise Standards
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Điều hướng</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#course" className="hover:text-white transition-colors">Khóa học chuyên sâu</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Bảng giá dịch vụ</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Chương trình</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><span className="hover:text-white transition-colors cursor-pointer">Business Growth</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Automation Systems</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">UI/UX Product Design</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Executive Mentorship</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Liên hệ</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-indigo-400" /> contact@businesslanding.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-indigo-400" /> +84 (0) 90 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-indigo-400" /> Hà Nội • TP. Hồ Chí Minh
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Business Landing Page. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-slate-400 cursor-pointer">Điều khoản dịch vụ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
