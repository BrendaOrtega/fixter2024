import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Saas from "./routes/Saas";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Clients from "./routes/Clients";
import Cotizar from "./routes/Cotizar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/portafolio" element={<Projects />} />
      <Route path="/saas" element={<Saas />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/cotizar" element={<Cotizar />} />
    </Routes>
  );
}

export default App;
