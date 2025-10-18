
const Navigation = () => {
  return (
    <nav className="w-full px-10 py-4 bg-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="text-xl font-medium">
          Luminar
        </div>

        <div className="flex items-center gap-12">
          <a href="#benefits" className="text-sm hover:text-gray-600 transition-colors">
            Benefits
          </a>
          <a href="#specifications" className="text-sm hover:text-gray-600 transition-colors">
            Specifications
          </a>
          <a href="#how-to" className="text-sm hover:text-gray-600 transition-colors">
            How-to
          </a>
          <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
            Contact Us
          </a>
        </div>

        <button className="px-6 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
