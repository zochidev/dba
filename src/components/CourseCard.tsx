import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`h-3 ${course.id === 'discord.js' ? 'bg-discord-yellow' : 'bg-discord-fuchsia'}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {/* Use custom icon based on course.icon */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center 
            ${course.id === 'discord.js' ? 'bg-yellow-100 text-yellow-600' : 'bg-fuchsia-100 text-fuchsia-600'}`}>
            <span className="text-xl font-bold">{course.icon}</span>
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">{course.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{course.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center">
            <span className="bg-gray-100 text-xs font-medium rounded-full px-2.5 py-1 text-gray-800">
              {course.chapters.length} Chapitres
            </span>
            <span className="ml-2 bg-gray-100 text-xs font-medium rounded-full px-2.5 py-1 text-gray-800">
              {course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)} Leçons
            </span>
          </div>
        </div>
        
        <Link 
          to={`/${course.id}`} 
          className={`flex items-center justify-center py-2 px-4 rounded-md w-full font-medium text-white 
            ${course.id === 'discord.js' 
              ? 'bg-discord-yellow hover:bg-yellow-500 text-gray-800' 
              : 'bg-discord-fuchsia hover:bg-fuchsia-600'}`}
        >
          Accéder au cours
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;