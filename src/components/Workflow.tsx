import React from 'react';

export default function Workflow() {
  const steps = [
    {
      title: 'Denuncia de Siniestro',
      description: 'El asegurado procede a denunciar el siniestro ante la compañía de seguros o el corredor.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Vista de Inspección',
      description: 'Nuestro equipo contacta al asegurado o su designado para verificar datos y coordinar la visita.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Solicitud de Antecedentes y Análisis de Cobertura',
      description: 'Se solicitan antecedentes según el tipo de siniestro y se lleva a cabo un análisis técnico detallado, incluyendo la póliza y las circunstancias del evento.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Análisis Económico',
      description: 'Se analiza la pérdida material del asegurado, realizada por el ajustador o basada en el presupuesto proporcionado por el asegurado.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Comunicación de resolución del siniestro',
      description: 'Se envía la conclusión del siniestro con la determinación final del liquidador.',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    },
    {
      title: 'Envió de Informe de Liquidación',
      description: 'Se hace envió del informe de liquidación a las partes involucradas (asegurado y asegurador).',
      image: '/src/assets/images/img_denunciar_siniestro.jpg'
    }
  ];

  return (
    <div id="Workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Tu Liquidación Paso a Paso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl shadow-lg">
                <div className="absolute top-4 left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold z-10">
                  {index + 1}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}