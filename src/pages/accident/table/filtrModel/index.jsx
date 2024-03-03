import { Col, Row } from "antd";
import { Input } from "antd";
import { Checkbox } from "antd";
const { Search } = Input;
import "./style.scss";
const FiltrModal = () => {
  return (
    <div className="filtrModal">
      <div className="search-filtr"></div>
      <Search placeholder="Axtaris" enterButton />
      <Row>
        <Col span={24} className="filtr-text">
          <ul>
            <h3>Sutun adi</h3>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
            <li>
              <Checkbox></Checkbox> <span>Test</span>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default FiltrModal;
