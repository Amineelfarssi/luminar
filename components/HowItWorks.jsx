
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Get Started',
      description: "With our intuitive setup, you'll be up and running in no time.",
    },
    {
      number: '02',
      title: 'Customize and Configure',
      description: 'Tailor Luminar to meet your specific needs and preferences.',
    },
    {
      number: '03',
      title: 'Grow Your Business',
      description: 'Make data-driven decisions to exceed your goals.',
    },
  ];

  return (
    <section id="how-to" className="w-full px-10 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-light">Map Your Success</h2>
          <button className="px-8 py-3 text-sm border border-black rounded-full hover:bg-black hover:text-white transition-colors">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-8">
              <div className="text-7xl font-light text-gray-200">{step.number}</div>
              <div>
                <h3 className="text-lg font-medium mb-4">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 w-full h-[664px] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <div className="w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
