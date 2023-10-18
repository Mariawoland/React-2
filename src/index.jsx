import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

function Apli() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/about"> <About /> </Route>
                <Route path="/contact"> <Contact /> </Route>
                <Route path="/"> <Home /> </Route>

            </div>
        </Router>
    );
}

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
