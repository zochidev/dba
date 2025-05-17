import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Course } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonPageProps {
  course: Course;
}

const LessonPage: React.FC<LessonPageProps> = ({ course }) => {
  const { chapterId, lessonId } = useParams<{ chapterId: string; lessonId: string }>();
  const navigate = useNavigate();

  // Find current chapter and lesson
  const currentChapter = useMemo(() => {
    return course.chapters.find(chapter => chapter.id === chapterId);
  }, [course, chapterId]);

  const currentLesson = useMemo(() => {
    if (!currentChapter) return null;
    return currentChapter.lessons.find(lesson => lesson.id === lessonId);
  }, [currentChapter, lessonId]);

  // Find next and previous lessons
  const { previousLesson, nextLesson } = useMemo(() => {
    let previousLesson = null;
    let nextLesson = null;

    if (!currentChapter || !currentLesson) {
      return { previousLesson, nextLesson };
    }

    const chapterIndex = course.chapters.findIndex(chapter => chapter.id === chapterId);
    const lessonIndex = currentChapter.lessons.findIndex(lesson => lesson.id === lessonId);

    // Previous lesson
    if (lessonIndex > 0) {
      // Previous lesson in same chapter
      previousLesson = {
        chapter: currentChapter,
        lesson: currentChapter.lessons[lessonIndex - 1]
      };
    } else if (chapterIndex > 0) {
      // Last lesson of previous chapter
      const prevChapter = course.chapters[chapterIndex - 1];
      previousLesson = {
        chapter: prevChapter,
        lesson: prevChapter.lessons[prevChapter.lessons.length - 1]
      };
    }

    // Next lesson
    if (lessonIndex < currentChapter.lessons.length - 1) {
      // Next lesson in same chapter
      nextLesson = {
        chapter: currentChapter,
        lesson: currentChapter.lessons[lessonIndex + 1]
      };
    } else if (chapterIndex < course.chapters.length - 1) {
      // First lesson of next chapter
      const nextChapter = course.chapters[chapterIndex + 1];
      nextLesson = {
        chapter: nextChapter,
        lesson: nextChapter.lessons[0]
      };
    }

    return { previousLesson, nextLesson };
  }, [course, chapterId, currentChapter, currentLesson, lessonId]);

  useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title} | Discord Bot Academy`;
    }
  }, [currentLesson]);

  // Redirect to course page if chapter or lesson not found
  useEffect(() => {
    if (!currentChapter || !currentLesson) {
      navigate(`/${course.id}`);
    }
  }, [currentChapter, currentLesson, course.id, navigate]);

  if (!currentChapter || !currentLesson) {
    return null;
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm font-medium">
        <ol className="flex flex-wrap items-center space-x-2">
          <li>
            <Link to={`/${course.id}`} className="text-gray-500 hover:text-discord-blurple">
              {course.title}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span className="text-gray-500">{currentChapter.title}</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span className="text-gray-700">{currentLesson.title}</span>
          </li>
        </ol>
      </nav>

      {/* Lesson header */}
      <header>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {currentLesson.title}
        </h1>
        <p className="text-gray-600">
          Chapitre: {currentChapter.title}
        </p>
      </header>

      {/* Lesson content */}
      <article className="prose prose-indigo max-w-none">
        {currentLesson.content}
      </article>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-6 border-t border-gray-200 mt-8">
        {previousLesson ? (
          <Link
            to={`/${course.id}/${previousLesson.chapter.id}/${previousLesson.lesson.id}`}
            className="flex items-center text-discord-blurple hover:text-indigo-700"
          >
            <ArrowLeft size={16} className="mr-2" />
            <div>
              <div className="text-xs text-gray-500">Précédent</div>
              <div className="font-medium">{previousLesson.lesson.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextLesson ? (
          <Link
            to={`/${course.id}/${nextLesson.chapter.id}/${nextLesson.lesson.id}`}
            className="flex items-center text-discord-blurple hover:text-indigo-700"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">Suivant</div>
              <div className="font-medium">{nextLesson.lesson.title}</div>
            </div>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        ) : (
          <Link
            to={`/${course.id}`}
            className="flex items-center text-discord-green hover:text-green-600"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">Retour</div>
              <div className="font-medium">Sommaire du cours</div>
            </div>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonPage;