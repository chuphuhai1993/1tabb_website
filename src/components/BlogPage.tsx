import { Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      title: '5 xu hướng công nghệ sẽ thay đổi ngành kinh doanh năm 2025',
      excerpt: 'Khám phá những công nghệ đột phá đang định hình lại cách thức hoạt động của doanh nghiệp hiện đại.',
      date: '15/12/2024',
      readTime: '5 phút đọc',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyMTkxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Làm thế nào để xây dựng thương hiệu mạnh trong kỷ nguyên số',
      excerpt: 'Chiến lược xây dựng và phát triển thương hiệu hiệu quả trên các nền tảng kỹ thuật số.',
      date: '10/12/2024',
      readTime: '7 phút đọc',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1566554001689-b53a88dbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjUxNTcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Tối ưu hóa quy trình làm việc với công nghệ tự động hóa',
      excerpt: 'Cách áp dụng automation để tăng năng suất và giảm chi phí vận hành.',
      date: '05/12/2024',
      readTime: '6 phút đọc',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTIzMjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Bảo mật dữ liệu: Ưu tiên hàng đầu cho doanh nghiệp',
      excerpt: 'Những biện pháp cần thiết để bảo vệ thông tin quan trọng của doanh nghiệp.',
      date: '01/12/2024',
      readTime: '8 phút đọc',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1MTgxMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Chiến lược phát triển sản phẩm từ ý tưởng đến thị trường',
      excerpt: 'Hướng dẫn chi tiết về quy trình phát triển và ra mắt sản phẩm thành công.',
      date: '25/11/2024',
      readTime: '10 phút đọc',
      category: 'Product',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyMTkxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Văn hóa làm việc linh hoạt: Chìa khóa thu hút nhân tài',
      excerpt: 'Tại sao môi trường làm việc linh hoạt ngày càng trở nên quan trọng.',
      date: '20/11/2024',
      readTime: '5 phút đọc',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1566554001689-b53a88dbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjUxNTcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F2F2F0] text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black mb-4">Blog &amp; Insights</h1>
          <p className="text-[#444444] max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and developments from Tevo. Discover industry trends, product updates, and behind-the-scenes stories.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-56 mb-3 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mb-2">
                <span className="text-xs text-[#444444]">{post.category}</span>
              </div>
              <h3 className="mb-2 group-hover:text-[#444444] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#444444] mb-3 text-sm">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-3 text-xs text-[#444444]">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F2F2F0] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-3">Stay Updated</h2>
          <p className="text-[#666666] mb-6 text-sm">
            Subscribe to our newsletter and never miss an update about our latest products, features, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-5 py-3 border border-black/10 focus:outline-none focus:border-black text-sm"
            />
            <button className="bg-black text-white px-6 py-3 hover:bg-black/90 transition-colors whitespace-nowrap text-sm">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}