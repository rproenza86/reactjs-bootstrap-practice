import * as React from 'react';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import Carousel from './Carousel';
import Marketing from './Marketing';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <AppHeader />
                <main role="main">
                    <Carousel />
                    <Marketing />
                    <AppFooter />
                </main>
            </div>
        );
    }
}

export default App;
