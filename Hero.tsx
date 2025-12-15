import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { formatPhoneForCall, formatPhoneForWhatsapp } from '../constants';

const Hero: React.FC = () => {
  const HERO_CONTACT_NUMBER = "0702 432 508";

  const scrollToBranches = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('branches');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="scroll-mt-32 relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Glow effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-orange-200 border border-white/10 text-sm font-semibold tracking-wide uppercase mb-8">
          Professional Mobile Solutions in Kenya
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Bonnie Mobile Spares <span className="text-orange-500">Ltd</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Your trusted partner for <span className="text-white font-medium">original spares</span>, quality accessories, and professional repairs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <a 
            href={`https://wa.me/${formatPhoneForWhatsapp(HERO_CONTACT_NUMBER)}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/20"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
          
          <a 
            href={formatPhoneForCall(HERO_CONTACT_NUMBER)}
            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a 
            href="#branches"
            onClick={scrollToBranches}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20"
          >
            <MapPin size={20} />
            Find Nearest Branch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;