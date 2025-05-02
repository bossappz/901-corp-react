import React, {Component} from "react";
import {Link} from "react-router-dom";

class BannerTwo extends Component {
    render() {
        return (
            <div className="owl-carousel banner-carousel">
                <div className="cm-banner overlay bg-cover" style={{backgroundImage: "url(assets/images/bg-banner-02.jpg)", backgroundPosition: "top"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="block text-white text-center">
                                    <h3 className="mb-15">Mobile & Computer</h3>
                                    <h2 className="display-3">Repair Service</h2>
                                    <p className="lead mt-25 mb-35">Instrument cultivated alteration any favourable
                                        expression law far nor. Both new like tore but yaer. </p>
                                    <Link className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to={'/services'}>Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cm-banner overlay bg-cover" style={{backgroundImage: "url(assets/images/bg-banner.jpg)", backgroundPosition: "top"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="block text-white text-center">
                                    <h3 className="mb-15">Laptop & Mac</h3>
                                    <h2 className="display-3">Repair Service</h2>
                                    <p className="lead mt-25 mb-35">Instrument cultivated alteration any favourable
                                        expression law far nor. Both new like tore but yaer. </p>
                                    <Link className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to={'/services'}>Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerTwo;