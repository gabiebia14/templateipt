
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-machinery-black py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-white font-heading text-3xl font-bold">
            IPT<span className="text-machinery-yellow">TEIXEIRA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 text-white font-medium">
            <li><Link to="/" className="hover:text-machinery-yellow transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-machinery-yellow transition duration-300">Sobre</Link></li>
            <li><Link to="/services" className="hover:text-machinery-yellow transition duration-300">Serviços</Link></li>
            <li><Link to="/projects" className="hover:text-machinery-yellow transition duration-300">Projetos</Link></li>
            <li><Link to="/contact" className="hover:text-machinery-yellow transition duration-300">Contato</Link></li>
          </ul>
          <div className="flex items-center gap-2 text-white">
            <Phone className="h-5 w-5 text-machinery-yellow" />
            <span>(24) 2020-0370</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-machinery-black bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container-custom py-20">
          <ul className="flex flex-col items-center gap-6 text-white text-xl font-medium">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-machinery-yellow transition duration-300">Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-machinery-yellow transition duration-300">Sobre</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="hover:text-machinery-yellow transition duration-300">Serviços</Link></li>
            <li><Link to="/projects" onClick={toggleMenu} className="hover:text-machinery-yellow transition duration-300">Projetos</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="hover:text-machinery-yellow transition duration-300">Contato</Link></li>
          </ul>
          <div className="flex items-center justify-center gap-2 text-white mt-10">
            <Phone className="h-5 w-5 text-machinery-yellow" />
            <span>(24) 2020-0370</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
