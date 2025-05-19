import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';
import { discordJsCourse, discordPyCourse } from './data/courses';

// Auth callback handler component
const AuthCallback = () => {
  React.useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { searchParams } = new URL(window.location.href);
        const code = searchParams.get('code');
        if (!code) throw new Error('No code provided');
        window.location.replace('/');
      } catch (error) {
        console.error('Error during auth:', error);
        window.location.replace('/');
      }
    };
    handleAuthCallback();
  }, []);

  return <div>Redirection en cours...</div>;
};

function App() {
  return (
    <Router>
      <Toaster position="top-right" expand={true} richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Discord.js routes */}
          <Route path="discord.js" element={<CoursePage course={discordJsCourse} />} />
          <Route path="discord.js/:chapterId/:lessonId" element={<LessonPage course={discordJsCourse} />} />
          
          {/* discord.py routes */}
          <Route path="discord.py" element={<CoursePage course={discordPyCourse} />} />
          <Route path="discord.py/:chapterId/:lessonId" element={<LessonPage course={discordPyCourse} />} />
          
          {/* Auth callback route */}
          <Route path="auth/callback" element={<AuthCallback />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}