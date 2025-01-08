import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Liquidación de siniestros 100% digital en nuestra plataforma NexusNet y con acceso disponible 24/7.',
      image: '/src/assets/images/service1.jpg'
    },
    {
      title: 'Seguros Individuales y Colectivos de Incendio y Adicionales Hogar.',
      image: '/src/assets/images/service2.jpg'
    },
    {
      title: 'Siniestros en PYME de Robo, Perjuicio por Paralización, Incendio y Adicionales.',
      image: '/src/assets/images/service3.jpg'
    },
    {
      title: 'Liquidación de Siniestros Catastróficos con Planificación Especializada.',
      image: '/src/assets/images/service4.jpg'
    },
    {
      title: 'Siniestros de Avería de Maquinaria y Todo Riesgo Construcción y Montaje.',
      image: '/src/assets/images/service5.jpg'
    }
  ];

  const scrollLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft = slider.scrollLeft - 400;
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Servicios</h2>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div 
            id="slider" 
            className="flex overflow-x-scroll scroll-smooth gap-6 pb-8 hide-scrollbar"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-[400px] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="h-[300px] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-medium text-gray-900">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}