import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { discordJsCourse, discordPyCourse } from '../data/courses';
import { Code, Compass, Workflow, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Apprendre à créer un bot Discord | JavaScript & Python';
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-discord-blurple to-indigo-700 text-white py-16 px-4 sm:px-6 rounded-lg shadow-discord">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Créez votre propre bot Discord et donnez vie à vos idées
          </h1>
          <p className="text-lg md:text-xl mb-8 text-indigo-100">
            Apprenez à développer des bots Discord en JavaScript (discord.js) et Python (discord.py)
            grâce à nos cours complets, progressifs et entièrement gratuits.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/discord.js"
              className="bg-white text-discord-blurple font-medium py-3 px-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              Cours Discord.js
            </Link>
            <Link
              to="/discord.py"
              className="bg-discord-dark text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:bg-gray-800 transition-colors"
            >
              Cours discord.py
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Pourquoi apprendre à créer des bots Discord ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-discord-blurple" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Compétences techniques</h3>
            <p className="text-gray-600">
              Développez vos compétences en programmation en créant des applications concrètes et utiles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Compass className="text-discord-green" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Personnalisation</h3>
            <p className="text-gray-600">
              Créez des fonctionnalités sur mesure pour vos serveurs Discord et améliorez l'expérience de votre communauté.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Workflow className="text-discord-yellow" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Automatisation</h3>
            <p className="text-gray-600">
              Automatisez des tâches répétitives et gérez efficacement votre serveur avec des commandes personnalisées.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-discord-fuchsia" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Portfolio</h3>
            <p className="text-gray-600">
              Enrichissez votre portfolio de développeur avec des projets concrets et montrez vos compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Nos cours complets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard course={discordJsCourse} />
          <CourseCard course={discordPyCourse} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-discord-dark text-white py-12 px-4 sm:px-6 rounded-lg shadow-discord">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Prêt à créer votre premier bot Discord ?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Commencez dès aujourd'hui et suivez nos guides étape par étape pour développer
            un bot Discord fonctionnel en quelques heures seulement.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/discord.js/installation/preparation"
              className="bg-discord-blurple text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:bg-indigo-600 transition-colors"
            >
              Commencer avec Discord.js
            </Link>
            <Link
              to="/discord.py/installation/preparation"
              className="bg-discord-fuchsia text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:bg-fuchsia-600 transition-colors"
            >
              Commencer avec discord.py
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;