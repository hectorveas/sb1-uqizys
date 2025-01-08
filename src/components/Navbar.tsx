import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <a href="#" className="cursor-pointer transition-transform hover:scale-105">
              <img src="./src/assets/images/tbr_logo_header.svg" alt="T.B.R Liquidadores de seguros" className="h-12 w-12 md:h-16 md:w-16" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <a href="#Workflow" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Tu Liquidación Paso a Paso
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <a href="#estado" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Revisa el Estado del Siniestro
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <a href="#equipo" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Equipo
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Preguntas Frecuentes
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <button 
              className="bg-[#001529] text-white px-6 py-2.5 rounded-lg hover:bg-[#001529]/90 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={() => {
                window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
              }}
            >
              Colaboradores
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6 text-[#001529]" /> : <Menu className="h-6 w-6 text-[#001529]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-lg">
          <a href="#services" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Servicios
          </a>
          <a href="#workflow" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Tu Liquidación Paso a Paso
          </a>
          <a href="#estado" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Revisa el Estado del Siniestro
          </a>
          <a href="#equipo" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Equipo
          </a>
          <a href="#faq" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Preguntas Frecuentes
          </a>
          <button 
            className="w-full text-left px-4 py-3 bg-[#001529] text-white rounded-lg hover:bg-[#001529]/90 transition-all duration-200 text-sm font-medium shadow-md"
            onClick={() => {
              window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
            }}
          >
            Colaboradores
          </button>
        </div>
      </div>
    </nav>
  );
}