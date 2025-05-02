import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutArea extends Component {
    render() {
        const imagePart = (
            <div className="col-lg-6 col-md-8">
                <div className="pr-0 pr-lg-5">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/about-image.jpg'} alt="about" />
                </div>
            </div>
        );

        const descPart = (
            <div className="col-lg-6 col-md-10">
                <div className={this.props.design === 'home_1' ? 'block text-center mt-5 mt-lg-0' : 'block'}>
                    <h2 className="h1 text-dark">Successfully Providing the Best Computer and Mobile Services from 20 years</h2>
                    <p className="mt-25">Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out.</p>
                    <p className="mt-25">
                        Power is lived means oh every in we quiet. Remainder provision an in intention.
                        Saw supported too joy promotion engrosse. Want eyes by neat so just must.
                        Past draw tall up face show rent oh mr.
                    </p>
                    <Link to={'/services'} className="btn btn-primary mt-30 initiate-scripts">learn more</Link>
                </div>
            </div>
        )
        return (
            <section className={this.props.design === 'home_1' ? 'section cm-about-us pt-80' : 'section cm-about-us'}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {this.props.design === 'home_1' ? (
                            <>
                                {imagePart}
                                {descPart}
                            </>
                        ) : (
                            <>
                                {descPart}
                                {imagePart}
                            </>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutArea;