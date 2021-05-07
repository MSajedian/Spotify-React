import React, { Component } from 'react';
import './styles/artist.css';


export default class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="contentSection">
                <div className="container-img-artist">
                    <img
                        className="img-artist"
                        src="assets/queenonline-com-live-1986 - new1.jpg"
                        alt="queen"
                    />

                    <p className="text-artist-listener text-muted text-center">
                        33,000,575 MONTHLY LISTENERS
        </p>
                    <h1 className="text-artist-title text-white">Queen</h1>
                    <div className="btn-place text-center">
                        <button type="button" className="btnArtistPage btn-play">PLAY</button>
                        <button type="button" className="btnArtistPage btn-follow">FOLLOW</button>
                        <button type="button" className="btnArtistPage dots" title="More">
                            <svg
                                role="img"
                                height="32"
                                width="32"
                                viewBox="0 0 32 32"
                                className="Svg-ulyrgf-0 hJgLcF"
                            >
                                <path
                                    d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="Page-navigation">
                    <ul className="pagination justify-content-center postionUlArtistPage">
                        <li className="active page-item text-center">
                            <a className="page-link" href="/">OVERVIEW
              <div className="link-borderBottom"></div ></a>
                        </li>
                        <li className="page-item text-center">
                            <a className="page-link" href="/"><div className="link-borderBottom"></div> RELATED ARTISTS</a>
                        </li>
                        <li className="page-item text-center">
                            <a className="page-link" href="/"><div className="link-borderBottom"></div> ABOUT</a>
                        </li>
                    </ul>
                </nav>

                <div className="album pl-4">
                    <div className="container">
                        <h2 className="albums-heading mb-3">Albums</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
                                        alt="Bohemian Rhapsody (The Original Soundtrack)"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Bohemian Rhapsody (The Original Soundtrack)
                  </p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e02a97714ae03be2b2ff2aa2dbb"
                                        alt="On Air"
                                    />

                                    <div className="card-body">
                                        <p className="card-text text-center">On Air</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e0282ae0f628e5a39196ac9083b"
                                        alt="A Night At The Odeon"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">A Night At The Odeon</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e022f3e43381deaf6505880b1f6"
                                        alt="Live At The Rainbow"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">Live At The Rainbow</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e0256844a498ad89bd43d4756a7"
                                        alt="Live At The Rainbow (Deluxe)"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Live At The Rainbow (Deluxe)
                  </p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e021092d27726b965d04ef427e0"
                                        alt="Hungarian Rhapsody (Live In Budapest / 1986)"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Hungarian Rhapsody (Live In Budapest / 1986)
                  </p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e02f289327ca505f7acc3a3a72f"
                                        alt="The Cosmos Rocks"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">The Cosmos Rocks</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e02efd5124f95524b047ff71be8"
                                        alt="Queen Rock Montreal"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">Queen Rock Montreal</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e025cb4de900d6b4d66a778e538"
                                        alt="Return Of The Champions"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">Return Of The Champions</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e0224c4c0836bde217042af8dbf"
                                        alt="On Fire: Live At The Bowl"
                                    />

                                    <div className="card-body">
                                        <p className="card-text text-center">On Fire: Live At The Bowl</p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e025f8c271d01157fdb59478f14"
                                        alt="Made In Heaven (2011 Remaster)"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Made In Heaven (2011 Remaster)
                  </p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="card mb-4">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e0295b06b0399c5f32d804dbb89"
                                        alt="Made In Heaven (Deluxe Edition 2011 Remaster)"
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Made In Heaven (Deluxe Edition 2011 Remaster)
                  </p>
                                        <p className="card-text text-center card-artist">Queen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}