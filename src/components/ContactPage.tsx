import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { NumberTicker } from './NumberTicker';
import { getAssetPath } from '../utils/assetPath';

export function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    appName: '',
    category: '',
    appDescription: '',
    targetAudience: '',
    monetizationStrategy: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for submitting your partnership application! We will review and contact you soon.');
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      appName: '',
      category: '',
      appDescription: '',
      targetAudience: '',
      monetizationStrategy: '',
      additionalInfo: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <img className="w-48 mb-6 mix-blend-multiply" src={getAssetPath('assets/shakehand_woodcut.png')} alt="Contacts" />
          <h1 className="mb-4">Partner With Us</h1>
          <p className="text-text-secondary-color max-w-3xl mx-auto text-sm">
            Join forces with us to amplify your app&apos;s success. Leverage our expertise in user acquisition, monetization, and data analytics to maximize your app&apos;s potential.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-text-color text-text-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: 20, suffix: 'M+', label: 'Apps Downloaded Worldwide' },
              { value: 50, suffix: '+', label: 'Published Applications' },
              { value: 200, suffix: '+', label: 'Countries' },
              { value: 4.5, suffix: '', label: 'Average Rating', decimals: 1 }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-white/90 text-4xl mb-1 font-bold">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface-color py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strong User Acquisition */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center mx-auto rounded-full">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">Strong User Acquisition</h3>
            <p className="text-text-secondary-color text-sm">
              Leverage our proven UA capabilities to reach millions of targeted users across global markets with data-driven acquisition strategies.
            </p>
          </div>

          {/* Optimized Monetization */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center mx-auto rounded-full">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">Optimized Monetization</h3>
            <p className="text-text-secondary-color text-sm">
              Maximize revenue through our advanced data analytics and AI-powered bidding strategies that optimize ad placement.
            </p>
          </div>

          {/* Deep Industry Expertise */}
          <div className="text-center">
            <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center mx-auto rounded-full">
              <Sparkles className="text-white" size={22} />
            </div>
            <h3 className="mb-3">Deep Industry Expertise</h3>
            <p className="text-text-secondary-color text-sm">
              Benefit from our team of specialists with extensive experience in mobile app marketing across diverse industry verticals.
            </p>
          </div>
        </div>
      </section>

      {/* Submit Your App Form Section */}
      <section id="submit-form" className="bg-background-color py-20">
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="mb-8">
            <h2 className="mb-3">Submit Your App</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div>
              <h3 className="mb-4">Company Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block mb-1.5 text-sm">
                    Company Name <span className="text-text-secondary-color">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block mb-1.5 text-sm">
                    Contact Name <span className="text-text-secondary-color">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm">
                    Email <span className="text-text-secondary-color">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1.5 text-sm">
                    Phone <span className="text-text-secondary-color">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                  />
                </div>
              </div>
            </div>

            {/* App Information */}
            <div>
              <h3 className="mb-4">App Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appName" className="block mb-1.5 text-sm">
                      App Name <span className="text-text-secondary-color">*</span>
                    </label>
                    <input
                      type="text"
                      id="appName"
                      name="appName"
                      value={formData.appName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-1.5 text-sm">
                      Category <span className="text-text-secondary-color">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                    >
                      <option value="">Select category</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="productivity">Productivity</option>
                      <option value="education">Education</option>
                      <option value="games">Games</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="utilities">Utilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="appDescription" className="block mb-1.5 text-sm">
                    App Description <span className="text-text-secondary-color">*</span>
                  </label>
                  <textarea
                    id="appDescription"
                    name="appDescription"
                    value={formData.appDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Provide a brief description of your app and its unique features"
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color resize-none text-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="targetAudience" className="block mb-1.5 text-sm">
                      Target Audience <span className="text-text-secondary-color">*</span>
                    </label>
                    <select
                      id="targetAudience"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                    >
                      <option value="">Select target</option>
                      <option value="global">Global</option>
                      <option value="north-america">North America</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="latin-america">Latin America</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="monetizationStrategy" className="block mb-1.5 text-sm">
                      Current Monetization Strategy
                    </label>
                    <select
                      id="monetizationStrategy"
                      name="monetizationStrategy"
                      value={formData.monetizationStrategy}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color text-sm"
                    >
                      <option value="">Select strategy</option>
                      <option value="ads">In-App Ads</option>
                      <option value="iap">In-App Purchases</option>
                      <option value="subscription">Subscription</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block mb-1.5 text-sm">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share any additional details that might be relevant to the partnership opportunity"
                    className="w-full px-4 py-2.5 border border-text-color/10 focus:outline-none focus:border-text-color resize-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer bg-text-color shadow-[inset_0_0_0_1px_var(--color-text-color)] text-white hover:text-text-color px-12 py-3 hover:bg-brand-color transition-colors text-sm"
              >
                Submit Partnership Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
