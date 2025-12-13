import { ArrowRight, Check, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';
import { NumberTicker } from './NumberTicker';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Marquee from './ui/marquee';
import { getAssetPath } from '../utils/assetPath';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [appScrollPosition, setAppScrollPosition] = useState(0);

  const applications = [
    {
      name: 'LED Scroller',
      description: 'Dynamic live wallpapers that bring your screen to life.',
      rating: 5.0,
      icon: getAssetPath('assets/products/led.png')
    },
    {
      name: 'Neon Banner',
      description: 'Save online videos in HD to watch offline anytime.',
      rating: 5.0,
      icon: getAssetPath('assets/products/neon.png')
    },
    {
      name: 'Voice Changer',
      description: 'Record and transform your voice with fun effects.',
      rating: 5.0,
      icon: 'https://images.unsplash.com/photo-1718664485465-2b40ab6a86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMG1pY3JvcGhvbmUlMjBhcHB8ZW58MXx8fHwxNzY1MjY1MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart Voice Lock Screen',
      description: 'Unlock your phone securely using your unique voice.',
      rating: 5.0,
      icon: 'https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGxvY2slMjBwaG9uZXxlbnwxfHx8fDE3NjUyNjUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart NFC',
      description: 'Read, write, and program NFC tags with ease.',
      rating: 5.0,
      icon: 'https://images.unsplash.com/photo-1754494977432-425fb917df70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZmMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTE2MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const scrollApps = (direction: 'left' | 'right') => {
    const container = document.getElementById('apps-container');
    if (container) {
      const scrollAmount = 344; // 320px card + 24px gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-color">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8  py-20 mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Where <span className="decorative-text">Innovation</span> Meets <span className="decorative-text">Evolution</span>.
            </h1>
            <p className="text-text-secondary-color mb-6">
              Revolutionizing the applied AI technology in work, education, and entertainment to boost productivity and daily life experiences for billions of users worldwide.
            </p>
            <button
              onClick={() => onNavigate('Product')}
              className="cursor-pointer bg-text-color text-white px-6 py-3 inline-flex items-center space-x-2 hover:bg-brand-color hover:text-text-color shadow-[inset_0_0_0_1px_var(--color-text-color)] transition-all duration-200 text-sm mr-3"
            >
              <span>Our Products</span>
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="cursor-pointer bg-transparent shadow-[inset_0_0_0_1px_var(--color-text-color)] px-6 py-3 inline-flex items-center space-x-2 hover:bg-brand-color hover:text-text-color text-sm transition-all duration-200"
            >
              <span>Contact Us</span>
            </button>
          </div>
          <div className="relative">
            <ImageWithFallback
              src={getAssetPath('assets/hanoi_woodcut.png')}
              alt="Modern office team"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <h3>Our Vision</h3>
            <p className="text-text-secondary-color text-md">
              The leading company in AI apps &amp; services and among the top 5 largest companies in the mobile apps &amp; games industry from Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-color py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                title: 'Passion',
                description: 'Love what you do, and you\'ll create great work. Embrace your tasks with enthusiasm to fuel exceptional outcomes.'
              },
              {
                title: 'Autonomy',
                description: 'Master your time and work. Be brave in your choices, daring to try new things even when unsure, and always own your results.'
              },
              {
                title: 'Flexibility',
                description: 'Choose when and where to work. Balance your schedule to fit your lifestyle, whether you prefer remote or in-person work.'
              },
              {
                title: 'Impact',
                description: 'Make a difference. Your work has a real impact on people and the world around you.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-4 border border-text-color/10 bg-transparent">
                <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center rounded-full">
                  <Sparkles className="text-white" size={22} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-text-secondary-color text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 text-center">
          {[
            { value: 20, suffix: 'M+', label: 'Apps Downloaded Worldwide' },
            { value: 50, suffix: '+', label: 'Published Applications' },
            { value: 200, suffix: '+', label: 'Countries' },
            { value: 4.5, suffix: '', label: 'Average Rating', decimals: 1 }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl text-text-color mb-1 font-bold">
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-text-secondary-color text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Applications Section */}
      <section className="bg-background-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
            {/* Left Column: Text and Navigation */}
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight">Featured Applications</h2>
              <p className="text-text-secondary-color text-md mb-8 max-w-sm">
                A glimpse into our most popular and innovative mobile applications
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => scrollApps('left')}
                  className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-lg bg-transparent border border-text-color/10 hover:bg-text-color hover:text-white transition-all duration-200 flex items-center justify-center text-text-color"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scrollApps('right')}
                  className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-lg bg-transparent border border-text-color/10 hover:bg-text-color hover:text-white transition-all duration-200 flex items-center justify-center text-text-color"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Column: Applications Slider */}
            <div
              id="apps-container"
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] bg-white border border-text-color/10 p-4 flex flex-col items-start text-left snap-start grayscale-100 hover:grayscale-0 opacity-80 hover:opacity-100 transition-all cursor-pointer"
                >
                  <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{app.name}</h3>
                  <p className="text-text-secondary-color text-sm mb-6 leading-relaxed min-h-[40px]">
                    {app.description}
                  </p>

                  <div className="flex gap-2 w-full mt-auto">
                    <button className="cursor-pointer flex flex-1 items-center border border-text-color/10 hover:bg-text-color/10 text-text-color px-3 py-3 text-xs font-medium transition-all duration-200 text-left">
                      <img src={getAssetPath('assets/images/appstore.svg')} alt="App Store" className="w-6 h-6" />
                      <div className='ml-2'>
                        <p className='my-[-4px] text-[10px]'>Download on the</p>
                        <p className='my-[-4px] font-semibold text-[12px]'>App Store</p>
                      </div>
                    </button>
                    <button className="cursor-pointer flex flex-1 items-center border border-text-color/10 hover:bg-text-color/10 text-text-color px-3 py-3 text-xs font-medium transition-all duration-200 text-left">
                      <img src={getAssetPath('assets/images/gp.svg')} alt="Google Play" className="w-6 h-6" />
                      <div className='ml-2'>
                        <p className='my-[-4px] text-[10px]'>Get it on</p>
                        <p className='my-[-4px] font-semibold text-[12px]'>Google Play</p>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-background-color py-12">
        <div className="mx-auto">
          <Marquee pauseOnHover className="[--duration:20s]">
            {[
              {
                name: 'Meta',
                logo: getAssetPath('assets/clients/logo_meta.png')
              },
              {
                name: 'Admob',
                logo: getAssetPath('assets/clients/logo_admob.png')
              },
              {
                name: 'Google Ads',
                logo: getAssetPath('assets/clients/logo_ads.png')
              },
              {
                name: 'AppLovin',
                logo: getAssetPath('assets/clients/logo_applovin.png')
              },
              {
                name: 'App Store',
                logo: getAssetPath('assets/clients/logo_appstore.png')
              },
              {
                name: 'Google Play',
                logo: getAssetPath('assets/clients/logo_gp.png')
              },
              {
                name: 'IronSource',
                logo: getAssetPath('assets/clients/logo_ironsource.png')
              },
              {
                name: 'Meta',
                logo: getAssetPath('assets/clients/logo_meta.png')
              },
              {
                name: 'Mintegral',
                logo: getAssetPath('assets/clients/logo_mintegral.png')
              },
              {
                name: 'Search Ads',
                logo: getAssetPath('assets/clients/logo_searchads.png')
              },
              {
                name: 'Unity',
                logo: getAssetPath('assets/clients/logo_unity.png')
              }
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-8"
              >
                <div className="w-48 h-24 relative">
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
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
            className="cursor-pointer bg-text-color text-white px-6 py-3 inline-flex items-center space-x-2 hover:bg-brand-color hover:text-text-color hover:shadow-[inset_0_0_0_1px_var(--color-text-color)] transition-all duration-200 text-sm mr-3"
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
