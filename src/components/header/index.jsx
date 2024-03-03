import { IoIosNotificationsOutline } from "react-icons/io";
import { DownOutlined } from '@ant-design/icons';
import { CgProfile } from "react-icons/cg";
import {  Dropdown, Space } from 'antd';
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import "./style.scss"
const Header = () => {
    const items = [
        {
          label: <a href="https://www.antgroup.com"><CgProfile  className="item-i"/>Profile</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com"><IoMdSettings className="item-i" />Settings</a>,
          key: '1',
        },
        {
          label: <a href="https://www.aliyun.com"><IoIosLogOut  className="item-i"/>Log out</a>,
          key: '2',
        },
        // {
        //   type: 'divider',
        // },
        // {
        //   label: '3rd menu item',
        //   key: '3',
        // },
      ];
  return (
    <div className="control-head-title">
             <div className="control-custom">
             <span><span className="lineHead">/</span>Idare paneli</span>
                 <div className="notification">
                 <IoIosNotificationsOutline  className="notification-i"/>
                 </div>
             </div>
            <div className="control-profile">
            <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="control-profile-notfication">
                    <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
                  <span>Tomayev Turxan</span>
                  </div>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            </div>
        </div>
  )
}

export default Header