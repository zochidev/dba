import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';
import { discordJsCourse, discordPyCourse } from './data/courses';

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
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;