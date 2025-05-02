
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Fale <span className="text-machinery-yellow">Conosco</span></h2>
          <p className="text-machinery-gray max-w-2xl mx-auto">
            Entre em contato com nossa equipe para discutir como podemos ajudar a otimizar 
            os processos de manutenção e gestão de ativos da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-machinery-gray-light p-8 rounded-lg">
            <h3 className="mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-machinery-black">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                    placeholder="João Silva"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-machinery-black">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                    placeholder="joao@exemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-machinery-black">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-machinery-black">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 rounded w-full"
              >
                Enviar Mensagem <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Informações de Contato</h3>
            <p className="text-machinery-gray mb-8">
              Nossa equipe está pronta para atender suas necessidades e esclarecer todas as suas 
              dúvidas sobre nossos serviços de consultoria e soluções em gestão de ativos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Nossa Localização</h4>
                  <p className="text-machinery-gray">
                    Rua Salatiel Dias Ribeiro, 647, Aero Clube, Volta Redonda - RJ
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Phone className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Telefones</h4>
                  <p className="text-machinery-gray">
                    (24) 2020-0370<br />
                    (24) 99241-4902
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Mail className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-machinery-gray">
                    contato@iptteixeira.com.br<br />
                    comercial@iptteixeira.com.br
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Clock className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Horário de Funcionamento</h4>
                  <p className="text-machinery-gray">
                    Segunda - Sexta: 8:00 - 18:00<br />
                    Sábado e Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
