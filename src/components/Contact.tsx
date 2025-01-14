import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [rut, setRut] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validar el formulario cuando cambien los campos requeridos
  useEffect(() => {
    const validateForm = () => {
      const isValid = 
        email.trim() !== '' &&
        phone.length === 9 &&
        tipo !== '' &&
        descripcion.trim() !== '' &&
        rut.trim() !== '' &&
        !phoneError;
      
      setIsFormValid(isValid);
    };

    validateForm();
  }, [email, phone, tipo, descripcion, rut, phoneError]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/56972158277', '_blank', 'noopener,noreferrer');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo permite números
    if (value.length <= 9) {
      setPhone(value);
      if (value.length === 9) {
        setPhoneError('');
      } else {
        setPhoneError('El número debe tener 9 dígitos');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 9) {
      setPhoneError('El número debe tener 9 dígitos');
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        email: email,
        phone: phone,
        rut: rut,
        tipo: tipo,
        asunto: asunto,
        descripcion: descripcion
      };

      await emailjs.send(
        "service_bryddv1",
        "template_y2jpv4e",
        templateParams,
        "UPBUcvJooOYpe0bJE"
      );

      // Limpiar el formulario
      setEmail('');
      setPhone('');
      setTipo('');
      setAsunto('');
      setDescripcion('');
      setRut('');
      
      alert('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
          {/* Imagen y texto */}
          <div className="flex-1 flex items-center gap-6">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="/src/assets/images/img_denunciar_siniestro.jpg"
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
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Enviar una solicitud</h2>
              <div className="text-right mb-4">
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Dónde te contactamos?<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-stretch">
                    <span className="inline-flex items-center px-4 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm rounded-l-md">
                      +56
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      placeholder="9 dígitos"
                      className="block w-full rounded-none rounded-r-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de consulta<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                  >
                    <option value="">Seleccione tipo de consulta</option>
                    <option value="siniestro">Consulta siniestro</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto (opcional)
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                  />
                </div>

                <div>
                  <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">
                    Ingrese los detalles de esta solicitud. Un integrante de nuestro personal de soporte responderá en breve.
                  </p>
                </div>

                <div>
                  <label htmlFor="rut" className="block text-sm font-medium text-gray-700 mb-1">
                    RUT (xx.xxx.xxx-x)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="rut"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    required
                    placeholder="Ingrese rut del asegurado"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#001529] focus:ring-[#001529]"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading || !isFormValid}
                    className="w-full bg-[#001529] text-white px-6 py-3 rounded-lg hover:bg-[#001529]/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar solicitud'}
                  </button>
                  {!isFormValid && !loading && (
                    <p className="mt-2 text-sm text-red-600 text-center">
                      Por favor, complete todos los campos requeridos correctamente
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
