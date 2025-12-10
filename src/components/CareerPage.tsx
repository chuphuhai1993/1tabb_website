import { MapPin, Clock, Briefcase, Sparkles } from 'lucide-react';

export function CareerPage() {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      description: 'Tìm kiếm Frontend Developer có kinh nghiệm với React, TypeScript và Tailwind CSS.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hồ Chí Minh',
      type: 'Full-time',
      description: 'Quản lý và phát triển roadmap sản phẩm, làm việc với các team đa chức năng.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Thiết kế trải nghiệm người dùng và giao diện cho các sản phẩm digital.'
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      description: 'Phát triển và duy trì hệ thống backend với Node.js, PostgreSQL.'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Hồ Chí Minh',
      type: 'Full-time',
      description: 'Xây dựng và thực hiện các chiến dịch marketing đa kênh.'
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Remote',
      type: 'Part-time',
      description: 'Phân tích dữ liệu và cung cấp insights để hỗ trợ quyết định kinh doanh.'
    }
  ];

  const benefits = [
    'Lương thưởng cạnh tranh',
    'Bảo hiểm sức khỏe toàn diện',
    'Làm việc linh hoạt',
    'Đào tạo và phát triển',
    'Team building định kỳ',
    'Môi trường sáng tạo'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black mb-4">Work With Us</h1>
          <p className="text-[#444444] max-w-2xl mx-auto">
            Join our passionate team of innovators and help us revolutionize the future of AI-powered mobile applications. Build your career with impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Creative',
              description: 'Encouraging new ideas and innovative thinking.'
            },
            {
              title: 'Collaboration',
              description: 'Working together and supporting each other'
            },
            {
              title: 'Development',
              description: 'Learning and evolving without cease'
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-black mb-3 flex items-center justify-center rounded-full mx-auto">
                <Sparkles className="text-white" size={22} />
              </div>
              <h3 className="mb-2">{value.title}</h3>
              <p className="text-[#444444] text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <h2 className="text-center mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 p-6 border border-black/10">
                <div className="w-1.5 h-1.5 bg-black flex-shrink-0"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-black/10 p-5 hover:border-black transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="mb-1.5">{job.title}</h3>
                  <p className="text-[#444444] mb-3 text-sm">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[#444444]">
                    <div className="flex items-center space-x-1">
                      <Briefcase size={14} />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer text-black px-5 py-2.5 hover:bg-black hover:text-white border border-black transition-colors whitespace-nowrap text-sm">
                  Ứng tuyển
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-black mb-4">No positioned found?</h2>
          <p className="text-[#444444] mb-6 max-w-2xl mx-auto text-sm">
            Send your CV to us. We always look for talented people
          </p>
          <button className="cursor-pointer bg-black text-white hover:text-black px-6 py-3 hover:bg-brand-orange transition-colors text-sm">
            Send CV
          </button>
        </div>
      </section>
    </div>
  );
}