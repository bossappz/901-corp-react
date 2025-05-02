import React, {Component} from "react";
import SearchWrapper from "./layouts/SearchWrapper";
import Header from "./layouts/Header";
import BannerThree from "./layouts/BannerThree";
import FirstTime from "./layouts/FirstTime";
import WhyChooseUsTwo from "./layouts/WhyChooseUsTwo";
import ServiceArea from "./layouts/ServiceArea";
import RecentProductsTwo from "./layouts/RecentProductsTwo";
import CtaTwo from "./layouts/CtaTwo";
import AboutArea from "./layouts/AboutArea";
import Divider from "./layouts/Divider";
import BrandsTwo from "./layouts/BrandsTwo";
import Testimonials from "./layouts/Testimonials";
import BlogArea from "./layouts/BlogArea";
import Footer from "./layouts/Footer";

class HomeThree extends Component {
    render() {
        return (
            <>
                <SearchWrapper />
                <Header />
                <BannerThree />
                <FirstTime />
                <WhyChooseUsTwo />
                <ServiceArea background={true} />
                <RecentProductsTwo />
                <CtaTwo />
                <AboutArea design={'home_1'} />
                <Divider />
                <BrandsTwo />
                <Testimonials design={'home_3'} />
                <BlogArea />
                <Footer />
            </>
        );
    }
}

export default HomeThree;