
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
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
              alt="IPT TEIXEIRA engenharia e consultoria" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-machinery-yellow text-machinery-black p-8 rounded-lg hidden md:block">
            <div className="text-5xl font-bold">15+</div>
            <div className="text-xl font-medium">Anos de Experiência</div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          <div className="inline-block px-4 py-2 bg-machinery-yellow/20 rounded-full text-machinery-yellow font-bold mb-4">
            SOBRE NOSSA EMPRESA
          </div>
          <h2 className="mb-6">Experiência em <span className="text-machinery-yellow">Consultoria Técnica</span> e Engenharia</h2>
          <p className="text-machinery-gray mb-6">
            A IPT TEIXEIRA tem como foco a excelência em soluções para gestão de ativos físicos, 
            contando com especialistas altamente qualificados e vasta experiência no mercado.
          </p>
          <p className="text-machinery-gray mb-8">
            Nossa equipe é formada por profissionais com certificações internacionais e experiência 
            prática, proporcionando soluções que agregam valor real para nossos clientes em diversos setores.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Consultoria Especializada</h4>
                <p className="text-machinery-gray">Soluções personalizadas para gestão de ativos físicos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Equipe Certificada</h4>
                <p className="text-machinery-gray">Profissionais com certificações internacionais.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Resultados Comprovados</h4>
                <p className="text-machinery-gray">Projetos com alto retorno sobre investimento.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Tecnologia Avançada</h4>
                <p className="text-machinery-gray">Ferramentas de última geração para análise e diagnóstico.</p>
              </div>
            </div>
          </div>

          <button className="btn-primary flex items-center gap-2 rounded">
            Conheça Nossa História <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
