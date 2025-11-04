import { useEffect } from "react";
import { Ripple, initMDB } from "mdb-ui-kit";

export default function AboutPage() {

useEffect(() => {
// Initialization for ES Users

  initMDB({ Ripple });

  document.querySelectorAll('.example-class').forEach((cardRipple) => {
    new Ripple(cardRipple, {
      rippleColor: 'light'
    })
  });

}, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <a href="#!" className="example-class">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp"
                                className="card-img-top"
                                alt="Palms by the Pool"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>
                            <a href="#!" className="btn btn-primary example-class">
                                Button
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card">
                        <a href="#!" className="example-class">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/025.webp"
                                className="card-img-top"
                                alt="Empire State Building"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>
                            <a href="#!" className="btn btn-primary example-class">
                                Button
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card">
                        <a href="#!" className="example-class">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp"
                                className="card-img-top"
                                alt="Paris - Eiffel Tower"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>
                            <a href="#!" className="btn btn-primary example-class">
                                Button
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
