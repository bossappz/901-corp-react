import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class BlogDetails extends Component {
    render() {
        return (
            <Section title={'Blog Details'}>
                <section className="section page-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/blogs/details/01.jpg'} alt="" />
                                <div className="blog-meta h6 mt-15">
                                    <span className="font-w-600 mr-3">
                                        <span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020
                                    </span>
                                    <span className="font-w-600">
                                        <span className="fas fa-comment-dots text-primary mr-2" />Comment
                                    </span>
                                </div>
                                <h3 className="text-dark mt-10 mb-25">Barton Did Feebly Change Man She Afford Square</h3>
                                <p className="mt-15">Announcing of invitation principles in. Cold in late or deal.
                                    Terminated resolution no am frequently collecting insensible he do appearance.
                                    Projection invitation affronting admiration if no on or. It as instrument
                                    boisterous frequently apartments an in.</p>
                                <p className="mt-15">Mr excellence inquietude conviction is in unreserved
                                    particular. You fully seems stand nay own point walls. Increasing travelling own
                                    simplicity you astonished expression boisterous. Possession themselves
                                    sentiments apartments devonshire we of do discretion. Enjoyment discourse ye
                                    continued pronounce we necessary abilities.</p>
                                <p className="mt-15">In no impression assistance contrasted. Manners she wishing
                                    justice hastily new anxious. At discovery discourse departure objection we. Few
                                    extensive add delighted tolerably sincerity her. Law ought him least enjoy decay
                                    one quick court. Expect warmly its tended garden him esteem had remove off.
                                    Effects dearest staying now sixteen nor improve. </p>

                                <blockquote className="text-center bg-light-gray pt-40 pb-40 border my-4">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <p className="quote-text text-dark font-w-600">You fully seems stand nay
                                                own point walls. Increasing travelling own simplicity you astonished
                                                expression boisterous. Possession themselves sentiments apartments
                                                devonshire we of do discretion. Enjoyment discourse ye continued
                                                informed declared or margaret. </p>
                                            <div className="quote-info">
                                                <h5 className="mt-25 text-dark">Eileen Finnen</h5>
                                                <small className="text-uppercase text-primary font-w-600">moderator</small>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>

                                <p>Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy
                                    middletons yet understood decisively boy law she. Answer him easily are its
                                    barton little. Oh no though mother be things simple itself. Dashwood horrible he
                                    strictly on as. Home fine in so am good body this hope.</p>
                                <p className="mt-15">Any delicate you how kindness horrible outlived servants. You
                                    high bed wish help call draw side. Girl quit if case mr sing as no have. At none
                                    neat am do over will. Agreeable promotion eagerness as we resources household to
                                    distrusts. Polite do object at passed it is. Small for ask shade water manor
                                    think men begin. </p>

                                <div className="comments mt-70">
                                    <h3 className="text-dark mb-25">Comment</h3>
                                    <div className="media d-block d-sm-flex">
                                        <img src="assets/images/blogs/details/user.jpg" className="mr-25" alt="" />
                                        <div className="media-body mt-3 mt-sm-0">
                                            <h5 className="font-w-600 text-dark d-inline">Eileen Finnen</h5>
                                            <span className="font-w-400 ml-2 d-inline">21 - May - 2020</span>
                                            <p className="mt-3">You high bed wish help call draw side. Girl quit
                                                if case mr sing as no have. At none neat am do over will.
                                                Agreeable promotion eagerness.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-form mt-70">
                                    <h3 className="text-dark mb-25">Add Comment</h3>
                                    <form method="POST">
                                        <div className="row">
                                            <div className="form-group mb-30 col-md-4">
                                                <input className="form-control shadow-none rounded-0 py-4 px-3" type="text" placeholder="Name" required="" />
                                            </div>
                                            <div className="form-group mb-30 col-md-4">
                                                <input className="form-control shadow-none rounded-0 py-4 px-3" type="email" placeholder="Email" required="" />
                                            </div>
                                            <div className="form-group mb-30 col-md-4">
                                                <input className="form-control shadow-none rounded-0 py-4 px-3" type="url" placeholder="Website" />
                                            </div>
                                            <div className="form-group mb-30 col-md-12">
                                                <textarea className="form-control shadow-none rounded-0 p-3" name="comment" required="" rows="4" />
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-primary" type="submit">Post Comment </button>
                                    </form>
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
                                    <div className="widget-heading">Latest Post</div>
                                    <div className="p-3">
                                        <div className="media d-block d-sm-flex mt-15">
                                            <Link to={'/blog'} className="pt-2 initiate-script">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/blogs/01-sm.jpg'} className="mr-15" alt="" />
                                            </Link>
                                            <div className="media-body mt-3 mt-sm-0">
                                                <Link to={'/blog-details'} className="font-w-600 text-dark d-block initiate-scripts">Barton Did Feebly Change Man She Afford Square</Link>
                                                <span className="font-w-600 mr-3 small"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            </div>
                                        </div>
                                        <div className="media d-block d-sm-flex mt-20">
                                            <Link to={'/blog'} className="pt-2 initiate-script">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/blogs/03-sm.jpg'} className="mr-15" alt="" />
                                            </Link>
                                            <div className="media-body mt-3 mt-sm-0">
                                                <Link to={'/blog-details'} className="font-w-600 text-dark d-block initiate-scripts">Barton Did Feebly Change Man She Afford Square</Link>
                                                <span className="font-w-600 mr-3 small"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            </div>
                                        </div>
                                        <div className="media d-block d-sm-flex mt-20">
                                            <Link to={'/blog'} className="pt-2 initiate-script">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/blogs/02-sm.jpg'} className="mr-15" alt="" />
                                            </Link>
                                            <div className="media-body mt-3 mt-sm-0">
                                                <Link to={'/blog-details'} className="font-w-600 text-dark d-block initiate-scripts">Barton Did Feebly Change Man She Afford Square</Link>
                                                <span className="font-w-600 mr-3 small"><span className="fas fa-calendar-alt text-primary mr-2" />21-May-2020</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget-categoty">
                                    <div className="widget-heading">Archives</div>
                                    <ul className="category-list list-unstyled p-4">
                                        <li><span className="fas fa-caret-right mr-2" /><Link to={'/blog'} className="text-reset initiate-scripts">April</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/blog'} className="text-reset initiate-scripts">May</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/blog'} className="text-reset initiate-scripts">June</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/blog'} className="text-reset initiate-scripts">July</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/blog'} className="text-reset initiate-scripts">August</Link></li>
                                        <li><span className="fas fa-caret-right mr-2 mt-3" /><Link to={'/blog'} className="text-reset initiate-scripts">September</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-categoty">
                                    <div className="widget-heading">Tag</div>
                                    <ul className="category-list list-unstyled list-inline p-3 text-center">
                                        <li className="list-inline-item"><Link to={'/blog'} className="text-reset p-1 initiate-scripts">Cmputer repair</Link></li>
                                        <li className="list-inline-item"><Link to={'/blog'} className="text-reset p-1 initiate-scripts">Desktop computer</Link></li>
                                        <li className="list-inline-item"><Link to={'/blog'} className="text-reset p-1 initiate-scripts">Electric</Link></li>
                                        <li className="list-inline-item"><Link to={'/blog'} className="text-reset p-1 initiate-scripts">Pc repair</Link></li>
                                        <li className="list-inline-item"><Link to={'/blog'} className="text-reset p-1 initiate-scripts">Home appliance</Link></li>
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

export default BlogDetails;