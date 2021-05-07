import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="contentSection pl-4 pr-1">
                <div className="container">
                    <div className="form-outline" style={{ paddingTop: "10px" }}>
                        <input
                            id="search-input"
                            type="search"
                            className="form-control"
                            style={{ borderRadius: "25px", width: "300px", display: "inline-block" }}
                            placeholder="Artists, songs, or podcasts"
                        />
                        <button
                            id="search-button"
                            type="button"
                            className="btn btn-dark"
                            style={{ height: "40px", backgroundColor: "black", border: "0" }}
                            onclick="searchButtonFun()"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;