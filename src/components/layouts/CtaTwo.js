import React, {Component} from "react";
import {Link} from "react-router-dom";

class CtaTwo extends Component {
    render() {
        return (
            <section className="cm-cta-02 bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section">
                                <div className="text-dark mb-40">
                                    <h4 className="mb-15 font-w-600">0123-456-789 for Immediate Tech Support</h4>
                                    <h2 className="h1 mb-25">Onsite Expert Service</h2>
                                    <h4 className="font-w-600">We will manage your expectations with the truth!</h4>
                                </div>
                                <Link to={'/services'} className="btn btn-light initiate-scripts"><span className="fas fa-call" /> Appointment</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="cta-img" src={process.env.PUBLIC_URL + '/assets/images/bg-cta-02.jpg'} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CtaTwo;