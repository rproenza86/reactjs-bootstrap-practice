import * as React from 'react';

enum ActiveItem {
    Item1 = 1,
    Item2,
    Item3
}

enum ItemMovements {
    Forward,
    Back
}

interface ICarouselState {
    itemActive: ActiveItem;
}

// tslint:disable: jsx-no-lambda

class Carousel extends React.Component<any, ICarouselState> {
    constructor(props: any) {
        super(props);
        this.state = {
            itemActive: ActiveItem.Item1
        } as ICarouselState;
    }

    public render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        className={this._isItemActive(ActiveItem.Item1)}
                        onClick={() => this._updateActiveItemFromIndicator(ActiveItem.Item1)}
                    />
                    <li
                        data-target="#myCarousel"
                        data-slide-to="1"
                        className={this._isItemActive(ActiveItem.Item2)}
                        onClick={() => this._updateActiveItemFromIndicator(ActiveItem.Item2)}
                    />
                    <li
                        data-target="#myCarousel"
                        data-slide-to="2"
                        className={this._isItemActive(ActiveItem.Item3)}
                        onClick={() => this._updateActiveItemFromIndicator(ActiveItem.Item3)}
                    />
                </ol>
                <div className="carousel-inner">
                    <div className={'carousel-item ' + this._isItemActive(ActiveItem.Item1)}>
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
                    <div className={'carousel-item ' + this._isItemActive(ActiveItem.Item2)}>
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
                    <div className={'carousel-item ' + this._isItemActive(ActiveItem.Item3)}>
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
                    onClick={() => this._updateNextActiveItem(ItemMovements.Back)}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                    onClick={() => this._updateNextActiveItem(ItemMovements.Forward)}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

    private _updateNextActiveItem(movement: ItemMovements) {
        const currentItem = this.state.itemActive;
        const isMovingBack = movement === ItemMovements.Back;
        const isMovingForward = movement === ItemMovements.Forward;
        let nextItem = isMovingForward ? ActiveItem.Item1 : ActiveItem.Item3;

        if (isMovingForward && currentItem !== ActiveItem.Item3) {
            nextItem = ActiveItem[`Item${currentItem + 1}`];
        }

        if (isMovingBack && currentItem !== ActiveItem.Item1) {
            nextItem = ActiveItem[`Item${currentItem - 1}`];
        }

        this.setState({
            itemActive: nextItem
        });
    }

    private _isItemActive(itemNumber: ActiveItem): string {
        return this.state.itemActive === itemNumber ? 'active' : '';
    }

    private _updateActiveItemFromIndicator(itemNumber: ActiveItem) {
        this.setState({
            itemActive: itemNumber
        });
    }
}

export default Carousel;
