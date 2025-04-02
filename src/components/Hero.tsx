
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-machinery-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(50%)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-machinery-black/90 via-machinery-black/70 to-transparent">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl pt-20">
            <h1 className="text-white mb-6 animate-fade-in">
              <span className="text-machinery-yellow">Soluções</span> em Concreto <br />
              Para Sua Construção
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              Fornecemos artefatos de concreto de alta qualidade para construção civil,
              infraestrutura urbana e aplicações industriais em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <button className="btn-primary flex items-center gap-2 rounded">
                Nossos Produtos <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:border-machinery-yellow text-white hover:text-machinery-yellow font-bold py-3 px-6 transition duration-300 rounded">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-machinery-black bg-opacity-90 py-6">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">25+</h3>
            <p className="text-white">Anos de Experiência</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">1000+</h3>
            <p className="text-white">Projetos Concluídos</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">50+</h3>
            <p className="text-white">Tipos de Produtos</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "900ms" }}>
            <h3 className="text-machinery-yellow text-4xl font-bold">24/7</h3>
            <p className="text-white">Suporte ao Cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
