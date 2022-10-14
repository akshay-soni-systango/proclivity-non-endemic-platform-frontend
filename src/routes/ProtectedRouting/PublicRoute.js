import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    return localStorage.length !== 0 ?
        < Redirect to="/admin" />
        :
        <Route component={Component} {...rest} />
}
export default PublicRoute