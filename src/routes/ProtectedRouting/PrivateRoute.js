import { Redirect, Route } from "react-router-dom"
import Layout from "../../components/Common/LayoutComponent"
// import SidebarComponent from "../../components/Common/SideBar/SidebarComponent"

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  return localStorage.length !== 0 ?
    <>
      {/* <SidebarComponent /> <Route component={Component} {...rest} /> */}
      <Layout><Route component={Component} {...rest} /></Layout>
    </>
    :
    <Redirect to="/" />
}
export default PrivateRoute