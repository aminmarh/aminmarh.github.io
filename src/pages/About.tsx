import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Handshake, Target } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: GraduationCap,
      title: "Favoriser l’Insertion Professionnelle",
      description: "Apprentis’Cité accompagne les étudiants dans leur transition vers le monde du travail en créant des passerelles avec les entreprises."
    },
    {
      icon: Handshake,
      title: "Développer des Partenariats",
      description: "Nous collaborons avec des entreprises pour créer des opportunités et renforcer les liens entre formation et emploi."
    },
    {
      icon: Target,
      title: "Optimiser le Versement de la Taxe d’Apprentissage",
      description: "Nous guidons les entreprises dans leur contribution pour soutenir l'enseignement et l’innovation pédagogique."
    },
    {
      icon: Building2,
      title: "Moderniser l’Enseignement",
      description: "Grâce aux contributions, nous améliorons nos équipements, méthodes et accompagnements pédagogiques."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
            alt="Campus universitaire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À Propos d'Apprentis’Cité
            </h1>
            <p className="text-xl max-w-2xl">
              Un programme dédié à la mise en relation entre étudiants et entreprises, optimisant l’usage de la taxe d’apprentissage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">Notre Mission</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Apprentis’Cité agit comme un facilitateur entre les entreprises et l’enseignement supérieur pour offrir un avenir prometteur aux étudiants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <mission.icon className="h-12 w-12 text-paris-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Étudiants en discussion"
                className="rounded-lg shadow-xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Notre Impact</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Apprentis’Cité transforme l'expérience étudiante en facilitant leur insertion professionnelle et en modernisant les outils pédagogiques.
                </p>
                <p className="text-gray-600">
                  Grâce à la taxe d'apprentissage et au soutien des entreprises, nous avons pu :
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Renforcer l’employabilité des étudiants</li>
                  <li>Équiper les campus avec des outils pédagogiques modernes</li>
                  <li>Faciliter la mise en réseau avec les entreprises</li>
                  <li>Organiser des événements favorisant l’échange professionnel</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;