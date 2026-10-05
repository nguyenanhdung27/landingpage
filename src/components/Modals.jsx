import React, { useState } from 'react';
import { X, CheckCircle, TrendingUp, Cpu, MessageSquare, ArrowRight } from 'lucide-react';

export function GetStartedModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', plan: 'Pro' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close or stay
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 font-semibold text-xs rounded-full mb-3">
              Fast Onboarding
            </div>
            <h3 className="text-2xl font-black text-[#18184C]">Bắt đầu ngay hôm nay</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              Điền thông tin để kích hoạt tài khoản doanh nghiệp và nhận tư vấn miễn phí.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email doanh nghiệp
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Gói dịch vụ quan tâm
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm bg-white"
                >
                  <option value="Starter">Khóa học Starter (Cơ bản)</option>
                  <option value="Pro">Doanh nghiệp Pro (Tăng trưởng)</option>
                  <option value="Enterprise">Tư vấn Doanh nghiệp Toàn diện</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#4E54C8] to-[#5E6AF5] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Nhận tư vấn & Tài khoản dùng thử
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle className="text-emerald-500 w-16 h-16 animate-bounce mb-3" />
            <h4 className="text-xl font-bold text-slate-800">Đăng ký thành công!</h4>
            <p className="text-sm text-slate-500 mt-2 max-w-xs">
              Chào mừng <span className="font-semibold text-indigo-600">{formData.name}</span>! Đội ngũ tư vấn sẽ liên hệ qua email {formData.email} trong vòng 15 phút.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800"
            >
              Đóng cửa sổ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function MoreInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 font-semibold text-xs rounded-full mb-3">
          Overview & Strategy
        </div>
        <h3 className="text-2xl font-black text-[#18184C]">Về Business Landing Page</h3>
        
        <p className="text-sm text-slate-600 mt-3 leading-relaxed">
          Nền tảng giải pháp số toàn diện giúp kết nối đội ngũ chiến lược, kỹ thuật và thiết kế trải nghiệm để thúc đẩy doanh thu vượt bậc.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <div className="p-3 bg-indigo-50/60 rounded-2xl text-center">
            <span className="block text-2xl font-black text-[#4E54C8]">99.8%</span>
            <span className="text-xs text-slate-500 font-medium">Độ hài lòng đối tác</span>
          </div>
          <div className="p-3 bg-indigo-50/60 rounded-2xl text-center">
            <span className="block text-2xl font-black text-[#4E54C8]">3.8x</span>
            <span className="text-xs text-slate-500 font-medium">Tốc độ tăng trưởng</span>
          </div>
          <div className="p-3 bg-indigo-50/60 rounded-2xl text-center">
            <span className="block text-2xl font-black text-[#4E54C8]">24/7</span>
            <span className="text-xs text-slate-500 font-medium">Hỗ trợ vận hành</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
        >
          Đã hiểu, quay lại trang chủ
        </button>
      </div>
    </div>
  );
}

export function BadgeDetailModal({ badgeType, onClose }) {
  if (!badgeType) return null;

  const contentMap = {
    growth: {
      title: 'Tăng trưởng Doanh thu & Chỉ số (Growth)',
      badge: 'Chỉ số Kinh doanh',
      icon: TrendingUp,
      color: 'bg-indigo-500',
      description: 'Biểu đồ tăng trưởng doanh số với tỷ lệ chuyển đổi tăng 148% sau khi áp dụng mô hình chiến lược số hóa.',
      stats: [
        { label: 'Tỷ lệ chốt sale', value: '+42%' },
        { label: 'ROI Trung bình', value: '380%' },
      ],
    },
    efficiency: {
      title: 'Tự động hóa & Tối ưu Quy trình (Automation)',
      badge: 'Công nghệ & Hệ thống',
      icon: Cpu,
      color: 'bg-amber-500',
      description: 'Hệ thống vận hành liên kết liền mạch giữa các bộ phận, loại bỏ 85% các thao tác thủ công rườm rà.',
      stats: [
        { label: 'Thời gian tiết kiệm', value: '18h/tuần' },
        { label: 'Độ chính xác quy trình', value: '99.9%' },
      ],
    },
    collaboration: {
      title: 'Cộng tác & Giao tiếp Đội ngũ (Team Chat)',
      badge: 'Trải nghiệm Khách hàng',
      icon: MessageSquare,
      color: 'bg-pink-500',
      description: 'Kênh tương tác tức thì giữa cố vấn và học viên, giải đáp mọi vướng mắc 24/7 không độ trễ.',
      stats: [
        { label: 'Thời gian phản hồi', value: '< 2 phút' },
        { label: 'Tương tác hàng ngày', value: '1,200+' },
      ],
    },
  };

  const current = contentMap[badgeType];
  if (!current) return null;
  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-xl text-white ${current.color}`}>
            <IconComponent size={22} />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{current.badge}</span>
            <h4 className="text-base font-bold text-slate-800">{current.title}</h4>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {current.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {current.stats.map((s, i) => (
            <div key={i} className="p-2.5 bg-slate-50 rounded-xl text-center">
              <span className="block text-lg font-bold text-slate-800">{s.value}</span>
              <span className="text-xs text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
