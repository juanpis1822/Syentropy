import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServiciosPage from "./pages/ServiciosPage";
import PlanesPage from "./pages/PlanesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/planes" element={<PlanesPage />} />
        <Route path="/contacto" element={<PlanesPage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}
