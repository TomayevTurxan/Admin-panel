import { VscSettings } from "react-icons/vsc";
import "./style.scss";
import { FaPlusCircle } from "react-icons/fa";
import { Input } from "antd";
import TableHuman from "./table";
import { useState } from "react";
const { Search } = Input;
const Accident = () => {
  const [stateModal, setStateModal] = useState(false);
  return (
    <div className="accident">
      <div className="accident-body">
        <div className="accidents-search">
          <Search className="input" placeholder="Axtaris" enterButton />
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
            <button>
              <VscSettings
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <span>Filtrleri temizle</span>
            </button>
          </div>
          <button
            className="newButton"
            onClick={() => {
              setStateModal(!stateModal), console.log("stateModal", stateModal);
            }}
          >
            <FaPlusCircle className="new-i" />
            Yeniw
          </button>
        </div>
      </div>
      <div className="accident-table">
        <TableHuman setStateModal={setStateModal} stateModal={stateModal} />
      </div>
    </div>
  );
};

export default Accident;
