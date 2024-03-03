import { useState } from 'react';
import {  Space, Table ,Modal} from 'antd';
import { FcInfo } from "react-icons/fc";
import "./style.scss"
import ModalContext from './modalContext';
const data = [
  {
    key: '1',
    info: <FcInfo  style={{fontSize:"25px"}}/>,
    name: "Jim Green",
    date: '23/02/2025',
    projectName: 'Project A',
    eventDate: 'Completion',
    major: 'Manager',
    agency: 'Organization X',
  },
  {
    key: '2',
    info: <FcInfo   style={{fontSize:"25px"}}/>,
    name: "aim Green",
    date: '13/02/2023',
    projectName: 'aroject A',
    eventDate: 'aompletion',
    major: 'aanager',
    agency: 'arganization X',
  },
];

const App = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //emdModal

  const handleChange = (pagination, filters, sorter) => {
    console.log('Çeşitli parametreler', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };



  const columns = [
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
      width: '6%',
    },
    {
      title: 'Adı',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
        title: 'Tarix',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => new Date(a.date) - new Date(b.date),
        sortOrder: sortedInfo.columnKey === 'date' ? sortedInfo.order : null,
        ellipsis: true,
        filteredValue: filteredInfo.date || null,
        onFilter: (value, record) => record.date.includes(value),
      },
    {
      title: 'Layihənin Adı',
      dataIndex: 'projectName',
      key: 'projectName',
      ellipsis: true,
      sorter: (a, b) => a.projectName.localeCompare(b.projectName),
      sortOrder: sortedInfo.columnKey === 'projectName' ? sortedInfo.order : null,
    },
    {
      title: 'Hadisenin Baş Vermə Amili',
      dataIndex: 'eventDate',
      key: 'eventDate',
      ellipsis: true,
      sorter: (a, b) => a.eventDate.localeCompare(b.eventDate),
      sortOrder: sortedInfo.columnKey === 'eventDate' ? sortedInfo.order : null,
    },
    {
      title: 'Vəzifəsi',
      dataIndex: 'major',
      key: 'major',
      ellipsis: true,
      sorter: (a, b) => a.major.localeCompare(b.major),
      sortOrder: sortedInfo.columnKey === 'major' ? sortedInfo.order : null,
    },
    {
      title: 'Məlumat Verilən Qurum',
      dataIndex: 'agency',
      key: 'agency',
      ellipsis: true,
      sorter: (a, b) => a.agency.localeCompare(b.agency),
      sortOrder: sortedInfo.columnKey === 'agency' ? sortedInfo.order : null,
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
       
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange}  onRow={() => {
          return {
            onClick: () => {
              showModal();
            },
          };
        }} />
      <Modal width={1100} title="Qezalar" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ModalContext/>
      </Modal>
    </>
  );
};

export default App;
