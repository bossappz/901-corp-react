import React, {Component} from "react";

class HowCanHelpTwo extends Component {
    render() {
        return (
            <section className="section cm-how-can-help bg-light-gray bg-cover" style={{backgroundImage: "url(assets/images/bg-help.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-30 text-center">
                                <h2 className="section-heading h1 text-dark">Here's How We Can Help You</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/01.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">On-Site Support</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block active bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/02.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Remote Support</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/03.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Fast Service</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/04.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Cut Costs</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/05.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Have a Backup Plan</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/06.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">Remote Workforce</h4>
                                    <p className="mt-15">Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowCanHelpTwo;