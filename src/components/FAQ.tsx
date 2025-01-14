import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo tarda la liquidación?',
      answer: 'El proceso puede tardar hasta 45 días, aunque este plazo puede extenderse si es necesario. Todo depende de que se reciban los documentos e información necesarios para definir la cobertura del seguro y calcular los daños.'
    },
    {
      question: '¿Qué debo hacer después de la inspección?',
      answer: 'Después de la inspección, el liquidador se pondrá en contacto contigo para explicarte si el seguro cubre el daño y cómo será el proceso para resolver tu caso.'
    },
    {
      question: '¿Quién se encarga de las reparaciones?',
      answer: 'Las reparaciones las realiza el asegurado (es decir, tú). Si la póliza cubre el daño, el seguro te reembolsará los costos según lo establecido en el contrato.'
    },
    {
      question: '¿Puedo hacer las reparaciones por mi cuenta?',
      answer: 'Sí, después de la inspección, puedes hacer las reparaciones si lo consideras necesario. Si lo haces, los costos serán evaluados más adelante para indemnizarte, siempre y cuando la póliza lo cubra.'
    },
    {
      question: '¿Cuánto tiempo tarda en llegar el pago?',
      answer: 'El seguro tiene un máximo de 16 días para hacer el pago después de emitir el informe final. Sin embargo, si las partes necesitan revisarlo o tienen algún problema, el plazo puede extenderse unos días más.'
    },
    {
      question: '¿Cómo reviso el estado de mi siniestro?',
      answer: 'Ingresa a Revisa el Estado de tu Siniestro, donde nuestro sistema NexusNet te permite realizar un seguimiento en tiempo real del proceso, desde la denuncia hasta el despacho del informe, con acceso 24/7 totalmente en línea.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="relative isolate overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proceso de liquidación de seguros
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'py-4' : 'py-0 h-0'
                  } overflow-hidden`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}