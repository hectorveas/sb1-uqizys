import React, { useState } from 'react';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/56972158277', '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
          {/* Imagen y texto */}
          <div className="flex-1 flex items-center gap-6">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="/src/assets/images/contact_illustration.svg"
                alt="Ilustración de contacto"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Estamos para ayudarte!</h2>
              <p className="text-gray-600 mb-4">
                Si necesitas ayuda, agenda un llamado con uno de nuestros asesores. También puedes hablar con nosotros a través de nuestro formulario de contacto.
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Horario de atención: Lunes a viernes - 9 a 18 hrs.
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <button
              onClick={handleWhatsApp}
              className="bg-[#001529] text-white px-6 py-3 rounded-lg hover:bg-[#001529]/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Agendar llamado
            </button>
            <button
              onClick={() => setShowForm(!showForm)}
              className="border-2 border-[#001529] text-[#001529] px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Formulario de contacto
            </button>
          </div>
        </div>

        {/* Formulario desplegable */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showForm ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Formulario de contacto</h3>
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#001529] focus:ring-[#001529] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Apellido</label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#001529] focus:ring-[#001529] sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#001529] focus:ring-[#001529] sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#001529] focus:ring-[#001529] sm:text-sm"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#001529] text-white px-6 py-3 rounded-lg hover:bg-[#001529]/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
