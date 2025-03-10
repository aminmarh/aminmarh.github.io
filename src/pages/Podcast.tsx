import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const episodes = [
  {
    title: "Ep 1 - Qu’est-ce que la taxe d’apprentissage et pourquoi est-elle essentielle ?",
    guest: "Responsable du service taxe d’apprentissage",
    link: `${import.meta.env.BASE_URL}videos/Podcast_Ep1.mp4`,
  },
  {
    title: "Ep 2 - Le parcours d’un étudiant en alternance : challenges et réussites",
    guest: "Étudiant en alternance",
    link: `${import.meta.env.BASE_URL}videos/Podcast_Ep2.mp4`,
  },
  {
    title: "Ep 3 - Le rôle du maître d’apprentissage : accompagner et former",
    guest: "Maître d’apprentissage d’une entreprise partenaire",
    link: `${import.meta.env.BASE_URL}videos/Podcast_Ep3.mp4`,
  },
  {
    title: "Ep 4 - Comment bien choisir son entreprise d’accueil ?",
    guest: "Responsable RH ou recruteur",
    link: `${import.meta.env.BASE_URL}videos/Podcast_Ep4.mp4`,
  },
  {
    title: "Ep 5 - Les erreurs à éviter en alternance",
    guest: "Tuteur académique ou ancien alternant",
    link: `${import.meta.env.BASE_URL}videos/Podcast_Ep5.mp4`,
  }
];

const Podcast = () => {
  return (
    <div className="flex flex-col">
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Podcast studio"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Podcast Apprentis’Cité</h1>
            <p className="max-w-2xl text-xl">
              Découvrez des échanges inspirants sur la taxe d’apprentissage, l’alternance et le financement de la formation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Nos Épisodes</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Écoutez nos échanges avec des experts, des étudiants et des entreprises engagées dans la formation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {episodes.map((episode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <PlayCircle className="w-12 h-12 mb-4 text-paris-red" />
                <h3 className="mb-2 text-xl font-semibold">{episode.title}</h3>
                <p className="mb-4 text-gray-600">Invité : {episode.guest}</p>
                <a
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-paris-red hover:text-red-700"
                >
                  Écouter l’épisode
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;