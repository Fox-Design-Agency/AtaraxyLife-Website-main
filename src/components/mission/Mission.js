import React from "react";
import "./mission.css"

import Header from "../header/Header";
import Footer from "../footer/Footer";

import Beliefs from "../home/Beliefs";

export default function Mission() {
    return (
        <div>
            <Header />
            <div className="missionMain">
                <h4>Our Mission</h4>
            </div>
            <Beliefs />
            <Footer />
        </div>
    )
}