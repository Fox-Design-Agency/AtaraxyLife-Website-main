import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header className="mainHeaderHolder">
            <div className="mainHeaderBrand">
                <h5>Ataraxy Life</h5>
                <h6>Zero Suicide Advocates</h6>
                <h6>Happiness Seekers</h6>
            </div>

            <nav className="mainHeaderNavigation">
                <ol >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mission">Mission</Link></li>
                    <li><Link to="/the-pledge">The Pledge</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/partners">Partners</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ol>
            </nav>
        </header>
    )
}