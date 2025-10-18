import { Cable, Globe, Users, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Cable className="w-6 h-6" />,
      title: 'Enhance Your Insights',
      description: 'Empower your decisions with comprehensive analytics that reveal vital opportunities for growth in your region.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Manage Your Global Presence',
      description: 'Monitor and assess satellite locations to guarantee consistent performance and streamlined operations worldwide.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Eliminate Language Barriers',
      description: 'Customize your strategy for different markets with integrated localization for effective communication and enhanced user experience.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Visualize Your Progress',
      description: 'Generate detailed, visually appealing reports that illustrate your growth trends across all regions.',
    },
  ];

  return (
    <section id="benefits" className="w-full px-10 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="text-sm text-gray-600 mb-6">Key Benefits</p>
          <h2 className="text-5xl font-light mb-8">
            We've revealed the key to success.
          </h2>
          <p className="text-lg text-gray-600">
            Luminar provides actionable insights without drowning you in data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[620px] bg-gradient-to-br from-orange-200 via-purple-200 to-blue-200 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
