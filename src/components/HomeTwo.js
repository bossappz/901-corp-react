import React, {Component} from "react";
import SearchWrapper from "./layouts/SearchWrapper";
import HeaderTwo from "./layouts/HeaderTwo";
import BannerTwo from "./layouts/BannerTwo";
import HowCanHelp from "./layouts/HowCanHelp";
import AboutArea from "./layouts/AboutArea";
import WorkGallery from "./layouts/WorkGallery";
import WhyChooseUs from "./layouts/WhyChooseUs";
import RecentProductsTwo from "./layouts/RecentProductsTwo";
import Cta from "./layouts/Cta";
import Testimonials from "./layouts/Testimonials";
import BlogArea from "./layouts/BlogArea";
import Brands from "./layouts/Brands";
import Footer from "./layouts/Footer";

class HomeTwo extends Component {
    render() {
        return (
            <>
                <SearchWrapper />
                <HeaderTwo />
                <BannerTwo />
                <HowCanHelp />
                <AboutArea design={'home_2'} />
                <WorkGallery />
                <WhyChooseUs />
                <RecentProductsTwo />
                <Cta />
                <Testimonials design={'home_1'} />
                <BlogArea />
                <Brands />
                <Footer />
            </>
        );
    }
}

export default HomeTwo;