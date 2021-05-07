import { Component } from 'react';
import './styles/home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="contentSection pl-4 pr-1">
                <div className="container pb-4 mb-5">
                    <nav className="Page-navigation-home">
                        <ul className="pagination justify-content-center">
                            <li className="active page-item text-center">
                                <a className="page-link" href="/"
                                >TRENDING
                <div className="link-borderBottom"></div
                                    ></a>
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> PODCAST
                                </a >
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> MOODS AND GENRES
                                        </a>
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> NEW RELEASES
                                        </a >
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> DISCOVER
                                        </a >
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="container mb-5">
                    <h3 className="marginTop titleMobileHomepage">#THROWBACKTHURSDAY</h3>
                    <div className="row mb-3 text-center">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Italian Karaoke.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Italian Karaoke</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Lyricists.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Lyricists</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Italy's frequent rotation.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Italy's Frequent Rotation</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/00s Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">00s Italy</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Cocktail Hour.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Cocktail Hour</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/I Love My '90s Hip-Hop.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">I Love My '90s Hip-Hop</p>
                        </div>
                    </div>



                    <h3>classNameifiche</h3>
                    <div className="row p-0 text-center">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Top 50 - Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Top 50 - Italy</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Top 50 - Global.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Top 50 - Global</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Viral 50 - Global.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Viral 50 - Global</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="Img/Viral 50 - Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold">Viral 50 - Italy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;