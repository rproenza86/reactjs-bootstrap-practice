import * as React from 'react';

interface ICarouselItemProps {
    itemId: number;
    className: string;
}

const mockCarouselItems = [
    {
        content: (
            <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                    mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                </p>
                <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">
                        Sign up today
                    </a>
                </p>
            </div>
        )
    },
    {
        content: (
            <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                    mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                </p>
                <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">
                        Learn more
                    </a>
                </p>
            </div>
        )
    },
    {
        content: (
            <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                    mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                </p>
                <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">
                        Browse gallery
                    </a>
                </p>
            </div>
        )
    }
];

const CarouselItem = (itemProps: ICarouselItemProps) => {
    const { itemId, className } = itemProps;
    const imagePlaceHolder = (
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
    );

    return (
        <div className={className} id={`${itemId}`} key={itemId}>
            {imagePlaceHolder}
            <div className="container">{mockCarouselItems[itemId - 1].content}</div>
        </div>
    );
};

export default CarouselItem;
