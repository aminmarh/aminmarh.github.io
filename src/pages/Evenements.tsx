import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    title: "Rencontre Université-Entreprises",
    date: "15 avril 2025",
    location: "Université Paris Cité - Amphi 3",
    description: "Un événement pour renforcer les liens entre le monde académique et professionnel.",
  },
  {
    title: "Webinaire : Comment verser sa taxe via Soltéa ?",
    date: "27 mai 2025",
    location: "En ligne",
    description: "Une session interactive pour comprendre le versement de la taxe d’apprentissage.",
  },
  {
    title: "Forum Alternance & Taxe d’Apprentissage",
    date: "6 septembre 2025",
    location: "Université Paris Cité - Hall principal",
    description: "Découvrez les opportunités de l’alternance et les entreprises engagées.",
  }
];

const Evenements = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1486287149/fr/photo/groupe-de-participants-daffaires-asiatiques-multiraciaux-conversation-informelle-apr%C3%A8s-un.webp?a=1&b=1&s=612x612&w=0&k=20&c=-vo5KH4q9eDWRNeqR215jyXsxQiZYFVihpNWLSgWLeQ="
            alt="Événements"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Événements Apprentis’Cité</h1>
            <p className="max-w-2xl text-xl">
              Participez à nos événements pour mieux comprendre la taxe d’apprentissage et développer vos opportunités.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Nos Événements à Venir</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Ne manquez pas ces opportunités pour rencontrer nos équipes et partenaires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <Calendar className="w-12 h-12 mb-4 text-paris-red" />
                <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                <p className="flex items-center gap-2 text-gray-600"><MapPin size={18} /> {event.location}</p>
                <p className="flex items-center gap-2 text-gray-600"><Users size={18} /> {event.date}</p>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenements;