import React from 'react';
import { supabase } from '../lib/supabase';
import { LogIn, LogOut, Loader } from 'lucide-react';
import { toast } from 'sonner';

const AuthButton: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(supabase.auth.getUser());

  React.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) throw error;
    } catch (error) {
      toast.error("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
    } catch (error) {
      toast.error("Erreur de déconnexion");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md" disabled>
        <Loader className="animate-spin" size={16} />
        <span>Chargement...</span>
      </button>
    );
  }

  return user ? (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-md transition-colors"
    >
      <LogOut size={16} />
      <span>Déconnexion</span>
    </button>
  ) : (
    <button
      onClick={handleLogin}
      className="flex items-center space-x-2 bg-discord-blurple text-white hover:bg-indigo-600 px-4 py-2 rounded-md transition-colors"
    >
      <LogIn size={16} />
      <span>Connexion avec Discord</span>
    </button>
  );
};

export default AuthButton;