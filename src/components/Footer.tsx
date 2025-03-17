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
              src="https://math-info.u-paris.fr/wp-content/uploads/sites/8/2022/03/UniversiteParisCite_Mathe%E2%95%A0%C3%BCmatiques-et-informatique.jpg"
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
              <li>45 Rue des Saints Pères</li>
              <li>75006 Paris</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/univpariscite/" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
              <a href="https://twitter.com/univ_paris_cite" className="text-gray-300 hover:text-white"><Twitter size={24} /></a>
              <a href="https://www.linkedin.com/school/universit%C3%A9-paris-cit%C3%A9/posts/?feedView=all" className="text-gray-300 hover:text-white"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/univ_paris_cite/" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
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