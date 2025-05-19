import React from 'react';
import { LogIn } from 'lucide-react';

const AuthButton: React.FC = () => {
  return (
    <button
      onClick={() => alert('Fonctionnalité à venir')}
      className="flex items-center space-x-2 bg-discord-blurple text-white hover:bg-indigo-600 px-4 py-2 rounded-md transition-colors"
    >
      <LogIn size={16} />
      <span>Connexion</span>
    </button>
  );
};

export default AuthButton;