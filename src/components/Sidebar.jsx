import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="wrapperSideBar d-none d-sm-block d-md-block d-lg-block">
                <nav id="sidebar">
                    <div class="sidebarHeadings">
                        <div class="sidebar-header">
                            <img
                                src="Img/Spotifylogo.png"
                                class="sidebarLogo"
                                alt="Spotify Logo White Trasparent"
                            />
                        </div>
                        <ul class="list-unstyled components">
                            <li class="active">
                                <a href="#homeSubmenu" class=""
                                ><i class="fas fa-home" aria-hidden="true"></i>Home</a>
                            </li>
                            <li>
                                <a href="/"><i class="fas fa-search" aria-hidden="true"></i>Search</a>
                            </li>
                            <li>
                                <a href="#pageSubmenu" class="">
                                    <i class="fas fa-bars" aria-hidden="true"></i>Pages</a>
                            </li>
                        </ul>
                    </div>

                    <div id="loggedInBottomMenu" class="sidebarBottomInfo d-none text-left">
                        <p class="sidebarBottomInfoInstalltheApp">
                            <i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i>Install the app
          </p>
                        <div class="sidebarUserImageContainer dropup">
                            <button
                                class="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img src="Img/Userimage.jpeg" class="sidebarUserImage" alt="" />
                                <span class="sidebarUserText">Diego Banovaz</span>
                            </button>
                            <div
                                class="dropdown-menu dropdownSettings"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a class="dropdown-item textDropUp" href="/">Settings</a>
                                <a class="dropdown-item textDropUp" href="/" id="logOutButton">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div id="loggedOutBottomMenu" class="">
                        <div class="sidebarBottomInfo d-flex flex-column">
                            <button
                                type="button"
                                class="btn sidebarBottomInfoSignUp"
                                data-toggle="modal"
                                data-target="#signUpModal"
                            >
                                Sign Up
            </button>
                            <button
                                type="button"
                                class="btn sidebarBottomInfoLogin"
                                data-toggle="modal"
                                data-target="#logInModal"
                            >
                                Login
            </button>
                            <div>
                                <ul>
                                    <li class="sidebarBottomInfoliFirst">Cookie</li>
                                    <li class="sidebarBottomInfoliMiddle">Privacy</li>
                                    <li class="sidebarBottomInfoliEnd">Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}