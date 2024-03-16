import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Coption() {
  const { lang, MenuID, table } = useParams();
  const [dt, setDt] = useState([]);
  const [dtoption, setDtoption] = useState([]);
  const [quantity, setQuantity] = useState(1); // เพิ่ม state สำหรับจำนวนสินค้า
  const navigate = useNavigate();

  useEffect(() => {
    getDatalist(lang, MenuID);
    getDataoption(lang);
    console.log(dt);
    console.log(dtoption);
  }, []);

  const getDatalist = async (lang, MenuID) => {
    try {
      const res = await Axios.post("http://localhost:5177/getDetail", {
        lang: lang,
        MenuID: MenuID,
      });
      setDt(res.data);
    } catch {}
  };

  const getDataoption = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/getOption", {
        lang: lang,
        MenuID: MenuID,
      });
      setDtoption(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCheckbox = (e, index) => {
    let res = [...dtoption];
    if (e.target.checked) {
      res[index].status = 1;
    } else {
      res[index].status = 0;
    }
    setDtoption(res);
    console.log(dtoption);
  };

  const onClickHandle = () => {
    addcart();

    navigate("/menu/all/" + lang + "/" + table);
  };

  const onclick_add = () => {
    setQuantity(quantity + 1);
  };

  const onClick_delete = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addcart = async () => {
    try {
      const res = await Axios.post("http://localhost:5177/addcart", {
        lang: lang,
        MenuID: MenuID,
        Amount: quantity,
        Option: dtoption,
        Table: table,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {dt.map((item) => (
          <div>
            <h1 className="flex">{item.Name}</h1>
            <h2 className="flex text-yellow-400">{item.Price} W</h2>
          </div>
        ))}

        <div>
          {dtoption.map((type, idx) => (
            <div key={`default-${type.OptionID}-${idx}`}>
              <label>
                <input
                  type="checkbox"
                  checked={type.status === 1}
                  onChange={(e) => onChangeCheckbox(e, idx)}
                />
                {type.Description}
              </label>
            </div>
          ))}
          <br />
          <div>
            <div class="text-3xl flex justify-center space-x-4">
              <button class="py-2 px-4 text-3xl" onClick={onClick_delete}>
                <RemoveCircleIcon class="w-10 h-10" />
              </button>
              <label class="py-2 px-4">{quantity}</label>
              <button class="py-2 px-4" onClick={onclick_add}>
                <AddCircleIcon class="w-10 h-10" />
              </button>
            </div>
            <br />
            
            <button type="submit" class="bt-confrim " onClick={onClickHandle}>
  {lang === "TH" ? "ยืนยัน" : lang === "EN" ? "Confirm" : lang === "CN" ? "确认" : lang === "KR" ? "확인" : ""}
</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
