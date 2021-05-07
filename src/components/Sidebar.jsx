import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="wrapperSideBar d-none d-sm-block d-md-block d-lg-block">
                <nav id="sidebar">
                    <div className="sidebarHeadings">
                        <div className="sidebar-header">
                            <img
                                src="Img/Spotifylogo.png"
                                className="sidebarLogo"
                                alt="Spotify Logo White Trasparent"
                            />
                        </div>
                        <ul className="list-unstyled components" style={{ listStyleType: "none" }}>
                            <li className="active">
                                <Link to="/"><i className="fas fa-home" aria-hidden="true"></i>Home</Link>
                            </li>
                            <li>
                                <Link to="/search"><i className="fas fa-search" aria-hidden="true"></i>Search</Link>
                            </li>
                            <li>
                                <Link to="/artist"><i className="fas fa-music" aria-hidden="true"></i>Artist</Link>
                            </li>
                            <li>
                                <Link to="/album"><i className="fas fa-compact-disc" aria-hidden="true"></i>Album</Link>
                            </li>
                            {/* <li>
                                <a className="" data-toggle="collapse" href="#collapsePages" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fas fa-bars"></i>Pages
                                </a>
                            </li> */}

                            {/* <div className="collapse" id="collapsePages">
                                <li>
                                    <Link to="/artist"><i className="fas fa-music" aria-hidden="true"></i>Artist</Link>
                                </li>
                                <li>
                                    <Link to="/album"><i className="fas fa-compact-disc" aria-hidden="true"></i>Album</Link>
                                </li>
                            </div> */}



                            {/* <div class="collapse" id="collapsePages">
                                <li>
                                    <Link to="/artist"><i class="fas fa-music" aria-hidden="true"></i>Artist</Link>
                                </li>
                                <li>
                                    <Link to="/album"><i class="fas fa-compact-disc" aria-hidden="true"></i>Album</Link>
                                </li>
                            </div> */}
                        </ul>
                    </div>

                    <div id="loggedInBottomMenu" className="sidebarBottomInfo d-none text-left">
                        <p className="sidebarBottomInfoInstalltheApp">
                            <i className="far fa-arrow-alt-circle-down" aria-hidden="true"></i>Install the app
          </p>
                        <div className="sidebarUserImageContainer dropup">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img src="Img/Userimage.jpeg" className="sidebarUserImage" alt="" />
                                <span className="sidebarUserText">Diego Banovaz</span>
                            </button>
                            <div
                                className="dropdown-menu dropdownSettings"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a className="dropdown-item textDropUp" href="/">Settings</a>
                                <a className="dropdown-item textDropUp" href="/" id="logOutButton">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div id="loggedOutBottomMenu" className="">
                        <div className="sidebarBottomInfo d-flex flex-column">
                            <button
                                type="button"
                                className="btn sidebarBottomInfoSignUp"
                                data-toggle="modal"
                                data-target="#signUpModal"
                            >
                                Sign Up
            </button>
                            <button
                                type="button"
                                className="btn sidebarBottomInfoLogin"
                                data-toggle="modal"
                                data-target="#logInModal"
                            >
                                Login
            </button>
                            <div>
                                <ul>
                                    <li className="sidebarBottomInfoliFirst">Cookie</li>
                                    <li className="sidebarBottomInfoliMiddle">Privacy</li>
                                    <li className="sidebarBottomInfoliEnd">Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
