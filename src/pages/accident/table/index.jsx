import { useState } from "react";
import { Space, Table, Modal } from "antd";
import { FcInfo } from "react-icons/fc";
import ModalContext from "./modalContext";
import { AiOutlineFilter } from "react-icons/ai";
import { Link } from "react-router-dom";
import FiltrModal from "./filtrModel";
const data = [
  {
    key: "1",
    info: (
      <Link to="/detail">
        <FcInfo style={{ fontSize: "25px" }} />
      </Link>
    ),
    name: "Jim Green",
    date: "23/02/2025",
    projectName: "Project A",
    eventDate: "Completion",
    major: "Manager",
    agency: "Organization X",
  },
  {
    key: "2",
    info: <FcInfo style={{ fontSize: "25px" }} />,
    name: "aim Green",
    date: "13/02/2023",
    projectName: "aroject A",
    eventDate: "aompletion",
    major: "aanager",
    agency: "arganization X",
  },
];

const App = ({ stateModal,setStateModal }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  //Modal

  const showModal = () => {
    setStateModal(true);
  };
  const handleOk = () => {
    setStateModal(false);
  };
  const handleCancel = () => {
    setStateModal(false)
  };
  //emdModal
  //Modal2
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  // Modal2End
  const handleChange = (pagination, filters, sorter) => {
    console.log("Çeşitli parametreler", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: <div className="column-item">Info</div>,
      dataIndex: "info",
      key: "info",
      width: "8%",
    },
    {
      title: (
        <div className="column-item">
          Adı <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: (
        <div className="column-item">
          Tarix{" "}
          <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
    },
    {
      title: (
        <div className="column-item">
          Lahiyenin adi{" "}
          <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "projectName",
      key: "projectName",
      ellipsis: true,
      sorter: (a, b) => a.projectName.localeCompare(b.projectName),
      sortOrder:
        sortedInfo.columnKey === "projectName" ? sortedInfo.order : null,
    },
    {
      title: (
        <div className="column-item">
          Hadisenin bas verme tarixi{" "}
          <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "eventDate",
      key: "eventDate",
      ellipsis: true,
      sorter: (a, b) => a.eventDate.localeCompare(b.eventDate),
      sortOrder: sortedInfo.columnKey === "eventDate" ? sortedInfo.order : null,
    },
    {
      title: (
        <div className="column-item">
          Vezifesi{" "}
          <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "major",
      key: "major",
      ellipsis: true,
      sorter: (a, b) => a.major.localeCompare(b.major),
      sortOrder: sortedInfo.columnKey === "major" ? sortedInfo.order : null,
    },
    {
      title: (
        <div className="column-item">
          Melumat verilen qurum{" "}
          <AiOutlineFilter onClick={showModal2} className="column-filter" />
        </div>
      ),
      dataIndex: "agency",
      key: "agency",
      ellipsis: true,
      sorter: (a, b) => a.agency.localeCompare(b.agency),
      sortOrder: sortedInfo.columnKey === "agency" ? sortedInfo.order : null,
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        onRow={() => {
          return {
            onClick: () => {
              showModal();
            },
          };
        }}
      />

      <Modal
        width={1100}
        title="Qezalar"
        open={stateModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalContext />
      </Modal>
      <Modal
        width={500}
        title="Filtrle"
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <FiltrModal />
      </Modal>
    </>
  );
};

export default App;
