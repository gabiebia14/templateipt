
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop" 
              alt="Fábrica de artefatos de concreto" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-machinery-yellow text-machinery-black p-8 rounded-lg hidden md:block">
            <div className="text-5xl font-bold">25+</div>
            <div className="text-xl font-medium">Anos de Experiência</div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          <div className="inline-block px-4 py-2 bg-machinery-yellow/20 rounded-full text-machinery-yellow font-bold mb-4">
            SOBRE NOSSA EMPRESA
          </div>
          <h2 className="mb-6">Fornecemos <span className="text-machinery-yellow">Artefatos de Concreto</span> de Qualidade Superior</h2>
          <p className="text-machinery-gray mb-6">
            Com mais de 25 anos de experiência no setor, nossa empresa se estabeleceu como 
            líder no fornecimento de artefatos de concreto para construção civil, infraestrutura 
            urbana e aplicações industriais em todo o Brasil.
          </p>
          <p className="text-machinery-gray mb-8">
            Temos orgulho em oferecer produtos de concreto de alta qualidade, atendimento 
            excepcional ao cliente e soluções inovadoras adaptadas para atender às necessidades 
            específicas dos nossos clientes.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Produtos de Qualidade</h4>
                <p className="text-machinery-gray">Artefatos de concreto de alto desempenho para projetos exigentes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Equipe Especializada</h4>
                <p className="text-machinery-gray">Profissionais qualificados com anos de experiência no setor.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Suporte 24/7</h4>
                <p className="text-machinery-gray">Assistência contínua para todas as suas necessidades.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Preços Competitivos</h4>
                <p className="text-machinery-gray">Soluções acessíveis sem comprometer a qualidade.</p>
              </div>
            </div>
          </div>

          <button className="btn-primary flex items-center gap-2 rounded">
            Saiba Mais Sobre Nós <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
