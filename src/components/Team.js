import React, {Component} from "react";
import Section from "./layouts/Section";

class Team extends Component {
    render() {
        return (
            <Section title={'Team'}>
                <section className="section cm-team pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="team-item mt-40">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <img className="team-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/team/01.jpg'} alt="" />
                                        </div>
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <h5 className="text-dark font-w-600">Lucinda Banfield</h5>
                                            <p className="small text-primary text-uppercase font-w-600 mt-1">Repair
                                                Technician</p>
                                            <p className="mt-15">PC Repair Technician, installs, evaluates, &
                                                troubleshoots.</p>
                                            <div className="barWrapper">
                                                <span className="progress-text">Softer Bag Fix</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="95">
                                                        <span className="skill-percent">95</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Computer Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="85">
                                                        <span className="skill-percent">85</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Smartphone Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="92">
                                                        <span className="skill-percent">92</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                        </div>
                                    </div>
                                </div>
                                {/* team item */}
                            </div>
                            <div className="col-lg-6">
                                <div className="team-item mt-40">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <img className="team-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/team/02.jpg'} alt="" />
                                        </div>
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <h5 className="text-dark font-w-600">Lucinda Banfield</h5>
                                            <p className="small text-primary text-uppercase font-w-600 mt-1">Repair
                                                Technician</p>
                                            <p className="mt-15">PC Repair Technician, installs, evaluates, &
                                                troubleshoots.</p>
                                            <div className="barWrapper">
                                                <span className="progress-text">Softer Bag Fix</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="90">
                                                        <span className="skill-percent">90</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Computer Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="97">
                                                        <span className="skill-percent">97</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Smartphone Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="81">
                                                        <span className="skill-percent">81</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                        </div>
                                    </div>
                                </div>
                                {/* team item */}
                            </div>
                            <div className="col-lg-6">
                                <div className="team-item mt-40">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <img className="team-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/team/03.jpg'} alt="" />
                                        </div>
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <h5 className="text-dark font-w-600">Marteen Khourn</h5>
                                            <p className="small text-primary text-uppercase font-w-600 mt-1">Repair
                                                Technician</p>
                                            <p className="mt-15">PC Repair Technician, installs, evaluates, &
                                                troubleshoots.</p>
                                            <div className="barWrapper">
                                                <span className="progress-text">Softer Bag Fix</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="90">
                                                        <span className="skill-percent">90</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Computer Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="97">
                                                        <span className="skill-percent">97</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Smartphone Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="81">
                                                        <span className="skill-percent">81</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                        </div>
                                    </div>
                                </div>
                                {/* team item */}
                            </div>
                            <div className="col-lg-6">
                                <div className="team-item mt-40">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <img className="team-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/team/04.jpg'} alt="" />
                                        </div>
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <h5 className="text-dark font-w-600">Martina Banfield</h5>
                                            <p className="small text-primary text-uppercase font-w-600 mt-1">Repair
                                                Technician</p>
                                            <p className="mt-15">PC Repair Technician, installs, evaluates, &
                                                troubleshoots.</p>
                                            <div className="barWrapper">
                                                <span className="progress-text">Softer Bag Fix</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="95">
                                                        <span className="skill-percent">95</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Computer Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="85">
                                                        <span className="skill-percent">85</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                            <div className="barWrapper">
                                                <span className="progress-text">Smartphone Repair</span>
                                                <div className="progress">
                                                    <div className="progress-bar" data-value="92">
                                                        <span className="skill-percent">92</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* skill bar */}
                                        </div>
                                    </div>
                                </div>
                                {/* team item */}
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default Team;