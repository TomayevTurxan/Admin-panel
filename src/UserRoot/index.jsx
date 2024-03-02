import { Outlet } from "react-router-dom"
import Menu from "../pages/menu"
import { Col, Row } from "antd"
import "./style.scss"
const UserRoot = () => {
  return (
    <>
    <section className="mainPage">
      <div className="container">
      <Row>
                <Col span={6}>
                    <Menu/>
                </Col>
                <Col span={18}>
                   <div className="head">
                     <Outlet/>
                   </div>
                </Col>

        </Row>
      </div>
    </section>
    </>
  )
}

export default UserRoot