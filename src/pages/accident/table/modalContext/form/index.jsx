import {
  Col,
  Form,
  Input,
  Row,
  Select,
  Checkbox,
  DatePicker,
  Space,
  TimePicker,
} from "antd";
import { useFormik } from "formik";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import * as Yup from "yup";
import "./style.scss";
const FormModal = () => {
  const validationSchema = Yup.object().shape({
    zerercekenSexs: Yup.string().required("Zererceken sexs is required"),
    vezifesi: Yup.string().required("Vezifesi is required"),
  });

  const formik = useFormik({
    initialValues: {
      zerercekenSexs: "",
      vezifesi: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <Form onSubmit={formik.handleSubmit} className="modal">
      <div className="modalTitle">
        {/* name major */}
        <Row className="info" gutter={5}>
          <Col  xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Zererceken sexs</h4>
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
              <h4>Vezifesi</h4>
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
              <h4>Zererceken sexs</h4>
              <Input
                className="input"
                placeholder="Basic usage"
                name="zerercekenSexs"
                onChange={formik.handleChange}
                value={formik.values.zerercekenSexs}
              />
              {formik.touched.zerercekenSexs && formik.errors.zerercekenSexs ? (
                <div className="error">{formik.errors.zerercekenSexs}</div>
              ) : null}
            </div>
            <Checkbox className="checkkbox">
              Zerer ceken sexs kenar sexsdir
            </Checkbox>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Vezifesi</h4>
              <Input
                className="input"
                placeholder="Basic usage"
                name="vezifesi"
                onChange={formik.handleChange}
                value={formik.values.vezifesi}
              />
              {formik.touched.vezifesi && formik.errors.vezifesi ? (
                <div className="error">{formik.errors.vezifesi}</div>
              ) : null}
            </div>
          </Col>
          <div className="line"></div>
        </Row>

        {/* happen events input */}
        <Row className="info" gutter={5}>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Xesaretin derecesi</h4>
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
              <h4>Etraf muhite tesiri</h4>
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
              <h4>Xesaret hasni vasite ile yetirilib</h4>
              <Input
                className="input"
                placeholder="Basic usage"
                name="zerercekenSexs"
                onChange={formik.handleChange}
                value={formik.values.zerercekenSexs}
              />
              {formik.touched.zerercekenSexs && formik.errors.zerercekenSexs ? (
                <div className="error">{formik.errors.zerercekenSexs}</div>
              ) : null}
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Hadisenin bas verdiyi yer</h4>
              <Input
                className="input"
                placeholder="Basic usage"
                name="vezifesi"
                onChange={formik.handleChange}
                value={formik.values.vezifesi}
              />
              {formik.touched.vezifesi && formik.errors.vezifesi ? (
                <div className="error">{formik.errors.vezifesi}</div>
              ) : null}
            </div>
          </Col>
        </Row>

        {/* Date time */}
        <Row className="info" gutter={5}>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Deymis zererin meblegi</h4>
              <div className="info-title">
                <Input className="info-input" type="number" placeholder="AZN" />
                <Select
                  className="select"
                  defaultValue="AZN"
                  style={{ width: 120 }}
                  options={[{ value: "lucy", label: "Lucy" }]}
                />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="info-header">
              <h4>Zedelenmis avadanliq</h4>
              <Input
                className="info-input"
                type="number"
                placeholder="Daxil edin"
              />
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} className="dateTime">
            <h4>Aldigi Xesaretden yaranan fasile</h4>
            <div className="dateTime-head">
              <div className="info-header">
                <Space direction="vertical">
                  <DatePicker
                    className="datePicker"
                    placeholder="Baslama tarix"
                  />
                </Space>
                {formik.touched.zerercekenSexs &&
                formik.errors.zerercekenSexs ? (
                  <div className="error">{formik.errors.zerercekenSexs}</div>
                ) : null}
              </div>

              <div className="info-header">
                <Space direction="vertical">
                  <DatePicker
                    className="datePicker"
                    placeholder="Bitme tarixi"
                  />
                </Space>
                {formik.touched.zerercekenSexs &&
                formik.errors.zerercekenSexs ? (
                  <div className="error">{formik.errors.zerercekenSexs}</div>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>

        {/* accident happen */}
        <Row className="info" gutter={5}>
          <Col  xl={12} lg={12} md={24} sm={24}>
            <div className="info-header">
              <h4>Xesaretin novu</h4>
              <Select
                className="selectType"
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} className="dateTime">
            <div className="info-header">
              <h4>Qeyd</h4>
              <Select
                className="selectType"
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
              {formik.touched.zerercekenSexs && formik.errors.zerercekenSexs ? (
                <div className="error">{formik.errors.zerercekenSexs}</div>
              ) : null}
            </div>
          </Col>
        </Row>

        {/* project-info */}
        <Row className="info" gutter={5}>
          <Col span={5}>
            <div className="info-header">
              <h4>Lahiyenin adi</h4>
              <Select
                className="selectThree"
                defaultValue="lucy"
                style={{ width: "220" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </Col>
          <Col span={14} xl={14} lg={14} md={24} sm={24} className="eventTime">
            <div className="info-header">
              <h4>Hadisenin tarixi ve saati</h4>
              <div className="dates">
                {" "}
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
          <Col xl={5} lg={12} md={24} sm={24}>
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
        </Row>
      </div>
    </Form>
  );
};

export default FormModal;
