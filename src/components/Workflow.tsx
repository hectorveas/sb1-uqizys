import React from 'react';
import { motion } from 'framer-motion';

export default function Workflow() {
  const steps = [
    {
      title: 'Denuncia de Siniestro',
      description: 'El asegurado procede a denunciar el siniestro ante la compañía de seguros o el corredor.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Vista de Inspección',
      description: 'Nuestro equipo contacta al asegurado o su designado para verificar datos y coordinar la visita.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Solicitud de Antecedentes y Análisis de Cobertura',
      description: 'Se solicitan antecedentes según el tipo de siniestro y se lleva a cabo un análisis técnico detallado, incluyendo la póliza y las circunstancias del evento.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Análisis Económico',
      description: 'Se analiza la pérdida material del asegurado, realizada por el ajustador o basada en el presupuesto proporcionado por el asegurado.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Comunicación de resolución del siniestro',
      description: 'Se envía la conclusión del siniestro con la determinación final del liquidador.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Envió de Informe de Liquidación',
      description: 'Se hace envió del informe de liquidación a las partes involucradas (asegurado y asegurador).',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div id="Workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Tu Liquidación Paso a Paso</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-justify">
            Conoce el proceso completo de liquidación de siniestros, diseñado para brindarte transparencia y eficiencia en cada etapa
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Número del paso */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute top-4 left-4 bg-[#001529]/80 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold z-20 shadow-lg"
              >
                {index + 1}
              </motion.div>
              
              {/* Imagen */}
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              
              {/* Overlay oscuro por defecto */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-80" 
              />
              
              {/* Contenido de texto */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
              >
                <motion.h3 
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl font-bold text-white mb-3 text-center w-full px-4"
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-justify w-full"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}