import React from 'react';
import { Camera, CloudLightning, Map, Shield, Smartphone, Wifi } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Sin conexión a internet',
      description: 'Continue trabajando sin conexión a internet. Todos los datos se sincronizan automáticamente cuando estés nuevamente en línea.',
      icon: Wifi
    },
    {
      name: 'Documentación de fotos',
      description: 'Captura de fotos de alta calidad con herramientas de anotación integradas y etiquetado GPS automático.',
      icon: Camera
    },
    {
      name: 'Sincronización en tiempo real',
      description: 'Sincronización instantánea de datos de inspección con tu equipo y sistemas backend.',
      icon: CloudLightning
    },
    {
      name: 'Tracking de ubicación',
      description: 'Rastreo GPS integrado para documentación precisa de ubicaciones de inspecciones.',
      icon: Map
    },
    {
      name: 'Interfaz móvil',
      description: 'Optimizado para el trabajo en campo con una interfaz móvil intuitiva.',
      icon: Smartphone
    },
    {
      name: 'Seguridad de datos',
      description: 'Seguridad de datos de alta calidad para información sensible de reclamaciones de seguros.',
      icon: Shield
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para inspecciones en campo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Herramientas poderosas diseñadas específicamente para inspectores de reclamaciones de seguros trabajando en el campo.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 text-blue-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}