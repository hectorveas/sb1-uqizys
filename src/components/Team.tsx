import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  return (
    <div id="equipo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            NUESTRO EQUIPO
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative mb-12"
          >
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="/src/assets/images/img_denunciar_siniestro.jpg" 
              alt="Equipo de profesionales" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Nuestro equipo está conformado por profesionales altamente capacitados y con amplia experiencia en la gestión de siniestros en las industrias de hidrocarburos, minería y energía. Contamos con tecnología avanzada y un enfoque personalizado que nos permite atender con precisión las necesidades únicas de cada sector estratégico.
          </motion.p>
        </div>
      </div>
    </div>
  );
}