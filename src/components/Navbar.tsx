import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogin = () => {
    window.open('https://web.tbrchile.cl/admin/auth/user-login', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/56972158277', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
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
              <button 
                onClick={handleLogin}
                className="text-gray-700 hover:text-[#001529] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                Revisa el Estado del Siniestro
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#001529] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
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
                onClick={handleLogin}
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
            <button 
              onClick={handleLogin}
              className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Revisa el Estado del Siniestro
            </button>
            <a href="#equipo" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
              Equipo
            </a>
            <a href="#faq" className="block px-4 py-3 text-gray-700 hover:text-[#001529] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium">
              Preguntas Frecuentes
            </a>
            <button 
              className="w-full text-left px-4 py-3 bg-[#001529] text-white rounded-lg hover:bg-[#001529]/90 transition-all duration-200 text-sm font-medium shadow-md"
              onClick={handleLogin}
            >
              Colaboradores
            </button>
          </div>
        </div>
      </nav>

      {/* Botón flotante de WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </button>
    </>
  );
}