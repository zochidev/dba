import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { discordJsCourse, discordPyCourse } from '../data/courses';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const [expandedChapters, setExpandedChapters] = React.useState<Record<string, boolean>>({});
  
  const currentCourse = location.pathname.startsWith('/discord.py') 
    ? discordPyCourse 
    : location.pathname.startsWith('/discord.js') 
      ? discordJsCourse 
      : null;

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Close sidebar on mobile when clicking a link
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  // Determine if we should show the sidebar content
  const shouldShowContent = currentCourse && (location.pathname.startsWith('/discord.js') || location.pathname.startsWith('/discord.py'));

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-40 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } overflow-y-auto lg:h-[calc(100vh-4rem)] mt-16`}
      >
        {shouldShowContent ? (
          <div className="p-4">
            <h2 className="text-xl font-semibold text-discord-blurple mb-4">
              {currentCourse.title}
            </h2>
            
            <nav className="space-y-1">
              <NavLink 
                to={`/${currentCourse.id}`} 
                end
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-indigo-100 text-discord-blurple' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={handleLinkClick}
              >
                Vue d'ensemble
              </NavLink>
              
              <div className="mt-4 space-y-1">
                {currentCourse.chapters.map((chapter) => (
                  <div key={chapter.id} className="mb-2">
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-left text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <span>{chapter.title}</span>
                      {expandedChapters[chapter.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>
                    
                    {expandedChapters[chapter.id] && (
                      <div className="ml-4 mt-1 space-y-1">
                        {chapter.lessons.map((lesson) => (
                          <NavLink
                            key={lesson.id}
                            to={`/${currentCourse.id}/${chapter.id}/${lesson.id}`}
                            className={({ isActive }) => 
                              `block px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                                isActive ? 'bg-indigo-50 text-discord-blurple' : 'text-gray-600 hover:bg-gray-50'
                              }`
                            }
                            onClick={handleLinkClick}
                          >
                            {lesson.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        ) : (
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              Sélectionnez un cours pour voir son contenu
            </p>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;