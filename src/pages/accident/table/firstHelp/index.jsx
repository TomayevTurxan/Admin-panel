import { useState } from "react";
import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
} from "antd";
import { FaAngleRight } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useFormik } from "formik";
import dayjs from "dayjs";
import * as Yup from "yup";
import "./style.scss";

const FirstHelp = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const initialValues = {
    ad: "",
    baslamaTarixi: null,
    hadiseTarixi: null,
    qeyd: "",
    qerarVerenAdi: "",
    vezifesi: ""
  };

  const validationSchema = Yup.object().shape({
    ad: Yup.string().required("Ad is required"),
    baslamaTarixi: Yup.date().required("Baslama tarixi is required"),
    hadiseTarixi: Yup.date().required("Hadise tarixi is required"),
    qeyd: Yup.string(),
    qerarVerenAdi: Yup.string(),
    vezifesi: Yup.string()
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
    <Form onSubmit={formik.handleSubmit}>
      <div className="first-step">
        <div className="first-blog" onClick={() => toggleAccordion(1)}>
          <div className="first-box">
            <Checkbox checked={selectedAccordion === 1}></Checkbox>
            <span>Ilk yardim</span>
          </div>
          <BsArrowReturnLeft />
          <FaAngleRight className={selectedAccordion === 1} />
        </div>
        {selectedAccordion === 1 && (
          <Row>
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="accardion-context-box">
                <h4>Ad</h4>
                <Input
                  placeholder="Ad"
                  onChange={formik.handleChange}
                  value={formik.values.ad}
                />
                {formik.errors.ad && formik.touched.ad && (
                  <div className="error">{formik.errors.ad}</div>
                )}
              </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="accardion-context-box">
                <h4>Hadisenin tarixi ve saat</h4>
                <div className="dates">
                  <Space direction="vertical">
                    <DatePicker
                      className="dateType"
                      placeholder="Baslama tarix"
                      onChange={(date) =>
                        formik.setFieldValue("baslamaTarixi", date)
                      }
                      value={formik.values.baslamaTarixi}
                    />
                    {formik.errors.baslamaTarixi &&
                      formik.touched.baslamaTarixi && (
                        <div className="error">
                          {formik.errors.baslamaTarixi}
                        </div>
                      )}
                  </Space>
                  <TimePicker
                    className="clock"
                    onChange={onChange}
                    defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  />
                </div>
              </div>
            </Col>
            <Col  xl={24} lg={24} md={24} sm={24}>
              <div className="mention">
                <h4>Qeyd</h4>
                <Input
                  className="mention-input"
                  placeholder="Daxil edin"
                  onChange={formik.handleChange}
                  value={formik.values.qeyd}
                />
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
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="accardion-context-box">
                <h4>Qerar verenin adi</h4>
                <Input
                  placeholder="Daxil edin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.qerarVerenAdi}
                  name="qerarVerenAdi"
                />
                {formik.errors.qerarVerenAdi &&
                  formik.touched.qerarVerenAdi && (
                    <div className="error">{formik.errors.qerarVerenAdi}</div>
                  )}
              </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="accardion-context-box">
                <h4>Hadisenin tarixi ve saat</h4>
                <div className="dates">
                  <Space direction="vertical">
                    <DatePicker
                      className="dateType"
                      placeholder="Baslama tarix"
                      onChange={(date) =>
                        formik.setFieldValue("hadiseTarixi", date)
                      }
                      value={formik.values.hadiseTarixi}
                    />
                    {formik.errors.hadiseTarixi &&
                      formik.touched.hadiseTarixi && (
                        <div className="error">
                          {formik.errors.hadiseTarixi}
                        </div>
                      )}
                  </Space>
                  <TimePicker
                    className="clock"
                    onChange={onChange}
                    defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  />
                </div>
              </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="mention">
                <h4>Vezifesi</h4>
                <Input
                  className="mention-input"
                  placeholder="Daxil edin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.vezifesi}
                  name="vezifesi"
                />
                {formik.errors.vezifesi && formik.touched.vezifesi && (
                  <div className="error">{formik.errors.vezifesi}</div>
                )}
              </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <div className="mention">
                <h4>Qeyd</h4>
                <Input
                  className="mention-input"
                  placeholder="Daxil edin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.qeyd}
                  name="qeyd"
                />
                {formik.errors.qeyd && formik.touched.qeyd && (
                  <div className="error">{formik.errors.qeyd}</div>
                )}
              </div>
            </Col>
          </Row>
        )}

        <div className="first-blog">
          <div className="first-box">
            <Checkbox></Checkbox>
            <span>Xestexanaya aparildi</span>
          </div>
          <BsArrowReturnLeft />
          <FaAngleRight className={selectedAccordion === 3} />
        </div>
      </div>
    </Form>
  );
};

export default FirstHelp;
