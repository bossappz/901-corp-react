import React, {Component} from "react";

class SearchWrapper extends Component {
    render() {
        return (
            <div className="search-wrapper position-fixed d-flex align-items-center justify-content-center z-index-1">
                <div className="search-close-wrap">
                    <p className="search-close-btn text-center rounded-circle" role="button"><span className="fas fa-times" /></p>
                </div>
                <form action="#">
                    <div className="form-group d-flex m-0">
                        <input className="form-control shadow-none border-0 bg-transparent" type="search" placeholder="Type here" />
                        <button type="submit" className="btn btn-primary p-0 border-0 text-white"><span className="fas fa-search" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchWrapper;