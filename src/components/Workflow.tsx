import React from 'react';
import { CheckCircle2, ClipboardCheck, Upload } from 'lucide-react';

export default function Workflow() {
  return (
    <div id="workflow" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Proceso de inspección</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple pero poderoso
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nuestro proceso simplificado ayuda a completar inspecciones eficientemente y precisamente.
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hidden md:block w-full border-t-2 border-gray-200" />
            </div>
            <div className="relative flex justify-around md:justify-between">
              <div className="text-center md:w-1/3">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <ClipboardCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">1. Documentar daños</h3>
                <p className="mt-2 text-base text-gray-500">
                  Captura fotos, agrega notas y documenta todos los detalles relevantes sobre la reclamación de seguros.
                </p>
              </div>

              <div className="text-center md:w-1/3">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">2. Completar evaluación</h3>
                <p className="mt-2 text-base text-gray-500">
                  Completa formularios digitales y completa la lista de verificación de inspección con nuestro proceso guiado.
                </p>
              </div>

              <div className="text-center md:w-1/3">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">3. Cargar informe</h3>
                <p className="mt-2 text-base text-gray-500">
                  Carga instantáneamente tu informe a la nube y comparte con todos los interesados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}