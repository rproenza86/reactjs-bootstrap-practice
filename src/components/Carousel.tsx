import * as React from 'react';

class Carousel extends React.Component {
    public render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active" />
                    <li data-target="#myCarousel" data-slide-to="1" />
                    <li data-target="#myCarousel" data-slide-to="2" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Example headline.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#" role="button">
                                        Sign up today
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#" role="button">
                                        Learn more
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#" role="button">
                                        Browse gallery
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
