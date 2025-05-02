
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-machinery-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-white font-heading text-3xl font-bold">
                IPT<span className="text-machinery-yellow">TEIXEIRA</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              A IPT TEIXEIRA é uma empresa especializada em consultoria técnica e engenharia 
              para gestão de ativos físicos, oferecendo soluções personalizadas para otimizar 
              a performance dos equipamentos industriais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-machinery-black border border-gray-700 hover:bg-machinery-yellow hover:text-machinery-black p-2 rounded-full transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-machinery-black border border-gray-700 hover:bg-machinery-yellow hover:text-machinery-black p-2 rounded-full transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-machinery-black border border-gray-700 hover:bg-machinery-yellow hover:text-machinery-black p-2 rounded-full transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-machinery-yellow">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-machinery-yellow">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/asset-management" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Gestão de Ativos
                </Link>
              </li>
              <li>
                <Link to="/services/reliability" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Engenharia de Confiabilidade
                </Link>
              </li>
              <li>
                <Link to="/services/predictive" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Manutenção Preditiva
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Treinamentos
                </Link>
              </li>
              <li>
                <Link to="/services/audits" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Auditorias Técnicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-machinery-yellow">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-machinery-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Rua Salatiel Dias Ribeiro, 647, Aero Clube, Volta Redonda - RJ
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-machinery-yellow flex-shrink-0" />
                <span className="text-gray-300">(24) 2020-0370</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-machinery-yellow flex-shrink-0" />
                <span className="text-gray-300">contato@iptteixeira.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IPT TEIXEIRA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-machinery-yellow">
              Política de Privacidade
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-machinery-yellow">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
