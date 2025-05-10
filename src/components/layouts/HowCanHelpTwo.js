import React, {Component} from "react";

class HowCanHelpTwo extends Component {
    render() {
        return (
            <section className="section cm-how-can-help bg-light-gray bg-cover" style={{backgroundImage: "url(assets/images/bg-help.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-30 text-center">
                                <h2 className="section-heading h1 text-dark">{this.props.page.section_3.value_1}</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block bg-cover mt-30" style={{backgroundImage: "url(assets/images/bg-help-item.jpg)"}}>
                                <div className="context">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL  + '/assets/images/help/01.png'} alt="" />
                                    </div>
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_2}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_3}</p>
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
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_4}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_5}</p>
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
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_6}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_7}</p>
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
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_8}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_9}</p>
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
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_10}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_11}</p>
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
                                    <h4 className="text-dark font-w-700">{this.props.page.section_3.value_12}</h4>
                                    <p className="mt-15">{this.props.page.section_3.value_13}</p>
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
