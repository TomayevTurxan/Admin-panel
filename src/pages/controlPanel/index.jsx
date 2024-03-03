import "./style.scss";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Col, DatePicker, Row, Select } from "antd";
import { VscSettings } from "react-icons/vsc";
import Schedule from "./schedule";
import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import Sketlon from "../sketlon";
const ControlPanel = () => {
  const [open, setOpen] = useState();

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="controlPanel">
        <div className="control-head">
          <div className="control-filtr-button">
            <button>
              <VscSettings  style={{
                width: "20px",
                height: "20px",
              }}/>
              <span>Filtrleri temizle</span>
            </button>
          </div>
          <Row className="news" gutter={6}>
            <Col span={14}>
              <Col span={24}>
                <div className="news-type">
                  <h1>Xesaretin novu</h1>
                  <div className="schedule">
                    <div className="show-numbers">
                      <span>0</span>
                      <span>100</span>
                      <span>200</span>
                      <span>400</span>
                    </div>
                    <div className="factors">
                      <div className="factor-item itemOne">
                        <span>Insan faktoru</span>
                        <div
                          className="factor-statistic"
                          style={{ width: "30%" }}
                        >
                          {" "}
                        </div>
                      </div>
                      <div className="factor-item itemTwo">
                        <span>Mexaniki</span>
                        <div
                          className="factor-statistic"
                          style={{ width: "40%" }}
                        >
                          {" "}
                        </div>
                      </div>
                      <div className="factor-item itemThree">
                        <span>Fiziki</span>
                        <div
                          className="factor-statistic"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <div className="factor-item itemFour">
                        <span>Bioloji</span>
                        <div
                          className="factor-statistic"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="news-characteristics">
                  <h1>Xəsarətin statistikas</h1>
                  <Schedule />
                  <Row>
                    <div className="factors-blog">
                      <div className="factors-box">
                        <div className="box-color oneBox"></div>
                        <span>Biogoloji</span>
                      </div>
                      <div className="factors-box">
                        <div className="box-color twoBox"></div>
                        <span>Fiziki</span>
                      </div>
                      <div className="factors-box">
                        <div className="box-color threeBox"></div>
                        <span>Mexaniki</span>
                      </div>
                      <div className="factors-box">
                        <div className="box-color fourBox"></div>
                        <span>Insan faktoru</span>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Col>
            <Col span={10}>
              <div className="human">
                <div className="human-title">
                  <h1>Yaralanan</h1>
                  <button
                    onClick={() => {
                      setOpen(true);
                      console.log("open",open)
                    }}
                  >
                    Filtrle{" "}
                    <IoIosNotificationsOutline className="notification-i" />
                  </button>
                </div>
                <div className="human-skeleton">
                  <div className="human-body">
                    <Sketlon/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {open  && (
        <div className={`filtr-head ${open===true ? 'open' : 'closed'}`}>
          <div className="filtr-title">
            <h4>
              Filtrle{" "}
              <span>
                <MdCancelPresentation className="cancel-i" onClick={()=>{setOpen(!open)}}/>
              </span>
            </h4>
            <Row className="date-head">
              <h3 className="date-choose">Tarix aralığı</h3>
              <Col spam={12}>
                {" "}
                <DatePicker onChange={onChange} />
              </Col>
              <Col spam={12}>
                {" "}
                <DatePicker onChange={onChange} />
              </Col>
            </Row>
            <Row className="injury-head">
              <h3 className="injury-human">Yaralanan</h3>
              <Select
                defaultValue="lucy"
                style={{
                  width: 420,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default ControlPanel;
