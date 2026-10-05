import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

export default function PricingSection({ onSelectPlan }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '1.290.000' : '1.590.000',
      period: '/tháng',
      desc: 'Phù hợp cho cá nhân kinh doanh hoặc đội ngũ khởi nghiệp dưới 5 người.',
      features: [
        'Truy cập 5 khóa học nền tảng',
        'Bộ tài liệu biểu mẫu quản trị',
        'Cộng đồng hỗ trợ 24/7',
        'Hỗ trợ qua email trong 24h',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: isAnnual ? '3.490.000' : '4.190.000',
      period: '/tháng',
      desc: 'Lựa chọn lý tưởng cho các doanh nghiệp vừa và nhỏ muốn tăng tốc doanh thu.',
      features: [
        'Toàn quyền truy cập tất cả khóa học',
        '2 buổi tư vấn 1:1 với chuyên gia mỗi tháng',
        'Hệ thống mẫu tự động hóa quy trình',
        'Cấp chứng chỉ hoàn thành quốc tế',
        'Hỗ trợ ưu tiên phản hồi < 2 giờ',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Liên hệ',
      period: '',
      desc: 'Chương trình đào tạo may đo riêng biệt và đồng hành tư vấn toàn diện.',
      features: [
        'Đào tạo nội bộ theo yêu cầu doanh nghiệp',
        'Cố vấn trưởng đồng hành trực tiếp',
        'Xây dựng hệ thống tự động hoá tùy chỉnh',
        'Báo cáo & Dashboard phân tích chuyên sâu',
        'SLA cam kết bảo mật & hỗ trợ 24/7',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing-section" className="w-full py-16 px-6 md:px-12 lg:px-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-full uppercase tracking-wider mb-3">
            Bảng giá minh bạch
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#18184C]">
            Lựa chọn gói đồng hành phù hợp
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Đầu tư thông minh cho sự tăng trưởng bền vững của tổ chức.
          </p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex items-center gap-3 p-1.5 bg-slate-100 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                !isAnnual ? 'bg-white text-[#18184C] shadow-sm' : 'text-slate-500'
              }`}
            >
              Thanh toán tháng
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                isAnnual ? 'bg-white text-[#18184C] shadow-sm' : 'text-slate-500'
              }`}
            >
              Thanh toán năm <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] rounded-full">Tiết kiệm 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                p.popular
                  ? 'bg-gradient-to-b from-[#1E215C] to-[#141642] text-white shadow-2xl shadow-indigo-900/30 md:-translate-y-2 border-2 border-indigo-400/40'
                  : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-lg'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-extrabold text-[11px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                  <Zap size={12} fill="currentColor" /> Được lựa chọn nhiều nhất
                </div>
              )}

              <div>
                <h3 className={`text-xl font-black ${p.popular ? 'text-white' : 'text-[#18184C]'}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed ${p.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {p.desc}
                </p>

                <div className="my-6">
                  <span className={`text-3xl lg:text-4xl font-black tracking-tight ${p.popular ? 'text-white' : 'text-[#18184C]'}`}>
                    {p.price}
                  </span>
                  <span className={`text-xs ml-1 ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {p.period}
                  </span>
                </div>

                <div className={`pt-6 border-t ${p.popular ? 'border-white/10' : 'border-slate-100'} space-y-3`}>
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <div className={`mt-0.5 rounded-full p-0.5 ${p.popular ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={p.popular ? 'text-slate-200' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onSelectPlan && onSelectPlan(p.name)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    p.popular
                      ? 'bg-gradient-to-r from-[#4E54C8] to-[#5D69F4] text-white hover:brightness-110 shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  Chọn gói {p.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
