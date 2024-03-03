import { Button } from "antd";
import "./style.scss";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { LuWarehouse } from "react-icons/lu";
import { TbDatabaseSearch } from "react-icons/tb";
import { BiBook } from "react-icons/bi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { AiOutlineControl } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logoName">
        <h1>Setem</h1>
      </div>
      <div className="controlPanel">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active2" : "link-item"
          }
        >
          <VscSettings />
          <span>Idare Paneli</span>
        </NavLink>
      </div>

      <div className="links">
        <ul>
          <li>
            <NavLink
              to="/accident"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active2" : "link-item"
              }
            >
              <FaFire />
              <span>Qezalar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/1"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active2" : "link-item"
              }
            >
              <LuWarehouse />
              <span>Anbar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/3"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active2" : "link-item"
              }
            >
              <BiBook />
              <span>Senedler</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/4"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active2" : "link-item"
              }
            >
              <TbDatabaseSearch />
              <span>Qezalar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/5"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active2" : "link-item"
              }
            >
              <MdOutlineAssignmentTurnedIn />
              <span>Tapsiriqlar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/6"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "link-item"
              }
            >
              <AiOutlineControl />
              <span>Teftis</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/5"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "link-item"
              }
            >
              <PiCertificate />
              <span>Sertifikatlar ve telimatlar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/5"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "link-item"
              }
            >
              <CiBoxList />
              <span>Secim siyahisi</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
