import { useState } from "react";
import { Checkbox, Col, DatePicker, Input, Row, Space, TimePicker } from "antd";
import { FaAngleRight } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import "./style.scss";

const FirstHelp = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const toggleAccordion = (sectionKey) => {
    if (selectedAccordion === sectionKey) {
      setSelectedAccordion(null);
    } else {
      setSelectedAccordion(sectionKey);
    }
  };

  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <div className="first-step">
      <div className="first-blog" onClick={() => toggleAccordion(1)}>
        <div className="first-box">
          <Checkbox checked={selectedAccordion === 1}></Checkbox>
          <span>Ilk yardim</span>
        </div>
        <BsArrowReturnLeft />
        <FaAngleRight className={selectedAccordion === 1 } />
      </div>
      {selectedAccordion === 1 && (
        <Row>
          <Col span={12}>
            <div className="accardion-context-box">
              <h4>Ad</h4>
              <Input placeholder="Basic usage" />
            </div>
          </Col>
          <Col span={12}>
            <div className="accardion-context-box">
              <h4>Hadisenin tarixi ve saat</h4>
              <div className="dates">
                <Space direction="vertical">
                  <DatePicker
                    className="dateType"
                    placeholder="Baslama tarix"
                  />
                </Space>
                <TimePicker
                  className="clock"
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="mention">
              <h4>Qeyd</h4>
              <Input className="mention-input" placeholder="Daxil edin" />
            </div>
          </Col>
        </Row>
      )}
      <div className="first-blog" onClick={() => toggleAccordion(2)}>
        <div className="first-box">
          <Checkbox checked={selectedAccordion === 2}></Checkbox>
          <span>Ilk tibbi yardim</span>
        </div>
        <BsArrowReturnLeft />
        <FaAngleRight className={selectedAccordion === 2 ? "open" : ""} />
      </div>
      <div className="first-blog" onClick={() => toggleAccordion(3)}>
        <div className="first-box">
          <Checkbox checked={selectedAccordion === 3}></Checkbox>
          <span>Mudaxile olunmadi</span>
        </div>
        <BsArrowReturnLeft />
        <FaAngleRight className={selectedAccordion === 3 ? "open" : ""} />
      </div>
      {selectedAccordion === 3 && (
        <Row>
          <Col span={12}>
            <div className="accardion-context-box">
              <h4>Qerar verenin adi</h4>
              <Input placeholder="Daxil edin" />
            </div>
          </Col>
          <Col span={12}>
            <div className="accardion-context-box">
              <h4>Hadisenin tarixi ve saat</h4>
              <div className="dates">
                <Space direction="vertical">
                  <DatePicker
                    className="dateType"
                    placeholder="Baslama tarix"
                  />
                </Space>
                <TimePicker
                  className="clock"
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="mention">
              <h4>Vezifesi</h4>
              <Input className="mention-input" placeholder="Daxil edin" />
            </div>
          </Col>
          <Col span={12}>
            <div className="mention">
              <h4>Qeyd</h4>
              <Input className="mention-input" placeholder="Daxil edin" />
            </div>
          </Col>
        </Row>
      )}
      <div className="first-blog" >
        <div className="first-box">
          <Checkbox ></Checkbox>
          <span>Xestexanaya aparildi</span>
        </div>
        <BsArrowReturnLeft />
        <FaAngleRight className={selectedAccordion === 3 } />
      </div>
    </div>
  );
};

export default FirstHelp;
