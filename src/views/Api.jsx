import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Api() {
  const [dolar, setDolar] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo conectar con el servidor');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setDolar(datos);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al consultar la API:', err);
        setError(err.message);
        setCargando(false);
      });
  }, []);


  if (cargando) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando cotización del dólar...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center" role="alert">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }


  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Información del Dólar en Chile</h2>

      {dolar && (
        <div className="card mx-auto shadow" style={{ maxWidth: '450px' }}>
          <div className="card-header bg-primary text-white text-center">
            <h4 className="mb-0">{dolar.nombre} ({dolar.moneda})</h4>
          </div>

          <div className="card-body p-0">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <span><strong>Precio Compra:</strong></span>
                <span className="badge bg-success fs-6">${dolar.compra}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <span><strong>Precio Venta:</strong></span>
                <span className="badge bg-danger fs-6">${dolar.venta}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <span><strong>Último Cierre:</strong></span>
                <span className="text-secondary fs-6">${dolar.ultimoCierre}</span>
              </li>
            </ul>
          </div>

          <div className="card-footer text-muted text-center small">
            Actualizado el: {new Date(dolar.fechaActualizacion).toLocaleString('es-CL')}
          </div>
        </div>
      )}
    </div>
  );
}