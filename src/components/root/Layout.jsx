import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"




const Layout = () => {
  return (
    <>
       <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout