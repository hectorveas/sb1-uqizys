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
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          TBR Liquidadores de Seguros SpA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Nuestros procesos son simples y digitales, disponibles para ti en cualquier momento y lugar.
        </motion.p>
      </div>
      
    </div>
  );
}