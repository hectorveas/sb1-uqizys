import React from 'react';
import { Camera, CloudLightning, Map, Shield, Smartphone, Wifi } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: 'Liquidación Digital',
      description: 'Realizamos todo el proceso de liquidación de manera digital, permitiéndote seguir tu caso en cualquier momento.',
      icon: Wifi
    },
    {
      name: 'Documentación Digital',
      description: 'Capturamos y procesamos toda la documentación necesaria de forma digital para agilizar el proceso.',
      icon: Camera
    },
    {
      name: 'Atención Inmediata',
      description: 'Respuesta y atención inmediata a tus necesidades de liquidación de seguros.',
      icon: CloudLightning
    },
    {
      name: 'Cobertura Nacional',
      description: 'Servicio disponible en todo el territorio nacional para tu conveniencia.',
      icon: Map
    },
    {
      name: 'Plataforma Móvil',
      description: 'Accede a tu información y estado de liquidación desde cualquier dispositivo móvil.',
      icon: Smartphone
    },
    {
      name: 'Seguridad Garantizada',
      description: 'Máxima seguridad en el manejo de tu información y documentación sensible.',
      icon: Shield
    }
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Servicios</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ofrecemos servicios profesionales y digitales para hacer tu proceso de liquidación más simple y eficiente.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <div className="absolute h-12 w-12 text-blue-600">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}