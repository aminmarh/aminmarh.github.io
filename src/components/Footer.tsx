import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-paris-dark">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img
              className="w-auto h-12"
              src="https://u-paris.fr/wp-content/uploads/2022/09/UP_logo_rgb_light.png"
              alt="Apprentis'Cité"
            />
            <p className="mt-4 text-sm text-gray-300">
              Ensemble, construisons l'avenir de la formation professionnelle
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">À propos</Link></li>
              {/* <li><Link to="/taxe" className="text-gray-300 hover:text-white">Taxe d'Apprentissage</Link></li> */}
              <li><Link to="/podcast" className="text-gray-300 hover:text-white">Podcast</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white">Événements</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Université Paris Cité</li>
              <li>85 Boulevard Saint-Germain</li>
              <li>75006 Paris</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-12 text-sm text-center text-gray-300 border-t border-gray-700">
          <p>© {new Date().getFullYear()} Apprentis'Cité - Université Paris Cité. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;