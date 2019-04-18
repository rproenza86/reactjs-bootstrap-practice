import * as React from 'react';

interface ICarouselIndicatorProps {
    indicatorId: number;
    className: string;
    onClickHandler: (itemNumber: any) => void;
}

// tslint:disable jsx-no-lambda

const CarouselIndicator = (indicatorProps: ICarouselIndicatorProps) => {
    const { indicatorId: id, className, onClickHandler } = indicatorProps;

    return (
        <li
            id={`indicator${id}`}
            key={`indicator${id}`}
            data-slide-to={id}
            className={className}
            data-target="#myCarousel"
            onClick={() => onClickHandler(id)}
        />
    );
};

export default CarouselIndicator;
