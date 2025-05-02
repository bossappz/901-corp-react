import React, {Component} from "react";

class Preloader extends Component {
    render() {
        return (
            <div className="preloader-wrapper">
                <div className="preloader-inner">
                    <div className="sk-chase">
                        <div className="sk-chase-dot" />
                        <div className="sk-chase-dot" />
                        <div className="sk-chase-dot" />
                        <div className="sk-chase-dot" />
                        <div className="sk-chase-dot" />
                        <div className="sk-chase-dot" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;