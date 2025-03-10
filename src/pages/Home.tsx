import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students working together"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Construisons ensemble<br />l'avenir de la formation
            </h1>
            <p className="max-w-2xl mb-8 text-xl">
              Découvrez comment votre taxe d'apprentissage contribue à former les talents de demain
              et à renforcer les liens entre l'université et le monde professionnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/verser"
                className="flex items-center gap-2 px-8 py-3 font-medium text-white rounded-md bg-paris-red hover:bg-red-700"
              >
                Verser ma taxe <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 font-medium bg-white rounded-md hover:bg-gray-100 text-paris-dark"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 bg-paris-gray">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">Chiffres clés</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { icon: BookOpen, number: "150+", text: "Formations en alternance" },
              { icon: Users, number: "2000+", text: "Étudiants accompagnés" },
              { icon: Trophy, number: "500+", text: "Entreprises partenaires" },
              { icon: Calendar, number: "50+", text: "Événements annuels" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-lg"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-paris-red" />
                <div className="mb-2 text-3xl font-bold text-paris-dark">{item.number}</div>
                <div className="text-gray-600">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Podcast Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold">Notre premeier podcast</h2>
              <h3 className="mb-4 text-xl font-semibold text-paris-red">
                "Ep 1 - Qu’est-ce que la taxe d’apprentissage et pourquoi est-elle essentielle ?"
              </h3>
              <p className="mb-6 text-gray-600">
                Découvrez les témoignages inspirants d'anciens alternants et d'entreprises
                partenaires qui partagent leur expérience et leur vision de l'alternance.
              </p>
              <a
                href="../../public/videos/Podcast_Jingle_Cover.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-paris-red hover:text-red-700"
              >
                Écouter l'épisode <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="../../public/images/Podcast1.png"
                alt="Podcast recording"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;