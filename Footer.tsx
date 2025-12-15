import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { OPENING_HOURS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-32 bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Bonnie Mobile Spares <span className="text-orange-500">Ltd</span></h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your number one source for mobile phone repairs, spares, and accessories in Kenya. Trusted by thousands for quality and speed.
            </p>
            <div className="flex items-center gap-3 text-sm text-orange-400 font-medium bg-slate-800/50 p-3 rounded-lg inline-block">
               <Clock size={16} />
               <span>{OPENING_HOURS}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-orange-500 transition-colors flex items-center gap-2">Home</a></li>
              <li><a href="#branches" className="hover:text-orange-500 transition-colors flex items-center gap-2">Find a Branch</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">Services</a></li>
            </ul>
          </div>

          {/* Contact Header */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
             <p className="text-sm text-slate-400 mb-6">
               Visit any of our branches for immediate assistance or reach out online.
             </p>
             <div className="flex flex-col gap-4">
                <a href="#branches" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                  <div className="bg-slate-800 p-2 rounded-lg">
                    <Phone size={18} className="text-orange-500" />
                  </div>
                  <span className="font-medium">View Branch Contacts</span>
                </a>
                <a href="mailto:bonniemobilesparesltd@gmail.com" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                  <div className="bg-slate-800 p-2 rounded-lg">
                    <Mail size={18} className="text-orange-500" />
                  </div>
                  <span className="font-medium">bonniemobilesparesltd@gmail.com</span>
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bonnie Mobile Spares Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;