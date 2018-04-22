import React from "react";

import "./home.css";
export default function Beliefs() {
    return (
        <div className="homeBeliefs">
            <h4>Our Beliefs</h4>
            <div className="beliefsCardHolder">
                <div className="beliefCards">
                    <h5>Help Communities</h5>
                    <p>To assist communities affected by suicide within our means and ability. We hope to be able to connect indivudals with the help they need.</p>
                    <button>Learn More</button>
                </div>
                <div className="beliefCards">
                    <h5>Zero Suicide</h5>
                    <p>Within the communities that we are helping, we have the high ambition for zero suicides. This will not be an easy task and we cannot do it alone.</p>
                    <button>Learn More</button>
                </div>
                <div className="beliefCards">
                    <h5>Comunication</h5>
                    <p>The reasons for suicide are an infinitely complex topic, but only through proper communication may we be able to help.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}