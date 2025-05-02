import React, {Component} from "react";
import {Link} from "react-router-dom";

class BannerThree extends Component {
    render() {
        return (
            <div className="cm-banner-03 overlay-dark bg-cover" style={{backgroundImage: "url(assets/images/bg-banner-03.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="block text-white">
                                <h2 className="display-4">Mobile Phone Remote Computer Repair Services</h2>
                                <p className="lead mt-25 mb-35">Instrument cultivated alteration any favourable
                                    expression law far nor. Both new like tore but yaer. </p>
                                <Link className="btn btn-primary mt-10 initiate-scripts" to={'/services'}>Appointment</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="banner-form bg-white p-4">
                                <h4 className="text-dark">Computer / Mobile Problem?</h4>
                                <p className="mt-10">Call - (123) 456-789 or Direct Massage us</p>
                                <form>
                                    <input type="text" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Name" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="email" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Email" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="phone" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Phone" />
                                        </div>
                                    </div>

                                    <div className="mt-20">
                                        <select className="w-100 rounded-0">
                                            <option disabled defaultValue="">Choose Your Product</option>
                                            <option defaultValue="1">Computer</option>
                                            <option defaultValue="2">Laptop</option>
                                            <option defaultValue="3">Mobile</option>
                                        </select>
                                    </div>

                                    <textarea className="form-control rounded-0 shadow-none bg-light-gray mt-85" placeholder="Message" />
                                    <button type="submit" className="btn btn-primary mt-25">Get a Quit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerThree;
