import { Redirect, Route } from "react-router-dom";
import Layout from "../../components/Common/LayoutComponent"

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  return localStorage.length !== 0 ?
    <>
      <Layout><Route component={Component} {...rest} /></Layout>
    </>
    :
    <Redirect to="/" />
}
export default PrivateRoute