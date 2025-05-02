import React, {Component} from "react";

class Features extends Component {
    render() {
        return (
            <div className="cm-features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/01.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">{this.props.page.section_1.value_6}</h4>
                                    <p>{this.props.page.section_1.value_7}</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/02.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">{this.props.page.section_1.value_8}</h4>
                                    <p>{this.props.page.section_1.value_9}</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/03.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">{this.props.page.section_1.value_10}</h4>
                                    <p>{this.props.page.section_1.value_11}</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
