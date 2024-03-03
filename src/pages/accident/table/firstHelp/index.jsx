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
import { BsArrowReturnLeft } from "react-icons/bs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useFormik } from "formik";
import dayjs from "dayjs";
import * as Yup from "yup";
import "./style.scss";

const FirstHelp = () => {
  const [selected, setSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  const handleSelected = () => {
    setSelected(!selected);
  };
  const handleNoSelected = () => {
    setNoSelected(!noSelected);
  };
  const initialValues = {
    ad: "",
    baslamaTarixi: null,
    hadiseTarixi: null,
    qeyd: "",
    qerarVerenAdi: "",
    vezifesi: "",
  };

  const validationSchema = Yup.object().shape({
    ad: Yup.string().required("Ad is required"),
    baslamaTarixi: Yup.date().required("Baslama tarixi is required"),
    hadiseTarixi: Yup.date().required("Hadise tarixi is required"),
    qeyd: Yup.string(),
    qerarVerenAdi: Yup.string(),
    vezifesi: Yup.string(),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="first-step">
        <div className="first-blog">
          <div className="first-box">
            <Checkbox
              onChange={handleSelected}
              disabled={noSelected ? true : false}
            ></Checkbox>
            <span>Ilk yardim</span>
          </div>
          <BsArrowReturnLeft />
        </div>
        {selected && (
          <Row>
            <Col span={12}>
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
            <Col xl={24} lg={24} md={24} sm={24}>
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
        <div className="first-blog">
          <div className="first-box">
            <Checkbox
              onChange={handleSelected}
              disabled={noSelected ? true : false}
            ></Checkbox>
            <span>Ilk tibbi yardim</span>
          </div>
          <BsArrowReturnLeft />
        </div>
        <div className="first-blog">
          <div className="first-box">
            <Checkbox
              onChange={handleNoSelected}
              disabled={selected ? true : false}
            ></Checkbox>
            <span>Mudaxile olunmadi</span>
          </div>
          <BsArrowReturnLeft />
        </div>
        {noSelected && (
          <Row>
            <Col span={12}>
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
            <Col xl={24} lg={24} md={24} sm={24}>
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

        <div className="first-blog">
          <div className="first-box">
            <Checkbox
              onChange={handleSelected}
              disabled={noSelected ? true : false}
            ></Checkbox>
            <span>Xestexanaya aparildi</span>
          </div>
          <BsArrowReturnLeft />
        </div>
      </div>
    </Form>
  );
};

export default FirstHelp;
