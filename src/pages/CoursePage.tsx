import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface CoursePageProps {
  course: Course;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
  useEffect(() => {
    document.title = `${course.title} | Discord Bot Academy`;
  }, [course.title]);

  return (
    <div className="space-y-8">
      <header className={`py-8 px-6 rounded-lg shadow-md ${
        course.id === 'discord.js' ? 'bg-yellow-50' : 'bg-fuchsia-50'
      }`}>
        <h1 className={`text-3xl font-bold mb-4 ${
          course.id === 'discord.js' ? 'text-yellow-800' : 'text-fuchsia-800'
        }`}>
          {course.title}
        </h1>
        <p className="text-gray-700 text-lg">{course.description}</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          À propos de ce cours
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            {course.id === 'discord.js' 
              ? "Ce cours vous guidera à travers toutes les étapes nécessaires pour créer un bot Discord complet en utilisant Discord.js, une bibliothèque Node.js puissante. Vous apprendrez à configurer votre environnement de développement, à créer des commandes personnalisées, à gérer des événements et bien plus encore."
              : "Ce cours vous enseignera comment développer un bot Discord en Python à l'aide de la bibliothèque discord.py. Vous découvrirez comment mettre en place votre environnement de développement, créer des commandes, réagir aux événements et implémenter des fonctionnalités avancées."}
          </p>
          <p className="text-gray-700">
            {course.id === 'discord.js'
              ? "Que vous soyez débutant ou que vous ayez déjà de l'expérience en JavaScript, ce cours est conçu pour vous accompagner progressivement vers la maîtrise du développement de bots Discord."
              : "Que vous commenciez tout juste avec Python ou que vous ayez déjà des bases solides, ce cours vous accompagnera pas à pas dans la création de votre bot Discord."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Chapitres du cours
        </h2>
        
        <div className="space-y-6">
          {course.chapters.map((chapter, index) => (
            <div key={chapter.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ${
                  course.id === 'discord.js' ? 'bg-discord-yellow text-gray-800' : 'bg-discord-fuchsia'
                }`}>
                  {index + 1}
                </span>
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{chapter.title}</h3>
              </div>
              
              <ul className="space-y-3 mb-4">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-start">
                    <BookOpen size={16} className="mt-1 text-gray-500 mr-2" />
                    <Link 
                      to={`/${course.id}/${chapter.id}/${lesson.id}`}
                      className="text-discord-blurple hover:underline"
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link
                to={`/${course.id}/${chapter.id}/${chapter.lessons[0].id}`}
                className={`inline-flex items-center text-sm font-medium ${
                  course.id === 'discord.js' 
                    ? 'text-yellow-700 hover:text-yellow-600' 
                    : 'text-fuchsia-700 hover:text-fuchsia-600'
                }`}
              >
                Commencer ce chapitre
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursePage;