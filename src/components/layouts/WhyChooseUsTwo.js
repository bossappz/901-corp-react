import React, {Component} from "react";

class WhyChooseUsTwo extends Component {
    render() {
        return (
            <section className="section pt-0 why-choose-us">
                <div className="container">
                    <div className="bg-light-gray bg-shape-image">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="pr-0 pr-lg-2">
                                    <h2 className="section-heading h1 text-dark">Why Choose Us</h2>
                                    <p className="mt-30">
                                        Do commanded an shameless we do. Indulgence ten remarkably nor are impression out.
                                    </p>
                                    <p className="mt-20">
                                        His followed carriage proposal entrance directly had elegance.
                                        Greater for cottage gay parties natural.on he discourse suspected perpetual.
                                        Power dried her taken place day ought the.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-4 mt-lg-0">
                                <div className="owl-carousel why-choose-us-carousel">
                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/03.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Skill</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}

                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/04.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Experience</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}

                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/05.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Quality</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}

                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/06.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Guarantees</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}

                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/04.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Experience</h4>
                                        <p className="mt-20">Ever man are put down his very. And marry may table him avoid.</p>
                                    </div>
                                    {/* why choose us item */}

                                    <div className="block text-center bg-white">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/05.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Quality</h4>
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

export default WhyChooseUsTwo;