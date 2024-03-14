import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Axios from "axios"; // แก้ไขนี้จาก { Axios } เป็น Axios
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "../addanddel/addanddel.module.css";

const dataFromapi = [{ Name_menu: "พัดไทย", price: 20000, CheckBox: "" }];
const dataFromapi_option = [
  {
    OptionID: 1,
    Description: "test_1_KR",
    Status: 0,
  },
  {
    OptionID: 2,
    Description: "Test_2_KR",
    Status: 0,
  },
];

export default function Coption() {
  const { lang } = useParams();
  const [dt, setDt] = useState(dataFromapi);
  const [dtoption, setDtoption] = useState(dataFromapi_option);

  useEffect(() => {
    getDatalist(lang);
  }, []);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/Option", {
        lang: lang,
        MenuID: dt[0].Name_menu,
        Option: dtoption,
      });
      setDt(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  const onChangeCheckbox = (e,index) =>{
    let res = [...dtoption];
    if(e.target.checked){
      res[index].Status = 1;
    }else{
      res[index].Status = 0;
    }
    setDtoption(res);
    console.log(dtoption);
    
  } 

  return (
    <div>
      
        <div>
          <h1 className="flex">{dt[0].Name_menu}</h1>
          <h2 className="flex text-yellow-400">{dt[0].price} W</h2>
          <div>
            {dtoption.map((type, idx) => (
              <div key={`default-${type.OptionID}-${idx}`}>
                <label>
                  <input
                    type="checkbox"
                    checked={type.Status === 1}
                    onChange={(e) => onChangeCheckbox(e,idx)}
                  />
                  {type.Description}
                </label>
              </div>
            ))}
            <br />
            <div className="my-auto grid justify-items-center">
              <div className={styles.quantity}>
                <button>
                  <RemoveCircleIcon />
                </button>
                <label className="mx-2">5</label>
                <button>
                  <AddCircleIcon />
                </button>
              </div>
            </div>
            <br />
            <button className='bt-on' onClick={getDatalist}>ยืนยัน</button>
          </div>

        </div>
    </div>
  );
}
