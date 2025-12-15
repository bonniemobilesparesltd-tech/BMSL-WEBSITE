import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-32 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive solutions for all your mobile phone needs with a focus on quality and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-slate-50 p-8 rounded-3xl hover:bg-orange-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-orange-100">
                <div className="w-14 h-14 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;