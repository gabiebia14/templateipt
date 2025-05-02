
import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="img">
      {/* Background Image */}
      <div style={{
      backgroundImage: "url('/lovable-uploads/f29daa21-e5f6-4648-8822-b4c8baba862b.png')",
      filter: "brightness(65%)"
    }} className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-transparent" />
      
      
      
      <div className="absolute bottom-0 left-0 right-0 bg-machinery-black py-6 z-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{
          animationDelay: "600ms"
        }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">25+</h3>
            <p className="text-white">Anos de Experiência</p>
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: "700ms"
        }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">1000+</h3>
            <p className="text-white">Projetos Concluídos</p>
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: "800ms"
        }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">50+</h3>
            <p className="text-white">Tipos de Produtos</p>
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: "900ms"
        }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">24/7</h3>
            <p className="text-white">Suporte ao Cliente</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
