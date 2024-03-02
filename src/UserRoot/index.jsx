import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const UserRoot = () => {
  return (
    <>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default UserRoot