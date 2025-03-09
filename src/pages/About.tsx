import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Handshake, Target } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: GraduationCap,
      title: "Formation d'Excellence",
      description: "Nous formons les talents de demain à travers des programmes innovants et adaptés aux besoins du marché."
    },
    {
      icon: Handshake,
      title: "Partenariats Stratégiques",
      description: "Nous créons des liens durables entre le monde académique et professionnel."
    },
    {
      icon: Target,
      title: "Innovation Pédagogique",
      description: "Nous développons des méthodes d'apprentissage modernes et efficaces."
    },
    {
      icon: Building2,
      title: "Insertion Professionnelle",
      description: "Nous accompagnons nos étudiants vers une carrière réussie."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
            alt="University campus"
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
              À Propos d'Apprentis'Cité
            </h1>
            <p className="text-xl max-w-2xl">
              Une initiative de l'Université Paris Cité pour renforcer les liens
              entre formation et monde professionnel.
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
              Apprentis'Cité s'engage à créer un pont entre l'excellence académique
              et les besoins du monde professionnel, en formant les talents de demain
              et en favorisant l'innovation pédagogique.
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
      <section className="py-16 bg-paris-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Students in classroom"
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
                  Depuis sa création, Apprentis'Cité a contribué à transformer
                  l'expérience d'apprentissage de milliers d'étudiants et à renforcer
                  les liens entre l'université et les entreprises.
                </p>
                <p className="text-gray-600">
                  Grâce à la taxe d'apprentissage et à l'engagement de nos partenaires,
                  nous avons pu :
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Moderniser nos équipements pédagogiques</li>
                  <li>Développer des programmes innovants</li>
                  <li>Renforcer l'accompagnement des étudiants</li>
                  <li>Créer des événements de networking</li>
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