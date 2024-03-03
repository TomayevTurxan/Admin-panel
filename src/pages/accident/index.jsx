import { VscSettings } from "react-icons/vsc";
import "./style.scss"
import { Button } from "antd";
import { FaPlusCircle } from "react-icons/fa";
import { Input } from 'antd';
import TableHuman from "./table";
const { Search } = Input;
const Accident = () => {
  return (
    <div className="accident">
        <div className="accident-body">
          <div className="accidents-search">
            <Search className="input" placeholder="Axtaris"  enterButton />
           <div className="control-button">
            <div className="aktiv">
                <button>Aktiv</button>
              </div> 
              <div className="deaktiv">
                <button>Deaktiv</button>
              </div>
           </div>
          </div>
           <div className="accidents-button">
              <div className="control-filtr-button">
                  <button><VscSettings />Filtrleri temizle</button>
              </div>
              <div className="newButton">
              <Button type="primary"><FaPlusCircle className="new-i"/>Yeni</Button>
              </div>
           </div>
        </div>
        <div className="accident-table">
            <TableHuman/>
        </div>
    </div>
  )
}

export default Accident