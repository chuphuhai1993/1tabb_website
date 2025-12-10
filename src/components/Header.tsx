import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Product', 'Blog', 'Career', 'Contact'];

  return (
    <header className="bg-[#FFFFFF]/90 backdrop-blur-lg border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <button
            onClick={() => onNavigate('Home')}
            className="cursor-pointer flex items-center space-x-2 w-20"
          >
            <img src="../../assets/logo/logo2_black.svg" alt="1Tabb" className="h-8 w-auto hover:text-red-500" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`cursor-pointer transition-colors text-sm ${currentPage === item
                  ? 'text-black'
                  : 'text-[#666666] hover:text-black'
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${currentPage === item
                  ? 'text-black'
                  : 'text-[#666666]'
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}