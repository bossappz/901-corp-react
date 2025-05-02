import React, {Component} from "react";
import {Link} from "react-router-dom";

class HeaderTwo extends Component {
    render() {
        return (
            <header className="cm-header cm-header-2">
                <div className="header px-0 px-md-5">
                    <div className="container-fluid h-100">
                        <div className="row h-100 align-content-center">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light px-0">
                                    <Link className="navbar-brand initiate-scripts" to={'/home-one'}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/logo-2.png'} alt="logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler border-0 p-0"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navLinks"
                                        aria-controls="navLinks"
                                        aria-expanded="false">

                                        <span className="navbar-toggler-icon" />
                                    </button>

                                    <div className="collapse navbar-collapse" id="navLinks">
                                        <ul className="navbar-nav mx-auto align-items-center">
                                            <li className="nav-item dropdown active">
                                                <Link
                                                    className="nav-link dropdown-toggle initiate-scripts"
                                                    to={'/home-one'}
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Home <span className="text-primary">+</span>
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/home-one'}>Home 01</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/home-two'}>Home 02</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/home-three'}>Home 03</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link initiate-scripts" to={'/services'}>Services</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle initiate-scripts"
                                                    to={'/blog'}
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">

                                                    Blog <span className="text-primary">+</span>
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/blog'}>Blogs</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/blog-details'}>Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle initiate-scripts"
                                                    to={'/home-two'}
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">

                                                    Pages <span className="text-primary">+</span>
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/team'}>Team</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/service-single'}>Service Single</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/shop'}>Shop</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/shop-single'}>Shop Single</Link></li>
                                                    <li><Link className="dropdown-item initiate-scripts" to={'/cart'}>Cart</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="block d-flex align-items-center mt-3 mt-lg-0">
                                            <span className="icon fas fa-share-alt text-dark" role="button" />
                                            <span className="icon fas fa-search text-dark search-toggle" role="button" />
                                            <Link className="icon pr-0 pt-0 pb-0 text-dark initiate-scripts" to={'/cart'}>
                                                <span className="fas fa-shopping-bag" />
                                            </Link>
                                            <Link to={'/services'} className="btn btn-sm btn-primary d-none d-xl-block ml-5 initiate-scripts">Get a quote</Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderTwo;