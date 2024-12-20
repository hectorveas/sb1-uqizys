import React from 'react';
import { ClipboardCheck, Cloud, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Liquidación de reclamaciones de seguros</span>
            <span className="block text-blue-600">Haciendo que sea simple</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Simplifica tu proceso de inspección de reclamaciones de seguros con nuestra poderosa plataforma móvil.
            Realiza evaluaciones de campo exhaustivas, documenta daños y procesa reclamaciones más rápido que nunca.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Iniciar prueba gratuita
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Programar demo
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gradient-to-br from-blue-50 to-indigo-50 text-sm text-gray-500">
                Confiado por compañías de seguros líderes
              </span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <Shield className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-400 font-semibold">Seguros</span>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <ClipboardCheck className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-400 font-semibold">Liquidación</span>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <Cloud className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-400 font-semibold">Seguridad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}