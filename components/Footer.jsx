
const Footer = () => {
  return (
    <footer className="w-full px-10 py-16 bg-white border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center gap-12 mb-16">
          <a href="#benefits" className="text-sm text-gray-600 hover:text-black transition-colors">
            Key Advantages
          </a>
          <a href="#specifications" className="text-sm text-gray-600 hover:text-black transition-colors">
            Specifications
          </a>
          <a href="#how-to" className="text-sm text-gray-600 hover:text-black transition-colors">
            How-to Guide
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-medium">Luminar</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© Luminar.</span>
              <span>2025</span>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
