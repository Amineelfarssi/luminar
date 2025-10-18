
const LogoCloud = () => {
  const logos = [
    { name: 'Company 1' },
    { name: 'Company 2' },
    { name: 'Company 3' },
    { name: 'Company 4' },
    { name: 'Company 5' },
    { name: 'Company 6' },
  ];

  return (
    <section className="w-full px-10 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-sm text-gray-600 mb-8">
          Endorsed by top-tier brands:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="text-gray-400 text-sm font-medium">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
