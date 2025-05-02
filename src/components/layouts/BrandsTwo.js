import React, {Component} from "react";

class BrandsTwo extends Component {
    render() {
        return (
            <section className="section cm-brands-02">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-30 text-center">
                                <h2 className="section-heading h1 text-dark">Our Partners</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel brand-carousel">
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/brands/01.jpg'} alt="" />
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/brands/02.jpg'} alt="" />
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/brands/03.jpg'} alt="" />
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/brands/04.jpg'} alt="" />
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/brands/05.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandsTwo;