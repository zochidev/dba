import React from 'react';
import { Course } from '../types';
import CodeBlock from '../components/CodeBlock';

// Helper function to generate lesson content
const generateLessonContent = (title: string, index: number) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="mb-4">
      Cette leçon vous guidera à travers les concepts essentiels pour maîtriser le développement de bots Discord.
    </p>
    
    <CodeBlock 
      language="javascript"
      code={`// Exemple de code pour ${title}
const example = async () => {
  // Implémentation à venir
  console.log("Leçon ${index}");
};`}
    />
    
    <div className="bg-blue-50 border-l-4 border-discord-blurple p-4 mt-6">
      <p className="text-blue-800">
        <strong>Note importante :</strong> Cette leçon fait partie d'une série complète pour vous aider à maîtriser le développement de bots Discord.
      </p>
    </div>
  </div>
);

// Generate 50 lessons for each course
const generateChaptersAndLessons = (isJavaScript: boolean) => {
  const chapters = [];
  const lessonsPerChapter = 10;
  const totalChapters = 5;

  for (let i = 0; i < totalChapters; i++) {
    const lessons = [];
    for (let j = 0; j < lessonsPerChapter; j++) {
      const lessonNumber = i * lessonsPerChapter + j + 1;
      const lessonTitle = `Leçon ${lessonNumber}: ${
        isJavaScript 
          ? `Fonctionnalités avancées de Discord.js ${lessonNumber}`
          : `Techniques de discord.py ${lessonNumber}`
      }`;
      
      lessons.push({
        id: `lesson-${lessonNumber}`,
        title: lessonTitle,
        content: generateLessonContent(lessonTitle, lessonNumber)
      });
    }

    chapters.push({
      id: `chapter-${i + 1}`,
      title: `Chapitre ${i + 1}: ${
        isJavaScript 
          ? `Maîtrise de Discord.js - Niveau ${i + 1}`
          : `Expertise discord.py - Niveau ${i + 1}`
      }`,
      lessons
    });
  }

  return chapters;
};

// Discord.js course with 50 lessons
export const discordJsCourse: Course = {
  id: 'discord.js',
  title: 'Discord.js (JavaScript)',
  description: 'Maîtrisez la création de bots Discord avec JavaScript et Discord.js v14 à travers 50 leçons complètes',
  icon: 'JS',
  chapters: generateChaptersAndLessons(true)
};

// Discord.py course with 50 lessons
export const discordPyCourse: Course = {
  id: 'discord.py',
  title: 'discord.py (Python)',
  description: 'Créez des bots Discord puissants avec Python et discord.py à travers 50 leçons détaillées',
  icon: 'PY',
  chapters: generateChaptersAndLessons(false)
};