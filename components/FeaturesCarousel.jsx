
const FeaturesCarousel = () => {
  const features = [
    { number: '01', text: 'Spot Trends Instantly: No more digging through data.' },
    { number: '02', text: 'Unify Your Team: Share clear reports that everyone can comprehend.' },
    { number: '03', text: 'Make Your Presentations Shine: Interactive maps and dashboards keep your audience engaged.' },
    { number: '04', text: 'Your Global Overview: Quickly obtain a clear understanding of your entire operation.' },
  ];

  return (
    <section className="w-full px-10 py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-light mb-6">
                Grasp the Bigger<br />Picture
              </h2>
              <p className="text-lg text-gray-600">
                Luminar converts your data into vivid visuals that clarify the landscape in each region.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <span className="text-lg font-light text-gray-400">{feature.number}</span>
                  <p className="text-lg">{feature.text}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 text-sm border border-black rounded-full hover:bg-black hover:text-white transition-colors">
              Learn More
            </button>
          </div>

          <div className="w-full h-[700px] bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200 rounded-3xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
