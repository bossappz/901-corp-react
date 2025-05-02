import React, {Component} from "react";
import {Link} from "react-router-dom";

class PageHeader extends Component {
    render() {
        return (
            <div className="cm-page-header overlay-dark bg-cover" style={{backgroundImage: "url(assets/images/bg-page-cover.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="block text-white text-center">
                                <h2 className="h1">{this.props.title}</h2>
                                <div className="breadcrumb justify-content-center bg-transparent text-uppercase p-0 mb-0 mt-3">
                                    <Link className="text-primary initiate-scripts" to={'/'}>Home</Link><span className="text-primary mx-2" />
                                    <span>{this.props.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;