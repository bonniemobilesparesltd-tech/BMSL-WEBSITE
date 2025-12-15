import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Star } from 'lucide-react';
import { OPENING_HOURS, formatPhoneForCall, formatPhoneForWhatsapp } from '../constants';
import { Branch } from '../types';

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;

  // Check if Open (8:00 AM - 7:30 PM)
  const checkIsOpen = () => {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const openTime = 8 * 60; // 8:00 AM
    const closeTime = 19 * 60 + 30; // 7:30 PM
    return minutes >= openTime && minutes < closeTime;
  };

  const isOpen = checkIsOpen();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full group relative">
      {/* Header - Changed to Dark Slate (Navy) */}
      <div className="bg-slate-900 p-5 border-b border-slate-800 relative overflow-hidden flex justify-between items-start">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-orange-500/20 pointer-events-none"></div>
        
        <h3 className="text-xl font-bold text-white flex items-center gap-3 relative z-10">
          <div className="bg-orange-600 p-1.5 rounded-lg">
            <MapPin className="text-white" size={18} />
          </div>
          {branch.name}
        </h3>

        {/* Google Review Badge */}
        {branch.rating && (
          <div className="relative z-10 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded-lg">
            <span className="text-white font-bold text-sm">{branch.rating}</span>
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow space-y-5">
        {/* Address Section */}
        {(branch.address || branch.locationDetails) ? (
          <div className="mb-4">
            <h4 className="text-xs uppercase text-orange-600 font-bold tracking-wider mb-2">Location</h4>
            {branch.address && <p className="text-slate-800 font-medium text-lg leading-tight">{branch.address}</p>}
            {branch.locationDetails && <p className="text-slate-500 text-sm mt-1">{branch.locationDetails}</p>}
          </div>
        ) : (
          <div className="mb-4">
             <h4 className="text-xs uppercase text-orange-600 font-bold tracking-wider mb-2">Location</h4>
             <p className="text-slate-800 font-medium text-lg">{branch.name} Town</p>
          </div>
        )}

        {/* Hours & Status */}
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <Clock size={18} className="text-orange-500 shrink-0" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">{OPENING_HOURS}</span>
              {isOpen ? (
                <span className="flex items-center gap-1 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wide border border-green-200">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Open Now
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full uppercase tracking-wide border border-red-200">
                  Closed
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Phone Numbers */}
        <div>
          <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-3">Contact</h4>
          <div className="space-y-3">
            {branch.phones.map((phone, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={formatPhoneForCall(phone)}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                >
                  <Phone size={16} />
                  Call {phone}
                </a>
                <a 
                  href={`https://wa.me/${formatPhoneForWhatsapp(phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
        >
          <Navigation size={18} />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default BranchCard;