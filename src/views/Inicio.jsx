import { useState, useEffect } from 'react';
import foto1 from '../assets/flor.webp';
import foto2 from '../assets/flor1.jpg';
import foto3 from '../assets/flor3.avif';
function Inicio() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
    fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(datos => {
        setDatos(datos);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al consultar la API:', error);
        setErrorMsg(error.message);
        setCargando(false);
      });
  }, []);
  return (
    <>
      <h1 className="text-center my-4">Inicio</h1>
      <div 
        id="carouselExample" 
        className="carousel slide mx-auto" 
        style={{ maxWidth: '800px' }} 
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src={foto1}
              className="d-block w-100" 
              alt="Slide 1" 
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img 
              src={foto2}
              className="d-block w-100" 
              alt="Slide 2" 
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img 
              src={foto3}
              className="d-block w-100" 
              alt="Slide 3" 
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <br/>

      {cargando && (
        <div className="alert alert-info text-center mx-auto" style={{ maxWidth: '400px' }}>
          Cargando datos del dólar...
        </div>
      )}

      {errorMsg && (
        <div className="alert alert-danger text-center mx-auto" style={{ maxWidth: '400px' }}>
          Error al obtener los datos del dólar.
        </div>
      )}

      {datos && (
        <div className="card mx-auto mb-4 p-3 shadow-sm text-center" style={{ maxWidth: '400px' }}>
          <h5>{datos.nombre} ({datos.moneda})</h5>
          <hr />
          <p className="mb-1"><strong>Compra:</strong> ${datos.compra}</p>
          <p className="mb-1"><strong>Venta:</strong> ${datos.venta}</p>
          <p className="mb-1"><strong>Último cierre:</strong> ${datos.ultimoCierre}</p>
          <small className="text-muted mt-2 d-block">
            <strong>Fecha:</strong> {datos.fechaActualizacion?.substring(0, 10)}
          </small>
        </div>
      )}
    </>
  );
}


export default Inicio;