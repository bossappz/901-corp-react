import React, {Component} from "react";
import {Link} from "react-router-dom";

class WorkGallery extends Component {
    render() {
        return (
            <section className="section work-gallery bg-cover overlay-dark" style={{backgroundImage: "url(assets/images/bg-services.jpg)"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 text-center">
                            <h2 className="section-heading h1 text-white mb-50">Our Work Gallery</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-fluid">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-md-12">
                            <div className="owl-carousel fluid-carousel">
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/01.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Laptop Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/02.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Mac Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/03.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Desktop Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/04.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">iPhone Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/01.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Laptop Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/02.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Mac Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/03.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Desktop Repair</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/gallery/04.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">iPhone Repair</Link>
                                </div>
                                {/* work-item */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkGallery;