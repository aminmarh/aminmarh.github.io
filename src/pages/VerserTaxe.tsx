import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PlayCircle, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "Calculez votre contribution",
    description: "Déterminez le montant de votre taxe d'apprentissage en fonction de votre masse salariale.",
  },
  {
    title: "Accédez à Soltéa",
    description: "Connectez-vous à la plateforme Soltéa pour effectuer votre versement en ligne.",
  },
  {
    title: "Choisissez l’Université Paris Cité",
    description: "Sélectionnez notre établissement comme bénéficiaire pour soutenir nos formations.",
  },
  {
    title: "Obtenez votre reçu",
    description: "Téléchargez votre reçu fiscal et bénéficiez d’un suivi administratif simplifié.",
  }
];

const VerserTaxe = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80"
            alt="Versement de la taxe"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Versez votre Taxe d’Apprentissage</h1>
            <p className="max-w-2xl text-xl">
              Soutenez la formation des talents de demain en effectuant votre versement à l’Université Paris Cité.
            </p>
            <a
              href="https://www.soltea.education.gouv.fr/espace-public/connexion-lespace-prive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-4 font-medium text-white rounded-md bg-paris-red hover:bg-red-700"
            >
              Accéder à Soltéa
            </a>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Comment verser votre taxe ?</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Suivez ces étapes simples pour attribuer votre taxe à notre établissement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white rounded-full -top-4 left-6 bg-paris-red">
                  {index + 1}
                </div>
                <h3 className="mt-2 mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerserTaxe;