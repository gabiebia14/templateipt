
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Dados para serviços da IPT TEIXEIRA
const equipmentData = [
  {
    id: 1,
    name: "Gestão de Ativos",
    category: "gestao",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop",
    description: "Consultoria completa em gestão de ativos físicos segundo a ISO 55000."
  },
  {
    id: 2,
    name: "Engenharia de Confiabilidade",
    category: "confiabilidade",
    image: "https://images.unsplash.com/photo-1581092160607-ee22732de548?q=80&w=2070&auto=format&fit=crop",
    description: "Análise e implementação de estratégias para maximizar a confiabilidade dos equipamentos."
  },
  {
    id: 3,
    name: "Manutenção Preditiva",
    category: "preditiva",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    description: "Monitoramento avançado de condições para prevenir falhas antes que ocorram."
  },
  {
    id: 4,
    name: "Treinamentos e Capacitação",
    category: "treinamentos",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    description: "Programas de capacitação técnica para equipes de manutenção e operação."
  },
  {
    id: 5,
    name: "Auditorias Técnicas",
    category: "auditorias",
    image: "https://images.unsplash.com/photo-1517462905485-5613a873be0c?q=80&w=2070&auto=format&fit=crop",
    description: "Avaliação independente de processos e sistemas de manutenção."
  },
  {
    id: 6,
    name: "Consultoria em PCM",
    category: "pcm",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Planejamento e controle da manutenção para otimização de recursos."
  }
];

// Categorias
const categories = [
  { id: "all", name: "Todos os Serviços" },
  { id: "gestao", name: "Gestão de Ativos" },
  { id: "confiabilidade", name: "Confiabilidade" },
  { id: "preditiva", name: "Manutenção Preditiva" },
  { id: "treinamentos", name: "Treinamentos" },
  { id: "auditorias", name: "Auditorias" },
  { id: "pcm", name: "PCM" },
];

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEquipment = activeCategory === "all" 
    ? equipmentData 
    : equipmentData.filter(item => item.category === activeCategory);

  return (
    <section className="section-padding bg-machinery-gray-light" id="equipment">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nossos <span className="text-machinery-yellow">Serviços</span></h2>
          <p className="text-machinery-gray max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia e consultoria para otimizar 
            a performance de seus ativos e equipamentos industriais.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-machinery-yellow text-machinery-black"
                  : "bg-white text-machinery-gray hover:bg-machinery-yellow/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-machinery-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-primary rounded">Ver Detalhes</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-machinery-gray mb-4">{item.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-machinery-black font-bold hover:text-machinery-yellow transition-colors duration-300"
                >
                  Saiba Mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary rounded-full">
            Ver Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
