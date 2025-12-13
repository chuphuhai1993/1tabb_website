import { MapPin, Clock, Briefcase, Sparkles } from 'lucide-react';

export function CareerPage() {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      description: 'Find a Frontend Developer with experience in React, TypeScript, and Tailwind CSS.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hồ Chí Minh',
      type: 'Full-time',
      description: 'Manage and develop product roadmaps, working with multi-functional teams.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design user experience and interface for digital products.'
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      description: 'Develop and maintain backend systems with Node.js, PostgreSQL.'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Hồ Chí Minh',
      type: 'Full-time',
      description: 'Develop and implement multi-channel marketing campaigns.'
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Remote',
      type: 'Part-time',
      description: 'Analyze data and provide insights to support business decisions.'
    }
  ];

  const benefits = [
    'Competitive salary and benefits',
    'Comprehensive health insurance',
    'Flexible working hours',
    'Continuous learning and development',
    'Regular team building activities',
    'Creative and innovative work environment'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Work With Us</h1>
          <p className="text-text-secondary-color max-w-2xl mx-auto">
            Join our passionate team of innovators and help us revolutionize the future of AI-powered mobile applications. Build your career with impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background-color py-20">
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
              <div className="w-12 h-12 bg-text-color mb-3 flex items-center justify-center rounded-full mx-auto">
                <Sparkles className="text-white" size={22} />
              </div>
              <h3 className="mb-2">{value.title}</h3>
              <p className="text-text-secondary-color text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <h2 className="text-center mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 p-6 border border-text-secondary-color/10">
                <div className="w-1.5 h-1.5 bg-text-secondary-color flex-shrink-0"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="bg-background-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-text-secondary-color/10 p-5 hover:border-text-color transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="mb-1.5">{job.title}</h3>
                  <p className="text-text-secondary-color mb-3 text-sm">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-secondary-color">
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
                <button className="cursor-pointer text-text-color px-5 py-2.5 hover:bg-brand-color border border-text-color transition-colors whitespace-nowrap text-sm">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-color py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-text-color mb-4">No positioned found?</h2>
          <p className="text-text-secondary-color mb-6 max-w-2xl mx-auto text-sm">
            Send your CV to us. We always look for talented people
          </p>
          <button className="cursor-pointer bg-text-color text-white hover:text-text-color px-6 py-3 hover:bg-brand-color shadow-[inset_0_0_0_1px_var(--color-text-color)] transition-all text-sm">
            Send CV
          </button>
        </div>
      </section>
    </div>
  );
}