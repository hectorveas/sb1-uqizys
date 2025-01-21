import { useState, useEffect } from 'react';
import { DollarSign, Euro, TrendingUp } from 'lucide-react';

export default function CurrencyRates() {
  const [rates, setRates] = useState({
    dolar: '0',
    euro: '0',
    uf: '0',
    utm: '0'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://mindicador.cl/api');
        const data = await response.json();
        
        setRates({
          dolar: data.dolar.valor.toLocaleString('es-CL'),
          euro: data.euro.valor.toLocaleString('es-CL'),
          uf: data.uf.valor.toLocaleString('es-CL'),
          utm: data.utm.valor.toLocaleString('es-CL')
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rates:', error);
        setLoading(false);
      }
    };

    fetchRates();
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchRates, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#001529] text-white py-1.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-start md:justify-end overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center space-x-4 md:space-x-6 px-2">
            <div className="flex items-center space-x-1.5">
              <DollarSign className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400" />
              <span className="text-xs md:text-sm">USD: ${loading ? '...' : rates.dolar}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Euro className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-400" />
              <span className="text-xs md:text-sm">EUR: ${loading ? '...' : rates.euro}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-yellow-400" />
              <span className="text-xs md:text-sm">UF: ${loading ? '...' : rates.uf}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-purple-400" />
              <span className="text-xs md:text-sm">UTM: ${loading ? '...' : rates.utm}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 