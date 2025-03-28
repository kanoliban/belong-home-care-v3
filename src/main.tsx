import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Create a lightweight loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-text/70">Loading...</p>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);