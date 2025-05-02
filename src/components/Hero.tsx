
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        style={{
          backgroundImage: "url('/lovable-uploads/f29daa21-e5f6-4648-8822-b4c8baba862b.png')",
          filter: "brightness(65%)"
        }} 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-transparent"
      />
      
      {/* Content */}
      <div className="container-custom z-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          IPT <span className="text-machinery-yellow">TEIXEIRA</span>
        </h1>
        <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
          Excelência em consultoria e soluções técnicas especializadas para gestão de ativos e equipamentos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "500ms" }}>
          <button className="btn-primary rounded px-8 py-4 text-lg">
            Nossos Serviços
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-machinery-black px-8 py-4 rounded text-lg transition duration-300">
            Fale Conosco
          </button>
        </div>
      </div>
      
      {/* Stats Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-machinery-black py-6 z-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">15+</h3>
            <p className="text-white">Anos de Experiência</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">100+</h3>
            <p className="text-white">Projetos Realizados</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">30+</h3>
            <p className="text-white">Parceiros de Negócio</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "900ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">24/7</h3>
            <p className="text-white">Suporte Especializado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
