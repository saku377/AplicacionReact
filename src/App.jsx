import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contacto from './views/Contacto';
import Nosotros from './views/Nosotros';
import Inicio from './views/Inicio';

function App() {
  return (
    <BrowserRouter>
      {/* Menú de Navegación */}
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        <Link to="/Contacto" style={{ marginRight: '15px' }}>Contacto</Link>
        <Link to="/Nosotros" style={{ marginRight: '15px' }}>Nosotros</Link> 
      </nav>

      {/* Configuración de Rutas */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;