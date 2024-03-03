
import { Button, Steps } from "antd";
import { useState } from "react";
import FormModal from "./form";
import FirstHelp from "../firstHelp";
import Research from "./research";
const ModalContext = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "First",
      content: <FormModal/>,
    },
    {
      title: "Second",
      content: <FirstHelp/>,
    },
    {
      title: "Last",
      content: <Research/>,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <div>{steps[current].content}</div>
      </div>
      <div className="step-button">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default ModalContext;
