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
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/mission">mission</Link></li>
                    <li><Link to="/the-pledge">the pledge</Link></li>
                    <li><Link to="/support">support</Link></li>
                    <li><Link to="/partners">partners</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ol>
            </nav>
        </header>
    )
}