import React from 'react';
import Navbar from './views/Navbar';
import Header from './views/Header';
import MainContent from './views/MainContent';
import Details from './views/Details';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <MainContent />
                <Details />
            </div>
        );
    }
}

export default App;