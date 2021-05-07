import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="bottomMenuWrapper d-none d-sm-flex d-md-flex d-lg-flex">
                <div className="bottomMenuWrapperLeft">
                    <div className="d-flex">
                        <img
                            src="Img/Highway 61.PNG"
                            className="bottomMenuWrapperLeftAlbumImage"
                            alt=""
                        />
                        <div className="bottomMenuWrapperLeftAlbumText">
                            <h3>Song For My Father</h3>
                            <p>Horace Silver</p>
                        </div>
                        <div className="bottomMenuWrapperLeftIcons">
                            <ul>
                                <li><i className="far fa-heart" aria-hidden="true"></i></li>
                                <li><i className="fas fa-laptop" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottomMenuWrapperCenter">
                    <div>
                        <ul className="d-flex align-items-center justify-content-center">
                            <li className="bottomMenuWrapperCenterSecondaryIcon">
                                <i className="fas fa-random" aria-hidden="true"></i>
                            </li>
                            <li className="bottomMenuWrapperCenterSecondaryIcon">
                                <i className="fas fa-step-backward" aria-hidden="true"></i>
                            </li>
                            <li className="bottomMenuWrapperCenterPlayIcon">
                                <i className="far fa-play-circle" aria-hidden="true"></i>
                            </li>
                            <li className="bottomMenuWrapperCenterSecondaryIcon">
                                <i className="fas fa-step-forward" aria-hidden="true"></i>
                            </li>
                            <li className="bottomMenuWrapperCenterSecondaryIcon">
                                <i className="fas fa-redo" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="progress progressSong">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="bottomMenuWrapperRight d-flex align-items-center">
                    <div>
                        <ul>
                            <li><i className="fas fa-bars" aria-hidden="true"></i></li>
                            <li><i className="fas fa-laptop-code" aria-hidden="true"></i></li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-volume-up" aria-hidden="true"></i>
                                    <div className="progress progressVolume mb-0 ml-2">
                                        <div
                                            className="progress-bar mb-0"
                                            role="progressbar"
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <i
                            className="fas fa-ellipsis-h bottomMenuWrapperRightBars"
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}