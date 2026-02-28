import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for "Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter"
// This happens when some libraries try to polyfill fetch by assigning to window.fetch
if (typeof window !== 'undefined') {
  const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
  if (descriptor && !descriptor.writable && !descriptor.set) {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => originalFetch,
      set: (v) => { 
        console.warn('Attempted to overwrite window.fetch. Ignoring.', v);
      }
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
