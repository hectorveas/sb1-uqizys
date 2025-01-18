import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Liquidación de siniestros 100% digital en nuestra plataforma NexusNet y con acceso disponible 24/7.',
      image: '/src/assets/images/services/1.webp'
    },
    {
      title: 'Seguros Individuales y Colectivos de Incendio y Adicionales Hogar.',
      image: '/src/assets/images/services/2.webp'
    },
    {
      title: 'Siniestros en PYME de Robo, Perjuicio por Paralización, Incendio y Adicionales.',
      image: '/src/assets/images/services/3.webp'
    },
    {
      title: 'Liquidación de Siniestros Catastróficos con Planificación Especializada.',
      image: '/src/assets/images/services/4.webp'
    },
    {
      title: 'Siniestros de Avería de Maquinaria y Todo Riesgo Construcción y Montaje.',
      image: '/src/assets/images/services/5.webp'
    },
    {
      title: 'Grandes industrias: Hidrocarburos, Minería, Energética, entre otras.',
      image: '/src/assets/images/services/6.webp'
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const scrollLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 450;
      setCurrentSlide(Math.max(currentSlide - 1, 0));
    }
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 450;
      setCurrentSlide(Math.min(currentSlide + 1, Math.ceil(services.length / 3) - 1));
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en liquidación de seguros para diferentes sectores y necesidades
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#001529]/90 text-white p-2 rounded-full shadow-lg hover:bg-[#001529] transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="slider" 
            className="flex overflow-x-scroll scroll-smooth gap-6 pb-8 hide-scrollbar"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex-none w-[450px] group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl h-full"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xl font-medium text-gray-900 line-clamp-3">
                      {service.title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#001529]/90 text-white p-2 rounded-full shadow-lg hover:bg-[#001529] transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-8 space-x-2"
          >
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#001529] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  const slider = document.getElementById('slider');
                  if (slider) {
                    slider.scrollLeft = index * 450 * 3;
                    setCurrentSlide(index);
                  }
                }}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}