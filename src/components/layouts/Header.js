import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Business} from "biz9-logic";
import {Log} from "biz9-utility";

class Header extends Component {
    render() {
        return (
            <header className="cm-header">
            <div className="header-top bg-blue">
            <div className="container">
            <div className="row">
            <div className="col-xl-10">
            <div className="d-block d-md-flex justify-content-center justify-content-xl-start">
            <div className="block text-gray mr-35">
            <span className="icon text-primary fas fa-phone-alt mr-15" />
            {this.props.business.phone}
            </div>
            <div className="block text-gray mr-35">
            <span className="icon text-primary fas fa-envelope mr-15" />
            {this.props.business.email}
            </div>
            <div className="block text-gray">
            <span className="icon text-primary fas fa-home mr-15" />
            {Business.get_full_address(this.props.business)}
            </div>
            </div>
            </div>
            <div className="col-xl-2 d-none d-xl-block">
            <div className="block d-flex justify-content-end">
            <Link to={'/services'} className="text-primary initiate-scripts"><span className="icon fab fa-facebook-f border-right-0" /></Link>
            <Link to={'/services'} className="text-primary initiate-scripts"><span className="icon fab fa-twitter border-right-0" /></Link>
            <Link to={'/services'} className="text-primary initiate-scripts"><span className="icon fab fa-linkedin-in" /></Link>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="header">
            <div className="container h-100">
            <div className="row h-100 align-content-center">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light px-0">
            <Link className="navbar-brand initiate-scripts" to={'/home-two'}>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" />
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
            <ul className="navbar-nav ml-auto align-items-center">
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
            <div className="block d-flex mt-3 mt-lg-0">
            <span className="icon fas fa-share-alt text-dark" role="button" />
            <span className="icon fas fa-search text-dark search-toggle" role="button" />
            <Link className="icon pr-0 pt-0 pb-0 text-dark initiate-scripts" to={'/cart'}>
            <span className="fas fa-shopping-bag" />
            </Link>
            </div>
            </ul>
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
export default Header;
