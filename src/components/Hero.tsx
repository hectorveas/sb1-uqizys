export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: 'url("/src/assets/images/foto_header.webp")',
    }}>
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          TBR Liquidadores de Seguros SpA
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white font-light max-w-3xl mx-auto">
          Nuestros procesos son simples y digitales, disponibles para ti en cualquier momento y lugar.
        </p>
      </div>
    </div>
  );
}