import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/shop" component={Shop} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
