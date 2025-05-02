import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <Section title={'Blog'}>
                <section className="section cm-blogs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-heading h1 text-dark mb-15">From Our Blog</h2>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/01.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Resources Exquisite Set Arranging Moonlight Him
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/02.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Barton Did Feebly Change Man She Afford Square
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/03.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Village Did Removed Enjoyed Explain Saw Calling Talking.
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/02.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Resources Exquisite Set Arranging Moonlight Him
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/03.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Barton Did Feebly Change Man She Afford Square
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item card border-0 mt-30 bg-light-gray">
                                    <Link className="initiate-scripts" to={'/blog-details'}><img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blogs/01.jpg'} alt="" /></Link>
                                    <div className="card-body">
                                        <div className="blog-meta small">
                                            <span className="font-w-600 mr-3"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            <span className="font-w-600"><span className="fas fa-comment-dots text-primary mr-2" />Comment</span>
                                        </div>
                                        <Link to={'/blog-details'} className="h4 mt-10 font-w-400 text-dark line-h-1-5 initiate-scripts">
                                            Village Did Removed Enjoyed Explain Saw Calling Talking.
                                        </Link>
                                        <Link to={'/blog-details'} className="text-dark font-w-600 text-uppercase mt-15 initiate-scripts">
                                            Read More <span className="fas fa-long-arrow-alt-right text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default Blog;