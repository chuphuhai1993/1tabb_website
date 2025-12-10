export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-white mb-2 text-lg">1TABB Joint Stock Company</h3>
            <p className="text-white/80 mb-2 max-w-md text-sm">
              The leading company in AI apps & services and among the top 5 largest companies in the mobile apps & games industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Dịch vụ</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Điều khoản</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bảo mật</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-3 text-lg">Contacts</h4>
            <ul className="space-y-1.5 text-white/80 text-sm">
              <li>Adress: Hà Nội, Việt Nam</li>
              <li>Email: connect@1tabb.com</li>
              <li>Phone: +84 123 456 789</li>
            </ul>
          </div>
        </div>


        <div className="border-t border-white/10 mt-12 pt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 text-white/80 text-xs">
            <p>&copy; 2025 Company. All rights reserved.</p>
          </div>
          <div className="md:col-span-2 text-right text-white/80 text-xs flex justify-end gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}