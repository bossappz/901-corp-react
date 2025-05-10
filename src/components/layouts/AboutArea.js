import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutArea extends Component {
    render() {
        const imagePart = (
            <div className="col-lg-6 col-md-8">
                <div className="pr-0 pr-lg-5">
                    <img className="img-fluid" src={this.props.page.section_2.photo_data} alt="about" />
                </div>
            </div>
        );

        const descPart = (
            <div className="col-lg-6 col-md-10">
                <div className={this.props.design === 'home_1' ? 'block text-center mt-5 mt-lg-0' : 'block'}>
                    <h2 className="h1 text-dark">{this.props.page.section_2.value_1}</h2>
                    <p className="mt-25">{this.props.page.section_2.value_2}</p>
                    <p className="mt-25">
                        {this.props.page.section_2.value_3}
                    </p>
                    <Link to={'/services'} className="btn btn-primary mt-30 initiate-scripts">{this.props.page.section_2.value_4}</Link>
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
