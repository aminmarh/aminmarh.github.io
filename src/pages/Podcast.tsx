import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Mic, Headphones, Share } from 'lucide-react';
import { Link } from 'react-router-dom';

const episodes = [
  {
    title: "Ep 1 - Qu’est-ce que la taxe d’apprentissage et pourquoi est-elle essentielle ?",
    guest: "Responsable du service taxe d’apprentissage",
    link: "../../public/videos/Podcast_Jingle_Cover.mp4",
  }
  // {
  //   title: "Comment verser sa taxe simplement via Soltéa ?",
  //   guest: "Expert en financement de l'alternance",
  //   link: "https://spotify.com/podcast-episode-2",
  // },
  // {
  //   title: "L’impact de la taxe : témoignages d’étudiants",
  //   guest: "Étudiants bénéficiaires de la taxe",
  //   link: "https://spotify.com/podcast-episode-3",
  // }
];

const Podcast = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Episodes Section */}
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

      {/* Plateformes Section */}
      {/* <section className="py-16 bg-paris-gray">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold">Écoutez-nous sur vos plateformes préférées</h2>
            <div className="flex justify-center mt-6 space-x-6">
              <a href="#" className="text-paris-red hover:text-red-700"><Headphones size={40} /></a>
              <a href="#" className="text-paris-red hover:text-red-700"><Mic size={40} /></a>
              <a href="#" className="text-paris-red hover:text-red-700"><Share size={40} /></a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Podcast;
