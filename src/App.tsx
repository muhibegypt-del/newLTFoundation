'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SmoothScrolling } from './components/ui/SmoothScrolling';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { ProgressiveTypographyProvider, useTypographyQualityChecker } from './components/ui/ProgressiveTypography';
import { Hero } from './components/sections/Hero';
import { Footer } from './components/sections/Footer';
import { Navigation } from './components/Navigation';

// Lazy load below-the-fold homepage sections
const Programs = lazy(() => import('./components/sections/Programs').then(m => ({ default: m.Programs })));

// Lazy load all page routes for better initial bundle size
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then(m => ({ default: m.PartnersPage })));
const MemorialPage = lazy(() => import('./pages/MemorialPage').then(m => ({ default: m.MemorialPage })));
const SkillsTrainingAppeal = lazy(() => import('./pages/SkillsTrainingAppeal').then(m => ({ default: m.SkillsTrainingAppeal })));
const WaterWellAppeal = lazy(() => import('./pages/WaterWellAppeal').then(m => ({ default: m.WaterWellAppeal })));
const OrphanCareAppeal = lazy(() => import('./pages/OrphanCareAppeal').then(m => ({ default: m.OrphanCareAppeal })));
const FoodReliefAppeal = lazy(() => import('./pages/FoodReliefAppeal').then(m => ({ default: m.FoodReliefAppeal })));

const EducationAppeal = lazy(() => import('./pages/EducationAppeal').then(m => ({ default: m.EducationAppeal })));
const MasjidAppeal = lazy(() => import('./pages/MasjidAppeal').then(m => ({ default: m.MasjidAppeal })));

const RamadanAppeal = lazy(() => import('./pages/RamadanAppeal').then(m => ({ default: m.RamadanAppeal })));


function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] hidden sm:block"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQYV2M8c+YMAxYwiqIoiqIoiqIoOikAAEX8A/nGmjQkAAAAAElFTkSuQmCC")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '10px 10px'
      }}
    />
  );
}

import { HomePage } from './pages/HomePage';

import { NavigationLifecycle } from './components/system/NavigationLifecycle';

function App() {
  // Enable typography quality checking in development
  useTypographyQualityChecker();

  return (
    <ErrorBoundary>
      <ProgressiveTypographyProvider>
        <Router>
          <NavigationLifecycle />
          <SmoothScrolling>
            <div className="min-h-screen bg-secondary font-sans overflow-x-hidden">
              <NoiseOverlay />
              <Navigation />

              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-primary font-medium">Loading…</div></div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/memorial" element={<MemorialPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Program Routes */}
                  <Route path="/water-wells" element={<WaterWellAppeal />} />
                  <Route path="/orphan-empowerment" element={<OrphanCareAppeal />} />
                  <Route path="/ramadan-feeding" element={<RamadanAppeal />} />
                  <Route path="/education" element={<EducationAppeal />} />
                  <Route path="/masjid-projects" element={<MasjidAppeal />} />
                  <Route path="/skills-training" element={<SkillsTrainingAppeal />} />
                  <Route path="/food-relief" element={<FoodReliefAppeal />} />
                </Routes>
              </Suspense>

              <Footer />
            </div>
          </SmoothScrolling>
        </Router>
      </ProgressiveTypographyProvider>
    </ErrorBoundary>
  );
}

export default App;