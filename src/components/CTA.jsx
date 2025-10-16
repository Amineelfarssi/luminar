import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="w-full px-10 py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl font-light">Connect with Us</h2>
          <p className="text-lg text-gray-600">
            Schedule a quick call to learn how Luminar can turn your regional data into a competitive advantage.
          </p>
          <button className="w-full max-w-2xl px-8 py-4 text-base bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Schedule a Call →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
