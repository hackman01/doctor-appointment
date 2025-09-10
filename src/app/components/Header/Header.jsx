import { Stethoscope, Sun, Moon, Menu, X } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">MediCare Plus</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#doctors" className="hover:text-blue-500 transition-colors">Doctors</a>
          <a href="#testimonials" className="hover:text-blue-500 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b`}>
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block hover:text-blue-500 transition-colors">Home</a>
            <a href="#doctors" className="block hover:text-blue-500 transition-colors">Doctors</a>
            <a href="#testimonials" className="block hover:text-blue-500 transition-colors">Reviews</a>
            <a href="#contact" className="block hover:text-blue-500 transition-colors">Contact</a>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
