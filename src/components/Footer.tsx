import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">T.B.R Liquidadores de seguros</span>
            </div>
            <p className="mt-4 text-gray-400">
              Haciendo que la inspección de reclamaciones de seguros sea simple y eficiente.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Servicios</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-white">Servicios</a></li>
              <li><a href="#workflow" className="text-gray-300 hover:text-white">Nosotros</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Acerca de</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Carreras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Soporte</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Documentación</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} T.B.R Liquidadores de seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}