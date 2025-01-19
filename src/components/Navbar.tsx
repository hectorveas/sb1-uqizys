import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/tbr_logo_header.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogin = () => {
    window.open('https://web.tbrchile.cl/admin/auth/user-login', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="cursor-pointer transition-transform hover:scale-105">
              <img src={logo} alt="T.B.R Liquidadores de seguros" className="h-12 w-12 md:h-16 md:w-16" />
            </a>
          </div>
          
          {/* Enlaces centrales */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-8">
            <a href="#services" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
            <a href="#Workflow" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Tu Liquidación Paso a Paso
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
            <a href="#contact" className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          </div>

          {/* Botones de acción */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleLogin}
              className="text-[#001529] hover:text-[#001529]/80 px-4 py-2 transition-colors duration-200 text-sm font-medium"
            >
              Revisar Estado del Siniestro
            </button>
            <button 
              className="bg-[#001529] text-white px-4 py-2 rounded-lg hover:bg-[#001529]/90 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
              onClick={handleLogin}
            >
              Colaboradores
            </button>
          </div>

          {/* Botón móvil */}
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

      {/* Menú móvil */}
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
          <a href="#equipo" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Equipo
          </a>
          <a href="#faq" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Preguntas Frecuentes
          </a>
          <a href="#contact" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
            Contacto
          </a>
          <button 
            onClick={handleLogin}
            className="w-full text-left px-4 py-3 text-[#001529] hover:text-[#001529]/80 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Revisar Estado del Siniestro
          </button>
          <button 
            className="w-full text-left px-4 py-3 bg-[#001529] text-white rounded-lg hover:bg-[#001529]/90 transition-all duration-200 text-sm font-medium shadow-md"
            onClick={handleLogin}
          >
            Colaboradores
          </button>
        </div>
      </div>
    </nav>
  );
}