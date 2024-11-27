import React from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">T.B.R Liquidadores de seguros</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600"> Servicios </a>
            <a href="#workflow" className="text-gray-600 hover:text-blue-600">Nosotros</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Contacto</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => {
                window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
              }}
            >
              Iniciar Sesión
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
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#workflow" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Nosotros</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contacto</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => {
                window.location.href = 'https://web.tbrchile.cl/admin/auth/user-login';
              }}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}