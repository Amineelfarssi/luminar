import React from 'react';

const Testimonial = () => {
  return (
    <section className="w-full px-10 py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[669px] bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-3xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="space-y-8">
            <blockquote className="text-3xl font-light leading-relaxed">
              "I was skeptical at first, but Luminar has completely transformed how I manage my business. The data visualizations are incredibly clear and intuitive, and the platform is user-friendly. I can't imagine running my company without it."
            </blockquote>

            <div>
              <p className="text-lg font-medium">Jane Smith</p>
              <p className="text-sm text-gray-600">Chief Data Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
