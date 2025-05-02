import React, {Component} from "react";
import {Link} from "react-router-dom";

class Cta extends Component {
    render() {
        return (
            <section className="section cm-cta bg-cover overlay-light" style={{backgroundImage: "url(assets/images/bg-cta.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="text-dark">
                                <h3 className="mb-30">Just Give Us a Call at</h3>
                                <h2 className="h1 mb-20">Express Repair and Services Every Time!</h2>
                                <h4 className="mb-30">0123-456-789 for Immediate Tech Support</h4>
                            </div>
                            <Link to={'/services'} className="btn btn-primary initiate-scripts">Appointment</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;