import * as React from 'react';

import { ItemMovements } from './Carousel';

interface IControlProps {
    controlType: string;
    onClickHandler: (direction: number) => void;
}

// tslint:disable jsx-no-lambda

const CarouselControl = (props: IControlProps) => {
    const { controlType, onClickHandler } = props;

    return (
        <a
            className={'carousel-control-' + controlType}
            href="#myCarousel"
            role="button"
            data-slide={controlType}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();

                let direction: number;
                switch (controlType) {
                    case 'prev':
                        direction = ItemMovements.Back;
                        break;
                    default:
                        direction = ItemMovements.Forward;
                        break;
                }

                onClickHandler(direction);
            }}
        >
            <span className={`carousel-control-${controlType}-icon`} aria-hidden="true" />
            <span className="sr-only">Previous</span>
        </a>
    );
};

export default CarouselControl;
