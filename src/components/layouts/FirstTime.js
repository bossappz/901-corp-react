import React, {Component} from "react";

class FirstTime extends Component {
    render() {
        return (
            <section className="section cm-first-time">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-30 text-center">
                                <h2 className="section-heading h1 text-dark">You Come First Time</h2>
                                <p className="mt-15">Do commanded an shameless we disposing do. Indulgence ten
                                    remarkably nor are impression out.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="block text-center bg-light-gray p-3 py-5 mt-30">
                                <div className="context">
                                    <div className="icon mb-4">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/first-icons/icon02.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Low Price Guarantee</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling.
                                        Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* first-time item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block active text-center bg-light-gray p-3 py-5 mt-30">
                                <div className="context">
                                    <div className="icon mb-4">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/first-icons/icon01.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">90 Day Warranty</h4>
                                    <p className="mt-15">Delighted as ontinual elsewhere am convinced unfeeling.
                                        Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* first-time item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block text-center bg-light-gray p-3 py-5 mt-30">
                                <div className="context">
                                    <div className="icon mb-4">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/first-icons/icon03.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">We're Here for You</h4>
                                    <p className="mt-15">Introduced ontinual delighted as elsewhere am convinced
                                        unfeeling. stimulated attachment.</p>
                                </div>
                            </div>
                            {/* first-time item */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FirstTime;