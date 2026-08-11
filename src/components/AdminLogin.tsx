import React, { useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { AlertCircle } from 'lucide-react';

export function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    
    try {
      await signInWithPopup(auth, googleProvider);
      // If successful, onAuthStateChanged in App.tsx will handle the state update
    } catch (err: any) {
      console.error(err);
      setError('Error al iniciar sesión con Google o permisos denegados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Acceso Administrativo
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-400">
          Lumière Parfums - Panel de Control
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-neutral-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-neutral-700 text-center">
          
          <p className="text-neutral-300 mb-6 text-sm">
            Inicia sesión con tu cuenta de administrador de Google.
          </p>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 disabled:opacity-50 transition-colors"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-3" />
            {loading ? 'Conectando...' : 'Acceder con Google'}
          </button>

          {error && (
            <div className="mt-6 rounded-md bg-red-900/50 p-4 border border-red-500/50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-400">{error}</h3>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
              ← Volver a la tienda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
