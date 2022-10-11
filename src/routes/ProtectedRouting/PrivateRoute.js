import { Redirect, Route } from "react-router-dom"
import SidebarComponent from "../../components/Common/SideBar/SidebarComponent"

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  return localStorage.length !== 0 ?
    <>
      <SidebarComponent /> <Route component={Component} {...rest} />
    </>
    :
    <Redirect to="/" />
}
export default PrivateRoute