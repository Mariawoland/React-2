// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
}

export default App;
