import React from "react";
import {
    BrowserRouter,
    Routes as Switch,
    Route,
  } from "react-router-dom";

const HomePage = React.lazy(() => import(  /* webpackChunkName: "home-page" */ '../pages/HomePage'));

const Routes = () => {
  return (
    <>
       <BrowserRouter>
            <Switch>
                <Route path="/" element={<HomePage />} />
            </Switch>
        </BrowserRouter>
    </>
);
};
export default Routes;
