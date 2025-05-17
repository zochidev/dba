import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page non trouvée | Discord Bot Academy';
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Bot size={64} className="text-discord-blurple mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page non trouvée</h2>
      <p className="text-gray-600 max-w-md mb-8">
        La page que vous recherchez semble avoir été déplacée, supprimée, ou n'a peut-être jamais existé.
      </p>
      <Link 
        to="/" 
        className="bg-discord-blurple hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;