import React, {Component} from "react";
import {Link} from "react-router-dom";

class RecentProducts extends Component {
    render() {
        return (
            <section className="section bg-light-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 text-center">
                            <h2 className="section-heading h1 text-dark mb-30">Our Recent Products</h2>
                            <p className="mb-40">
                                Do commanded an shameless we disposing do.
                                Indulgence ten remarkably nor are impression out.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-fluid">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-xl-9 text-center mb-40">
                            <div className="btn-group product-filter-buttons">
                                <button type="button" className="btn active" data-owl-filter="*">All items</button>
                                <button type="button" className="btn" data-owl-filter=".computer">Computer</button>
                                <button type="button" className="btn" data-owl-filter=".laptop">Laptop</button>
                                <button type="button" className="btn" data-owl-filter=".mobile">Mobile</button>
                                <button type="button" className="btn" data-owl-filter=".screen-pro">Screen protector</button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel fluid-carousel">
                                <div className="card computer border-0 product-item">
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
                                <div className="card laptop border-0 product-item">
                                    <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/02.jpg'} alt="" />
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
                                <div className="card mobile border-0 product-item">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                                <div className="card computer border-0 product-item">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                                <div className="card computer border-0 product-item">
                                    <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/05.jpg'} alt="" />
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
                                <div className="card computer border-0 product-item">
                                    <img className="card-img-top border-bottom" src={process.env.PUBLIC_URL + '/assets/images/products/06.jpg'} alt="" />
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
                                <div className="card computer border-0 product-item">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                                <div className="card screen-pro border-0 product-item">
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
        );
    }
}

export default RecentProducts;