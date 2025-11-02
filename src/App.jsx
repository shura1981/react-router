
import { Ripple, initMDB } from "mdb-ui-kit";
import { useEffect } from "react";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página de inicio.</p>
      <a href="/about">Ir a la página de Acerca de</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Esta es la página Acerca de.</p>
      <a href="/">Ir a la página de Inicio</a>
    </>
  );
}

function App() {

  useEffect(() => {
    initMDB({ Ripple });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6">
          <div className="card" style={{ width: '18rem' }}>
            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
