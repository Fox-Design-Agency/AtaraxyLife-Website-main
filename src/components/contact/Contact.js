import React from "react";
import "./contact.css"

import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="contactMain">
                <h4>Contact</h4>
                <p>If you need immediate assistance, please call 1-800-273-8255</p>
            </div>
            <Footer />
        </div>
    )
}