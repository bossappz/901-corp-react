import React, {Component} from "react";

class HowCanHelp extends Component {
    render() {
        return (
            <section className="section pb-0 cm-how-can-help cm-how-can-help-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/04.png'} alt="" />
                                    <h4 className="text-dark font-w-700">On-Site Support</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling.
                                        Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/05.png'} alt="" />
                                    <h4 className="text-dark font-w-700">Remote Support</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling.
                                        Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/06.png'} alt="" />
                                    <h4 className="text-dark font-w-700">Fast Service</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling.
                                        Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>

                        <div className="col-12 mt-70">
                            <div className="border-bottom" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowCanHelp;
