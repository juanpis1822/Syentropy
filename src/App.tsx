import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import ServiciosPage from "./pages/ServiciosPage";
import PlanesPage from "./pages/PlanesPage";
import ContactoPage from "./pages/ContactoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><ServiciosPage /></PageTransition>} />
        <Route path="/planes" element={<PageTransition><PlanesPage /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><ContactoPage /></PageTransition>} />
        <Route path="/privacidad" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
      </Route>
    </Routes>
  );
}
