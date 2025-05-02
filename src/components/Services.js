import React, {Component} from "react";
import Section from "./layouts/Section";
import ServiceArea from "./layouts/ServiceArea";

class Services extends Component {
    render() {
        return (
            <Section title={'Services'}>
                <ServiceArea background={false} />
            </Section>
        );
    }
}

export default Services;