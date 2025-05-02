import React, {Component} from "react";

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="section why-choose-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="pr-0 pr-lg-2">
                                <h2 className="section-heading h1 text-dark">Why Choose Us</h2>
                                <p className="mt-30">
                                    Do commanded an shameless we disposing do.
                                    Indulgence ten remarkably nor are impression out.
                                </p>
                                <p className="mt-20">
                                    His followed carriage proposal entrance directly had elegance. Greater for
                                    cottage gay parties natural.Remaining he furniture on he discourse suspected
                                    perpetual. Power dried her taken place day ought the. Four and our ham west miss.
                                </p>
                                <div className="row text-center">
                                    <div className="col-md-5 col-sm-6 mt-30">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/01.png'} alt="" />
                                        <h4 className="text-dark mt-15">After Sales Support</h4>
                                    </div>
                                    <div className="col-md-5 col-sm-6 mt-30">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/02.png'} alt="" />
                                        <h4 className="text-dark mt-15">Client Satisfaction</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="row masonry">
                                <div className="col-sm-6">
                                    <div className="block text-center">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/03.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Skill</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/04.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Experience</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/05.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Quality</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/06.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Guarantees</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;