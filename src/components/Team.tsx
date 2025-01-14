import React from 'react';

export default function Team() {
  return (
    <div id="equipo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            NUESTRO EQUIPO
          </h2>
          <div className="relative mb-12">
            <img 
              src="/src/assets/images/img_denunciar_siniestro.jpg" 
              alt="Equipo de profesionales" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo está conformado por profesionales altamente capacitados y con amplia experiencia en la gestión de siniestros en las industrias de hidrocarburos, minería y energía. Contamos con tecnología avanzada y un enfoque personalizado que nos permite atender con precisión las necesidades únicas de cada sector estratégico.
          </p>
        </div>
      </div>
    </div>
  );
}