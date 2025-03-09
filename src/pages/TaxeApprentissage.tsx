import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, FileText, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxeApprentissage = () => {
  const steps = [
    {
      title: "Calculez votre contribution",
      description: "Déterminez le montant de votre taxe d'apprentissage en fonction de votre masse salariale."
    },
    {
      title: "Choisissez votre bénéficiaire",
      description: "Sélectionnez l'Université Paris Cité comme bénéficiaire de votre versement."
    },
    {
      title: "Effectuez le versement",
      description: "Réalisez votre versement via la plateforme Soltéa avant la date limite."
    },
    {
      title: "Recevez votre reçu",
      description: "Obtenez votre reçu libératoire pour votre comptabilité."
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Guide Complet",
      description: "Téléchargez notre guide détaillé sur la taxe d'apprentissage",
      link: "/resources/guide.pdf"
    },
    {
      icon: PlayCircle,
      title: "Tutoriel Vidéo",
      description: "Regardez notre tutoriel pas à pas",
      link: "/resources/video"
    },
    {
      icon: Calendar,
      title: "Calendrier",
      description: "Consultez les dates importantes",
      link: "/resources/calendar"
    },
    {
      icon: Download,
      title: "Documents Utiles",
      description: "Accédez à tous les documents nécessaires",
      link: "/resources/documents"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Professional meeting"
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
              Taxe d'Apprentissage
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Investissez dans la formation des talents de demain en versant
              votre taxe d'apprentissage à l'Université Paris Cité.
            </p>
            <Link
              to="/verser"
              className="bg-paris-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2"
            >
              Verser ma taxe
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comment verser ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Le versement de la taxe d'apprentissage est un processus simple
              et sécurisé. Suivez ces étapes pour contribuer au développement
              de nos formations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-4 left-6 bg-paris-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-paris-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ressources Utiles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Retrouvez tous les documents et informations nécessaires pour
              votre versement de taxe d'apprentissage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <resource.icon className="h-12 w-12 text-paris-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  to={resource.link}
                  className="text-paris-red hover:text-red-700 font-medium inline-flex items-center gap-2"
                >
                  En savoir plus
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxeApprentissage;