import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function CurrencyRates() {
  const [rates, setRates] = useState({
    dolar: '0',
    uf: '0'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Aquí deberías reemplazar esta URL con la API real que vayas a utilizar
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
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchRates, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 right-4 z-40 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 space-y-3">
      <div className="flex items-center space-x-3">
        <div className="bg-green-100 p-2 rounded-full">
          <DollarSign className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Dólar</p>
          <p className="font-semibold">
            {loading ? 'Cargando...' : `$${rates.dolar}`}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <TrendingUp className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">UF</p>
          <p className="font-semibold">
            {loading ? 'Cargando...' : `$${rates.uf}`}
          </p>
        </div>
      </div>
    </div>
  );
} 