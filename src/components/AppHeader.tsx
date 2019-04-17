import * as React from 'react';
import { useState } from 'react';

import NavItem, { INavItemProps } from './NavItem';

const navItemsConfig: INavItemProps[] = [
    { title: 'Home', active: true },
    { title: 'Link' },
    { title: 'Disabled', disabled: true }
];

const AppHeader = () => {
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">
                    ProReactCoder Carousel
                </a>
                <button
                    className={'navbar-toggler' + (isMenuDrawerOpen ? ' collapsed' : '')}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded={isMenuDrawerOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className={`collapse navbar-collapse ${isMenuDrawerOpen ? 'show' : ''}`}
                    id="navbarCollapse"
                >
                    <ul className="navbar-nav mr-auto">
                        {navItemsConfig.map((navItem, id) => (
                            <NavItem
                                key={id}
                                title={navItem.title}
                                link={navItem.link}
                                active={navItem.active}
                                disabled={navItem.disabled}
                            />
                        ))}
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
