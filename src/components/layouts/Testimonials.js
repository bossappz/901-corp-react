import React, {Component} from "react";
import {Link} from "react-router-dom";

class Testimonials extends Component {
    render() {
        return (
            <section className={this.props.design === 'home_3' ? 'section cm-testimonials bg-light-gray' : 'section cm-testimonials'}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="pr-0 pr-lg-5">
                                <h2 className="section-heading h1 text-dark">Happy Client Quote After Servicing</h2>
                                <p className="mt-25">Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out.</p>
                                <img className="img-fluid mt-40" src={process.env.PUBLIC_URL + '/assets/images/clients/01.jpg'} alt="client" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block mt-5 mt-lg-0">
                                <div className="testimonial-item">
                                    <p className="mb-15">
                                        Article evident arrived express highest men did boy. Mistres sensible
                                        entirely am so. Quick can manor smart money hopes worth produce husband
                                        boy her had hearing.
                                    </p>
                                    <div className="d-block d-md-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid mr-3" src={process.env.PUBLIC_URL + '/assets/images/clients/02.jpg'} alt="" />
                                            <div>
                                                <h5 className="text-dark font-w-600 mb-1">Miranda Austin</h5>
                                                <p className="small text-primary text-uppercase font-w-600">Miranda Austin</p>
                                            </div>
                                        </div>
                                        <div className="font-w-600 mt-3 mt-md-0">
                                            <span className="fas fa-calendar-alt text-primary mr-1" />
                                            21-May-2020
                                        </div>
                                    </div>
                                </div>
                                {/* testimonial-item */}
                                <div className="testimonial-item mt-30">
                                    <p className="mb-15">
                                        Article evident arrived express highest men did boy. Mistres sensible
                                        entirely am so. Quick can manor smart money hopes worth produce husband
                                        boy her had hearing.
                                    </p>
                                    <div className="d-block d-md-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid mr-3" src={process.env.PUBLIC_URL + '/assets/images/clients/03.jpg'} alt="" />
                                            <div>
                                                <h5 className="text-dark font-w-600 mb-1">Miranda Austin</h5>
                                                <p className="small text-primary text-uppercase font-w-600">Miranda Austin</p>
                                            </div>
                                        </div>
                                        <div className="font-w-600 mt-3 mt-md-0">
                                            <span className="fas fa-calendar-alt text-primary mr-1" />
                                            21-May-2020
                                        </div>
                                    </div>
                                </div>
                                {/* testimonial-item */}
                                <div className="testimonial-item mt-30">
                                    <p className="mb-15">
                                        Article evident arrived express highest men did boy. Mistres sensible
                                        entirely am so. Quick can manor smart money hopes worth produce husband
                                        boy her had hearing.
                                    </p>
                                    <div className="d-block d-md-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid mr-3" src={process.env.PUBLIC_URL + '/assets/images/clients/04.jpg'} alt="" />
                                            <div>
                                                <h5 className="text-dark font-w-600 mb-1">Miranda Austin</h5>
                                                <p className="small text-primary text-uppercase font-w-600">Miranda Austin</p>
                                            </div>
                                        </div>
                                        <div className="font-w-600 mt-3 mt-md-0">
                                            <span className="fas fa-calendar-alt text-primary mr-1" />
                                            21-May-2020
                                        </div>
                                    </div>
                                </div>
                                {/* testimonial-item */}

                                <Link to={'/services'} className="text-dark font-w-600 float-right text-uppercase mt-30 initiate-scripts">
                                    View All <span className="fas fa-long-arrow-alt-right text-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;