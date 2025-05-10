import React, {Component} from "react";
import SearchWrapper from "./layouts/SearchWrapper";
import Header from "./layouts/Header";
import BannerOne from "./layouts/BannerOne";
import Features from "./layouts/Features";
import AboutArea from "./layouts/AboutArea";
import HowCanHelpTwo from "./layouts/HowCanHelpTwo";
import ServiceArea from "./layouts/ServiceArea";
import WhyChooseUs from "./layouts/WhyChooseUs";
import RecentProducts from "./layouts/RecentProducts";
import Team from "./layouts/Team";
import Cta from "./layouts/Cta";
import Testimonials from "./layouts/Testimonials";
import BlogArea from "./layouts/BlogArea";
import Brands from "./layouts/Brands";
import Footer from "./layouts/Footer";
/* -- biz9 import start -- */
//import Authentication from '../authentication';
//import AlertMessage from '../alertMessage';
import {Global} from "./../constant.js";
import {Remote} from "biz9-react-remote";
import {DataItem,DataType,Url,BiZ_Url,CMS,TemplateType,PageType,Business} from "biz9-logic";
import {Log,Number,Str} from "biz9-utility";
import {UrlQuery} from "biz9-react-utility";
/* -- biz9 import start -- */
class HomeOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            template: DataItem.get_new(DataType.TEMPLATE,0),
            business:{phone:"",email:"",address_1:"",address_2:"",city:"",state:"",zip:""},
            page:{
                section_1:{
                    photo_data:"",
                    value_1:"",
                    value_2:"",
                    value_3:"",
                    value_4:"",
                    value_5:"",
                    value_6:"",
                    value_7:"",
                    value_8:"",
                    value_9:"",
                    value_10:"",
                    value_11:"",
                    value_12:"",
                    value_13:"",
                    value_14:"",
                    value_15:"",
                    value_16:"",
                    value_17:"",
                    value_18:"",
                    value_19:""
                },
                section_2:{
                    photo_data:"",
                    value_1:"",
                    value_2:"",
                    value_3:"",
                    value_4:"",
                    value_5:"",
                    value_6:"",
                    value_7:"",
                    value_8:"",
                    value_9:"",
                    value_10:"",
                    value_11:"",
                    value_12:"",
                    value_13:"",
                    value_14:"",
                    value_15:"",
                    value_16:"",
                    value_17:"",
                    value_18:"",
                    value_19:""
                },
                section_3:{
                    photo_data:"",
                    value_1:"",
                    value_2:"",
                    value_3:"",
                    value_4:"",
                    value_5:"",
                    value_6:"",
                    value_7:"",
                    value_8:"",
                    value_9:"",
                    value_10:"",
                    value_11:"",
                    value_12:"",
                    value_13:"",
                    value_14:"",
                    value_15:"",
                    value_16:"",
                    value_17:"",
                    value_18:"",
                    value_19:""
 }
            }
        };
    }

    componentWillMount() {
        this.get_data();
    }

    async get_data() {
        let cloud_url = BiZ_Url.get_page(Global,PageType.HOME);
        Log.w('cloud_url',cloud_url);
        let [error,data] = await Remote.get(cloud_url);
        Log.w('data1',data);

        this.setState({business:{phone:data.business.phone,email:data.business.email,address_1:data.business.address_1,address_2:data.business.address_2,city:data.business.city,zip:data.business.zip}});

        this.setState({page:

            {
                section_1:{
                    photo_data:data.page.section_1.photo_data,
                    value_1:data.page.section_1.value_1,
                    value_2:data.page.section_1.value_2,
                    value_3:data.page.section_1.value_3,
                    value_4:data.page.section_1.value_4,
                    value_5:data.page.section_1.value_5,
                    value_6:data.page.section_1.value_6,
                    value_7:data.page.section_1.value_7,
                    value_8:data.page.section_1.value_8,
                    value_9:data.page.section_1.value_9,
                    value_10:data.page.section_1.value_10,
                    value_11:data.page.section_1.value_11,
                    value_12:data.page.section_1.value_12,
                    value_13:data.page.section_1.value_13,
                    value_14:data.page.section_1.value_14,
                    value_15:data.page.section_1.value_15,
                    value_16:data.page.section_1.value_16,
                    value_17:data.page.section_1.value_17,
                    value_18:data.page.section_1.value_18,
                    value_19:data.page.section_1.value_19,
                },

                section_2:{
                    photo_data:data.page.section_2.photo_data,
                    value_1:data.page.section_2.value_1,
                    value_2:data.page.section_2.value_2,
                    value_3:data.page.section_2.value_3,
                    value_4:data.page.section_2.value_4,
                    value_5:data.page.section_2.value_5,
                    value_6:data.page.section_2.value_6,
                    value_7:data.page.section_2.value_7,
                    value_8:data.page.section_2.value_8,
                    value_9:data.page.section_2.value_9,
                    value_10:data.page.section_2.value_10,
                    value_11:data.page.section_2.value_11,
                    value_12:data.page.section_2.value_12,
                    value_13:data.page.section_2.value_13,
                    value_14:data.page.section_2.value_14,
                    value_15:data.page.section_2.value_15,
                    value_16:data.page.section_2.value_16,
                    value_17:data.page.section_2.value_17,
                    value_18:data.page.section_2.value_18,
                    value_19:data.page.section_2.value_19,
                },

                section_3:{
                    photo_data:data.page.section_3.photo_data,
                    value_1:data.page.section_3.value_1,
                    value_2:data.page.section_3.value_2,
                    value_3:data.page.section_3.value_3,
                    value_4:data.page.section_3.value_4,
                    value_5:data.page.section_3.value_5,
                    value_6:data.page.section_3.value_6,
                    value_7:data.page.section_3.value_7,
                    value_8:data.page.section_3.value_8,
                    value_9:data.page.section_3.value_9,
                    value_10:data.page.section_3.value_10,
                    value_11:data.page.section_3.value_11,
                    value_12:data.page.section_3.value_12,
                    value_13:data.page.section_3.value_13,
                    value_14:data.page.section_3.value_14,
                    value_15:data.page.section_3.value_15,
                    value_16:data.page.section_3.value_16,
                    value_17:data.page.section_3.value_17,
                    value_18:data.page.section_3.value_18,
                    value_19:data.page.section_3.value_19,
                }
            }
        });
    };

    render() {
        return (
            <>
                <SearchWrapper />
                <Header business={this.state.business} template={this.state.template} page={this.state.page} />
                <BannerOne business={this.state.business} template={this.state.template} page={this.state.page} />
                <Features template={this.state.template} page={this.state.page} />
                <AboutArea business={this.state.business} template={this.state.template} page={this.state.page} design={'home_1'} />
                <HowCanHelpTwo business={this.state.business} template={this.state.template} page={this.state.page} />
                <ServiceArea background={true} />
                <WhyChooseUs />
                <RecentProducts />
                <Team />
                <Cta />
                <Testimonials design={'home_1'} />
                <BlogArea />
                <Brands />
                <Footer />
            </>
        );
    }
}

export default HomeOne;
