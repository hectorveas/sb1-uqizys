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
    <div className="bg-[#001529] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>USD: ${loading ? '...' : rates.dolar}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Euro className="h-4 w-4" />
            <span>EUR: ${loading ? '...' : rates.euro}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>UF: ${loading ? '...' : rates.uf}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>UTM: ${loading ? '...' : rates.utm}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 