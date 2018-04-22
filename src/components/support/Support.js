import React from "react";
import "./support.css"

import Header from "../header/Header";
import Footer from "../footer/Footer";

import PreventionHotline from "../../assets/suicide prevention hotline.jpg"

export default function Support() {
    return (
        <div>
            <Header />
            <div className="supportMain" >
                <a href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer"><img src={PreventionHotline} alt="Suicide Prevention Hotline" /></a>
            </div>
            <Footer />
        </div>
    )
}