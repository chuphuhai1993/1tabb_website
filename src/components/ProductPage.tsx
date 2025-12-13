import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductPage() {
  const products = [
    {
      name: 'LED Scroller',
      description: 'Dynamic live wallpapers that bring your screen to life.',
      icon: '/1tabb_website/assets/products/led.png'
    },
    {
      name: 'Neon Banner',
      description: 'Save online videos in HD to watch offline anytime.',
      icon: '/1tabb_website/assets/products/neon.png'
    },
    {
      name: 'Voice Changer',
      description: 'Record and transform your voice with fun effects.',
      icon: 'https://images.unsplash.com/photo-1718664485465-2b40ab6a86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMG1pY3JvcGhvbmUlMjBhcHB8ZW58MXx8fHwxNzY1MjY1MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart Voice Lock Screen',
      description: 'Unlock your phone securely using your unique voice.',
      icon: 'https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGxvY2slMjBwaG9uZXxlbnwxfHx8fDE3NjUyNjUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart NFC',
      description: 'Read, write, and program NFC tags with ease.',
      icon: 'https://images.unsplash.com/photo-1754494977432-425fb917df70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZmMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTE2MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  function onNavigate(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  const scrollProducts = (direction: 'left' | 'right') => {
    const container = document.getElementById('products-container');
    if (container) {
      const scrollAmount = 344;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-color text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <img className="w-40 mb-8 mix-blend-multiply" src='/1tabb_website/assets/appstore_woodcut.png' alt="Product" />
          <h1 className="text-black mb-4">Our Products</h1>
          <p className="text-text-secondary-color max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered mobile applications designed to transform how you work, learn, and play.
          </p>
        </div>
      </section>

      {/* Product Excellence Section */}
      <section className="bg-surface-color text-text-color mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Design Excellence */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center rounded-full mx-auto">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">Design Excellence</h3>
            <p className="text-text-secondary-color text-sm">
              Unique design and superior user experience that sets our applications apart in the marketplace.
            </p>
          </div>

          {/* AI Technology */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center rounded-full mx-auto">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">AI Technology</h3>
            <p className="text-text-secondary-color text-sm">
              Advanced AI integration that powers intelligent features and enhances user productivity.
            </p>
          </div>

          {/* Personalization */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center rounded-full mx-auto">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">Personalization</h3>
            <p className="text-text-secondary-color text-sm">
              Tailored user experiences powered by big data analytics and machine learning algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background-color py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Discover More</h2>
            <p className="text-text-secondary-color text-md max-w-2xl mx-auto">
              Explore our full range of innovative solutions designed for digital life.
            </p>
          </div>

          <div className="relative group/slider">
            <div
              id="products-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 w-full px-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] bg-white border border-text-color/10 p-4 flex flex-col items-start text-left snap-start group cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200"
                >
                  <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={product.icon}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{product.name}</h3>
                  <p className="text-text-secondary-color text-sm mb-6 leading-relaxed min-h-[40px]">
                    {product.description}
                  </p>

                  <div className="flex gap-2 w-full mt-auto">
                    <button className="cursor-pointer flex flex-1 items-center border border-text-color/10 hover:bg-text-color/10 text-text-color px-3 py-3 text-xs font-medium transition-all duration-200 text-left">
                      <img src="/1tabb_website/assets/images/appstore.svg" alt="App Store" className="w-6 h-6" />
                      <div className='ml-2'>
                        <p className='my-[-4px] text-[10px]'>Download on the</p>
                        <p className='my-[-4px] font-semibold text-[12px]'>App Store</p>
                      </div>
                    </button>
                    <button className="cursor-pointer flex flex-1 items-center border border-text-color/10 hover:bg-text-color/10 text-text-color px-3 py-3 text-xs font-medium transition-all duration-200 text-left">
                      <img src="/1tabb_website/assets/images/gp.svg" alt="Google Play" className="w-6 h-6" />
                      <div className='ml-2'>
                        <p className='my-[-4px] text-[10px]'>Get it on</p>
                        <p className='my-[-4px] font-semibold text-[12px]'>Google Play</p>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scrollProducts('left')}
                className="cursor-pointer w-10 h-10 rounded-full bg-white shadow-lg border border-text-color/10 flex items-center justify-center text-black hover:bg-text-color hover:text-white transition-all duration-200 disabled:opacity-50"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollProducts('right')}
                className="cursor-pointer w-10 h-10 rounded-full bg-white shadow-lg border border-text-color/10 flex items-center justify-center text-black hover:bg-text-color hover:text-white transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-background-color py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Work Solutions */}
            <div className="bg-surface-color p-6">
              <h3 className="mb-3">Work Solutions</h3>
              <p className="text-text-secondary-color text-sm mb-4">
                Professional tools that enhance productivity and streamline workflows
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>PDF Editor Pro</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>AI Scanner</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Document Manager</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Task Optimizer</span>
                </li>
              </ul>
            </div>

            {/* Study Tools */}
            <div className="bg-surface-color p-6">
              <h3 className="mb-3">Study Tools</h3>
              <p className="text-text-secondary-color text-sm mb-4">
                Educational applications that make learning more engaging and effective
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Smart Study</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Language Master</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Quiz Builder</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Note Taker AI</span>
                </li>
              </ul>
            </div>

            {/* Entertainment */}
            <div className="bg-surface-color p-6">
              <h3 className="mb-3">Entertainment</h3>
              <p className="text-text-secondary-color text-sm mb-4">
                Creative and fun applications for leisure and artistic expression
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Photo Editor AI</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Video Creator</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Music Maker</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">👉</span>
                  <span>Game Studio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-text-color mb-4">Ready to Join Our Journey?</h2>
          <p className="text-text-secondary-color mb-6 max-w-2xl mx-auto">
            Whether you're looking to work with us or partner with us, let's create the future of AI-powered mobile applications together.
          </p>
          <button
            onClick={() => onNavigate('Career')}
            className="cursor-pointer bg-text-color text-white px-6 py-3 inline-flex items-center space-x-2 hover:bg-brand-color  hover:text-text-color hover:shadow-[inset_0_0_0_1px_var(--color-text-color)] transition-all duration-200 text-sm mr-3"
          >
            <span>Join Our Team</span>
          </button>
          <button
            onClick={() => onNavigate('Contact')}
            className="cursor-pointer bg-transparent shadow-[inset_0_0_0_1px_var(--color-text-color)] px-6 py-3 inline-flex items-center space-x-2 hover:bg-brand-color transition-all duration-200 text-sm"
          >
            <span>Become a Partner</span>
          </button>
        </div>
      </section>
    </div>
  );
}