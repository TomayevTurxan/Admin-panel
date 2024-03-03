import { Col, Row } from "antd";
import { RiPrinterLine } from "react-icons/ri";
import "./style.scss";
import Sketlon from "../../../sketlon";

const Detail = () => {
  // Veri dizisi
  const data = [
    { property: "Zererceken sexs", value: "Lorem Ipsum" },
    { property: "Vəzifəsi", value: "Lorem Ipsum" },
    { property: "Xəsarətin dərəcəsi", value: "Lorem Ipsum" },
    { property: "Ətraf mühitə təsiri", value: "Lorem Ipsum" },
    { property: "Xəsarət hansı vasitə ilə yetirilib", value: "Lorem Ipsum" },
    { property: "Hadisənin baş verdiyi yer", value: "Lorem Ipsum" },
    { property: "Dəymiş zərərin məbləği", value: "Lorem Ipsum" },
    { property: "Aldığı xəsarətdən yaranan fasilə", value: "Lorem Ipsum" },
    { property: "Toxuma zədələnməsi", value: "Lorem Ipsum" },
    { property: "Xəsarətin növü", value: "Lorem Ipsum" },
    { property: "Qeyd", value: "Lorem Ipsum" },
    { property: "Layihənin adı", value: "Lorem Ipsum" },
    { property: "Hadisənin baş vermə tarixi", value: "Lorem Ipsum" },
    { property: "Zərərin səbəbləri", value: "Lorem Ipsum" },
  ];

  return (
    <section className="detail">
      <Row gutter={16}>
        <Col xl={12} lg={12} md={24} sm={24} className="detail-head">
          <div className="detail-title">
            <h2>Qeza bas vermis sexsin melumatlari</h2>
            <RiPrinterLine className="detail-head-i" />
          </div>
          <div className="detail-schedule">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <span>{item.property}:</span> <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24}>
          <div className="human-title">
            <h2>Zərərçəkənin anatomiyas</h2>
            <div className="human-img">
                <Sketlon/>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Detail;
