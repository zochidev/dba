import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bot, X } from 'lucide-react';
import AuthButton from './AuthButton';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-discord-blurple text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              type="button"
              className="px-4 border-r border-indigo-500 inline-flex items-center justify-center lg:hidden"
              onClick={toggleSidebar}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
            
            <Link to="/" className="flex items-center space-x-3 px-4">
              <Bot size={28} className="text-white" />
              <span className="font-bold text-xl hidden sm:inline">Discord Bot Academy</span>
              <span className="font-bold text-xl sm:hidden">DBA</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-white hover:bg-indigo-600'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/discord.js" 
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname.startsWith('/discord.js') 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-white hover:bg-indigo-600'
              }`}
            >
              Discord.js
            </Link>
            <Link 
              to="/discord.py" 
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname.startsWith('/discord.py') 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-white hover:bg-indigo-600'
              }`}
            >
              discord.py
            </Link>
            <AuthButton />
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <AuthButton />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 transition-colors"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-discord-dark">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-indigo-700 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/discord.js"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname.startsWith('/discord.js')
                  ? 'bg-indigo-700 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Discord.js
            </Link>
            <Link
              to="/discord.py"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname.startsWith('/discord.py')
                  ? 'bg-indigo-700 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              discord.py
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;