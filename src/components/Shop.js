import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Shop extends Component {
    render() {
        return (
            <Section title={'Shop'}>
                <section className="section page-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card border-0 product-item shadow-sm mb-30">
                                            <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/01.jpg'} alt="" />
                                            <div className="card-body">
                                                <div className="show-on-hover">
                                                    <Link to={'/cart'} className="btn btn-primary rounded-pill initiate-scripts">Add to Cart <span className="fas fa-cart-plus" /></Link>
                                                </div>
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
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card border-0 product-item shadow-sm mb-30">
                                            <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/02.jpg'} alt="" />
                                            <div className="card-body">
                                                <div className="show-on-hover">
                                                    <Link to={'/cart'} className="btn btn-primary rounded-pill initiate-scripts">Add to Cart <span className="fas fa-cart-plus" /></Link>
                                                </div>
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
                                                <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent
                                                    Products</h5>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                                    <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* product-item */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mobile border-0 product-item shadow-sm mb-30">
                                            <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/03.jpg'} alt="" />
                                            <div className="card-body">
                                                <div className="show-on-hover">
                                                    <Link to={'/cart'} className="btn btn-primary rounded-pill initiate-scripts">Add to Cart <span className="fas fa-cart-plus" /></Link>
                                                </div>
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
                                                <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent
                                                    Products</h5>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                                    <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* product-item */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mobile border-0 product-item shadow-sm mb-30">
                                            <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/04.jpg'} alt="" />
                                            <div className="card-body">
                                                <div className="show-on-hover">
                                                    <Link to={'/cart'} className="btn btn-primary rounded-pill initiate-scripts">Add to Cart <span className="fas fa-cart-plus" /></Link>
                                                </div>
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
                                                <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent
                                                    Products</h5>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                                    <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* product-item */}
                                    </div>

                                    <div className="col-md-12">
                                        <ul className="pagination justify-content-center">
                                            <li><a href="#"><span className="fas fa-chevron-left" /></a></li>
                                            <li><a className="active" href="#">01</a></li>
                                            <li><a href="#">02</a></li>
                                            <li><a href="#">03</a></li>
                                            <li><a href="#"><span className="fas fa-chevron-right" /></a></li>
                                        </ul>
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
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default Shop;