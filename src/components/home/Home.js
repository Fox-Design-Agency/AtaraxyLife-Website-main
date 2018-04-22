import React from "react"
import {Link} from "react-router-dom"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Beliefs from "./Beliefs";

import "./home.css";

export default function HomeView() {
    return (
        <section>
            <Header />
            <div className="homeHero">
                <div>
                    <h5>We Care</h5>
                    <h6>Because We've Been There</h6>
                    <Link to="/support"><button>Get Help</button></Link>
                </div>
            </div>
            <Beliefs />
            <Footer />
        </section>
    )
}