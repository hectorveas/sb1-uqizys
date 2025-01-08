import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="cursor-pointer">
              <img src="./src/assets/images/tbr_logo_header.svg" alt="T.B.R Liquidadores de seguros" className="h-12 w-12 md:h-20 md:w-20" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#001529]">Servicios</a>
            <a href="#Workflow" className="text-gray-600 hover:text-[#001529]">Tu Liquidación Paso a Paso</a>
            <a href="#estado" className="text-gray-600 hover:text-[#001529]">Revisa el Estado del Siniestro</a>
            <a href="#equipo" className="text-gray-600 hover:text-[#001529]">Equipo</a>
            <a href="#faq" className="text-gray-600 hover:text-[#001529]">Preguntas Frecuentes</a>
            <button className="bg-[#001529] text-white px-4 py-2 rounded-lg hover:bg-[#001529]/90"
              onClick={() => {
                window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
              }}
            >
              Colaboradores
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-[#001529]">Servicios</a>
            <a href="#workflow" className="block px-3 py-2 text-gray-600 hover:text-[#001529]">Tu Liquidación Paso a Paso</a>
            <a href="#estado" className="block px-3 py-2 text-gray-600 hover:text-[#001529]">Revisa el Estado del Siniestro</a>
            <a href="#equipo" className="block px-3 py-2 text-gray-600 hover:text-[#001529]">Equipo</a>
            <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-[#001529]">Preguntas Frecuentes</a>
            <button className="w-full text-left px-3 py-2 bg-[#001529] text-white rounded-lg hover:bg-[#001529]/90"
              onClick={() => {
                window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
              }}
            >
              Colaboradores
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}