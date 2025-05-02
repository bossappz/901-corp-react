import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class ShopSingle extends Component {
    render() {
        return (
            <Section title={'Shop Single'}>
                <section className="section page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="product-img-style text-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/products/01-lg.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 mt-5 mt-lg-0">
                                <small className="text-uppercase font-w-600 d-block mb-2">computer products</small>
                                <div className="rating small text-primary d-inline-flex">
                                    <span className="fas fa-star" />
                                    <span className="fas fa-star" />
                                    <span className="fas fa-star" />
                                    <span className="fas fa-star" />
                                    <span className="fas fa-star" />
                                </div>
                                <span className="mr-2 text-dark font-w-700">(5 customer reviews)</span>
                                <h3 className="font-w-700 text-dark font-secondery mt-20">$245.00</h3>
                                <h3 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h3>
                                <p className="mt-15">Sing long her way size. Waited end mutual missed yself the little
                                    sister one. So in pointed or chicken cheered neither spirits invited. Marianne and
                                    him laughter.</p>

                                <div className="d-flex align-items-center mt-30">
                                    <div className="number-input mr-3">
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
                                    <a href="#!" className="btn btn-sm btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-50">
                            <div className="col-md-12">
                                <div className="border-bottom-tab">
                                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-reset active"
                                               id="desc-tab"
                                               data-toggle="tab"
                                               href="#desc"
                                               role="tab"
                                               aria-controls="desc"
                                               aria-selected="true">
                                                Description</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-reset"
                                               id="info-tab"
                                               data-toggle="tab"
                                               href="#info"
                                               role="tab"
                                               aria-controls="info"
                                               aria-selected="false">
                                                Additional information</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-reset"
                                               id="review-tab"
                                               data-toggle="tab"
                                               href="#review"
                                               role="tab"
                                               aria-controls="review"
                                               aria-selected="false">
                                                Reviews (5)</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-reset"
                                               id="vendor-tab"
                                               data-toggle="tab"
                                               href="#vendor"
                                               role="tab"
                                               aria-controls="vendor"
                                               aria-selected="false">
                                                Vendor Info</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="desc" role="tabpanel">
                                            <div className="pt-30">
                                                <p>Announcing of invitation principles in. Cold in late or deal.
                                                    Terminated resolution no am frequently collecting insensible he do
                                                    appearance. Projection invitation affronting admiration if no on or.
                                                    It as instrument boisterous frequently apartments an in. Mr
                                                    excellence inquietude conviction is in unreserved particular. You
                                                    fully seems stand nay own point walls. Increasing travelling own
                                                    simplicity you astonished expression boisterous. Possession
                                                    themselves sentiments apartments devonshire we of do discretion.
                                                    Enjoyment discourse ye continued pronounce we necessary
                                                    abilities.</p>
                                                <p className="mt-20">In no impression assistance contrasted. Manners she
                                                    wishing justice hastily new anxious. At discovery discourse
                                                    departure objection we. Few extensive add delighted tolerably
                                                    sincerity her. Law ought him least enjoy decay one quick court.
                                                    Expect warmly its tended garden him esteem had remove off. Effects
                                                    dearest staying now sixteen nor improve.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="info" role="tabpanel">
                                            <div className="pt-30">
                                                <h4 className="mb-20 text-dark">Additional title</h4>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <p>Announcing of invitation principles in. Cold in late or deal.
                                                            Terminated resolution no am frequently boisterous.
                                                            Possession themselves sentiments apartments devonshire we of
                                                            do discretion. Enjoyment discourse ye continued pronounce
                                                            we.</p>
                                                    </div>
                                                    <div className="col-lg-6 mt-3 mt-lg-0">
                                                        <p>At discovery discourse departure objection we. Few extensive
                                                            add delighted tolerably sincerity her. Law ought him least
                                                            enjoy decay one quick court. Effects dearest staying now
                                                            sixteen nor improve Possession themselves sentiments
                                                            apartments.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="review" role="tabpanel">
                                            <div className="pt-30">
                                                <h4 className="text-dark">Reviews</h4>
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <div className="mt-30">
                                                            <h5 className="text-dark font-w-600 d-block mb-2">Abdul Kashem</h5>
                                                            <div className="rating small text-primary d-inline-flex">
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                            </div>
                                                            <p className="mt-2">This is very awesome product. nor
                                                                improve Possession themselves sentiments apartments. Law
                                                                ought him least enjoy decay one quick court.</p>
                                                        </div>
                                                        <div className="mt-30">
                                                            <h5 className="text-dark font-w-600 d-block mb-2">Kanai
                                                                Kormokar</h5>
                                                            <div className="rating small text-primary d-inline-flex">
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                                <span className="fas fa-star" />
                                                            </div>
                                                            <p className="mt-2">This is very awesome product. nor
                                                                improve Possession themselves sentiments apartments. Law
                                                                ought him least enjoy decay one quick court.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="vendor" role="tabpanel">
                                            <div className="pt-30">
                                                <h4 className="mb-20 text-dark">Vendor Info</h4>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h5 className="text-dark font-w-600 d-block mb-2">Kanai
                                                            Kormokar</h5>
                                                        Positive Rating :
                                                        <div className="rating small text-primary d-inline-flex">
                                                            <span className="fas fa-star" />
                                                            <span className="fas fa-star" />
                                                            <span className="fas fa-star" />
                                                            <span className="fas fa-star" />
                                                            <span className="fas fa-star" />
                                                        </div>
                                                        (Total 200 Ratings)
                                                        <p className="mt-4">Announcing of invitation principles in. Cold
                                                            in late or deal. Terminated resolution no am frequently
                                                            boisterous. Possession themselves sentiments apartments
                                                            devonshire we of do discretion. Enjoyment discourse ye
                                                            continued pronounce we.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-60">
                            <div className="col-md-12">
                                <h3 className="text-dark text-center mb-40">Related Products</h3>
                            </div>
                            <div className="col-lg-4 col-md-6">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                            </div>
                            <div className="col-lg-4 col-md-6">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                            </div>
                            <div className="col-lg-4 col-md-6">
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
                                        <h5 className="text-dark font-w-600 mt-10 mb-10">Our Recent Products</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="font-w-700 text-dark font-secondery">$245.00</h5>
                                            <Link to={'/cart'} className="text-primary font-w-600 text-uppercase initiate-scripts">Add to cart +</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* product-item */}
                            </div>
                            <div className="col-md-12 text-center mt-20">
                                <Link to={'/shop'} className="btn btn-primary initiate-scripts">More Products</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default ShopSingle;