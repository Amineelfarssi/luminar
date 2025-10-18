import { Check, X } from 'lucide-react';

const SpecificationsTable = () => {
  const features = [
    { luminar: true, seo: false, analytics: false },
    { luminar: true, seo: true, analytics: false },
    { luminar: true, seo: false, analytics: true },
    { luminar: true, seo: false, analytics: false },
    { luminar: true, seo: true, analytics: true },
    { luminar: true, seo: false, analytics: false },
  ];

  return (
    <section id="specifications" className="w-full px-10 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-6">Specifications</p>
          <h2 className="text-5xl font-light mb-8">
            Why Choose Luminar?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            You need a solution that grows with you. That's why we developed Luminar—a developer-friendly tool designed to elevate your business.
          </p>
          <button className="px-8 py-3 text-sm border border-black rounded-full hover:bg-black hover:text-white transition-colors">
            Get Started
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-center py-8 text-2xl font-light">Luminar</th>
                <th className="text-center py-8 text-xl font-light text-gray-600">Traditional SEO & Ads</th>
                <th className="text-center py-8 text-xl font-light text-gray-600">Generic Analytics</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="text-center py-6">
                    {feature.luminar ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-6">
                    {feature.seo ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-6">
                    {feature.analytics ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsTable;
