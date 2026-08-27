import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

// Lazy-loaded pages for optimized bundle splitting
const Home = lazy(() => import("./pages/Home"));
const ServiciosPage = lazy(() => import("./pages/ServiciosPage"));
const PlanesPage = lazy(() => import("./pages/PlanesPage"));
const ContactoPage = lazy(() => import("./pages/ContactoPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Minimal fallback while lazy chunks load
function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-surface-tint/30 border-t-surface-tint rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/servicios" element={<PageTransition><ServiciosPage /></PageTransition>} />
          <Route path="/planes" element={<PageTransition><PlanesPage /></PageTransition>} />
          <Route path="/contacto" element={<PageTransition><ContactoPage /></PageTransition>} />
          <Route path="/privacidad" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
