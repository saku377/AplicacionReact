import foto1 from '../assets/flor.webp';
import foto2 from '../assets/flor1.jpg';
import foto3 from '../assets/flor3.avif';
function Inicio() {
  return (
    <>
      <h1 className="text-center my-4">Inicio</h1>
      <div 
        id="carouselExample" 
        className="carousel slide mx-auto" 
        style={{ maxWidth: '800px' }} 
        data-bs-ride="carousel"
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
    </>
  );
}

export default Inicio;