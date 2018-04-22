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
                <p>Our mission is to connect individuals with avenues that they can receive help. This is in order to promote long term happiness of individuals that we are able to assist.</p>
            </div>
            <Beliefs />
            <div className="team">
                <h4>Board of Directors</h4>
                <div className="teamHolder">
                    <div className="card">
                        <img />
                        <h5>Founder, CEO</h5>
                        <h6>Christopher Fox</h6>
                        <p>Reasons for involvement</p>
                    </div>
                    <div className="card">
                        <img />
                        <h5>Founder, COO</h5>
                        <h6>Timothy Vilgiate</h6>
                        <p>Reasons for involvement</p>
                    </div>
                    <div className="card">
                        <img />
                        <h5>Founder, CFO</h5>
                        <h6>Jared Kientz</h6>
                        <p>Reasons for involvement</p>
                    </div>

                </div>
                <h4>Advisory Board</h4>
                <div className="advisoryboardHolder">
                    <div className="card">
                        <h4>We are currently reaching out to individuals to help the organization. If you are interested on being on the Advisory Board, please reach out to us!</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}