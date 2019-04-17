import * as React from 'react';

interface IAppHeaderState {
    isMenuDrawerOpen: boolean;
}

class AppHeader extends React.Component<any, IAppHeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMenuDrawerOpen: false
        } as IAppHeaderState;
    }

    public render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">
                        ProReactCoder Carousel
                    </a>
                    <button
                        className={
                            'navbar-toggler' + (this.state.isMenuDrawerOpen ? ' collapsed' : '')
                        }
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded={this.state.isMenuDrawerOpen ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                        // tslint:disable-next-line: jsx-no-lambda
                        onClick={() => this._toggleMenuDrawer()}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={this._getNavbarClasses()} id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    Disabled
                                </a>
                            </li>
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
    }

    private _getNavbarClasses() {
        let basicClassNames = 'collapse navbar-collapse';

        if (this.state.isMenuDrawerOpen) {
            basicClassNames += ' show';
        }

        return basicClassNames;
    }

    private _toggleMenuDrawer() {
        this.setState({ isMenuDrawerOpen: !this.state.isMenuDrawerOpen });
    }
}

export default AppHeader;
