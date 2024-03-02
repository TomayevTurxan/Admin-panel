import { Col, Row } from "antd"
import "./style.scss"
import Menu from "../menu"
const Home = () => {
  return (
    <>
    <section className="mainPage">
        <Row>
                <Col span={12}>
                    <Menu/>
                </Col>

        </Row>
    </section></>
  )
}

export default Home