import { Button } from "antd"
import "./style.scss"
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
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
            <Link to="ControlPanel">
            <Button ><VscSettings /><span>Idare Paneli</span></Button>
            </Link>
        </div>

        <div className="links">
            <ul>
                <li>
                    <Link to="/accident"><FaFire /><span>Qezalar</span></Link>
                </li>
                <li>
                    <Link to="/accident"><LuWarehouse /><span>Anbar</span></Link>
                </li>
                <li>
                    <Link to="/accident"><BiBook /><span>Senedler</span></Link>
                </li>
                <li>
                    <Link to="/accident"><TbDatabaseSearch /><span>Qezalar</span></Link>
                </li>
                <li>
                    <Link to="/accident"><MdOutlineAssignmentTurnedIn /><span>Tapsiriqlar</span></Link>
                </li>
                <li>
                    <Link to="/accident"><AiOutlineControl /><span>Teftis</span></Link>
                </li>
                <li>
                    <Link to="/accident"><PiCertificate /><span>Sertifikatlar ve telimatlar</span></Link>
                </li>
                <li>
                    <Link to="/accident"><CiBoxList  /><span>Secim siyahisi</span></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu