import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from "./components/home/Home";
import Missionview from "./components/mission/Mission";
import ThePledgeView from "./components/ThePledge/ThePledge";
import SupportView from "./components/support/Support";
import PartnersView from "./components/partners/Partners";
import Contactview from "./components/contact/Contact";

export default (
    <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/mission" component={Missionview} />
        <Route path="/the-pledge" component={ThePledgeView} />
        <Route path="/support" component={SupportView} />
        <Route path="/partners" component={PartnersView} />
        <Route path="/contact" component={Contactview} />

    </Switch>
)