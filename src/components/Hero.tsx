import { motion } from 'framer-motion';
import header from '../assets/images/foto_hero.webp';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: `url(${header})`,
    }}>
      {/* Overlay para mejorar la legibilidad del texto */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          TBR Liquidadores de Seguros SpA
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-white font-light max-w-none md:max-w-full mx-auto whitespace-nowrap"
        >
          Nuestros procesos son simples y digitales, disponibles para ti en cualquier momento y lugar.
        </motion.p>
      </div>
    </div>
  );
}