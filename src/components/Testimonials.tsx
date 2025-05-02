
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Dados de depoimentos de clientes da IPT TEIXEIRA
const testimonialData = [
  {
    id: 1,
    name: "Paulo Rodrigues",
    position: "Gerente de Manutenção",
    company: "Indústria Metalúrgica S/A",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "A consultoria da IPT TEIXEIRA transformou completamente nossa gestão de ativos. Conseguimos reduzir em 30% os custos de manutenção enquanto aumentamos a disponibilidade dos equipamentos."
  },
  {
    id: 2,
    name: "Mariana Silva",
    position: "Diretora de Operações",
    company: "Grupo Industrial Brasileiro",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Os treinamentos ministrados pela equipe da IPT TEIXEIRA elevaram significativamente o nível técnico de nossa equipe. Agora temos autonomia para implementar as melhores práticas em gestão de ativos."
  },
  {
    id: 3,
    name: "Carlos Mendes",
    position: "Coordenador de Manutenção",
    company: "Energia Sustentável Ltda.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "A implementação do programa de manutenção preditiva desenvolvido pela IPT TEIXEIRA nos permitiu identificar falhas potenciais antes que se tornassem problemas críticos, evitando paradas não programadas."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-padding bg-machinery-black text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/diagonal-noise.png')",
          backgroundRepeat: "repeat"
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">O Que Nossos <span className="text-machinery-yellow">Clientes Dizem</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Veja como nossas soluções têm ajudado empresas de diversos segmentos a 
            otimizar seus processos e aumentar sua produtividade.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-machinery-black/50 backdrop-blur p-8 md:p-12 rounded-lg border border-machinery-yellow/20">
            <div className="mb-8 text-machinery-yellow">
              <Quote className="h-12 w-12 opacity-50" />
            </div>
            
            <div className="min-h-[200px]">
              <p className="text-xl md:text-2xl mb-8 italic text-gray-100">
                "{testimonialData[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonialData[currentIndex].image} 
                  alt={testimonialData[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold">{testimonialData[currentIndex].name}</h4>
                  <p className="text-machinery-yellow">
                    {testimonialData[currentIndex].position}, {testimonialData[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-machinery-yellow" : "bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-machinery-yellow text-machinery-black p-2 rounded-full hover:bg-machinery-yellow-dark transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-machinery-yellow text-machinery-black p-2 rounded-full hover:bg-machinery-yellow-dark transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
