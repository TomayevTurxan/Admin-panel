import {
  Button,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Space,
  TimePicker,
} from "antd";
import "./style.scss";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaCirclePlus } from "react-icons/fa6";
import TextArea from "antd/es/input/TextArea";
const Research = () => {
  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <div className="research">
      <Row
        style={{
          marginBottom: "20px",
        }}
      >
        <Col  xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <h4>Zererin sebebleri</h4>
            <Select
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <h4>Seher</h4>
            <Select
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col  xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Hadisenin tarixi ve saati</h4>
            <div className="dates">
              {" "}
              <Space direction="vertical">
                <DatePicker className="dateType" placeholder="Baslama tarix" />
              </Space>
              <TimePicker
                className="clock"
                onChange={onChange}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          marginBottom: "20px",
        }}
      >
        <Col  xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <h4>Elaqe nomresi</h4>
            <div className="info-title">
              <Select
                className="select"
                defaultValue="050"
                style={{ width: 120 }}
                options={[
                  { value: "055", label: "055" },
                  { value: "050", label: "050" },
                  { value: "070", label: "070" },
                  { value: "077", label: "077" },
                  { value: "051", label: "051" },
                ]}
              />
              <Input
                className="info-input"
                pattern="\d{3}-\d{2}-\d{2}"
                placeholder="399-99-99"
              />
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <h4>Emakdasin adi</h4>
            <Input
              className="info-input"
              type="text"
              placeholder="Daxil edin"
            />
          </div>
        </Col>
        <Col  xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Elaqeli fayllar</h4>
            <Input className="info-input" type="file" placeholder="399-99-99" />
          </div>
        </Col>
      </Row>

      <Row>
        <div className="addButton">
          <Button type="primary" ghost>
            <FaCirclePlus className="add-i" />
            <span>Elave et</span>
          </Button>
        </div>
      </Row>
      <div className="line"></div>

      {/* hadisenin sahidleri */}
      <Row className="info" gutter={5}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Hadisenin sahidleri</h4>
            <Select
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Hadisenin sahidleri</h4>
          <Input
            className="info-input"
            type="number"
            placeholder="Daxil edin"
          />
          <div className="addButton add-item">
            <Button type="primary" ghost>
              <FaCirclePlus className="add-i" />
              <span>Elave et</span>
            </Button>
          </div>
        </Col>
      </Row>

      {/* hadisenin sebebi */}
      <Row className="info" gutter={5}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Hadisenin sahidleri</h4>
            <Select
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col sxl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Hadisenin sahidleri</h4>
          <Select
            className="select"
            defaultValue="Secim edin"
            style={{ width: 120 }}
            options={[{ value: "lucy", label: "Lucy" }]}
          />
        </Col>
      </Row>

      {/* hadisenin ilkin arasdirilmasi ve tam arasdirilamasi */}
      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Hadisenin ilkin arasdirilmasi</h4>
            <TextArea rows={4} placeholder="Daxil edin" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Hadisenin tam arasdirilmasi</h4>
          <TextArea rows={4} placeholder="Daxil edin" />
        </Col>
      </Row>

      <div className="line"></div>

      {/* File uploads */}
      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Sekil tesviri</h4>
            <Input className="info-input" type="file" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Video tesviri</h4>
          <Input className="info-input" type="file" />
        </Col>
      </Row>

      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Risk</h4>
          <Input className="info-input" type="file" />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Telimatlandirma</h4>
          <Input className="info-input" type="file" />
        </Col>
      </Row>

      {/* Gorulecek tedbirler         */}

      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <h4>Gorulecek tedbirler</h4>
            <TextArea rows={4} placeholder="Daxil edin" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <h4>Hadise ile elaqeder intizam tedbirleri</h4>
          <TextArea rows={4} placeholder="Daxil edin" />
        </Col>
      </Row>

      {/* e qanun site */}
      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col span={24} >
          <div className="info-header">
            <h4>Gorulecek tedbirler</h4>
            <Input type="text" placeholder="Dacil edin" />
            <div className="addButton">
              <Button type="primary" ghost>
                <FaCirclePlus className="add-i" />
                <span>Elave et</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="line" style={{marginBottom:"15px"}}></div>
    </div>
  );
};

export default Research;
