
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
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
                ASPRO<span className="text-machinery-yellow">.</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              ASPRO Machinery is a leading provider of high-quality heavy equipment and machinery 
              for construction, mining, and industrial applications worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-machinery-black border border-gray-700 hover:bg-machinery-yellow hover:text-machinery-black p-2 rounded-full transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-machinery-black border border-gray-700 hover:bg-machinery-yellow hover:text-machinery-black p-2 rounded-full transition-all duration-300">
                <Twitter className="h-5 w-5" />
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
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Our Equipment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipment */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-machinery-yellow">
              Equipment
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/equipment/excavators" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Excavators
                </Link>
              </li>
              <li>
                <Link to="/equipment/bulldozers" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Bulldozers
                </Link>
              </li>
              <li>
                <Link to="/equipment/loaders" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Wheel Loaders
                </Link>
              </li>
              <li>
                <Link to="/equipment/cranes" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Cranes
                </Link>
              </li>
              <li>
                <Link to="/equipment/trucks" className="text-gray-300 hover:text-machinery-yellow transition-colors duration-300">
                  Dump Trucks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-machinery-yellow">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-machinery-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  1234 Industrial Way, Construction City, CC 98765
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-machinery-yellow flex-shrink-0" />
                <span className="text-gray-300">+1 800 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-machinery-yellow flex-shrink-0" />
                <span className="text-gray-300">info@aspromachinery.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ASPRO Machinery. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-machinery-yellow">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-machinery-yellow">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
