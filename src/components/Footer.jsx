import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="bottomMenuWrapper d-none d-sm-flex d-md-flex d-lg-flex">
                <div class="bottomMenuWrapperLeft">
                    <div class="d-flex">
                        <img
                            src="Img/Highway 61.PNG"
                            class="bottomMenuWrapperLeftAlbumImage"
                            alt=""
                        />
                        <div class="bottomMenuWrapperLeftAlbumText">
                            <h3>Song For My Father</h3>
                            <p>Horace Silver</p>
                        </div>
                        <div class="bottomMenuWrapperLeftIcons">
                            <ul>
                                <li><i class="far fa-heart" aria-hidden="true"></i></li>
                                <li><i class="fas fa-laptop" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bottomMenuWrapperCenter">
                    <div>
                        <ul class="d-flex align-items-center justify-content-center">
                            <li class="bottomMenuWrapperCenterSecondaryIcon">
                                <i class="fas fa-random" aria-hidden="true"></i>
                            </li>
                            <li class="bottomMenuWrapperCenterSecondaryIcon">
                                <i class="fas fa-step-backward" aria-hidden="true"></i>
                            </li>
                            <li class="bottomMenuWrapperCenterPlayIcon">
                                <i class="far fa-play-circle" aria-hidden="true"></i>
                            </li>
                            <li class="bottomMenuWrapperCenterSecondaryIcon">
                                <i class="fas fa-step-forward" aria-hidden="true"></i>
                            </li>
                            <li class="bottomMenuWrapperCenterSecondaryIcon">
                                <i class="fas fa-redo" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="progress progressSong">
                        <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div class="bottomMenuWrapperRight d-flex align-items-center">
                    <div>
                        <ul>
                            <li><i class="fas fa-bars" aria-hidden="true"></i></li>
                            <li><i class="fas fa-laptop-code" aria-hidden="true"></i></li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-volume-up" aria-hidden="true"></i>
                                    <div class="progress progressVolume mb-0 ml-2">
                                        <div
                                            class="progress-bar mb-0"
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
                            class="fas fa-ellipsis-h bottomMenuWrapperRightBars"
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}