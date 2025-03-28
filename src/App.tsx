import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const OurHomesPage = lazy(() => import('./pages/OurHomesPage'));
const OurApproachPage = lazy(() => import('./pages/OurApproachPage'));
const ForFamiliesPage = lazy(() => import('./pages/ForFamiliesPage'));
const ForProfessionalsPage = lazy(() => import('./pages/ForProfessionalsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

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
          <Route path="/our-homes" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <OurHomesPage />
            </Suspense>
          } />
          <Route path="/our-approach" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <OurApproachPage />
            </Suspense>
          } />
          <Route path="/for-families" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <ForFamiliesPage />
            </Suspense>
          } />
          <Route path="/for-professionals" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
              <ForProfessionalsPage />
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