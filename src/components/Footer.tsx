import { Phone, MapPin, Linkedin, DollarSign, TrendingUp } from 'lucide-react';
import logo from '../assets/images/tbr_logo_header.svg';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [rates, setRates] = useState({
    dolar: '0',
    uf: '0'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://mindicador.cl/api');
        const data = await response.json();
        
        setRates({
          dolar: data.dolar.valor.toLocaleString('es-CL'),
          uf: data.uf.valor.toLocaleString('es-CL')
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rates:', error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="T.B.R Liquidadores de seguros" 
                className="h-12 w-12"
              />
              <span className="ml-2 text-xl font-bold text-white">T.B.R Liquidadores de seguros</span>
            </div>
            <p className="mt-4 text-gray-400">
              Nuestros procesos son simples y digitales, disponibles para ti en cualquier momento y lugar.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Servicios</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#services" className="text-gray-300 hover:text-white">Servicios</a></li>
              <li><a href="#workflow" className="text-gray-300 hover:text-white">Proceso de Liquidación</a></li>
              <li><a href="#equipo" className="text-gray-300 hover:text-white">Nuestro Equipo</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sitios de Interés</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://www.cmfchile.cl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">CMF</a></li>
              <li><a href="https://www.sii.cl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">SII</a></li>
              <li><a href="https://www.bcentral.cl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Banco Central de Chile</a></li>
              <li className="flex items-center space-x-2 text-gray-300">
                <DollarSign className="h-4 w-4 text-gray-300" />
                <span>Dólar: ${loading ? '...' : rates.dolar}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <TrendingUp className="h-4 w-4 text-gray-300" />
                <span>UF: ${loading ? '...' : rates.uf}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+56972158277" className="hover:text-white">+56 9 7215 8277</a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Av. Providencia 1234, Of. 567, Providencia, Santiago</span>
              </li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Formulario de Contacto</a></li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <a 
              href="https://www.linkedin.com/company/t-b-r-asociados-liquidadores-de-seguros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-8 w-8" />
            </a>
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