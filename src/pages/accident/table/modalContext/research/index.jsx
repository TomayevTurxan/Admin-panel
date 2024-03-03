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
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <label htmlFor="zererinSebebleri">Zererin sebebleri</label>
            <Select
              id="zererinSebebleri"
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <label htmlFor="seher">Seher</label>
            <Select
              id="seher"
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <label htmlFor="hadiseninTarixiVeSaati">
              Hadisenin tarixi ve saati
            </label>
            <div className="dates">
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
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <label htmlFor="elaqeNomresi">Elaqe nomresi</label>
            <div className="info-title">
              <Select
                id="elaqeNomresi"
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
                id="elaqeNomresi"
                className="info-input"
                pattern="\d{3}-\d{2}-\d{2}"
                placeholder="399-99-99"
              />
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="info-header">
            <label htmlFor="emakdasinAdi">Emakdasin adi</label>
            <Input
              id="emakdasinAdi"
              className="info-input"
              type="text"
              placeholder="Daxil edin"
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <label htmlFor="elaqeliFayllar">Elaqeli fayllar</label>
            <Input
              id="elaqeliFayllar"
              className="info-input"
              type="file"
              placeholder="399-99-99"
            />
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
            <label htmlFor="hadiseninSahidleri">Hadisenin sahidleri</label>
            <Select
              id="hadiseninSahidleri"
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="hadiseninSahidleri">Hadisenin sahidleri</label>
          <Input
            id="hadiseninSahidleri"
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
            <label htmlFor="neqliyyat">
              Hadisenye celb olunan neqliyyat vasiteleri
            </label>
            <Select
              id="neqliyyat"
              className="select"
              defaultValue="Secim edin"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
          </div>
        </Col>
        <Col sxl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="hadiseSebeb">Hadisenin sebebe amil</label>
          <Select
            id="hadiseSebeb"
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
            <label htmlFor="ilkinArastirma">Hadisenin ilkin arasdirilmasi</label>
            <TextArea rows={4} placeholder="Daxil edin" id="ilkinArastirma" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="tamArasdirilma">Hadisenin tam arasdirilmasi</label>
          <TextArea id="tamArasdirilma" rows={4} placeholder="Daxil edin" />
        </Col>
      </Row>

      <div className="line"></div>

      {/* File uploads */}
      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <label htmlFor="sekilTesviri">Sekil tesviri</label>
            <Input id="sekilTesviri" className="info-input" type="file" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="videoTesvir">Video tesviri</label>
          <Input id="videoTesvir" className="info-input" type="file" />
        </Col>
      </Row>

      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="risk">Risk</label>
          <Input id="risk" className="info-input" type="file" />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="telimatlandirma">Telimatlandirma</label>
          <Input id="telimatlandirma" className="info-input" type="file" />
        </Col>
      </Row>

      {/* Gorulecek tedbirler         */}

      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="info-header">
            <label htmlFor="tedbir">Gorulecek tedbirler</label>
            <TextArea id="tedbir" rows={4} placeholder="Daxil edin" />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} className="info-header">
          <label htmlFor="intizamTedbir">Hadise ile elaqeder intizam tedbirleri</label>
          <TextArea id="intizamTedbir" rows={4} placeholder="Daxil edin" />
        </Col>
      </Row>

      {/* e qanun site */}
      <Row className="info" gutter={5} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <div className="info-header">
            <label htmlFor="gorulenTedbir">Gorulecek tedbirler</label>
            <Input id="gorulenTedbir" type="text" placeholder="Dacil edin" />
            <div className="addButton">
              <Button type="primary" ghost>
                <FaCirclePlus className="add-i" />
                <span>Elave et</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="line" style={{ marginBottom: "15px" }}></div>
    </div>
  );
};

export default Research;
