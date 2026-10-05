import React from 'react';
import { BookOpen, Users, Award, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function FeaturesSection({ onSelectCourse }) {
  const courses = [
    {
      id: 'growth-course',
      title: 'Chiến Lược Tăng Trưởng Doanh Nghiệp',
      category: 'Business Strategy',
      level: 'All Levels',
      duration: '8 Tuần',
      students: '1,420+',
      rating: '4.9/5',
      desc: 'Học cách xây dựng phễu kinh doanh đa kênh, tối ưu hoá vòng đời khách hàng và thúc đẩy doanh thu vượt bậc.',
      highlights: ['Xây dựng Business Model hiện đại', 'Tối ưu CAC & LTV', 'Chiến lược định giá sản phẩm'],
    },
    {
      id: 'automation-course',
      title: 'Tự Động Hóa Vận Hành & Quản Trị Hệ Thống',
      category: 'Operations & Tech',
      level: 'Intermediate',
      duration: '6 Tuần',
      students: '980+',
      rating: '4.95/5',
      desc: 'Áp dụng các công cụ số và tự động hóa quy trình nội bộ, giải phóng 70% thời gian cho các nhiệm vụ cốt lõi.',
      highlights: ['Tích hợp công cụ làm việc số', 'Thiết lập Dashboard báo cáo tự động', 'Tối ưu phối hợp liên phòng ban'],
    },
    {
      id: 'ux-course',
      title: 'Thiết Kế Trải Nghiệm Khách Hàng (UX/UI)',
      category: 'Product & Design',
      level: 'All Levels',
      duration: '10 Tuần',
      students: '2,100+',
      rating: '4.88/5',
      desc: 'Nâng tầm giá trị sản phẩm với giao diện chuẩn mực, tỷ lệ giữ chân khách hàng cao và trải nghiệm người dùng vượt trội.',
      highlights: ['Nghiên cứu hành vi người dùng', 'Xây dựng Design System', 'Kiểm thử A/B Testing hiệu quả'],
    },
  ];

  return (
    <section id="course-section" className="w-full py-16 px-6 md:px-12 lg:px-16 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100/70 text-indigo-700 font-bold text-xs rounded-full uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Khóa học nổi bật
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#18184C]">
            Nâng tầm năng lực cùng chuyên gia hàng đầu
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Các khóa đào tạo thực chiến kết hợp mô hình cố vấn 1:1 giúp doanh nghiệp phát triển bền vững.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-bold">
                    {course.category}
                  </span>
                  <span>{course.duration}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#18184C] group-hover:text-indigo-600 transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed">
                  {course.desc}
                </p>

                <div className="my-5 pt-5 border-t border-slate-100 space-y-2">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-slate-400">Đánh giá</span>
                  <span className="text-sm font-bold text-slate-800">⭐ {course.rating}</span>
                </div>
                <button
                  onClick={() => onSelectCourse && onSelectCourse(course)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                >
                  Xem chi tiết <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
