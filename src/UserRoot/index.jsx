import { Outlet } from "react-router-dom";
import Menu from "../pages/menu";
import { Col, Row } from "antd";
import "./style.scss";
import Header from "../components/header";
const UserRoot = () => {
  return (
    <>
      <section className="mainPage">
        <div className="container">
          <Row>
            <Col span={4}>
              <Menu />
            </Col>
            <Col span={20}>
              <div className="head">
                <Header />
                <Outlet />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserRoot;
