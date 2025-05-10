import React, { useState,Component } from 'react';
import {Link} from "react-router-dom";
import {Log,Number,Str} from "biz9-utility";
import {DataItem,DataType,Url,BiZ_Url,CMS,TemplateType,PageType,Business} from "biz9-logic";
class BannerOne extends Component {
    render() {
        return (
            <div className="cm-banner overlay bg-cover" style={{backgroundImage:"url("+this.props.page.section_1.photo_data+")"}}>
                 <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="block text-white">
                                <h3 className="mb-15">{this.props.page.section_1.value_1}</h3>
                                <h2 className="display-3">{this.props.page.section_1.value_2}</h2>
                                <p className="lead mt-25 mb-35">{this.props.page.section_1.value_3}</p>
                                <Link className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to={'/services'}>{this.props.page.section_1.value_4}</Link>
                                <Link className="btn btn-light mt-10 initiate-scripts" to={'/services'}>{this.props.page.section_1.value_5}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BannerOne;
