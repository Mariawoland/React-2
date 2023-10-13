import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super();
    }

    daklikeba = () => {
        alert('გამარჯობა მსოფლიო 🚀');
    }

    render() {
        return (
            <div className="App">
                <Header />

                <div className="container my-5">
                    <button className="btn btn-outline-dark" onClick={this.daklikeba}>
                        Click!
                    </button>
                </div>

                <Footer />
            </div>
        )
    }
}

var el = document.getElementById('root');
ReactDOM.createRoot(el).render(<App></App>);
