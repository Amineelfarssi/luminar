import React from 'react';

const Hero = () => {
  return (
    <section className="w-full px-10 py-12 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-light leading-tight mb-8">
            Your company, seamlessly<br />integrated with
          </h1>

          <div className="inline-block px-8 py-6 bg-white border-2 border-black rounded-2xl shadow-lg">
            <div className="text-3xl font-semibold">ChatGPT</div>
          </div>
        </div>

        <div className="mt-16 w-full h-[364px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg"></div>
          </div>
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-48 bg-gray-300 rounded-2xl"></div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-48 bg-gray-300 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
