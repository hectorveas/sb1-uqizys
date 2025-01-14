import { useState } from 'react';
import { ChevronDown, Clock, Wrench, DollarSign, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo tarda la liquidación?',
      answer: 'El proceso puede tardar hasta 45 días, aunque este plazo puede extenderse si es necesario. Todo depende de que se reciban los documentos e información necesarios para definir la cobertura del seguro y calcular los daños.',
      icon: Clock,
      color: 'bg-blue-50 text-blue-700'
    },
    {
      question: '¿Qué debo hacer después de la inspección?',
      answer: 'Después de la inspección, el liquidador se pondrá en contacto contigo para explicarte si el seguro cubre el daño y cómo será el proceso para resolver tu caso.',
      icon: Wrench,
      color: 'bg-purple-50 text-purple-700'
    },
    {
      question: '¿Quién se encarga de las reparaciones?',
      answer: 'Las reparaciones las realiza el asegurado (es decir, tú). Si la póliza cubre el daño, el seguro te reembolsará los costos según lo establecido en el contrato.',
      icon: Wrench,
      color: 'bg-green-50 text-green-700'
    },
    {
      question: '¿Puedo hacer las reparaciones por mi cuenta?',
      answer: 'Sí, después de la inspección, puedes hacer las reparaciones si lo consideras necesario. Si lo haces, los costos serán evaluados más adelante para indemnizarte, siempre y cuando la póliza lo cubra.',
      icon: Wrench,
      color: 'bg-yellow-50 text-yellow-700'
    },
    {
      question: '¿Cuánto tiempo tarda en llegar el pago?',
      answer: 'El seguro tiene un máximo de 16 días para hacer el pago después de emitir el informe final. Sin embargo, si las partes necesitan revisarlo o tienen algún problema, el plazo puede extenderse unos días más.',
      icon: DollarSign,
      color: 'bg-red-50 text-red-700'
    },
    {
      question: '¿Cómo reviso el estado de mi siniestro?',
      answer: 'Ingresa a Revisa el Estado de tu Siniestro, donde nuestro sistema NexusNet te permite realizar un seguimiento en tiempo real del proceso, desde la denuncia hasta el despacho del informe, con acceso 24/7 totalmente en línea.',
      icon: Search,
      color: 'bg-indigo-50 text-indigo-700'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="faq" className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 -z-10"
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
      </motion.div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proceso de liquidación de seguros
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div 
                key={index}
                variants={item}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg scale-[1.02] lg:row-span-2' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`absolute top-0 left-0 h-full w-2 ${faq.color.split(' ')[0]}`} />
                <motion.div 
                  whileHover={{ backgroundColor: '#fafafa' }}
                  className="bg-white p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`rounded-lg p-2.5 ${faq.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex-1 flex items-start justify-between text-left"
                      >
                        <h3 className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</h3>
                        <motion.div
                          initial={false}
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                        </motion.div>
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}