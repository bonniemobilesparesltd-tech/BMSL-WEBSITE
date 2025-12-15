import React, { useState } from 'react';
import { Menu, X, Phone, Smartphone, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Branches', href: '#branches', id: 'branches' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="flex items-center gap-3 group"
        >
          {/* Logo Logic: Try image, fallback to constructed logo matching brand */}
          {!logoError ? (
            <img 
              src="logo.png" 
              alt="Bonnie Mobile Spares Ltd" 
              className="h-12 md:h-16 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
               {/* Constructed Icon resembling the brand logo */}
               <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <div className="absolute inset-0 bg-orange-500 rounded-lg transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
                  <Smartphone className="absolute top-1 left-1 text-orange-500 z-10" size={32} strokeWidth={2.5} />
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 z-20 shadow-sm border border-slate-100">
                     <Wrench className="text-slate-900 transform -scale-x-100" size={18} strokeWidth={3} />
                  </div>
                  {/* Decorative pixels */}
                  <div className="absolute top-0 right-0 flex gap-0.5">
                     <div className="w-1.5 h-1.5 bg-red-600 rounded-sm"></div>
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-sm"></div>
                  </div>
               </div>

               {/* Constructed Text matching brand colors */}
               <div className="flex flex-col justify-center -space-y-1">
                  <span className="text-2xl md:text-3xl font-black text-red-600 tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">
                    BONNIE
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-900 tracking-widest uppercase leading-none">
                    MOBILE SPARES
                  </span>
               </div>
            </div>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-slate-700 hover:text-red-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#branches"
            onClick={(e) => handleScroll(e, 'branches')}
            className="bg-slate-900 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
          >
            <Phone size={16} />
            Find Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 p-2 focus:outline-none hover:bg-slate-100 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-6 py-4 text-slate-800 hover:bg-orange-50 hover:text-red-600 font-bold border-l-4 border-transparent hover:border-red-600 transition-all flex justify-between items-center"
                onClick={(e) => handleScroll(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;