import { Component } from 'react';
import './styles/home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="contentSection pl-4 pr-1">
                <div class="container pb-4 mb-5">
                    <nav class="Page-navigation">
                        <ul class="pagination justify-content-center">
                            <li class="active page-item text-center">
                                <a class="page-link" href="/"
                                >TRENDING
                <div class="link-borderBottom"></div
                                    ></a>
                            </li>
                            <li class="page-item text-center">
                                <a class="page-link" href="/" >
                                    <div class="link-borderBottom">
                                    </div> PODCAST
                                </a >
                            </li>
                            <li class="page-item text-center">
                                <a class="page-link" href="/" >
                                    <div class="link-borderBottom">
                                    </div> MOODS AND GENRES
                                        </a>
                            </li>
                            <li class="page-item text-center">
                                <a class="page-link" href="/" >
                                    <div class="link-borderBottom">
                                    </div> NEW RELEASES
                                        </a >
                            </li>
                            <li class="page-item text-center">
                                <a class="page-link" href="/" >
                                    <div class="link-borderBottom">
                                    </div> DISCOVER
                                        </a >
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="container mb-5">
                    <h3 class="marginTop titleMobileHomepage">#THROWBACKTHURSDAY</h3>
                    <div class="row mb-3 text-center">
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Italian Karaoke.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Italian Karaoke</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Lyricists.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Lyricists</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Italy's frequent rotation.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Italy's Frequent Rotation</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/00s Italy.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">00s Italy</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Cocktail Hour.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Cocktail Hour</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/I Love My '90s Hip-Hop.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">I Love My '90s Hip-Hop</p>
                        </div>
                    </div>



                    <h3>Classifiche</h3>
                    <div class="row p-0 text-center">
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Top 50 - Italy.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Top 50 - Italy</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Top 50 - Global.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Top 50 - Global</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Viral 50 - Global.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Viral 50 - Global</p>
                        </div>
                        <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Viral 50 - Italy.jpg"
                                class="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p class="mt-2 font-weight-bold">Viral 50 - Italy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;