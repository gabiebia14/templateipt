
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Dados de exemplo para produtos de concreto
const equipmentData = [
  {
    id: 1,
    name: "Blocos de Concreto",
    category: "blocos",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop",
    description: "Blocos de concreto estrutural para construção de paredes e muros."
  },
  {
    id: 2,
    name: "Postes de Concreto",
    category: "postes",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    description: "Postes de concreto para iluminação e distribuição elétrica."
  },
  {
    id: 3,
    name: "Tubos de Concreto",
    category: "tubos",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070&auto=format&fit=crop",
    description: "Tubos de concreto para drenagem e esgotamento sanitário."
  },
  {
    id: 4,
    name: "Pavers de Concreto",
    category: "pavers",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070&auto=format&fit=crop",
    description: "Pavers de concreto para pavimentação de calçadas e áreas externas."
  },
  {
    id: 5,
    name: "Lajes e Pré-moldados",
    category: "lajes",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop",
    description: "Lajes e elementos pré-moldados de concreto para construção civil."
  },
  {
    id: 6,
    name: "Guias e Sarjetas",
    category: "guias",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2070&auto=format&fit=crop",
    description: "Guias e sarjetas de concreto para infraestrutura urbana."
  }
];

// Categorias
const categories = [
  { id: "all", name: "Todos os Produtos" },
  { id: "blocos", name: "Blocos" },
  { id: "postes", name: "Postes" },
  { id: "tubos", name: "Tubos" },
  { id: "pavers", name: "Pavers" },
  { id: "lajes", name: "Lajes e Pré-moldados" },
  { id: "guias", name: "Guias e Sarjetas" },
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
          <h2 className="mb-4">Nossos <span className="text-machinery-yellow">Produtos</span></h2>
          <p className="text-machinery-gray max-w-3xl mx-auto">
            Explore nossa ampla gama de artefatos de concreto de alta qualidade projetados 
            para construção civil, infraestrutura urbana e aplicações industriais.
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

        {/* Equipment Grid */}
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
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
