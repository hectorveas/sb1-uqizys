import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Liquidación de siniestros 100% digital en nuestra plataforma NexusNet y con acceso disponible 24/7.',
      image: '/src/assets/images/servicio_1.webp'
    },
    {
      title: 'Seguros Individuales y Colectivos de Incendio y Adicionales Hogar.',
      image: '/src/assets/images/servicio_1.webp'
    },
    {
      title: 'Siniestros en PYME de Robo, Perjuicio por Paralización, Incendio y Adicionales.',
      image: '/src/assets/images/servicio_1.webp'
    },
    {
      title: 'Liquidación de Siniestros Catastróficos con Planificación Especializada.',
      image: '/src/assets/images/servicio_1.webp'
    },
    {
      title: 'Siniestros de Avería de Maquinaria y Todo Riesgo Construcción y Montaje.',
      image: '/src/assets/images/servicio_1.webp'
    },
    {
      title: 'Grandes industrias: Hidrocarburos, Minería, Energética, entre otras.',
      image: '/src/assets/images/servicio_1.webp'
    }
  ];

  const scrollLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft = slider.scrollLeft - 450;
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft = slider.scrollLeft + 450;
  };

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en liquidación de seguros para diferentes sectores y necesidades
          </p>
        </div>
        
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
                className="flex-none w-[450px] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl h-full">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xl font-medium text-gray-900 line-clamp-3">
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