import React, {Component} from "react";
import {Link} from "react-router-dom";

class ServiceArea extends Component {
    render() {
        return (
            <section className={this.props.background ? 'section cm-services bg-cover overlay-dark' : 'section cm-services cm-services-02'} style={{backgroundImage: this.props.background ? "url(assets/images/bg-services.jpg)" : 'none'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link rounded-0 text-white text-left active"
                                    data-toggle="pill"
                                    href="#one"
                                    role="tab"
                                    aria-selected="true">
                                    
                                    PC Laptop Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                    data-toggle="pill"
                                    href="#two"
                                    role="tab"
                                    aria-selected="false">
                                    Mac Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#three"
                                   role="tab"
                                   aria-selected="false">
                                    PC Desktop Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#four"
                                   role="tab"
                                   aria-selected="false">
                                    iPhone Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#five"
                                   role="tab"
                                   aria-selected="false">
                                    iPad Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#six"
                                   role="tab"
                                   aria-selected="false">
                                    Smartphone Repair</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#seven"
                                   role="tab"
                                   aria-selected="false">
                                    Data Recovery</a>

                                <a className="nav-link rounded-0 text-white text-left"
                                   data-toggle="pill"
                                   href="#eight"
                                   role="tab"
                                   aria-selected="false">
                                    Software Update</a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="one" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>PC Laptop Repair</h2>
                                            </div>
                                            <div className="col-md-7 order-1 order-md-0">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5 col-sm-8 order-0 order-md-1 my-1 mb-4 my-md-0">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="two" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>Mac Repair</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="three" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>PC Desktop Repair</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="four" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>iPhone Repair</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="five" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>iPad Repair</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="six" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>Smartphone Repair</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="seven" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>Data Recovery</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                                <div className="tab-pane fade" id="eight" role="tabpanel">
                                    <div className="service-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className={this.props.background ? 'h1 text-white mb-25' : 'h1 text-dark mb-25'}>Software Update</h2>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-gray">His followed carriage proposal entrance
                                                    directly had elegance. Greater for cottage gay parties natural.
                                                    Remaining he furniture on he discourse suspected perpetual. Power
                                                    dried her taken.</p>
                                                <ul className="check-list mt-30 text-gray">
                                                    <li>On-site computer repair and upgrades.</li>
                                                    <li>Virus and firewall protection.</li>
                                                    <li>Home and office network installation.</li>
                                                    <li>Wireless network installation and troubleshooting.</li>
                                                    <li>Spyware/adware removal.</li>
                                                    <li>Data transfer and data backup.</li>
                                                </ul>
                                                <Link to={'/services'} className="btn btn-primary mt-35 initiate-scripts">Reed More</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/service-tab-img.jpg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* service-item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceArea;