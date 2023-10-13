import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Space Mission</a>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Life</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">On</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mars?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;