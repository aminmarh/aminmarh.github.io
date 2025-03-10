import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PlayCircle, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: "Guide complet de la taxe d’apprentissage",
    description: "Téléchargez notre guide détaillé pour tout comprendre sur le versement de la taxe.",
    link: `${import.meta.env.BASE_URL}lien/outer_page.pdf`,
    icon: FileText,
  },
  {
    title: "Challenge étudiant",
    description: "Regardez notre challenge étudiant pas à pas pour valoriser la taxe.",
    link: `${import.meta.env.BASE_URL}lien/challenge_etudiant.png`,
    icon: BookOpen,
  },
  {
    title: "Calendrier des échéances",
    description: "Consultez toutes les dates clés pour ne rien manquer.",
    link: `${import.meta.env.BASE_URL}lien/planning.png`,
    icon: FileText,
  },
  // {
  //   title: "Documents utiles",
  //   description: "Accédez à tous les documents nécessaires au processus de versement.",
  //   link: "/resources/documents",
  //   icon: Download,
  // }
];

const Ressources = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ressources"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Ressources Utiles</h1>
            <p className="max-w-2xl text-xl">
              Retrouvez tous les guides, tutoriels et documents nécessaires pour faciliter votre contribution à la taxe d’apprentissage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Accédez à nos ressources</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Téléchargez les documents essentiels et regardez nos tutoriels pour simplifier votre démarche.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <resource.icon className="w-12 h-12 mb-4 text-paris-red" />
                <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
                <p className="mb-4 text-gray-600">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-paris-red hover:text-red-700"
                >
                  Accéder
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ressources;
