import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                {/* start footer */}
                <footer className="footer section bg-cover overlay-dark pt-60" style={{backgroundImage: "url(assets/images/bg-footer.jpg)"}}>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-md-6 mt-40">
                                <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/logo-light.png'} alt="" />
                                <p className="text-gray">
                                    Ye to misery wisdom plenty polite to as.
                                    Prepared interest proposal it he exercise.
                                </p>
                                <ul className="social-links list-unstyled mt-25">
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-facebook-f" /></Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-twitter" /></Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 mt-40">
                                <h4 className="font-w-600 text-white mb-10">Quick Links</h4>
                                <ul className="footer-links list-unstyled text-uppercase">
                                    <li><Link to={'/services'} className="initiate-scripts">Web design</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Web development</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Graphics</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">SEO</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 mt-40">
                                <h4 className="font-w-600 text-white mb-10">Quick Links</h4>
                                <ul className="footer-links list-unstyled text-uppercase">
                                    <li><Link to={'/services'} className="initiate-scripts">About Us</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Blog</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Contact Us</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">Sign in</Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts">My account</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 mt-40">
                                <h4 className="font-w-600 text-white mb-10">Get in touch</h4>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-phone-alt mr-2" />
                                    0 (143) 456 7897
                                </div>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-envelope mr-2" />
                                    info@example.com
                                </div>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-home mr-2" />
                                    11 Deneside, Seghill",NE23
                                </div>
                                <form className="mt-25" method="post">
                                    <div className="input-group input-group-primary">
                                        <input type="email" className="form-control text-white px-3 bg-transparent shadow-none border-0" placeholder="Mail address" />
                                        <div className="input-group-apend">
                                            <button className="btn btn-primary rounded-circle" type="submit">
                                                <span className="fas fa-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>Copyright © 2020. All Rights Reserved By CM-Repair</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end footer */}

                <a href="#top" className="scroll-to-top">
                    <span className="fas fa-chevron-up" />
                </a>
                {/* scroll to top */}
            </>
        );
    }
}

export default Footer;