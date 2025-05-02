import React, {Component} from "react";
import SearchWrapper from "./SearchWrapper";
import Header from "./Header";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

class Section extends Component {
    render() {
        return (
            <>
                <SearchWrapper />
                <Header />
                <PageHeader title={this.props.title} />
                {this.props.children}
                <Footer />
            </>
        );
    }
}

export default Section;