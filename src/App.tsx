import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/about'));
const ProfessionalsPage = lazy(() => import('./pages/professionals'));
const FamiliesPage = lazy(() => import('./pages/families'));
const ContactPage = lazy(() => import('./pages/contact'));

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="/professionals" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <ProfessionalsPage />
            </Suspense>
          } />
          <Route path="/families" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <FamiliesPage />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <ContactPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;