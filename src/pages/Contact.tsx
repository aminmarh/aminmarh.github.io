import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="Contact"
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Nous Contacter</h1>
            <p className="max-w-2xl text-xl">
              Une question ? Besoin d’informations ? Contactez-nous et notre équipe vous répondra rapidement !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Nos Coordonnées</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Vous pouvez nous contacter via les informations ci-dessous ou en remplissant le formulaire.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-paris-red" />
              <h3 className="mb-2 text-xl font-semibold">Adresse</h3>
              <p className="text-gray-600">Université Paris Cité</p>
              <p className="text-gray-600">85 Boulevard Saint-Germain, 75006 Paris</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Phone className="w-12 h-12 mx-auto mb-4 text-paris-red" />
              <h3 className="mb-2 text-xl font-semibold">Téléphone</h3>
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Mail className="w-12 h-12 mx-auto mb-4 text-paris-red" />
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-gray-600">contact@apprentiscite.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-paris-gray">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Envoyez-nous un message</h2>
          </motion.div>

          {submitted ? (
            <p className="text-lg text-center text-green-600">Merci ! Votre message a été envoyé avec succès.</p>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-paris-red"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-paris-red"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-paris-red"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white rounded-md bg-paris-red hover:bg-red-700"
              >
                <Send size={20} /> Envoyer
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
