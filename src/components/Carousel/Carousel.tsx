import * as React from 'react';

import CarouselControl from './CarouselControl';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';

enum ActiveItem {
    Item1 = 1,
    Item2,
    Item3
}

export enum ItemMovements {
    Forward,
    Back
}

interface ICarouselState {
    itemActive: ActiveItem;
}

// tslint:disable: jsx-no-lambda
// tslint:disable: jsx-no-bind

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
                {this._createIndicators()}
                {this._createCarouselItems()}
                <CarouselControl
                    controlType="prev"
                    onClickHandler={this._updateNextActiveItem.bind(this)}
                />
                <CarouselControl
                    controlType={'next'}
                    onClickHandler={this._updateNextActiveItem.bind(this)}
                />
            </div>
        );
    }

    private _createIndicators() {
        const indicators = [];
        const itemsName = Object.keys(ActiveItem).filter(key => !isNaN(Number(ActiveItem[key])));

        for (const item of itemsName) {
            indicators.push(
                <CarouselIndicator
                    indicatorId={ActiveItem[item]}
                    className={this._isItemActive(ActiveItem[item])}
                    onClickHandler={this._updateActiveItemFromIndicator.bind(this)}
                />
            );
        }

        return <ol className="carousel-indicators">{indicators}</ol>;
    }

    private _createCarouselItems() {
        const carouselItems = [];
        const itemsName = Object.keys(ActiveItem).filter(key => !isNaN(Number(ActiveItem[key])));

        for (const item of itemsName) {
            carouselItems.push(
                <CarouselItem
                    itemId={ActiveItem[item]}
                    className={'carousel-item ' + this._isItemActive(ActiveItem[item])}
                />
            );
        }

        return <div className="carousel-inner">{carouselItems}</div>;
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
