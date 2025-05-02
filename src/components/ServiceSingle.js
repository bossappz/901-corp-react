import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class ServiceSingle extends Component {
    render() {
        return (
            <Section title={'Service Single'}>
                <section className="section page-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="img-fluid shadow" src={process.env.PUBLIC_URL + '/assets/images/service/01.jpg'} alt="" />
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <h2 className="h1 text-dark mb-25">MAC Repair</h2>
                                        <p>His followed carriage proposal entrance directly had elegance. Greater for
                                            cottage gay parties natural. Remaining he furniture on he discourse
                                            suspected perpetual. Power dried her taken.</p>
                                        <ul className="check-list mt-30">
                                            <li>On-site computer repair and upgrades.</li>
                                            <li>Virus and firewall protection.</li>
                                            <li>Home and office network installation.</li>
                                            <li>Wireless network installation and troubleshooting.</li>
                                            <li>Spyware/adware removal.</li>
                                            <li>Data transfer and data backup.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-70">
                                        <h3 className="text-dark">Servicess Priceing</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pricing-item shadow text-center mt-30">
                                            <h4 className="text-dark bg-light-gray">One Time Charge</h4>
                                            <h3 className="text-primary pt-15 pb-15 font-secondery">$59.95</h3>
                                            <ul className="list-unstyled">
                                                <li>Errors, Tune Ups, Email Issues 60 Minutes</li>
                                                <li>No Upfront Payment</li>
                                                <li>Money Back Guarantee</li>
                                                <li>Technicians in the USA</li>
                                                <li>No Monthly Fees</li>
                                                <li>Free Initial Analysis</li>
                                                <li>Quote Before we Start</li>
                                                <li>Pay with Credit Card or Paypal</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <Link to={'/services'} className="btn btn-primary initiate-scripts">Appointment</Link>
                                            </div>
                                        </div>
                                        {/* pricing-item */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pricing-item shadow text-center mt-30">
                                            <h4 className="text-dark bg-light-gray">One Time Charge</h4>
                                            <h3 className="text-primary pt-15 pb-15 font-secondery">$99.95</h3>
                                            <ul className="list-unstyled">
                                                <li>Errors, Tune Ups, Email Issues 60 Minutes</li>
                                                <li>No Upfront Payment</li>
                                                <li>Money Back Guarantee</li>
                                                <li>Technicians in the USA</li>
                                                <li>No Monthly Fees</li>
                                                <li>Free Initial Analysis</li>
                                                <li>Quote Before we Start</li>
                                                <li>Pay with Credit Card or Paypal</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <Link to={'/services'} className="btn btn-primary initiate-scripts">Appointment</Link>
                                            </div>
                                        </div>
                                        {/* pricing-item */}
                                    </div>
                                </div>
                                <div className="row mt-70">
                                    <div className="col-md-6">
                                        <h3 className="text-dark mb-25">Repair Details</h3>
                                        <p>It sportsman earnestly ye preserved an on. Moment led family sooner cannot
                                            her window pulled any. Or raillery if improved landlord to speaking hastened
                                            differed he. Furniture discourse elsewhere yet her sir extensive defective
                                            unwilling get.</p>
                                        <p className="mt-20">Why resolution one motionless you. Noise is round to in it
                                            quick timed doors. Written address greatly get attacks inhabit pursuit our
                                            but. Want four we face an he gate.</p>
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <img className="img-fluid shadow" src={process.env.PUBLIC_URL + '/assets/images/service/02.jpg'} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-5 mt-lg-0">
                                <div className="widget widget-search mt-0">
                                    <form className="d-flex">
                                        <input type="search" className="form-control border-0 shadow-none bg-transparent" placeholder="Search" />
                                        <button type="submit" className="border-0 bg-transparent"><span className="fas fa-search" /></button>
                                    </form>
                                </div>
                                <div className="widget widget-categoty">
                                    <div className="widget-heading">Categoty</div>
                                    <ul className="category-list list-unstyled p-4">
                                        <li><span className="fas fa-caret-right mr-2" /><Link to={'/services'} className="text-reset initiate-scripts">PC Laptop Repair</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/services'} className="text-reset initiate-scripts">Mac Repair</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/services'} className="text-reset initiate-scripts">PC Desktop Repair</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/services'} className="text-reset initiate-scripts">iPhone Repair</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/services'} className="text-reset initiate-scripts">iPad Repair</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/services'} className="text-reset initiate-scripts">Smartphone Repair</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-categoty">
                                    <div className="widget-heading">Latest Product</div>
                                    <div className="card border-0 product-item shadow mt-20">
                                        <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/01.jpg'} alt="" />
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="text-uppercase font-w-600">computer products</small>
                                                <div className="rating small text-primary d-flex">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                </div>
                                            </div>
                                            <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                                <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-item */}
                                    <div className="card border-0 product-item shadow mt-30">
                                        <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/02.jpg'} alt="" />
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="text-uppercase font-w-600">Laptop products</small>
                                                <div className="rating small text-primary d-flex">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                </div>
                                            </div>
                                            <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                                <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default ServiceSingle;