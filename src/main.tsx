import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent HMR WebSocket connection warnings from triggering unhandled rejection overlays
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (
      reason &&
      (reason === 'WebSocket closed without opened.' ||
        (typeof reason === 'string' && reason.includes('WebSocket')) ||
        (typeof reason === 'object' && reason?.message && String(reason.message).includes('WebSocket')))
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  window.addEventListener('error', (event) => {
    if (
      event.message &&
      (event.message.includes('WebSocket') || event.message.includes('vite: failed to connect to websocket'))
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
