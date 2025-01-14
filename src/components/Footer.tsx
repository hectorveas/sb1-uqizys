import { Shield, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">T.B.R Liquidadores de seguros</span>
            </div>
            <p className="mt-4 text-gray-400">
              Haciendo que la inspección de reclamaciones de seguros sea simple y eficiente.
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
              <li><a href="https://www.bcentral.cl/web/banco-central/areas/estadisticas/tipos-de-cambio-y-paridades" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Valor del Dólar y UF</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Acerca de</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Carreras</a></li>
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