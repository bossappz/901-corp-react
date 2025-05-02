import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            <Section title={'My Cart'}>
                <section className="section page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="widget widget-categoty mt-0">
                                    <div className="widget-heading bg-light-gray">Product</div>
                                </div>
                                <div className="cart-item border p-3 alert rounded-0 alert-dismissible fade show">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-img-style text-center mb-3 mb-md-0">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/products/02.jpg'} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="d-flex justify-content-between align-items-baseline">
                                                <h5 className="text-dark font-w-600">MAC Computer</h5>
                                                <span
                                                    className="badge badge-dark rounded-0 p-2 font-w-400">In Stock</span>
                                            </div>
                                            <h5 className="font-w-700 text-dark font-secondery mt-10">$245.00</h5>
                                            <div className="mt-20">
                                                <p>Quantity</p>
                                                <div className="d-inline-block d-sm-flex align-items-center">
                                                    <div className="mt-2 mr-1 mr-sm-3">
                                                        <div className="number-input">
                                                            <input className="quantity" min="1" name="quantity" value="1" type="number" />
                                                            <div>
                                                                <button onClick="this.parentNode.parentNode.querySelector('.quantity').stepUp()">
                                                                    <span className="fas fa-chevron-up" />
                                                                </button>
                                                                <button onClick="this.parentNode.parentNode.querySelector('.quantity').stepDown()">
                                                                    <span className="fas fa-chevron-down" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary-outline mr-1 mr-sm-3 mt-2"
                                                        data-dismiss="alert">
                                                        Remove</button>
                                                    <Link to={'/cart'} className="btn btn-sm btn-primary mr-1 mr-sm-3 mt-2 initiate-scripts">Update cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item border p-3 mt-30 alert rounded-0 alert-dismissible fade show">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-img-style text-center mb-3 mb-md-0">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/products/03.jpg'} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="d-flex justify-content-between align-items-baseline">
                                                <h5 className="text-dark font-w-600">Windows Laptop</h5>
                                                <span className="badge badge-dark rounded-0 p-2 font-w-400">In Stock</span>
                                            </div>
                                            <h5 className="font-w-700 text-dark font-secondery mt-10">$100.00</h5>
                                            <div className="mt-20">
                                                <p className="mb-1">Quantity</p>
                                                <div className="d-inline-block d-sm-flex align-items-center">
                                                    <div className="mt-2 mr-1 mr-sm-3">
                                                        <div className="number-input">
                                                            <input className="quantity" min="1" name="quantity" value="1" type="number" />
                                                            <div>
                                                                <button onClick="this.parentNode.parentNode.querySelector('.quantity').stepUp()">
                                                                    <span className="fas fa-chevron-up" />
                                                                </button>
                                                                <button onClick="this.parentNode.parentNode.querySelector('.quantity').stepDown()">
                                                                    <span className="fas fa-chevron-down" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary-outline mr-1 mr-sm-3 mt-2"
                                                        data-dismiss="alert">
                                                        Remove</button>
                                                    <Link to={'/cart'} className="btn btn-sm btn-primary mr-1 mr-sm-3 mt-2 initiate-scripts">Update cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 mt-5 mt-xl-0">
                                <div className="widget widget-categoty mt-0">
                                    <div className="widget-heading bg-light-gray">Subtotal</div>
                                    <h3 className="text-center text-uppercase text-dark font-secondery mt-20">$245.00</h3>
                                    <p className="text-center mt-15 mb-10">Additional comments</p>
                                    <form>
                                        <textarea className="form-control rounded-0 shadow-none" rows="4" />
                                    </form>
                                    <button className="btn btn-primary w-100 mt-20">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default Cart;